import{r as a}from"./index-a4774437.js";const d=d=>a.get({url:"/pad-admin-node/zips/getList",params:d}),e=d=>a.get({url:"/pad-admin-node/packages/getList",params:d}),s=d=>a.post({url:"/pad-admin-node/packages/add",data:d}),p=d=>a.get({url:"/pad-admin-node/packages/getDetailById",params:d}),t=d=>a.get({url:"/pad-admin-node/packages/versionDiffById",params:d}),r=d=>a.post({url:"/pad-admin-node/packages/update",data:d}),n=d=>a.post({url:"/pad-admin-node/packages/release",data:d}),o=d=>a.get({url:"/pad-admin-node/packages/getOperatorLogs",params:d}),g=d=>a.post({url:"/pad-admin-node/packages/offline",data:d});export{d as a,t as b,s as c,p as d,o as e,e as g,g as o,n as r,r as u};