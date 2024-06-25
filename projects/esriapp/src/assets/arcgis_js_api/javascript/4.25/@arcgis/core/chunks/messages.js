/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{createDeferred as e}from"../core/promiseUtils.js";import{b as n,g as s}from"./locale.js";const r=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,o={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function i(t){return o[t]??!1}const a=[],c=new Map;function d(t){for(const e of c.keys())f(t.pattern,e)&&c.delete(e)}function l(t){return a.includes(t)||(d(t),a.unshift(t)),{remove(){const e=a.indexOf(t);e>-1&&(a.splice(e,1),d(t))}}}async function u(e){const n=s();c.has(e)||c.set(e,async function(e,n){const s=[];for(const t of a)if(f(t.pattern,e))try{return await t.fetchMessageBundle(e,n)}catch(t){s.push(t)}if(s.length)throw new t("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:s});throw new t("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,n));const r=c.get(e);return r&&await _.add(r),r}function h(t){if(!r.test(t))return null;const e=r.exec(t);if(null===e)return null;const[,n,s]=e,o=n+(s?"-"+s.toUpperCase():"");return i(o)?o:i(n)?n:null}function f(t,e){return"string"==typeof t?e.startsWith(t):t.test(e)}n((()=>{c.clear()}));const _=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(t){return this._increase(),t.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=e())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}};export{u as f,h as n,l as r};