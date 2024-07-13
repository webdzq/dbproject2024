import{d as e,aA as l,J as t,H as s,v as a,A as r,a as n,o,c as i,f as c,F as d,U as p,i as u,e as f,B as m,aZ as b,bf as v,aI as y,G as g,n as h,O as x,x as w,t as k,P as S,S as _,bK as $,ao as j,r as D,aq as N,L as z,Q as E,M as A,ay as O,b as C,j as I,_ as U}from"./index-191c25dc.js";import{E as W}from"./el-popper-39222683.js";import{E as q}from"./index-b361bb8e.js";import{g as B,f as F}from"./vnode-113fc9d4.js";import{i as M}from"./isNil-1f22f7b0.js";import{a as P}from"./use-form-common-props-01089bff.js";const G=Symbol("elDescriptions");var H=e({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:l(G,{})}),render(){var e,l,r,n,o,i;const c=B(this.cell),{border:d,direction:p}=this.descriptions,u="vertical"===p,f=(null==(r=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:r.call(l))||c.label,m=null==(i=null==(o=null==(n=this.cell)?void 0:n.children)?void 0:o.default)?void 0:i.call(o),b=c.span,v=c.align?`is-${c.align}`:"",y=c.labelAlign?`is-${c.labelAlign}`:v,g=c.className,h=c.labelClassName,x={width:t(c.width),minWidth:t(c.minWidth)},w=s("descriptions");switch(this.type){case"label":return a(this.tag,{style:x,class:[w.e("cell"),w.e("label"),w.is("bordered-label",d),w.is("vertical-label",u),y,h],colSpan:u?b:1},f);case"content":return a(this.tag,{style:x,class:[w.e("cell"),w.e("content"),w.is("bordered-content",d),w.is("vertical-content",u),v,g],colSpan:u?b:2*b-1},m);default:return a("td",{style:x,class:[w.e("cell"),v],colSpan:b},[M(f)?void 0:a("span",{class:[w.e("label"),h]},f),a("span",{class:[w.e("content"),g]},m)])}}});const J=r({row:{type:Array,default:()=>[]}}),K={key:1},L=e({name:"ElDescriptionsRow"});var Q=m(e({...L,props:J,setup(e){const t=l(G,{});return(e,l)=>"vertical"===n(t).direction?(o(),i(d,{key:0},[c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(H),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),c("tr",null,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),u(n(H),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(o(),i("tr",K,[(o(!0),i(d,null,p(e.row,((e,l)=>(o(),i(d,{key:`tr3-${l}`},[n(t).border?(o(),i(d,{key:0},[f(n(H),{cell:e,tag:"td",type:"label"},null,8,["cell"]),f(n(H),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(o(),u(n(H),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const R=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:b,title:{type:String,default:""},extra:{type:String,default:""}}),Z=e({name:"ElDescriptions"});var T=m(e({...Z,props:R,setup(e){const l=e,t=s("descriptions"),a=P(),r=v();y(G,l);const f=g((()=>[t.b(),t.m(a.value)])),m=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),b=()=>{var e;const t=F(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let a=[],n=l.column,o=0;return t.forEach(((e,r)=>{var i;const c=(null==(i=e.props)?void 0:i.span)||1;if(r<t.length-1&&(o+=c>n?n:c),r===t.length-1){const t=l.column-o%l.column;return a.push(m(e,t,n,!0)),void s.push(a)}c<n?(n-=c,a.push(e)):(a.push(m(e,c,n)),s.push(a),n=l.column,a=[])})),s};return(e,l)=>(o(),i("div",{class:h(n(f))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(o(),i("div",{key:0,class:h(n(t).e("header"))},[c("div",{class:h(n(t).e("title"))},[x(e.$slots,"title",{},(()=>[w(k(e.title),1)]))],2),c("div",{class:h(n(t).e("extra"))},[x(e.$slots,"extra",{},(()=>[w(k(e.extra),1)]))],2)],2)):S("v-if",!0),c("div",{class:h(n(t).e("body"))},[c("table",{class:h([n(t).e("table"),n(t).is("bordered",e.border)])},[c("tbody",null,[(o(!0),i(d,null,p(b(),((e,l)=>(o(),u(Q,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),V=e({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const X=_(T,{DescriptionsItem:V}),Y=$(V),ee=C(),le=g((()=>ee.getMobile)),{getPrefixCls:te}=I(),se=te("descriptions"),ae=U(e({name:"Descriptions",props:{title:j.string.def(""),message:j.string.def(""),collapse:j.bool.def(!0),border:j.bool.def(!0),column:j.number.def(2),size:j.oneOf(["large","default","small"]).def("default"),direction:j.oneOf(["horizontal","vertical"]).def("horizontal"),extra:j.string.def(""),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e,{slots:l,attrs:t}){const s=g((()=>{const l=["title","message","collapse","schema","data","class"],s={...t,...e};for(const e in s)-1!==l.indexOf(e)&&delete s[e];return n(le)&&(s.direction="vertical"),s})),a=D(!0),r=()=>{e.collapse&&(a.value=!n(a))};return()=>f("div",{class:[se,"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"]},[e.title?f("div",{class:[`${se}-header`,"relative h-50px flex justify-between items-center layout-border__bottom px-10px cursor-pointer"],onClick:r},[f("div",{class:[`${se}-header__title`,"relative font-18px font-bold ml-10px"]},[f("div",{class:"flex items-center"},[e.title,e.message?f(W,{content:e.message,placement:"right"},{default:()=>[f(N,{icon:"bi:question-circle-fill",class:"ml-5px",size:14},null)]}):null])]),e.collapse?f(N,{icon:a.value?"ep:arrow-down":"ep:arrow-up"},null):null]):null,f(q,null,{default:()=>[z(f("div",{class:[`${se}-content`]},[f(X,n(s),{extra:()=>l.extra?l.extra():e.extra,default:()=>e.schema.map((l=>f(Y,A({key:l.field},(e=>{const l=["field"],t={...e};for(const s in t)-1!==l.indexOf(s)&&delete t[s];return t})(l)),{label:()=>{var e,t;return(null==(e=l.slots)?void 0:e.label)?null==(t=l.slots)?void 0:t.label(l):l.label},default:()=>{var t,s;return(null==(t=l.slots)?void 0:t.default)?null==(s=l.slots)?void 0:s.default(e.data):O(e.data,l.field)}})))})]),[[E,n(a)]])]})])}}),[["__scopeId","data-v-aee191e8"],["__file","/Users/zyb-dong/github/project425/fontend/src/components/Descriptions/src/Descriptions.vue"]]);export{ae as D};
