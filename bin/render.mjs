#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {parseArgs} from 'node:util';
import {createHash} from 'node:crypto';
import {formatArticle,nativeBody,profiles,documentFor} from '../src/format.mjs';
import {preview} from '../src/preview.mjs';

const {values,positionals}=parseArgs({allowPositionals:true,options:{out:{type:'string',default:'dist/article'},emphasis:{type:'string'},profile:{type:'string',default:profiles.default},help:{type:'boolean'}}});
if(values.help||positionals.length!==1){console.log('Usage: node bin/render.mjs article.md [--out dist/article] [--emphasis emphasis.json] [--profile x-native-underline-v2]');process.exit(values.help?0:1)}
if(!profiles.profiles[values.profile])throw Error('Unknown formatting profile');
const input=path.resolve(positionals[0]);const base=fs.realpathSync(path.dirname(input));const out=path.resolve(values.out);
if(fs.existsSync(out))throw Error('Output folder already exists; choose a new --out path');
const source=fs.readFileSync(input,'utf8');
const emphasis=values.emphasis?JSON.parse(fs.readFileSync(values.emphasis,'utf8')):{};
const article=formatArticle(source,emphasis);const doc=documentFor(article.html);const manifest=[];
const copies=[];
for(const [index,img] of [...doc.querySelectorAll('img')].entries()){
  const src=img.getAttribute('src')||'';let available=false;let target='';
  if(/^https?:\/\//i.test(src)){available=true;target=src}
  else{
    let decoded='';try{decoded=decodeURIComponent(src)}catch{}
    if(decoded&&!path.isAbsolute(decoded)&&!decoded.includes('\\')&&!/^[a-z]+:/i.test(decoded)){
      const local=path.resolve(base,decoded);
      if(local.startsWith(base+path.sep)&&fs.existsSync(local)){
        const real=fs.realpathSync(local);const ext=path.extname(real).toLowerCase();
        if(real.startsWith(base+path.sep)&&fs.statSync(real).isFile()&&['.png','.jpg','.jpeg','.webp','.gif'].includes(ext)){
          const data=fs.readFileSync(real);target='images/'+createHash('sha256').update(data).digest('hex').slice(0,16)+ext;copies.push({target,data});available=true;
        }
      }
    }
  }
  manifest.push({index:index+1,source:src,available,target});
  if(available){img.setAttribute('src',target);img.setAttribute('data-media-index',String(index+1))}
  else{const p=doc.createElement('p');p.className='missing';p.textContent='【配图 '+(index+1)+' 待补】';img.replaceWith(p)}
}
article.html=doc.querySelector('main').innerHTML;
fs.mkdirSync(path.join(out,'images'),{recursive:true});
for(const {target,data} of copies)fs.writeFileSync(path.join(out,target),data);
fs.writeFileSync(path.join(out,'index.html'),preview(article,values.profile));
fs.writeFileSync(path.join(out,'body-x.html'),nativeBody(article.html,values.profile==='x-native-bold-v1'?values.profile:profiles.default));
fs.writeFileSync(path.join(out,'source.md'),source);
fs.writeFileSync(path.join(out,'media.json'),JSON.stringify(manifest,null,2));
console.log('Created '+path.join(out,'index.html'));
if(article.unmatched.length)console.warn('Unmatched emphasis phrases: '+article.unmatched.join(', '));
if(manifest.some(item=>!item.available))console.warn('Some media are missing or outside the input folder; see media.json.');
