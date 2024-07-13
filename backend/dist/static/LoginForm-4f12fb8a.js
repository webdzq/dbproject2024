import{a0 as e,aF as o,d as a,a8 as s,ac as t,o as l,c as r,i as n,w as i,ao as d,a as c,ai as u,x as p,n as m,as as f,au as g,ay as v,b as h,m as b,u as y,q as w,e as P,F as j,bg as R,r as k,ad as x,bm as I,bn as _,k as z,_ as E}from"./index-5daae5c6.js";import{E as F,u as C,F as A}from"./useForm-92649af8.js";import{E as L}from"./el-button-4a7b0ca2.js";import{l as S,g as q,a as N}from"./index-d897edf1.js";import{u as $}from"./useValidator-1f23455c.js";import"./el-form-item-ada12a4e.js";import"./el-input-d215ca9f.js";import"./el-popper-8a023621.js";import"./el-select-03ddc29b.js";import"./el-tooltip-4cf8d1ca.js";import"./index-5f2b1643.js";const B=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:o}}),D={click:e=>e instanceof MouseEvent},U=["href","target"],V=a({name:"ElLink"});const M=v(g(a({...V,props:B,emits:D,setup(e,{emit:o}){const a=e,g=s("link"),v=t((()=>[g.b(),g.m(a.type),g.is("disabled",a.disabled),g.is("underline",a.underline&&!a.disabled)]));function h(e){a.disabled||o("click",e)}return(e,o)=>(l(),r("a",{class:m(c(v)),href:e.disabled||!e.href?void 0:e.href,target:e.disabled||!e.href?void 0:e.target,onClick:h},[e.icon?(l(),n(c(u),{key:0},{default:i((()=>[(l(),n(d(e.icon)))])),_:1})):p("v-if",!0),e.$slots.default?(l(),r("span",{key:1,class:m(c(g).e("inner"))},[f(e.$slots,"default")],2)):p("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):p("v-if",!0)],10,U))}}),[["__file","link.vue"]]));function O(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!I(e)}const G="#999",H="var(--el-color-primary)",J=E(a({__name:"LoginForm",setup(e){const{required:o}=$(),a=h(),s=b(),{currentRoute:t,addRoute:r,push:i}=y(),{setStorage:d}=_(),{t:u}=z(),p={username:[o()],password:[o()]},m=w([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>P("h2",{class:"text-2xl font-bold text-center w-[100%]"},[u("login.login")])}}},{field:"username",label:u("login.username"),value:"admin",component:"Input",colProps:{span:24},componentProps:{placeholder:u("login.usernamePlaceholder")}},{field:"password",label:u("login.password"),value:"admin",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:u("login.passwordPlaceholder")}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return P(j,null,[P("div",{class:"flex justify-between items-center w-[100%]"},[P(F,{modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,label:u("login.remember"),size:"small"},null),P(M,{type:"primary",underline:!1},O(e=u("login.forgetPassword"))?e:{default:()=>[e]})])])}}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return P(j,null,[P("div",{class:"w-[100%]"},[P(L,{loading:B.value,type:"primary",class:"w-[100%]",onClick:U},O(e=u("login.login"))?e:{default:()=>[e]})])])}}}},{field:"other",component:"Divider",label:u("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24},formItemProps:{slots:{default:()=>P(j,null,[P("div",{class:"flex justify-between w-[100%]"},[P(R,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer ant-icon",color:G,hoverColor:H},null),P(R,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer ant-icon",color:G,hoverColor:H},null),P(R,{icon:"ant-design:alipay-circle-filled",size:30,color:G,hoverColor:H,class:"cursor-pointer ant-icon"},null),P(R,{icon:"ant-design:weibo-circle-filled",size:30,color:G,hoverColor:H,class:"cursor-pointer ant-icon"},null)])])}}}]),f=k(!1),{formRegister:g,formMethods:v}=C(),{getFormData:I,getElFormExpose:E}=v,B=k(!1),D=k("");x((()=>t.value),(e=>{var o;D.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const U=async()=>{const e=await E();await(null==e?void 0:e.validate((async e=>{if(e){B.value=!0;try{const e=await S();e&&(a.setUserInfo(e.data),a.getDynamicRouter?V():(await s.generateRoutes("none").catch((()=>{})),s.getAddRouters.forEach((e=>{r(e)})),s.setIsAddRouters(!0),i({path:D.value||s.addRouters[0].path})))}finally{B.value=!1}}})))},V=async()=>{const e=await I(),o={roleName:e.realName},a="admin"===e.realName?await q(o):await N(o);if(a){const o=a.data||[];d("roleRouters",o),"admin"===e.realName?await s.generateRoutes("admin",o).catch((()=>{})):await s.generateRoutes("test",o).catch((()=>{})),s.getAddRouters.forEach((e=>{r(e)})),s.setIsAddRouters(!0),i({path:D.value||s.addRouters[0].path})}};return(e,o)=>(l(),n(c(A),{schema:m,rules:p,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:c(g)},null,8,["schema","onRegister"]))}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/Login/components/LoginForm.vue"]]);export{J as default};