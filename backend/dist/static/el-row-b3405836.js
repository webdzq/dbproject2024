import{A as t,d as e,H as s,G as a,aI as r,o as n,i as o,w as l,O as u,n as i,a as g,a8 as p,ad as c,B as d,S as m}from"./index-14c99acf.js";const y=Symbol("rowContextKey"),f=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),w=e({name:"ElRow"});const b=m(d(e({...w,props:f,setup(t){const e=t,d=s("row"),m=a((()=>e.gutter));r(y,{gutter:m});const f=a((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft=`-${e.gutter/2}px`,t):t})),w=a((()=>[d.b(),d.is(`justify-${e.justify}`,"start"!==e.justify),d.is(`align-${e.align}`,!!e.align)]));return(t,e)=>(n(),o(c(t.tag),{class:i(g(w)),style:p(g(f))},{default:l((()=>[u(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]));export{b as E,y as r};
