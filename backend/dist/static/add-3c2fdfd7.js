import{d as e,u as a,q as s,r as l,z as t,A as i,o as d,i as o,w as u,e as r,a as m,s as n,B as c,x as p,v as _,_ as f}from"./index-5daae5c6.js";import{C as g}from"./ContentDetailWrap-75ea7bde.js";import{u as v}from"./useEmitt-7829992f.js";import{g as b,u as y,a as z}from"./index-945b81cb.js";import{E as h,a as j}from"./el-form-item-ada12a4e.js";import{E as w}from"./el-button-4a7b0ca2.js";import{E as V}from"./el-input-d215ca9f.js";import"./index-5f2b1643.js";const q=f(e({__name:"add",setup(e){const{push:f,go:q}=a();v();const k=s({stadium_name:[{required:!0,message:"stadium name is required",trigger:"blur"}],location:[{required:!0,message:"location name is required",trigger:"blur"}],std_size:[{required:!0,message:"std_size are required",trigger:"blur"}]}),x=l(),{query:C}=t(),E=l(!1),F=l(!1),U=s({stadium_name:"",location:"",std_size:""});C.id&&(async()=>{F.value=!0;const e=await b({stadium_id:C.id});if(console.log("res_data",e),e){let a=null==e?void 0:e.items[0];Object.assign(U,a),F.value=!1}})();return(e,a)=>{const s=i("loading");return d(),o(m(g),{title:m(C).id?"edit":"add",onBack:a[6]||(a[6]=e=>m(f)("/stadium/list"))},{header:u((()=>[r(m(w),{onClick:a[0]||(a[0]=e=>m(q)(-1))},{default:u((()=>[n("Go")])),_:1})])),default:u((()=>[c((d(),o(m(h),{ref_key:"ruleFormRef",ref:x,model:U,rules:k,"label-width":"120px",class:"demo-ruleForm",size:"default","status-icon":""},{default:u((()=>[r(m(j),{label:"Stadium Name",prop:"stadium_name"},{default:u((()=>[r(m(V),{modelValue:U.stadium_name,"onUpdate:modelValue":a[1]||(a[1]=e=>U.stadium_name=e),class:"width-190",placeholder:"place input",disabled:!!m(C).id},null,8,["modelValue","disabled"])])),_:1}),r(m(j),{label:"city",prop:"location"},{default:u((()=>[r(m(V),{modelValue:U.location,"onUpdate:modelValue":a[2]||(a[2]=e=>U.location=e),class:"width-190",placeholder:"place input year"},null,8,["modelValue"])])),_:1}),r(m(j),{label:"std_size",prop:"std_size"},{default:u((()=>[r(m(V),{modelValue:U.std_size,"onUpdate:modelValue":a[3]||(a[3]=e=>U.std_size=e),class:"width-190",placeholder:"place iput"},null,8,["modelValue"])])),_:1}),r(m(j),null,{default:u((()=>[r(m(w),{type:"primary",onClick:a[4]||(a[4]=e=>(async e=>{e&&await e.validate((async(e,a)=>{if(e){console.log("ruleForm=",U),E.value=!0;const e=Object.assign({},U);let a;if(C.id){const e={stadium_id:U.stadium_id,stadium_name:U.stadium_name,location:U.location,std_size:U.std_size};a=await y(e).catch((()=>{})).finally((()=>{E.value=!1}))}else a=await z(e).catch((()=>{})).finally((()=>{E.value=!1}));a&&(_.success(C.id?"update success":"save success"),f("/stadium/list"))}else console.log("error submit!",a)}))})(x.value))},{default:u((()=>[n("Save")])),_:1}),m(C).id?p("v-if",!0):(d(),o(m(w),{key:0,onClick:a[5]||(a[5]=e=>{var a;(a=x.value)&&a.resetFields()})},{default:u((()=>[n("Reset")])),_:1}))])),_:1})])),_:1},8,["model","rules"])),[[s,F.value]])])),_:1},8,["title"])}}}),[["__file","/Users/zyb-dong/iit/cs425/dbproject/frontend/src/views/stadium/add.vue"]]);export{q as default};