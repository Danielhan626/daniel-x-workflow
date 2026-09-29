import {Marked} from 'marked';
import sanitizeHtml from 'sanitize-html';
import {parseHTML} from 'linkedom';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';

export const profiles=JSON.parse(fs.readFileSync(fileURLToPath(new URL('../profiles/formatting.json',import.meta.url)),'utf8'));
export const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const markdown=new Marked();
for(const [name,delimiter,tag] of [['keyword','++','u'],['highlight','==','span']]){
  markdown.use({extensions:[{
    name,level:'inline',start:src=>src.indexOf(delimiter),
    tokenizer(src){
      if(!src.startsWith(delimiter))return;
      const end=src.indexOf(delimiter,delimiter.length);
      if(end<=delimiter.length)return;
      const text=src.slice(delimiter.length,end);
      return{type:name,raw:src.slice(0,end+delimiter.length),tokens:this.lexer.inlineTokens(text)};
    },
    renderer(token){return '<'+tag+' class="'+name+'">'+this.parser.parseInline(token.tokens)+'</'+tag+'>'}
  }]});
}

export function documentFor(html){return parseHTML('<!doctype html><html><body><main>'+html+'</main></body></html>').document}
function textNodes(root){
  const nodes=[];
  for(const child of root.childNodes){if(child.nodeType===3)nodes.push(child);else if(child.nodeType===1)nodes.push(...textNodes(child))}
  return nodes;
}

export function formatArticle(source,emphasis={}){
  // Obsidian's image width is presentation metadata, not part of the filename.
  const normalized=source.replace(/!\[\[([^\]\n]+)\]\]/g,(_,value)=>{
    const name=value.split('|')[0];return '![](<'+name.replace(/>/g,'%3E')+'>)';
  });
  const safe=sanitizeHtml(markdown.parse(normalized),{
    allowedTags:['h1','h2','h3','h4','p','br','strong','em','u','s','del','blockquote','ul','ol','li','a','img','code','pre','hr','span','table','thead','tbody','tr','th','td'],
    allowedAttributes:{a:['href','title'],img:['src','alt','title'],span:['class'],u:['class'],ol:['start']},
    allowedClasses:{span:['keyword','anchor','highlight'],u:['keyword']},
    allowedSchemes:['http','https','mailto'],allowProtocolRelative:false
  });
  const document=documentFor(safe);const main=document.querySelector('main');
  const heading=main.querySelector('h1');const title=heading?.textContent||'Untitled';heading?.remove();
  const originalText=main.textContent;
  const unmatched=[];
  for(const [key,className] of [['underlines','keyword'],['anchors','anchor'],['highlights','highlight']]){
    for(const phrase of emphasis[key]||[]){
      if(typeof phrase!=='string'||!phrase.trim())throw Error('Emphasis phrases must be non-empty strings');
      const node=textNodes(main).find(node=>!node.parentElement.closest('h1,h2,h3,h4,code,pre,.keyword,.anchor,.highlight')&&node.textContent.includes(phrase));
      if(!node){unmatched.push(phrase);continue}
      const at=node.textContent.indexOf(phrase);const fragment=document.createDocumentFragment();
      fragment.append(document.createTextNode(node.textContent.slice(0,at)));
      const mark=document.createElement(className==='keyword'?'u':'span');mark.className=className;mark.textContent=phrase;fragment.append(mark);
      fragment.append(document.createTextNode(node.textContent.slice(at+phrase.length)));node.replaceWith(fragment);
    }
  }
  if(main.textContent!==originalText)throw Error('Formatting changed source text');
  return{title,html:main.innerHTML,unmatched};
}

export function nativeBody(html,profile='x-native-underline-v2',{imageMarkers=true}={}){
  const config=profiles.profiles[profile];if(!config||profile==='design-full-v1')throw Error('Choose a native profile for X export');
  const document=documentFor(html);const main=document.querySelector('main');
  main.querySelectorAll('.keyword,.anchor,.highlight,u').forEach(node=>{
    const isKeyword=node.classList.contains('keyword')||node.localName==='u';
    const el=document.createElement(isKeyword?config.keywordTag:'strong');el.append(...node.childNodes);node.replaceWith(el);
  });
  main.querySelectorAll('span').forEach(node=>node.replaceWith(...node.childNodes));
  if(imageMarkers)main.querySelectorAll('img').forEach((img,index)=>{const p=document.createElement('p');p.textContent='〖插入图 '+(img.getAttribute('data-media-index')||index+1)+'〗';img.replaceWith(p)});
  main.querySelectorAll('*').forEach(node=>{for(const attr of [...node.attributes])if(!['href','src','alt','title','start','data-media-index'].includes(attr.name)||imageMarkers&&attr.name==='data-media-index')node.removeAttribute(attr.name)});
  return main.innerHTML;
}
