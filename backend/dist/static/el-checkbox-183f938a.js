import{ce as e,X as a,cf as n,cg as t,bY as l,ch as o,ci as r,bS as i,cj as u,ck as s,bZ as c,cl as d,c1 as v,bT as b,c2 as f,cm as m,cn as h,bW as p,co as g,bR as x,c7 as k,cp as y,bQ as L,bX as C,cq as _,cr as w,ak as B,al as S,aZ as E,am as j,$ as I,b7 as F,aA as O,G as z,b4 as V,aH as A,V as D,aJ as N,a6 as $,r as T,aS as G,aP as R,bD as M,d as H,bf as P,H as U,o as W,i as K,w as X,f as Y,n as Z,a as q,L as J,c as Q,z as ee,cs as ae,O as ne,F as te,x as le,t as oe,P as re,ad as ie,B as ue,a8 as se,A as ce,Y as de,aI as ve,bs as be,S as fe,bK as me}from"./index-191c25dc.js";import{U as he}from"./event-5568c9d8.js";import{u as pe,a as ge}from"./use-form-common-props-01089bff.js";import{u as xe,a as ke}from"./use-form-item-9493112b.js";var ye=/\s/;var Le=/^\s+/;function Ce(e){return e?e.slice(0,function(e){for(var a=e.length;a--&&ye.test(e.charAt(a)););return a}(e)+1).replace(Le,""):e}var _e=NaN,we=/^[-+]0x[0-9a-f]+$/i,Be=/^0b[01]+$/i,Se=/^0o[0-7]+$/i,Ee=parseInt;function je(n){if("number"==typeof n)return n;if(e(n))return _e;if(a(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=a(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=Ce(n);var l=Be.test(n);return l||Se.test(n)?Ee(n.slice(2),l?2:8):we.test(n)?_e:+n}function Ie(e,a){return n(t(e,a,l),e+"")}function Fe(e){var a=-1,n=null==e?0:e.length;for(this.__data__=new o;++a<n;)this.add(e[a])}function Oe(e,a){for(var n=-1,t=null==e?0:e.length;++n<t;)if(a(e[n],n,e))return!0;return!1}function ze(e,a){return e.has(a)}Fe.prototype.add=Fe.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Fe.prototype.has=function(e){return this.__data__.has(e)};var Ve=1,Ae=2;function De(e,a,n,t,l,o){var r=n&Ve,i=e.length,u=a.length;if(i!=u&&!(r&&u>i))return!1;var s=o.get(e),c=o.get(a);if(s&&c)return s==a&&c==e;var d=-1,v=!0,b=n&Ae?new Fe:void 0;for(o.set(e,a),o.set(a,e);++d<i;){var f=e[d],m=a[d];if(t)var h=r?t(m,f,d,a,e,o):t(f,m,d,e,a,o);if(void 0!==h){if(h)continue;v=!1;break}if(b){if(!Oe(a,(function(e,a){if(!ze(b,a)&&(f===e||l(f,e,n,t,o)))return b.push(a)}))){v=!1;break}}else if(f!==m&&!l(f,m,n,t,o)){v=!1;break}}return o.delete(e),o.delete(a),v}function Ne(e){var a=-1,n=Array(e.size);return e.forEach((function(e,t){n[++a]=[t,e]})),n}function $e(e){var a=-1,n=Array(e.size);return e.forEach((function(e){n[++a]=e})),n}var Te=1,Ge=2,Re="[object Boolean]",Me="[object Date]",He="[object Error]",Pe="[object Map]",Ue="[object Number]",We="[object RegExp]",Ke="[object Set]",Xe="[object String]",Ye="[object Symbol]",Ze="[object ArrayBuffer]",qe="[object DataView]",Je=r?r.prototype:void 0,Qe=Je?Je.valueOf:void 0;var ea=1,aa=Object.prototype.hasOwnProperty;var na=1,ta="[object Arguments]",la="[object Array]",oa="[object Object]",ra=Object.prototype.hasOwnProperty;function ia(e,a,n,t,l,o){var r=c(e),m=c(a),h=r?la:d(e),p=m?la:d(a),g=(h=h==ta?oa:h)==oa,x=(p=p==ta?oa:p)==oa,k=h==p;if(k&&v(e)){if(!v(a))return!1;r=!0,g=!1}if(k&&!g)return o||(o=new b),r||f(e)?De(e,a,n,t,l,o):function(e,a,n,t,l,o,r){switch(n){case qe:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case Ze:return!(e.byteLength!=a.byteLength||!o(new u(e),new u(a)));case Re:case Me:case Ue:return i(+e,+a);case He:return e.name==a.name&&e.message==a.message;case We:case Xe:return e==a+"";case Pe:var s=Ne;case Ke:var c=t&Te;if(s||(s=$e),e.size!=a.size&&!c)return!1;var d=r.get(e);if(d)return d==a;t|=Ge,r.set(e,a);var v=De(s(e),s(a),t,l,o,r);return r.delete(e),v;case Ye:if(Qe)return Qe.call(e)==Qe.call(a)}return!1}(e,a,h,n,t,l,o);if(!(n&na)){var y=g&&ra.call(e,"__wrapped__"),L=x&&ra.call(a,"__wrapped__");if(y||L){var C=y?e.value():e,_=L?a.value():a;return o||(o=new b),l(C,_,n,t,o)}}return!!k&&(o||(o=new b),function(e,a,n,t,l,o){var r=n&ea,i=s(e),u=i.length;if(u!=s(a).length&&!r)return!1;for(var c=u;c--;){var d=i[c];if(!(r?d in a:aa.call(a,d)))return!1}var v=o.get(e),b=o.get(a);if(v&&b)return v==a&&b==e;var f=!0;o.set(e,a),o.set(a,e);for(var m=r;++c<u;){var h=e[d=i[c]],p=a[d];if(t)var g=r?t(p,h,d,a,e,o):t(h,p,d,e,a,o);if(!(void 0===g?h===p||l(h,p,n,t,o):g)){f=!1;break}m||(m="constructor"==d)}if(f&&!m){var x=e.constructor,k=a.constructor;x==k||!("constructor"in e)||!("constructor"in a)||"function"==typeof x&&x instanceof x&&"function"==typeof k&&k instanceof k||(f=!1)}return o.delete(e),o.delete(a),f}(e,a,n,t,l,o))}function ua(e,a,n,t,l){return e===a||(null==e||null==a||!m(e)&&!m(a)?e!=e&&a!=a:ia(e,a,n,t,ua,l))}function sa(e,a){return null!=e&&a in Object(e)}function ca(e,a){return null!=e&&function(e,a,n){for(var t=-1,l=(a=h(a,e)).length,o=!1;++t<l;){var r=p(a[t]);if(!(o=null!=e&&n(e,r)))break;e=e[r]}return o||++t!=l?o:!!(l=null==e?0:e.length)&&g(l)&&x(r,l)&&(c(e)||k(e))}(e,a,sa)}const da=function(){return y.Date.now()};var va=Math.max,ba=Math.min;function fa(e,n,t){var l,o,r,i,u,s,c=0,d=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(a){var n=l,t=o;return l=o=void 0,c=a,i=e.apply(t,n)}function m(e){var a=e-s;return void 0===s||a>=n||a<0||v&&e-c>=r}function h(){var e=da();if(m(e))return p(e);u=setTimeout(h,function(e){var a=n-(e-s);return v?ba(a,r-(e-c)):a}(e))}function p(e){return u=void 0,b&&l?f(e):(l=o=void 0,i)}function g(){var e=da(),a=m(e);if(l=arguments,o=this,s=e,a){if(void 0===u)return function(e){return c=e,u=setTimeout(h,n),d?f(e):i}(s);if(v)return clearTimeout(u),u=setTimeout(h,n),f(s)}return void 0===u&&(u=setTimeout(h,n)),i}return n=je(n)||0,a(t)&&(d=!!t.leading,r=(v="maxWait"in t)?va(je(t.maxWait)||0,n):r,b="trailing"in t?!!t.trailing:b),g.cancel=function(){void 0!==u&&clearTimeout(u),c=0,l=s=o=u=void 0},g.flush=function(){return void 0===u?i:p(da())},g}function ma(e){return m(e)&&L(e)}function ha(e,a){return ua(e,a)}function pa(e,a){return function(e,a,n){for(var t=-1,l=a.length,o={};++t<l;){var r=a[t],i=C(e,r);n(i,r)&&_(o,h(r,e),i)}return o}(e,a,(function(a,n){return ca(e,n)}))}const ga=w((function(e,a){return null==e?{}:pa(e,a)})),xa=new Map;let ka;function ya(e,a){let n=[];return Array.isArray(a.arg)?n=a.arg:S(a.arg)&&n.push(a.arg),function(t,l){const o=a.instance.popperRef,r=t.target,i=null==l?void 0:l.target,u=!a||!a.instance,s=!r||!i,c=e.contains(r)||e.contains(i),d=e===r,v=n.length&&n.some((e=>null==e?void 0:e.contains(r)))||n.length&&n.includes(i),b=o&&(o.contains(r)||o.contains(i));u||s||c||d||v||b||a.value(t,l)}}B&&(document.addEventListener("mousedown",(e=>ka=e)),document.addEventListener("mouseup",(e=>{for(const a of xa.values())for(const{documentHandler:n}of a)n(e,ka)})));const La={beforeMount(e,a){xa.has(e)||xa.set(e,[]),xa.get(e).push({documentHandler:ya(e,a),bindingFn:a.value})},updated(e,a){xa.has(e)||xa.set(e,[]);const n=xa.get(e),t=n.findIndex((e=>e.bindingFn===a.oldValue)),l={documentHandler:ya(e,a),bindingFn:a.value};t>=0?n.splice(t,1,l):n.push(l)},unmounted(e){xa.delete(e)}},Ca={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:E,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},_a={[he]:e=>j(e)||I(e)||F(e),change:e=>j(e)||I(e)||F(e)},wa=Symbol("checkboxGroupContextKey"),Ba=(e,{model:a,isLimitExceeded:n,hasOwnLabel:t,isDisabled:l,isLabeledByFormItem:o})=>{const r=O(wa,void 0),{formItem:i}=xe(),{emit:u}=A();function s(a){var n,t;return a===e.trueLabel||!0===a?null==(n=e.trueLabel)||n:null!=(t=e.falseLabel)&&t}const c=z((()=>(null==r?void 0:r.validateEvent)||e.validateEvent));return D((()=>e.modelValue),(()=>{c.value&&(null==i||i.validate("change").catch((e=>N(e))))})),{handleChange:function(e){if(n.value)return;const a=e.target;u("change",s(a.checked),e)},onClickRoot:async function(r){if(!n.value&&!t.value&&!l.value&&o.value){r.composedPath().some((e=>"LABEL"===e.tagName))||(a.value=s([!1,e.falseLabel].includes(a.value)),await $(),function(e,a){u("change",s(e),a)}(a.value,r))}}}},Sa=(e,a)=>{const{formItem:n}=xe(),{model:t,isGroup:l,isLimitExceeded:o}=(e=>{const a=T(!1),{emit:n}=A(),t=O(wa,void 0),l=z((()=>!1===V(t))),o=T(!1);return{model:z({get(){var n,o;return l.value?null==(n=null==t?void 0:t.modelValue)?void 0:n.value:null!=(o=e.modelValue)?o:a.value},set(e){var r,i;l.value&&G(e)?(o.value=void 0!==(null==(r=null==t?void 0:t.max)?void 0:r.value)&&e.length>(null==t?void 0:t.max.value),!1===o.value&&(null==(i=null==t?void 0:t.changeEvent)||i.call(t,e))):(n(he,e),a.value=e)}}),isGroup:l,isLimitExceeded:o}})(e),{isFocused:r,isChecked:i,checkboxButtonSize:u,checkboxSize:s,hasOwnLabel:c}=((e,a,{model:n})=>{const t=O(wa,void 0),l=T(!1),o=z((()=>{const a=n.value;return F(a)?a:G(a)?R(e.label)?a.map(M).some((a=>ha(a,e.label))):a.map(M).includes(e.label):null!=a?a===e.trueLabel:!!a}));return{checkboxButtonSize:ge(z((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value})),{prop:!0}),isChecked:o,isFocused:l,checkboxSize:ge(z((()=>{var e;return null==(e=null==t?void 0:t.size)?void 0:e.value}))),hasOwnLabel:z((()=>!(!a.default&&!e.label)))}})(e,a,{model:t}),{isDisabled:d}=(({model:e,isChecked:a})=>{const n=O(wa,void 0),t=z((()=>{var t,l;const o=null==(t=null==n?void 0:n.max)?void 0:t.value,r=null==(l=null==n?void 0:n.min)?void 0:l.value;return!V(o)&&e.value.length>=o&&!a.value||!V(r)&&e.value.length<=r&&a.value}));return{isDisabled:pe(z((()=>(null==n?void 0:n.disabled.value)||t.value))),isLimitDisabled:t}})({model:t,isChecked:i}),{inputId:v,isLabeledByFormItem:b}=ke(e,{formItemContext:n,disableIdGeneration:c,disableIdManagement:l}),{handleChange:f,onClickRoot:m}=Ba(e,{model:t,isLimitExceeded:o,hasOwnLabel:c,isDisabled:d,isLabeledByFormItem:b});return((e,{model:a})=>{e.checked&&(G(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:t}),{inputId:v,isLabeledByFormItem:b,isChecked:i,isDisabled:d,isFocused:r,checkboxButtonSize:u,checkboxSize:s,hasOwnLabel:c,model:t,handleChange:f,onClickRoot:m}},Ea=["tabindex","role","aria-checked"],ja=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Ia=["id","aria-hidden","disabled","value","name","tabindex"],Fa=H({name:"ElCheckbox"});var Oa=ue(H({...Fa,props:Ca,emits:_a,setup(e){const a=e,n=P(),{inputId:t,isLabeledByFormItem:l,isChecked:o,isDisabled:r,isFocused:i,checkboxSize:u,hasOwnLabel:s,model:c,handleChange:d,onClickRoot:v}=Sa(a,n),b=U("checkbox"),f=z((()=>[b.b(),b.m(u.value),b.is("disabled",r.value),b.is("bordered",a.border),b.is("checked",o.value)])),m=z((()=>[b.e("input"),b.is("disabled",r.value),b.is("checked",o.value),b.is("indeterminate",a.indeterminate),b.is("focus",i.value)]));return(e,a)=>(W(),K(ie(!q(s)&&q(l)?"span":"label"),{class:Z(q(f)),"aria-controls":e.indeterminate?e.controls:null,onClick:q(v)},{default:X((()=>[Y("span",{class:Z(q(m)),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[e.trueLabel||e.falseLabel?J((W(),Q("input",{key:0,id:q(t),"onUpdate:modelValue":a[0]||(a[0]=e=>ee(c)?c.value=e:null),class:Z(q(b).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:q(r),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>q(d)&&q(d)(...e)),onFocus:a[2]||(a[2]=e=>i.value=!0),onBlur:a[3]||(a[3]=e=>i.value=!1)},null,42,ja)),[[ae,q(c)]]):J((W(),Q("input",{key:1,id:q(t),"onUpdate:modelValue":a[4]||(a[4]=e=>ee(c)?c.value=e:null),class:Z(q(b).e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:q(r),value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...e)=>q(d)&&q(d)(...e)),onFocus:a[6]||(a[6]=e=>i.value=!0),onBlur:a[7]||(a[7]=e=>i.value=!1)},null,42,Ia)),[[ae,q(c)]]),Y("span",{class:Z(q(b).e("inner"))},null,2)],10,Ea),q(s)?(W(),Q("span",{key:0,class:Z(q(b).e("label"))},[ne(e.$slots,"default"),e.$slots.default?re("v-if",!0):(W(),Q(te,{key:0},[le(oe(e.label),1)],64))],2)):re("v-if",!0)])),_:3},8,["class","aria-controls","onClick"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const za=["name","tabindex","disabled","true-value","false-value"],Va=["name","tabindex","disabled","value"],Aa=H({name:"ElCheckboxButton"});var Da=ue(H({...Aa,props:Ca,emits:_a,setup(e){const a=e,n=P(),{isFocused:t,isChecked:l,isDisabled:o,checkboxButtonSize:r,model:i,handleChange:u}=Sa(a,n),s=O(wa,void 0),c=U("checkbox"),d=z((()=>{var e,a,n,t;const l=null!=(a=null==(e=null==s?void 0:s.fill)?void 0:e.value)?a:"";return{backgroundColor:l,borderColor:l,color:null!=(t=null==(n=null==s?void 0:s.textColor)?void 0:n.value)?t:"",boxShadow:l?`-1px 0 0 0 ${l}`:void 0}})),v=z((()=>[c.b("button"),c.bm("button",r.value),c.is("disabled",o.value),c.is("checked",l.value),c.is("focus",t.value)]));return(e,a)=>(W(),Q("label",{class:Z(q(v))},[e.trueLabel||e.falseLabel?J((W(),Q("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=e=>ee(i)?i.value=e:null),class:Z(q(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:q(o),"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...e)=>q(u)&&q(u)(...e)),onFocus:a[2]||(a[2]=e=>t.value=!0),onBlur:a[3]||(a[3]=e=>t.value=!1)},null,42,za)),[[ae,q(i)]]):J((W(),Q("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=e=>ee(i)?i.value=e:null),class:Z(q(c).be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:q(o),value:e.label,onChange:a[5]||(a[5]=(...e)=>q(u)&&q(u)(...e)),onFocus:a[6]||(a[6]=e=>t.value=!0),onBlur:a[7]||(a[7]=e=>t.value=!1)},null,42,Va)),[[ae,q(i)]]),e.$slots.default||e.label?(W(),Q("span",{key:2,class:Z(q(c).be("button","inner")),style:se(q(l)?q(d):void 0)},[ne(e.$slots,"default",{},(()=>[le(oe(e.label),1)]))],6)):re("v-if",!0)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Na=ce({modelValue:{type:de(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:E,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),$a={[he]:e=>G(e),change:e=>G(e)},Ta=H({name:"ElCheckboxGroup"});var Ga=ue(H({...Ta,props:Na,emits:$a,setup(e,{emit:a}){const n=e,t=U("checkbox"),{formItem:l}=xe(),{inputId:o,isLabeledByFormItem:r}=ke(n,{formItemContext:l}),i=async e=>{a(he,e),await $(),a("change",e)},u=z({get:()=>n.modelValue,set(e){i(e)}});return ve(wa,{...ga(be(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:u,changeEvent:i}),D((()=>n.modelValue),(()=>{n.validateEvent&&(null==l||l.validate("change").catch((e=>N(e))))})),(e,a)=>{var n;return W(),K(ie(e.tag),{id:q(o),class:Z(q(t).b("group")),role:"group","aria-label":q(r)?void 0:e.label||"checkbox-group","aria-labelledby":q(r)?null==(n=q(l))?void 0:n.labelId:void 0},{default:X((()=>[ne(e.$slots,"default")])),_:3},8,["id","class","aria-label","aria-labelledby"])}}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const Ra=fe(Oa,{CheckboxButton:Da,CheckboxGroup:Ga}),Ma=me(Da),Ha=me(Ga);export{La as C,Ra as E,Fe as S,ma as a,Ie as b,ze as c,fa as d,Ha as e,Ma as f,ua as g,ca as h,ha as i,ga as p,$e as s};
