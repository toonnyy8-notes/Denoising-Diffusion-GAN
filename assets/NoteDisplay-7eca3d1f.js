import{d as c,i as u,a as d,f as o,E as s,g as r,t as a,o as i,_ as f}from"./index-937d14cc.js";const m=["innerHTML"],k=["textContent"],v=["textContent"],y=c({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const t=p;return u(d),(e,n)=>e.noteHtml?(i(),o("div",{key:0,class:s(["prose overflow-auto outline-none",t.class]),onClick:n[0]||(n[0]=l=>e.$emit("click")),innerHTML:e.noteHtml},null,10,m)):e.note?(i(),o("div",{key:1,class:s(["prose overflow-auto outline-none",t.class]),onClick:n[1]||(n[1]=l=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,k)],2)):(i(),o("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",t.class]),onClick:n[2]||(n[2]=l=>e.$emit("click"))},[r("p",{textContent:a(t.placeholder||"No notes.")},null,8,v)],2))}}),g=f(y,[["__file","/home/runner/work/Denoising-Diffusion-GAN/Denoising-Diffusion-GAN/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
