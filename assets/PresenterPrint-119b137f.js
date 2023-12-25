import{d as _,i as d,a as p,u,b as h,c as m,e as f,f as n,g as t,t as s,h as a,F as g,r as v,n as x,j as y,o as i,k as b,l as N,m as k,p as D,q as w,_ as P}from"./index-937d14cc.js";import{N as S}from"./NoteDisplay-7eca3d1f.js";const V={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},A={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(G){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const l=f(()=>y.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(i(),n("div",{id:"page-root",style:x(a(w))},[t("div",V,[t("div",j,[t("h1",L,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(i(!0),n(g,null,v(a(l),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",A,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(a(b)),1),N(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(i(),n("hr",z)):D("v-if",!0)]))),128))])],4))}}),E=P(F,[["__file","/home/runner/work/Denoising-Diffusion-GAN/Denoising-Diffusion-GAN/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
