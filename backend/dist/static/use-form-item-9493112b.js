import{aA as e,r as a,G as o,a7 as n,V as t,bg as d,cb as l}from"./index-191c25dc.js";import{f as s,b as u,c as r}from"./use-form-common-props-01089bff.js";const m=()=>({form:e(s,void 0),formItem:e(u,void 0)}),i=(e,{formItemContext:s,disableIdGeneration:u,disableIdManagement:m})=>{u||(u=a(!1)),m||(m=a(!1));const i=a();let v;const I=o((()=>{var a;return!!(!e.label&&s&&s.inputIds&&(null==(a=s.inputIds)?void 0:a.length)<=1)}));return n((()=>{v=t([d(e,"id"),u],(([e,a])=>{const o=null!=e?e:a?void 0:r().value;o!==i.value&&((null==s?void 0:s.removeInputId)&&(i.value&&s.removeInputId(i.value),(null==m?void 0:m.value)||a||!o||s.addInputId(o)),i.value=o)}),{immediate:!0})})),l((()=>{v&&v(),(null==s?void 0:s.removeInputId)&&i.value&&s.removeInputId(i.value)})),{isLabeledByFormItem:I,inputId:i}};export{i as a,m as u};