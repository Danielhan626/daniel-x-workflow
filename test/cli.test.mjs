import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const cli=fileURLToPath(new URL('../bin/render.mjs',import.meta.url));
test('CLI preserves media indices, refuses traversal and protects existing output',()=>{
  const temp=fs.mkdtempSync(path.join(os.tmpdir(),'x-workflow-test-'));
  try{
    const input=path.join(temp,'input');fs.mkdirSync(input);
    const pixel=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aN1kAAAAASUVORK5CYII=','base64');
    fs.writeFileSync(path.join(temp,'outside.png'),pixel);fs.writeFileSync(path.join(input,'inside.png'),pixel);
    fs.symlinkSync(path.join(temp,'outside.png'),path.join(input,'linked.png'));
    const source='# Test\n\n![](../outside.png)\n\n![](inside.png)\n\n![](linked.png)\n';
    const article=path.join(input,'article.md');fs.writeFileSync(article,source);
    const out=path.join(temp,'out');const args=[cli,article,'--out',out];
    const result=spawnSync(process.execPath,args,{encoding:'utf8'});assert.equal(result.status,0,result.stderr);
    const manifest=JSON.parse(fs.readFileSync(path.join(out,'media.json')));assert.deepEqual(manifest.map(m=>m.available),[false,true,false]);
    const body=fs.readFileSync(path.join(out,'body-x.html'),'utf8');assert.match(body,/配图 1 待补/);assert.match(body,/插入图 2/);assert.match(body,/配图 3 待补/);
    assert.equal(fs.readFileSync(article,'utf8'),source);
    const again=spawnSync(process.execPath,args,{encoding:'utf8'});assert.notEqual(again.status,0);assert.match(again.stderr,/already exists/);
  }finally{fs.rmSync(temp,{recursive:true,force:true})}
});
