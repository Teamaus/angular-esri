/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../request.js";import{p as t,a as r}from"../chunks/utils4.js";import"../geometry.js";import{e as o}from"../chunks/utils5.js";import n from"../geometry/Polygon.js";import{fromJSON as i,getJsonType as a}from"../geometry/support/jsonUtils.js";export{c as cut,s as simplify}from"../chunks/simplify.js";import{c as m,g as f,l as y,o as g,r as j,t as l}from"../chunks/trimExtend.js";export{c as conversionTypeKebabDict,u as units}from"../chunks/trimExtend.js";import h from"./support/GeneralizeParameters.js";import d from"./support/LengthsParameters.js";import S from"./support/OffsetParameters.js";export{p as project}from"../chunks/project.js";import O from"./support/RelationParameters.js";import J from"./support/TrimExtendParameters.js";import N from"../geometry/Polyline.js";import"../config.js";import"../chunks/object.js";import"../core/lang.js";import"../chunks/maybe.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../chunks/Logger.js";import"../chunks/string.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"../geometry/Extent.js";import"../chunks/tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../chunks/extentUtils.js";import"./support/ProjectParameters.js";async function k(s,o,n){const i=t(s),a={...i.query,f:"json",...o.toJSON()},c=r(a,n);return e(i.path+"/areasAndLengths",c).then((e=>e.data))}async function R(s,i,a,c){const p=i[0].spatialReference,m=t(s),f={...m.query,f:"json",sr:JSON.stringify(p.toJSON()),polygons:JSON.stringify(o(i).geometries),polylines:JSON.stringify(o(a).geometries)},u=r(f,c);return e(m.path+"/autoComplete",u).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new n({spatialReference:p,rings:e})))))}async function q(s,o,i){const a=t(s),c={...a.query,f:"json",...o.toJSON()},p=o.outSpatialReference||o.geometries[0].spatialReference,m=r(c,i);return e(a.path+"/buffer",m).then((e=>(e.data.geometries||[]).map((({rings:e})=>new n({spatialReference:p,rings:e})))))}async function P(s,n,a){const c=n[0].spatialReference,p=t(s),m={...p.query,f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(o(n))},f=r(m,a);return e(p.path+"/convexHull",f).then((({data:e})=>i(e.geometry).set({spatialReference:c})))}async function b(s,o,n){const a=o.geometries?.[0].spatialReference,c=t(s),p={...c.query,f:"json",...o.toJSON()},m=r(p,n);return e(c.path+"/densify",m).then((({data:e})=>(e.geometries||[]).map((e=>i(e).set({spatialReference:a})))))}async function x(r,s,n,c){const p=s[0].spatialReference,m=t(r);let f={query:{...m.query,f:"json",sr:JSON.stringify(p.toJSON()),geometries:JSON.stringify(o(s)),geometry:JSON.stringify({geometryType:a(n),geometry:n.toJSON()})}};return c&&(f={...c,...f}),e(m.path+"/difference",f).then((({data:e})=>(e.geometries||[]).map((e=>i(e).set({spatialReference:p})))))}async function T(s,o,n){const i=t(s),a={...i.query,f:"json",...o.toJSON()},c=r(a,n);return e(i.path+"/distance",c).then((({data:e})=>e&&e.distance))}async function v(s,o,n){const i={};null!=o.sr&&"object"==typeof o.sr?i.sr=o.sr.wkid||JSON.stringify(o.sr):i.sr=o.sr,i.strings=JSON.stringify(o.strings);const a=o.conversionType||"mgrs";i.conversionType=m.toJSON(a),i.conversionMode=o.conversionMode;const c=t(s),p={...c.query,f:"json",...i},f=r(p,n);return e(c.path+"/fromGeoCoordinateString",f).then((({data:e})=>e.coordinates))}async function w(s,o,n){const a=(o=h.from(o)).toJSON(),c=f(o),p=t(s),m={...p.query,f:"json",...c},u=a.geometries[0].spatialReference,y=r(m,n);return e(p.path+"/generalize",y).then((({data:e})=>(e.geometries||[]).map((e=>i(e).set({spatialReference:u})))))}async function U(s,n,c,p){const m=n[0].spatialReference,f=t(s),u={...f.query,f:"json",sr:JSON.stringify(m.toJSON()),geometries:JSON.stringify(o(n)),geometry:JSON.stringify({geometryType:a(c),geometry:c.toJSON()})},y=r(u,p);return e(f.path+"/intersect",y).then((({data:e})=>(e.geometries||[]).map((e=>i(e).set({spatialReference:m})))))}function E(s,o,n){const a=o.map((e=>e.toJSON())),c=o[0].spatialReference,p=t(s),m={...p.query,f:"json",sr:c.wkid?c.wkid:JSON.stringify(c.toJSON()),polygons:JSON.stringify(a)},f=r(m,n);return e(p.path+"/labelPoints",f).then((({data:e})=>(e.labelPoints||[]).map((e=>i(e).set({spatialReference:c})))))}async function M(s,o,n){o=d.from(o);const i=y(o),a=t(s),c={...a.query,f:"json",...i},p=r(c,n);return e(a.path+"/lengths",p).then((({data:e})=>e))}async function G(s,o,n){o=S.from(o);const a=g(o),c=t(s),p={...c.query,f:"json",...a},m=o.geometries?.[0].spatialReference,f=r(p,n);return e(c.path+"/offset",f).then((({data:e})=>(e.geometries||[]).map((e=>i(e).set({spatialReference:m})))))}async function z(s,o,n){o=O.from(o);const i=j(o),a=t(s),c={...a.query,f:"json",...i},p=r(c,n);return e(a.path+"/relation",p).then((({data:e})=>e.relations))}async function A(s,o,n,c){const p=o.spatialReference,m=t(s),f={...m.query,f:"json",sr:JSON.stringify(p.toJSON()),target:JSON.stringify({geometryType:a(o),geometry:o.toJSON()}),reshaper:JSON.stringify(n.toJSON())},u=r(f,c);return e(m.path+"/reshape",u).then((({data:e})=>i(e.geometry).set({spatialReference:p})))}async function C(s,o,n){const i={};null!=o.sr&&"object"==typeof o.sr?i.sr=o.sr.wkid||JSON.stringify(o.sr):i.sr=o.sr,i.coordinates=JSON.stringify(o.coordinates);const a=o.conversionType||"mgrs";i.conversionType=m.toJSON(a),i.conversionMode=o.conversionMode,i.numOfDigits=o.numOfDigits,i.rounding=o.rounding,i.addSpaces=o.addSpaces;const c=t(s),p={...c.query,f:"json",...i},f=r(p,n);return e(c.path+"/toGeoCoordinateString",f).then((({data:e})=>e.strings))}async function D(s,o,n){o=J.from(o);const i=l(o),a=t(s),c={...a.query,f:"json",...i},p=o.sr,m=r(c,n);return e(a.path+"/trimExtend",m).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new N({spatialReference:p,paths:e})))))}async function L(s,n,a){const c=n[0].spatialReference,p=t(s),m={...p.query,f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(o(n))},f=r(m,a);return e(p.path+"/union",f).then((({data:e})=>i(e.geometry).set({spatialReference:c})))}export{k as areasAndLengths,R as autoComplete,q as buffer,P as convexHull,b as densify,x as difference,T as distance,v as fromGeoCoordinateString,w as generalize,U as intersect,E as labelPoints,M as lengths,G as offset,z as relation,A as reshape,C as toGeoCoordinateString,D as trimExtend,L as union};
