import{d as t,H as e,o as a,i as o,w as l,O as s,M as d,cQ as n,a as i,h as p,B as r}from"./index-191c25dc.js";const g=t({name:"ElCollapseTransition"});var m=r(t({...g,setup(t){const r=e("collapse-transition"),g=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},m={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){g(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){g(t)},leaveCancelled(t){g(t)}};return(t,e)=>(a(),o(p,d({name:i(r).b()},n(m)),{default:l((()=>[s(t.$slots,"default")])),_:3},16,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);m.install=t=>{t.component(m.name,m)};const y=m,f=y;export{f as E,y as _};
