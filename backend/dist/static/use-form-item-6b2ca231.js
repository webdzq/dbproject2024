import{f as e,b as a,c as o}from"./use-form-common-props-594ab9f4.js";import{aB as n,r as t,G as d,a8 as l,V as s,bk as u,cf as r}from"./index-d5304777.js";const m=()=>({form:n(e,void 0),formItem:n(a,void 0)}),i=(e,{formItemContext:a,disableIdGeneration:n,disableIdManagement:m})=>{n||(n=t(!1)),m||(m=t(!1));const i=t();let v;const I=d((()=>{var o;return!!(!e.label&&a&&a.inputIds&&(null==(o=a.inputIds)?void 0:o.length)<=1)}));return l((()=>{v=s([u(e,"id"),n],(([e,n])=>{const t=null!=e?e:n?void 0:o().value;t!==i.value&&((null==a?void 0:a.removeInputId)&&(i.value&&a.removeInputId(i.value),(null==m?void 0:m.value)||n||!t||a.addInputId(t)),i.value=t)}),{immediate:!0})})),r((()=>{v&&v(),(null==a?void 0:a.removeInputId)&&i.value&&a.removeInputId(i.value)})),{isLabeledByFormItem:I,inputId:i}};export{i as a,m as u};