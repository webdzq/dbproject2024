import{aV as t,aU as e,A as n,aB as r,d as s,H as a,G as i,o as u,c as o,f as c,O as l,n as f,a as h,i as d,w as $,e as m,D as p,N as g,C as y,P as v,a8 as M,h as D,B as S,S as k}from"./index-14c99acf.js";import{a as w}from"./use-form-common-props-d73423f8.js";var b={exports:{}};const _=t(b.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",s="second",a="minute",i="hour",u="day",o="week",c="month",l="quarter",f="year",h="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,c),a=n-s<0,i=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-s)/(a?s-i:i-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:u,D:h,h:i,m:a,s:s,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",M={};M[v]=p;var D=function(t){return t instanceof b},S=function t(e,n,r){var s;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();M[a]&&(s=a),n&&(M[a]=n,s=a);var i=e.split("-");if(!s&&i.length>1)return t(i[0])}else{var u=e.name;M[u]=e,s=u}return!r&&s&&(v=s),s||!r&&v},k=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},w=y;w.l=S,w.i=D,w.w=function(t,e){return k(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var s=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=k(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return k(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<k(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!w.u(e)||e,l=w.p(t),d=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?s:s.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,g=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case f:return r?d(1,0):d(31,11);case c:return r?d(1,p):d(0,p+1);case o:var v=this.$locale().weekStart||0,M=(m<v?m+7:m)-v;return d(r?g-M:g+(6-M),p);case u:case h:return $(y+"Hours",0);case i:return $(y+"Minutes",1);case a:return $(y+"Seconds",2);case s:return $(y+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=w.p(t),l="set"+(this.$u?"UTC":""),d=(n={},n[u]=l+"Date",n[h]=l+"Date",n[c]=l+"Month",n[f]=l+"FullYear",n[i]=l+"Hours",n[a]=l+"Minutes",n[s]=l+"Seconds",n[r]=l+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===f){var m=this.clone().set(h,1);m.$d[d]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(r,l){var h,d=this;r=Number(r);var $=w.p(l),m=function(t){var e=k(d);return w.w(e.date(e.date()+Math.round(t*r)),d)};if($===c)return this.set(c,this.$M+r);if($===f)return this.set(f,this.$y+r);if($===u)return m(1);if($===o)return m(7);var p=(h={},h[a]=e,h[i]=n,h[s]=t,h)[$]||1,g=this.$d.getTime()+r*p;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",s=w.z(this),a=this.$H,i=this.$m,u=this.$M,o=n.weekdays,c=n.months,l=n.meridiem,f=function(t,n,s,a){return t&&(t[n]||t(e,r))||s[n].slice(0,a)},h=function(t){return w.s(a%12||12,t,"0")},$=l||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return u+1;case"MM":return w.s(u+1,2,"0");case"MMM":return f(n.monthsShort,u,c,3);case"MMMM":return f(c,u);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,o,2);case"ddd":return f(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return $(a,i,!0);case"A":return $(a,i,!1);case"m":return String(i);case"mm":return w.s(i,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,h,d){var $,m=this,p=w.p(h),g=k(r),y=(g.utcOffset()-this.utcOffset())*e,v=this-g,M=function(){return w.m(m,g)};switch(p){case f:$=M()/12;break;case c:$=M();break;case l:$=M()/3;break;case o:$=(v-y)/6048e5;break;case u:$=(v-y)/864e5;break;case i:$=v/n;break;case a:$=v/e;break;case s:$=v/t;break;default:$=v}return d?$:w.a($)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return M[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),_=b.prototype;return k.prototype=_,[["$ms",r],["$s",s],["$m",a],["$H",i],["$W",u],["$M",c],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),k.extend=function(t,e){return t.$i||(t(e,b,k),t.$i=!0),k},k.locale=S,k.isDayjs=D,k.unix=function(t){return k(1e3*t)},k.en=M[v],k.Ls=M,k.p={},k}()),O=n({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:r,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),C={close:t=>t instanceof MouseEvent,click:t=>t instanceof MouseEvent},T=s({name:"ElTag"});const H=k(S(s({...T,props:O,emits:C,setup(t,{emit:e}){const n=t,r=w(),s=a("tag"),S=i((()=>{const{type:t,hit:e,effect:a,closable:i,round:u}=n;return[s.b(),s.is("closable",i),s.m(t),s.m(r.value),s.m(a),s.is("hit",e),s.is("round",u)]})),k=t=>{e("close",t)},b=t=>{e("click",t)};return(t,e)=>t.disableTransitions?(u(),o("span",{key:0,class:f(h(S)),style:M({backgroundColor:t.color}),onClick:b},[c("span",{class:f(h(s).e("content"))},[l(t.$slots,"default")],2),t.closable?(u(),d(h(y),{key:0,class:f(h(s).e("close")),onClick:g(k,["stop"])},{default:$((()=>[m(h(p))])),_:1},8,["class","onClick"])):v("v-if",!0)],6)):(u(),d(D,{key:1,name:`${h(s).namespace.value}-zoom-in-center`,appear:""},{default:$((()=>[c("span",{class:f(h(S)),style:M({backgroundColor:t.color}),onClick:b},[c("span",{class:f(h(s).e("content"))},[l(t.$slots,"default")],2),t.closable?(u(),d(h(y),{key:0,class:f(h(s).e("close")),onClick:g(k,["stop"])},{default:$((()=>[m(h(p))])),_:1},8,["class","onClick"])):v("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{H as E,_ as d,O as t};