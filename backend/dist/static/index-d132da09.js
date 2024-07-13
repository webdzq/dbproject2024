import{d as e,u as a,r as t,q as l,e as i,s,F as n,v as r,o,i as d,w as p,a as c,x as m,y as u,_ as h}from"./index-5daae5c6.js";import{u as f,a as y,S as g,T as b,C as _}from"./useCrudSchemas-e967c18a.js";import{E as j}from"./el-button-4a7b0ca2.js";import{E as w}from"./tree-0c97eafb.js";import"./el-input-d215ca9f.js";import{d as v,g as x}from"./index-80679fe0.js";import{u as P}from"./useEmitt-7829992f.js";import"./el-tooltip-4cf8d1ca.js";import"./el-popper-8a023621.js";import"./useForm-92649af8.js";import"./el-form-item-ada12a4e.js";import"./el-select-03ddc29b.js";import"./index-5f2b1643.js";const S=e({name:"PlayerGroup"}),I=h(e({...S,setup(e){const{push:h}=a(),S=t({}),{tableRegister:I,tableState:z,tableMethods:k}=f({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=z,t=await x({page:c(e),limit:c(a),...c(S)});return console.log("res=",t),{list:t.items,total:t.meta.total}}}),{loading:C,dataList:E,total:B,currentPage:F,pageSize:L}=z,{getList:R}=k;P({name:"getPlayerList",callback:e=>{"add"===e&&(F.value=1),R()}});const T=l([{field:"player_id",label:"Player Id",search:{hidden:!0}},{field:"name",label:"player name",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"team_name",label:"team name",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"country",label:"country",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"salary",label:"salary",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"age",label:"age"},{field:"jersey_number",label:"jersey number",search:{hidden:!0}},{field:"guard_position",label:"guard_position",search:{hidden:!0}},{field:"height",label:"height",search:{hidden:!0}},{field:"weight",label:"weight",search:{hidden:!0}},{field:"last_attended",label:"last_attended",search:{hidden:!0}},{field:"introduce",label:"introduce",search:{hidden:!0}},{field:"mvp_times",label:"mvp_times",search:{hidden:!0}},{field:"action",label:"options",width:"240px",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>i(n,null,[i("div",{class:"action-btns",style:"display: flex; flex-wrap: wrap"},[i(j,{type:"primary",onClick:()=>$(e[0].row,"delete")},{default:()=>[s("delete")]}),i(j,{type:"primary",onClick:()=>$(e[0].row,"edit")},{default:()=>[s("edit")]}),i(j,{type:"primary",onClick:()=>$(e[0].row,"detail")},{default:()=>[s("detail")]})])])}}}]),{allSchemas:U}=y(T),$=(e,a)=>{console.log("row=",e,a),"detail"===a?h(`/player/detail?id=${e.player_id}`):"edit"===a?h(`/player/add?id=${e.player_id}`):"delete"===a?w.confirm("is deleted?","tips",{confirmButtonText:"ok",cancelButtonText:"cancel",type:"warning"}).then((async()=>{await v({player_id:e.player_id,type:"del"}).catch((()=>{}))&&(r.success("delete success"),R())})):"detail"===a&&h(`/player/add?id=${e.player_id}`)},A=e=>{S.value=e,R()};return(e,a)=>(o(),d(c(_),null,{default:p((()=>[i(c(g),{schema:c(U).searchSchema,onSearch:A},null,8,["schema"]),m(' <div class="mb-10px">\n      <ElButton type="primary" @click="creatAction">新增</ElButton>\n    </div> '),i(c(b),{pageSize:c(L),"onUpdate:pageSize":a[0]||(a[0]=e=>u(L)?L.value=e:null),currentPage:c(F),"onUpdate:currentPage":a[1]||(a[1]=e=>u(F)?F.value=e:null),columns:c(U).tableColumns,data:c(E),loading:c(C),pagination:{total:c(B)},onRegister:c(I)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/player/index.vue"]]);export{I as default};
