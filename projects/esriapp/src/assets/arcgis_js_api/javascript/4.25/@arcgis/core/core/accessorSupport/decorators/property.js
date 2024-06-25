/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{L as t}from"../../../chunks/Logger.js";import{b as r,a as n,i as e,c as s,d as o,f as i,g as a,h as c,j as u,e as p}from"../../../chunks/ensureType.js";import{g as f}from"../../../chunks/get.js";import{g as l,m}from"../../../chunks/metadata.js";import g from"../../Error.js";import{h as y}from"../../../chunks/object.js";import"../../../config.js";import"../../lang.js";import"../../../chunks/maybe.js";import"../../../chunks/string.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";function d(t,r,n){if(t&&r)if("object"==typeof r)for(const n of Object.getOwnPropertyNames(r))d(t,n,r[n]);else{if(r.includes(".")){const e=r.split("."),s=e.splice(e.length-1,1)[0];return void d(f(t,e),s,n)}const e=t.__accessor__;null!=e&&function(t,r){if(y("esri-unknown-property-errors")&&!function(t,r){return null!=r.metadatas[t]}(t,r))throw new g("set:unknown-property",function(t,r){return"setting unknown property '"+t+"' on instance of "+r.host.declaredClass}(t,r))}(r,e),t[r]=n}}function h(g={}){return(y,h)=>{if(y===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${y.name}.${h}. Accessor does not support static properties.`);const j=Object.getOwnPropertyDescriptor(y,h),w=l(y,h);j&&(j.get||j.set?(w.get=j.get||w.get,w.set=j.set||w.set):"value"in j&&("value"in g&&t.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${h}" on "${y.constructor.name}" already defined in the metadata`,g),w.value=g.value=j.value)),null!=g.readOnly&&(w.readOnly=g.readOnly);const v=g.aliasOf;if(v){const t="string"==typeof v?v:v.source,r="string"==typeof v?null:!0===v.overridable;let n;w.dependsOn=[t],w.get=function(){let r=f(this,t);if("function"==typeof r){n||(n=t.split(".").slice(0,-1).join("."));const e=f(this,n);e&&(r=r.bind(e))}return r},w.readOnly||(w.set=r?function(t){this._override(h,t)}:function(r){d(this,t,r)})}const O=g.type,b=g.types;w.cast||(O?w.cast=function(t){let r=0,n=t;if(e(t))return s(t);for(;Array.isArray(n)&&1===n.length&&"string"!=typeof n[0]&&"number"!=typeof n[0];)n=n[0],r++;const f=n;if(o(f))return 0===r?i(f):a(i(f),r);if(1===r)return c(f);if(r>1)return u(f,r);const l=t;return l.from?l.from:p(l)}(O):b&&(Array.isArray(b)?w.cast=r(n(b[0])):w.cast=n(b))),m(w,g),g.range&&(w.cast=k(w.cast,g.range))}}function j(t,r,n){const e=l(t,n);e.json||(e.json={});let s=e.json;return void 0!==r&&(s.origins||(s.origins={}),s.origins[r]||(s.origins[r]={}),s=s.origins[r]),s}function k(t,r){return n=>{let e=+t(n);return null!=r.step&&(e=Math.round(e/r.step)*r.step),null!=r.min&&(e=Math.max(r.min,e)),null!=r.max&&(e=Math.min(r.max,e)),e}}export{k as ensureRange,h as property,j as propertyJSONMeta,d as s};
