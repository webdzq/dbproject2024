import{z as e,aX as o,H as t,c$ as s,al as n,bi as a,V as u,b5 as d,bB as l,d0 as c,bA as r,aS as i,A as m,Z as p,d as y,e as v,O as b,v as f}from"./index-d5304777.js";import{a as x}from"./scroll-8db753ac.js";import{P as M}from"./vnode-925e3556.js";const k=(i,m={})=>{e(i)||o("[useLockscreen]","You need to pass a ref param to this function");const p=m.ns||t("popup"),y=s((()=>p.bm("parent","hidden")));if(!n||a(document.body,y.value))return;let v=0,b=!1,f="0";const M=()=>{setTimeout((()=>{r(null==document?void 0:document.body,y.value),b&&document&&(document.body.style.width=f)}),200)};u(i,(e=>{if(!e)return void M();b=!a(document.body,y.value),b&&(f=document.body.style.width),v=x(p.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,t=d(document.body,"overflowY");v>0&&(o||"scroll"===t)&&b&&(document.body.style.width=`calc(100% - ${v}px)`),l(document.body,y.value)})),c((()=>M()))},g=e=>{if(!e)return{onClick:i,onMousedown:i,onMouseup:i};let o=!1,t=!1;return{onClick:s=>{o&&t&&e(s),o=t=!1},onMousedown:e=>{o=e.target===e.currentTarget},onMouseup:e=>{t=e.target===e.currentTarget}}},w=m({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:p([String,Array,Object])},zIndex:{type:p([String,Number])}});const C=y({name:"ElOverlay",props:w,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:o,emit:s}){const n=t("overlay"),{onClick:a,onMousedown:u,onMouseup:d}=g(e.customMaskEvent?void 0:e=>{s("click",e)});return()=>e.mask?v("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:a,onMousedown:u,onMouseup:d},[b(o,"default")],M.STYLE|M.CLASS|M.PROPS,["onClick","onMouseup","onMousedown"]):f("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[b(o,"default")])}});export{C as E,k as a,g as u};