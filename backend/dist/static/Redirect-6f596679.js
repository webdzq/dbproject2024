import{d as e,u as t,a as r,o as a,c as s}from"./index-d5304777.js";const d=e({__name:"Redirect",setup(e){const{currentRoute:d,replace:o}=t(),{params:p,query:c}=r(d),{path:n,_redirect_type:i="path"}=p;Reflect.deleteProperty(p,"_redirect_type"),Reflect.deleteProperty(p,"path");const u=Array.isArray(n)?n.join("/"):n;return"name"===i?o({name:u,query:c,params:p}):(console.log("dddddd"),o({path:u.startsWith("/")?u:"/"+u,query:c})),(e,t)=>(a(),s("div"))}});export{d as default};