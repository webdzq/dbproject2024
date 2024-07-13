import{d as e,k as t,u as a,r as s,q as o,s as l,v as i,e as n,x as r,F as c,y as p,o as u,c as d,w as m,a as f,f as g,z as h,_ as y}from"./index-14c99acf.js";import{u as v,a as j,S as E,T as b,C as w}from"./useCrudSchemas-3dff12e3.js";import{E as P,d as _}from"./el-tag-b3f37f77.js";import{E as S}from"./el-button-b39417c4.js";import{E as k}from"./tree-72b1666d.js";import"./el-input-90f914cc.js";import"./el-overlay-e1a7640a.js";import{o as T,u as x,g as I,r as D}from"./index-a11e7126.js";import{u as C}from"./useEmitt-24a6498c.js";import O from"./PercentDialog-cb55987f.js";import{g as V}from"./index-1dc4238d.js";import"./el-card-280f93ab.js";import"./el-popper-423896a2.js";import"./isNil-1f22f7b0.js";import"./use-form-common-props-d73423f8.js";import"./focus-trap-4b2fe507.js";import"./useForm-40b11b9e.js";import"./el-form-item-6a11bdc7.js";import"./el-row-b3405836.js";import"./el-checkbox-23abc4dc.js";import"./event-5568c9d8.js";import"./use-form-item-95457b9b.js";import"./el-radio-de30d299.js";import"./el-select-562df675.js";import"./scroll-48d2443d.js";import"./validator-4801b3bd.js";import"./aria-ecee1d93.js";import"./index-3bdc3931.js";import"./el-table-column-257bd6b9.js";import"./el-pagination-7293d9ec.js";import"./index-6d20cfdf.js";import"./vnode-8e602242.js";import"./index-a4774437.js";import"./use-dialog-1fd54c37.js";const L={class:"mb-10px"},R=e({name:"VersionList"}),z=y(e({...R,setup(e){const y={VITE_API_BASE_PATH:"pro",VITE_BASE_PATH:"./",VITE_DROP_DEBUGGER:"true",VITE_DROP_CONSOLE:"true",VITE_SOURCEMAP:"false",VITE_OUT_DIR:"dist",VITE_BUILD_MODE:"online",VITE_APP_TITLE:"FE项目发布系统",VITE_USER_NODE_ENV:"online",BASE_URL:"./",MODE:"pro",DEV:!0,PROD:!1,SSR:!1};console.log("ENV",y);const{t:R}=t(),{push:z}=a(),B=s({}),M=s([]),A=s(!1),U=e=>{B.value=e,Q()},{tableRegister:N,tableState:H,tableMethods:$}=v({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=H,a=await I({page:f(e),limit:f(t),...f(B)});return{list:a.items,total:a.meta.total}}}),{loading:F,dataList:Y,total:q,currentPage:G,pageSize:K}=H,{getList:Q}=$;C({name:"getList",callback:e=>{"add"===e&&(G.value=1),Q()}}),o((async()=>{const e=await V({});M.value=e.map((e=>({label:e.appName,value:e.apkName})))}));const W=l([{field:"id",label:"Id",search:{hidden:!0}},{field:"apk",label:"apk名称",search:{component:"Select",componentProps:{options:M}},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"appName",label:"apk包名",search:{hidden:!0}},{field:"version",label:"版本号",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"status",label:"状态",search:{component:"Select",componentProps:{options:[{label:"下线",value:"offline"},{label:"默认",value:"default"},{label:"test",value:"test"},{label:"tips",value:"tips"},{label:"灰度",value:"gray"},{label:"上线",value:"online"}]}},form:{component:"Input",colProps:{span:24}},formatter:(e,t,a)=>X(a)},{field:"forceOnline",label:"是否强制上线",search:{hidden:!0},formatter:(e,t,a)=>i(P,{type:1===a?"success":"danger"},(()=>1===a?"是":"否"))},{field:"device",label:"设备类型",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"createdBy",label:"创建人",search:{hidden:!0}},{field:"updatedBy",label:"更新人",search:{hidden:!0}},{field:"updatedTime",label:"更新时间",search:{hidden:!0},formatter:(e,t,a)=>_(a).format("YYYY-MM-DD HH:mm:ss")},{field:"action",label:"操作",width:"300px",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>n(c,null,[n("div",{class:"action-btns",style:"display: flex; flex-wrap: wrap"},[n(S,{type:"primary",onClick:()=>te(e[0].row,"detail")},{default:()=>[r("详情")]}),["default"].includes(e[0].row.status)&&"pro"!==y.MODE&&n(S,{type:"success",onClick:()=>te(e[0].row,"test")},{default:()=>[r("test")]}),["default"].includes(e[0].row.status)&&"pro"===y.MODE&&n(S,{type:"success",onClick:()=>te(e[0].row,"tips")},{default:()=>[r("tips")]}),["gray"].includes(e[0].row.status)&&"pro"===y.MODE&&n(S,{type:"success",onClick:()=>te(e[0].row,"online")},{default:()=>[r("上线")]}),["gray","tips","online","test"].includes(e[0].row.status)&&n(S,{type:"danger",onClick:()=>te(e[0].row,"offline")},{default:()=>[r("下线")]}),["tips"].includes(e[0].row.status)&&"pro"===y.MODE&&n(S,{type:"success",onClick:()=>te(e[0].row,"gray")},{default:()=>[r("灰度")]}),n(S,{type:"success",color:"#626aef",onClick:()=>te(e[0].row,"diff")},{default:()=>[r("diff")]}),!["default","offline"].includes(e[0].row.status)&&n(S,{type:"warning",onClick:()=>te(e[0].row,"limit")},{default:()=>[r("放量")]})])])}}}]),{allSchemas:J}=j(W),X=e=>{switch(e){case"offline":return"已下线";case"default":default:return"默认";case"test":case"test":return"test";case"tips":return"tips";case"gray":return"灰度";case"online":return"上线"}},Z=s(-1),ee=s(""),te=(e,t)=>{"detail"===t?z(`/localization/version-detail?id=${e.id}`):"diff"===t?z(`/localization/diff-page?id=${e.id}&version=${e.version}&apk=${e.apk}`):"limit"===t?(ee.value=e.snList,A.value=!0):"offline"===t?k.prompt("请输入下线备注","提示",{confirmButtonText:"确认",cancelButtonText:"取消",inputPattern:/^[\s\S]*.*[^\s][\s\S]*$/,inputErrorMessage:"请输入下线备注"}).then((async({value:t})=>{const a={id:e.id,remark:t};try{await T(a)&&(p({message:"下线成功",type:"success"}),Q())}catch(s){console.log("---err---:",s)}})).catch((()=>{})):["default","test","tips","gray","online"].includes(t)&&ae(e.id,t),Z.value=e.id},ae=async(e,t)=>{k.confirm(i("p",null,[i("span",null,"是否切换当前数据为"),i("span",{style:"color: red;font-size: 20px;"},t)]),R("common.delWarning"),{confirmButtonText:R("common.delOk"),cancelButtonText:R("common.delCancel"),type:"warning"}).then((async()=>{const a={id:e,status:t};try{await x(a)&&(p({message:"状态变更成功",type:"success"}),Q())}catch(s){console.log("---err---:",s)}}))},se=()=>{z("/localization/creat-packages")},oe=e=>{(async(e,t)=>{const a={id:e,snList:t};try{await D(a)&&(p({message:"放量成功",type:"success"}),Q())}catch(s){console.log("---err---:",s)}})(Z.value,e.sns),le()},le=()=>{A.value=!1};return(e,t)=>(u(),d(c,null,[n(f(w),null,{default:m((()=>[n(f(E),{schema:f(J).searchSchema,onSearch:U},null,8,["schema"]),g("div",L,[n(f(S),{type:"primary",onClick:se},{default:m((()=>[r("创建")])),_:1})]),n(f(b),{pageSize:f(K),"onUpdate:pageSize":t[0]||(t[0]=e=>h(K)?K.value=e:null),currentPage:f(G),"onUpdate:currentPage":t[1]||(t[1]=e=>h(G)?G.value=e:null),columns:f(J).tableColumns,data:f(Y),loading:f(F),pagination:{total:f(q)},onRegister:f(N)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),n(O,{visable:A.value,snList:ee.value,onCancelPercent:le,onChangePercent:oe},null,8,["visable","snList"])],64))}}),[["__file","/Users/zyb-dong/github/project425/fontend/src/views/VersionList/index.vue"]]);export{z as default};
