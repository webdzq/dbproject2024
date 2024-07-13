import{d as e,u as a,r as t,q as l,e as s,s as i,F as n,v as o,o as d,i as r,w as m,a as c,x as p,y as u,_ as f}from"./index-5daae5c6.js";import{u as h,a as g,S as y,T as _,C as b}from"./useCrudSchemas-e967c18a.js";import{E as j}from"./el-button-4a7b0ca2.js";import{E as x}from"./tree-0c97eafb.js";import"./el-input-d215ca9f.js";import{d as w,g as S}from"./index-33a79b05.js";import{u as v}from"./useEmitt-7829992f.js";import"./el-tooltip-4cf8d1ca.js";import"./el-popper-8a023621.js";import"./useForm-92649af8.js";import"./el-form-item-ada12a4e.js";import"./el-select-03ddc29b.js";import"./index-5f2b1643.js";const z=e({name:"TeamGroup"}),P=f(e({...z,setup(e){const{push:f}=a(),z=t({}),{tableRegister:P,tableState:C,tableMethods:E}=h({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=C,t=await S({page:c(e),limit:c(a),...c(z)});return console.log("res=",t),{list:t.items,total:t.meta.total}}}),{loading:I,dataList:T,total:k,currentPage:B,pageSize:F}=C,{getList:L}=E;v({name:"getTeamList",callback:e=>{"add"===e&&(B.value=1),L()}});const R=l([{field:"team_id",label:"Id",search:{hidden:!0}},{field:"team_name",label:"Team_Name",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"city",label:"city",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"coach_name",label:"Coach_name"},{field:"stadium_name",label:"Stadium_Name",search:{component:"Input"}},{field:"num_player",label:"num_player",search:{hidden:!0}},{field:"num_champion",label:"num_champion",search:{hidden:!0}},{field:"year_founded",label:"year_founded",search:{hidden:!0}},{field:"action",label:"options",width:"240px",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>s(n,null,[s("div",{class:"action-btns",style:"display: flex; flex-wrap: wrap"},[s(j,{type:"primary",onClick:()=>A(e[0].row,"delete")},{default:()=>[i("delete")]}),s(j,{type:"primary",onClick:()=>A(e[0].row,"edit")},{default:()=>[i("edit")]})])])}}}]),{allSchemas:U}=g(R),A=(e,a)=>{console.log("row=",e,a),"edit"===a?f(`/team/add?id=${e.team_id}`):"delete"===a?x.confirm("is deleted?","tips",{confirmButtonText:"ok",cancelButtonText:"cancel",type:"warning"}).then((async()=>{await w({team_id:e.team_id,type:"del"}).catch((()=>{}))&&(o.success("delete success"),L())})):"detail"===a&&f(`/team/add?id=${e.team_id}`)},G=e=>{z.value=e,L()};return(e,a)=>(d(),r(c(b),null,{default:m((()=>[s(c(y),{schema:c(U).searchSchema,onSearch:G},null,8,["schema"]),p(' <div class="mb-10px">\n      <ElButton type="primary" @click="creatAction">新增</ElButton>\n    </div> '),s(c(_),{pageSize:c(F),"onUpdate:pageSize":a[0]||(a[0]=e=>u(F)?F.value=e:null),currentPage:c(B),"onUpdate:currentPage":a[1]||(a[1]=e=>u(B)?B.value=e:null),columns:c(U).tableColumns,data:c(T),loading:c(I),pagination:{total:c(k)},onRegister:c(P)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/team/index.vue"]]);export{P as default};