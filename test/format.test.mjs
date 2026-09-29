import test from 'node:test';
import assert from 'node:assert/strict';
import {formatArticle,nativeBody,documentFor,profiles} from '../src/format.mjs';
import {preview} from '../src/preview.mjs';

test('default profile preserves underlines and quotes without color CSS',()=>{
  const result=formatArticle('# 标题\n\n++关键词++和==高亮==。\n\n> 引用\n');
  const html=nativeBody(result.html);
  assert.match(html,/<u>关键词<\/u>/);assert.match(html,/<strong>高亮<\/strong>/);assert.match(html,/<blockquote>/);
  assert.doesNotMatch(html,/style=|class=|background|color=/);
  assert.equal(profiles.default,'x-native-underline-v2');
});
test('full design survives and legacy bold profile remains selectable',()=>{
  const result=formatArticle('++关键词++和==高亮==');
  assert.match(result.html,/class="highlight"/);
  const legacy=nativeBody(result.html,'x-native-bold-v1');
  assert.match(legacy,/<strong>关键词<\/strong>/);assert.doesNotMatch(legacy,/<u>/);
  assert.throws(()=>nativeBody(result.html,'unknown'));
});
test('emphasis preserves all text, punctuation and links',()=>{
  const source='# Title\n\nKeep **these words**. [Link](https://example.com)\n';
  const plain=formatArticle(source);const marked=formatArticle(source,{underlines:['these words'],anchors:['Keep'],highlights:['absent']});
  assert.equal(documentFor(plain.html).querySelector('main').textContent,documentFor(marked.html).querySelector('main').textContent);
  assert.match(nativeBody(marked.html),/<u>these words<\/u>/);assert.match(marked.html,/https:\/\/example.com/);
  assert.deepEqual(marked.unmatched,['absent']);
});
test('unsafe HTML and URLs are stripped, code remains literal',()=>{
  const result=formatArticle('# <img src=x onerror="alert(1)">\n\n<script>alert(1)</script><a href="javascript:alert(1)">bad</a>\n\n`++literal++`');
  assert.doesNotMatch(result.html,/script|javascript:|onerror/);assert.match(result.html,/<code>\+\+literal\+\+<\/code>/);
  assert.doesNotMatch(preview({title:'</script><script>alert(1)</script>',html:result.html}),/<title><\/script>/);
});
test('images keep source order and native copy gets insertion markers',()=>{
  const result=formatArticle('![[first image.png|600]]\n\n![two](second.png)');
  const images=[...documentFor(result.html).querySelectorAll('img')];
  assert.equal(decodeURI(images[0].getAttribute('src')),'first image.png');assert.equal(images[1].getAttribute('src'),'second.png');
  const html=nativeBody(result.html);assert.ok(html.indexOf('插入图 1')<html.indexOf('插入图 2'));assert.doesNotMatch(html,/<img/);
});
test('native preview and full design are independently available',()=>{
  const result=formatArticle('# Demo\n\n++word++');
  const html=preview(result);
  assert.match(html,/<body class="native">/);assert.match(html,/id="design" hidden/);assert.match(html,/id="copy-native"/);assert.match(html,/id="copy-design"/);
});
