/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{i as t,a as n}from"./maybe.js";import{c as r}from"./quantityUtils.js";import{y as e,z as i}from"./unitUtils.js";import{C as o,s as a,d as s}from"./vec3.js";import{projectVectorToVector as c}from"../geometry/projection.js";import{e as l}from"../geometry/SpatialReference.js";import{c as u}from"./measurementUtils2.js";var f;function m(t){return h(t,f.Direct)}function p(t){return h(t,f.Horizontal)}function h(t,e){const{hasZ:o,spatialReference:a}=t,s=u(a);let c=0;const l=i(s);if(n(l))return null;const m=e===f.Direct?x:Z;for(const r of t.paths){if(r.length<2)continue;const t=r.length-1;for(let e=0;e<t;++e){const t=r[e];v[0]=t[0],v[1]=t[1],v[2]=o?t[2]:0;const i=r[e+1];D[0]=i[0],D[1]=i[1],D[2]=o?i[2]:0;const s=m(v,D,a);if(n(s))return null;c+=s.value}}return r(c,l)}function z(t,n){const{spatialReference:r}=t;return l(r,n.spatialReference)?(v[0]=t.x,v[1]=t.y,v[2]=t.hasZ?t.z:0,D[0]=n.x,D[1]=n.y,D[2]=n.hasZ?n.z:0,x(v,D,r)):null}function y(t,n){const{spatialReference:r}=t;return l(r,n.spatialReference)?(v[0]=t.x,v[1]=t.y,v[2]=t.hasZ?t.z:0,D[0]=n.x,D[1]=n.y,D[2]=n.hasZ?n.z:0,Z(v,D,r)):null}function R(t,n){const{spatialReference:r}=t;return l(r,n.spatialReference)?(v[0]=t.x,v[1]=t.y,v[2]=t.hasZ?t.z:0,D[0]=n.x,D[1]=n.y,D[2]=n.hasZ?n.z:0,d(v,D,r)):null}function j(n){return v[0]=n.x,v[1]=n.y,v[2]=n.hasZ?n.z:0,function(n,i){const o=e(i);return t(o)?r(n[2],o):null}(v,n.spatialReference)}function x(n,e,i){const o=g(n,e,i,f.Direct);return t(o)?r(o.direct,o.unit):null}function Z(n,e,i){const o=g(n,e,i,f.Horizontal);return t(o)?r(o.horizontal,o.unit):null}function d(n,e,i){const o=g(n,e,i,f.Vertical);return t(o)?r(o.verticalSigned,o.unit):null}function g(t,r,e,s){const l=u(e),m=i(l);if(n(m))return null;const p=r[2]-t[2];if(s===f.Vertical)return{verticalSigned:p,unit:m};if(!c(t,e,H,l)||!c(r,e,V,l))return null;if(s===f.Direct)return{direct:o(V,H),unit:m};if(a(b,t[0],t[1],r[2]),!c(b,e,b,l))return null;const h=o(b,V);return s===f.Horizontal?{horizontal:h,unit:m}:{direct:o(V,H),horizontal:h,vertical:Math.abs(p),unit:m}}!function(t){t[t.Direct=0]="Direct",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"}(f||(f={}));const v=s(),D=s(),H=s(),V=s(),b=s();export{z as a,p as b,m as c,y as d,x as e,Z as f,j as g,d as h,R as v};