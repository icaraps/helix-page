import{r as l,a,j as x,s as h}from"./renderer/_default.page.client.jsx.1d46d6b4.js";const g=h.div`
  position:fixed;
  bottom: 0;
  display: ${n=>n.hidden?"none":"flex"};
  background: white;
  border-top: 2px solid gray;
  padding: 30px;
  width: 100vw;
`;function T(n){const{textIsRich:f,text:i}=n,[e,s]=l.exports.useState(null);l.exports.useEffect(()=>{if(e!==null){const d=setTimeout(()=>{s(null)},3e3);return()=>{clearTimeout(d)}}},[e]);const r=d=>{const c=window.getSelection(),t=c.getRangeAt(0),o=c.anchorNode;for(;t.toString().indexOf(" ")!==0;)t.setStart(o,t.startOffset-1);t.setStart(o,t.startOffset+1);do t.setEnd(o,t.endOffset+1);while(t.toString().indexOf(" ")===-1&&t.toString().trim()!=="");const u=t.toString().trim();s(u)};return a("div",{children:[a(g,{hidden:!e,children:["Would you like to search the dictionary for ",e,"?"]}),f?(()=>x("div",{dangerouslySetInnerHTML:{__html:i},onClick:r}))():(()=>x("div",{onClick:r,children:i}))()]})}export{T as default};
