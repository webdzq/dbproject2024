import{d as e,u as r,a as t,o as a,c as s,_ as d}from"./index-5daae5c6.js";const c=d(e({__name:"Redirect",setup(e){const{currentRoute:d,replace:c}=r(),{params:o,query:i}=t(d),{path:p,_redirect_type:n="path"}=o;Reflect.deleteProperty(o,"_redirect_type"),Reflect.deleteProperty(o,"path");const u=Array.isArray(p)?p.join("/"):p;return"name"===n?c({name:u,query:i,params:o}):(console.log("dddddd"),c({path:u.startsWith("/")?u:"/"+u,query:i})),(e,r)=>(a(),s("div"))}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/Redirect/Redirect.vue"]]);export{c as default};
