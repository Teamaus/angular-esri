/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import"../geometry.js";import e from"../request.js";import{getJsonType as t,fromJSON as r}from"../geometry/support/jsonUtils.js";import{p as s}from"./utils4.js";import{urlToObject as i}from"../core/urlUtils.js";import{e as o,d as n}from"./utils5.js";async function a(i,o,n,a){const m=s(i),f=o[0].spatialReference,p={...a,query:{...m.query,f:"json",sr:JSON.stringify(f),target:JSON.stringify({geometryType:t(o[0]),geometries:o}),cutter:JSON.stringify(n)}},u=await e(m.path+"/cut",p),{cutIndexes:y,geometries:c=[]}=u.data;return{cutIndexes:y,geometries:c.map((e=>{const t=r(e);return t.spatialReference=f,t}))}}async function m(r,s,a){const m="string"==typeof r?i(r):r,f=s[0].spatialReference,p=t(s[0]),u={...a,query:{...m.query,f:"json",sr:f.wkid?f.wkid:JSON.stringify(f),geometries:JSON.stringify(o(s))}},{data:y}=await e(m.path+"/simplify",u);return n(y.geometries,p,f)}export{a as c,m as s};