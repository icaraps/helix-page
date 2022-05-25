import{a as o,j as e,s as x}from"./renderer/_default.page.client.jsx.1d46d6b4.js";const k=x.section`
  max-width: 100%;
  color: var(--teaser-text-color);
  position: relative;
  height: var(--teaser-height);
  width: 100%;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  & > div {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    
    & > div {
    text-align: center;
    max-width: 64rem;
    width: 50%;
    margin: 20px;
      
      & > p:first-of-type {
        color: var(--teaser-pre-title-color);
        font-size: var(--teaser-pre-title-font-size);
        font-weight: var(--teaser-pre-title-font-weight);
        text-align: center;
        text-transform: var(--teaser-pre-title-text-transform);
      }
      
      & > div:last-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  
  h1 {
    font-weight: var(--title-font-weight);
    font-size: var(--teaser-title-font-size);
    font-family: var(--title-font);
    margin-top: 0;
    
    & + p,
    & + div {
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }
  
  a {
    background: var(--teaser-button-background);
    border-radius: var(--teaser-button-border-radius);
    display: inline;
    padding: var(--teaser-button-padding);
    border: var(--teaser-button-border);
    color: var(--teaser-button-color);
    margin: 0 1em 2em 0;
    text-decoration: none;
    font-family: var(--default-font);
    font-size: var(--default-font-size);
  }
  
  a:hover {
    background: var(--teaser-button-hover-background);
    border: var(--teaser-button-hover-border);
  }
  
  a + a {
    background: var(--teaser-second-button-background);
    border: var(--teaser-second-button-border);
  }
  
  a + a:hover {
    background: var(--teaser-second-button-hover-background);
    border: var(--teaser-second-button-hover-border);
    color: var(--teaser-second-button-hover-color);
  }
`,S=x.div`
  height: initial;
  width: 50%;
  display: flex;
  flex-direction: column;
  float: left;
  padding: 1em;
  
  img {
    object-fit: cover;
    width: 100%;
  }
  
  & > div {
    color: var(--teaser-alt-text-color);
    
    & > div {
      text-align: initial;
      
      & > p:first-of-type {
        color: var(--teaser-alt-pre-title-color);
        font-size: var(--teaser-alt-pre-title-font-size);
        font-weight: var(--teaser-alt-pre-title-font-weight);
        text-transform: var(--teaser-alt-pre-title-text-transform);
        text-align: start;
        margin-bottom: 0;
      }
      
      & > div:last-of-type {
        display: flex;
        align-items: center;
      }
    }
  }
  
  h3 {
    margin: 8px 0 19px;
    font-weight: var(--teaser-alt-title-font-weight);
    font-size: var(--teaser-alt-title-font-size);
    font-family: var(--teaser-alt-title-font);
    
    & + p,
    & + div {
      margin-top: 1em;
      margin-bottom: 1.5em;
    }
  }
  
  a {
    background: var(--teaser-alt-button-background);
    border-radius: var(--teaser-alt-button-border-radius);
    display: inline;
    padding: var(--teaser-alt-button-padding);
    border: var(--teaser-alt-button-border);
    color: var(--teaser-alt-button-color);
    margin: 0 1em 2em 0;
    text-decoration: none;
    font-family: var(--teaser-alt-font);
    font-size: 16px;
  }
  
  a:hover {
    background: var(--teaser-alt-button-hover-background);
    border: var(--teaser-alt-button-hover-border);
  }
  
  a + a {
    background: var(--teaser-alt-second-button-background);
    border: var(--teaser-alt-second-button-border);
    color: var(--teaser-alt-second-button-color);
  }
  
  a + a:hover {
    background: var(--teaser-alt-second-button-hover-background);
    border: var(--teaser-alt-second-button-hover-border);
    color: var(--teaser-alt-second-button-hover-color);
  }
`,z="https://smartimaging.scene7.com/is/image/",p=["320","480","600","800","1024","1200","1600"],y=(r,n=p.length+1)=>p.slice(0,n).map(i=>r+"?wid="+i+" "+i+"w").join(", ");function _(r){var h,u,b,f,m;const{id:n,pretitle:i,jcr_title:s,jcr_description:l,textIsRich:v,resolved:w}=r,a=r.items?JSON.parse(r.items).filter(t=>t.text):[],d=z+((m=(f=(b=(u=(h=JSON.parse(w))==null?void 0:h.fileReference)==null?void 0:u.document)==null?void 0:b.properties)==null?void 0:f.data)==null?void 0:m.metadata["dam:scene7File"]),g=r["cq:styleIds"]?JSON.parse(r["cq:styleIds"]):[];return g.includes("1612830658386")&&g.includes("1612897500904")?o(S,{id:n,suppressHydrationWarning:!0,children:[o("picture",{children:[e("source",{srcSet:y(d,2),type:"image/webp"}),e("img",{loading:"lazy",alt:s,src:`${d}?wid=480`})]}),e("div",{children:o("div",{children:[e("p",{children:i}),e("h3",{children:s}),v?e("div",{dangerouslySetInnerHTML:{__html:l}}):e("p",{children:l}),e("div",{children:a==null?void 0:a.map((t,c)=>e("a",{href:t.link,target:t.target,children:t.text},c))})]})})]}):o(k,{id:n,suppressHydrationWarning:!0,children:[o("picture",{children:[e("source",{srcSet:y(d),type:"image/webp"}),e("img",{loading:"eager",alt:s,src:`${d}?wid=1600`})]}),e("div",{children:o("div",{children:[e("p",{children:i}),e("h1",{children:s}),v?e("div",{dangerouslySetInnerHTML:{__html:l}}):e("p",{children:l}),e("div",{children:a==null?void 0:a.map((t,c)=>e("a",{href:t.link,target:t.target,children:t.text},c))})]})})]})}export{_ as default};
