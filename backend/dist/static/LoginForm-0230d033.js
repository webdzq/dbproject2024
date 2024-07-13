import{A as e,az as o,d as s,H as a,G as t,o as r,c as l,i,w as n,ad as d,a as c,C as u,P as p,n as m,O as f,B as g,S as v,b as h,m as w,u as y,s as b,e as j,F as k,aq as P,r as R,V as x,aw as I,aL as z,k as E,_ as C}from"./index-191c25dc.js";import{u as F,F as _}from"./useForm-c172fe8b.js";import{E as A}from"./el-button-6c6de2b9.js";import{E as L}from"./el-checkbox-183f938a.js";import{l as q,g as N,a as S}from"./index-4820aa7c.js";import{u as B}from"./useValidator-cd52f472.js";import"./el-form-item-01bc0774.js";import"./use-form-common-props-01089bff.js";import"./el-row-ba23d37d.js";import"./el-input-e3d92cd0.js";import"./event-5568c9d8.js";import"./use-form-item-9493112b.js";import"./isNil-1f22f7b0.js";import"./el-popper-39222683.js";import"./focus-trap-1cdbca52.js";import"./el-tag-3b69b670.js";import"./el-radio-38688f18.js";import"./el-select-498792b5.js";import"./scroll-967728ae.js";import"./validator-027b88f2.js";import"./aria-ecee1d93.js";import"./index-b361bb8e.js";import"./index-7ef85113.js";const D=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:o}}),V={click:e=>e instanceof MouseEvent},$=["href"],O=s({name:"ElLink"});const U=v(g(s({...O,props:D,emits:V,setup(e,{emit:o}){const s=e,g=a("link"),v=t((()=>[g.b(),g.m(s.type),g.is("disabled",s.disabled),g.is("underline",s.underline&&!s.disabled)]));function h(e){s.disabled||o("click",e)}return(e,o)=>(r(),l("a",{class:m(c(v)),href:e.disabled||!e.href?void 0:e.href,onClick:h},[e.icon?(r(),i(c(u),{key:0},{default:n((()=>[(r(),i(d(e.icon)))])),_:1})):p("v-if",!0),e.$slots.default?(r(),l("span",{key:1,class:m(c(g).e("inner"))},[f(e.$slots,"default")],2)):p("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):p("v-if",!0)],10,$))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));function G(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!I(e)}const H="#999",M="var(--el-color-primary)",J=C(s({__name:"LoginForm",setup(e){const{required:o}=B(),s=h(),a=w(),{currentRoute:t,addRoute:l,push:n}=y(),{setStorage:d}=z(),{t:u}=E(),p={username:[o()],password:[o()]},m=b([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>j("h2",{class:"text-2xl font-bold text-center w-[100%]"},[u("login.login")])}}},{field:"username",label:u("login.username"),value:"admin",component:"Input",colProps:{span:24},componentProps:{placeholder:u("login.usernamePlaceholder")}},{field:"password",label:u("login.password"),value:"admin",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:u("login.passwordPlaceholder")}},{field:"tool",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return j(k,null,[j("div",{class:"flex justify-between items-center w-[100%]"},[j(L,{modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,label:u("login.remember"),size:"small"},null),j(U,{type:"primary",underline:!1},G(e=u("login.forgetPassword"))?e:{default:()=>[e]})])])}}}},{field:"login",colProps:{span:24},formItemProps:{slots:{default:()=>{let e;return j(k,null,[j("div",{class:"w-[100%]"},[j(A,{loading:D.value,type:"primary",class:"w-[100%]",onClick:$},G(e=u("login.login"))?e:{default:()=>[e]})])])}}}},{field:"other",component:"Divider",label:u("login.otherLogin"),componentProps:{contentPosition:"center"}},{field:"otherIcon",colProps:{span:24},formItemProps:{slots:{default:()=>j(k,null,[j("div",{class:"flex justify-between w-[100%]"},[j(P,{icon:"ant-design:github-filled",size:30,class:"cursor-pointer ant-icon",color:H,hoverColor:M},null),j(P,{icon:"ant-design:wechat-filled",size:30,class:"cursor-pointer ant-icon",color:H,hoverColor:M},null),j(P,{icon:"ant-design:alipay-circle-filled",size:30,color:H,hoverColor:M,class:"cursor-pointer ant-icon"},null),j(P,{icon:"ant-design:weibo-circle-filled",size:30,color:H,hoverColor:M,class:"cursor-pointer ant-icon"},null)])])}}}]),f=R(!1),{formRegister:g,formMethods:v}=F(),{getFormData:I,getElFormExpose:C}=v,D=R(!1),V=R("");x((()=>t.value),(e=>{var o;V.value=null==(o=null==e?void 0:e.query)?void 0:o.redirect}),{immediate:!0});const $=async()=>{const e=await C();await(null==e?void 0:e.validate((async e=>{if(e){D.value=!0;try{const e=await q();e&&(s.setUserInfo(e.data),s.getDynamicRouter?O():(await a.generateRoutes("none").catch((()=>{})),a.getAddRouters.forEach((e=>{l(e)})),a.setIsAddRouters(!0),n({path:V.value||a.addRouters[0].path})))}finally{D.value=!1}}})))},O=async()=>{const e=await I(),o={roleName:e.realName},s="admin"===e.realName?await N(o):await S(o);if(s){const o=s.data||[];d("roleRouters",o),"admin"===e.realName?await a.generateRoutes("admin",o).catch((()=>{})):await a.generateRoutes("test",o).catch((()=>{})),a.getAddRouters.forEach((e=>{l(e)})),a.setIsAddRouters(!0),n({path:V.value||a.addRouters[0].path})}};return(e,o)=>(r(),i(c(_),{schema:m,rules:p,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:c(g)},null,8,["schema","onRegister"]))}}),[["__file","/Users/zyb-dong/github/project425/fontend/src/views/Login/components/LoginForm.vue"]]);export{J as default};
