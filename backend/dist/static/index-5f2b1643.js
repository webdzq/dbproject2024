import{cN as e,cO as t}from"./index-5daae5c6.js";const{defaultHeaders:s}=t,a=t=>{const{url:a,method:o,params:r,data:d,headersType:p,responseType:l}=t;return e.request({url:a,method:o,params:r,data:d,responseType:l,headers:{"Content-Type":p||s}})},o={get:e=>a({method:"get",...e}),post:e=>a({method:"post",...e}),delete:e=>a({method:"delete",...e}),put:e=>a({method:"put",...e}),cancelRequest:t=>e.cancelRequest(t),cancelAllRequest:()=>e.cancelAllRequest()};export{o as r};