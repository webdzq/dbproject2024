import{d as e,u as a,r as t,q as s,o as l,i as n,w as o,e as r,a as i,x as p,y as c,_ as m}from"./index-5daae5c6.js";import{u,a as d,S as g,T as f,C as h}from"./useCrudSchemas-e967c18a.js";import"./tree-0c97eafb.js";import"./el-button-4a7b0ca2.js";import"./el-input-d215ca9f.js";import{i as b}from"./index-80679fe0.js";import{u as y}from"./useEmitt-7829992f.js";import"./el-tooltip-4cf8d1ca.js";import"./el-popper-8a023621.js";import"./useForm-92649af8.js";import"./el-form-item-ada12a4e.js";import"./el-select-03ddc29b.js";import"./index-5f2b1643.js";const j=e({name:"PlayerSalaryGroup"}),S=m(e({...j,setup(e){a();const m=t({}),{tableRegister:j,tableState:S,tableMethods:v}=u({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=S,t=await b({page:i(e),limit:i(a),...i(m)});return console.log("res=",t),{list:t.items,total:t.meta.total}}}),{loading:_,dataList:P,total:x,currentPage:z,pageSize:I}=S,{getList:w}=v;y({name:"getPlayerSalaryList",callback:e=>{"add"===e&&(z.value=1),w()}});const E=s([{field:"name",label:"player name",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"mvp_get_count",label:"mvp_get_count",search:{hidden:!0}},{field:"age",label:"age",search:{hidden:!1}},{field:"country",label:"country",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"salary",label:"salary",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"jersey_number",label:"jersey number",search:{hidden:!0}},{field:"guard_position",label:"guard_position",search:{hidden:!0}}]),{allSchemas:B}=d(E),C=e=>{m.value=e,w()};return(e,a)=>(l(),n(i(h),null,{default:o((()=>[r(i(g),{schema:i(B).searchSchema,onSearch:C},null,8,["schema"]),p(' <div class="mb-10px">\n      <ElButton type="primary" @click="creatAction">新增</ElButton>\n    </div> '),r(i(f),{pageSize:i(I),"onUpdate:pageSize":a[0]||(a[0]=e=>c(I)?I.value=e:null),currentPage:i(z),"onUpdate:currentPage":a[1]||(a[1]=e=>c(z)?z.value=e:null),columns:i(B).tableColumns,data:i(P),loading:i(_),pagination:{total:i(x)},onRegister:i(j)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/player/mvp.vue"]]);export{S as default};