import{d as s,u as o,W as t,r as e,o as i,i as r,w as a,e as n,a as l,x as m,_ as p}from"./index-14c99acf.js";import u from"./Detail-88ae96fd.js";import{C as c}from"./ContentDetailWrap-01c6e33b.js";import{d,e as j}from"./index-a11e7126.js";import{E as f}from"./el-button-b39417c4.js";import"./Descriptions-bceaa9c3.js";import"./el-popper-423896a2.js";import"./isNil-1f22f7b0.js";import"./use-form-common-props-d73423f8.js";import"./focus-trap-4b2fe507.js";import"./index-3bdc3931.js";import"./vnode-8e602242.js";import"./el-tag-b3f37f77.js";import"./el-table-column-257bd6b9.js";import"./el-checkbox-23abc4dc.js";import"./event-5568c9d8.js";import"./use-form-item-95457b9b.js";import"./el-card-280f93ab.js";import"./index-a4774437.js";const v=p(s({__name:"detail",setup(s){const{push:p,go:v}=o(),{query:x}=t(),g=e(null),w=async()=>{const s=await d({id:x.id});if(console.log(s),s)return s},_=async()=>{const s={id:x.id},o=await j(s);if(o)return o};return Promise.all([w(),_()]).then((s=>{const o={...s[0],logList:s[1]};g.value=o})),(s,o)=>(i(),r(l(c),{title:"详情",onBack:o[1]||(o[1]=s=>l(p)("/localization/version-List"))},{header:a((()=>[n(l(f),{onClick:o[0]||(o[0]=s=>l(v)(-1))},{default:a((()=>[m("返回")])),_:1})])),default:a((()=>[n(u,{"current-row":g.value},null,8,["current-row"])])),_:1}))}}),[["__file","/Users/zyb-dong/github/project425/fontend/src/views/VersionList/detail.vue"]]);export{v as default};
