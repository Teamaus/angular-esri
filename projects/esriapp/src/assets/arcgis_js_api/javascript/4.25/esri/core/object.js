// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./lang"],function(h,n){function k(c,d,b){for(const a of c){if(null==b)return;if(!(a in b))if(d)b[a]={};else return;b=b[a]}return b}function l(c,d,b){return d?Object.keys(d).reduce((a,f)=>{let g=a[f],e=d[f];if(g===e)return a;if(void 0===g)return a[f]=n.clone(e),a;if(Array.isArray(e)||Array.isArray(a))g=g?Array.isArray(g)?a[f]=g.concat():a[f]=[g]:a[f]=[],e&&(Array.isArray(e)||(e=[e]),b?e.forEach(m=>{g.includes(m)||g.push(m)}):a[f]=e.concat());else if(e&&"object"===typeof e)a[f]=l(g,
e,b);else if(!a.hasOwnProperty(f)||d.hasOwnProperty(f))a[f]=e;return a},c||{}):c}h.deepMerge=function(c,d,b=!1){return l(c,d,b)};h.getDeepValue=function(c,d){if(null!=d)return d[c]||k(c.split("."),!1,d)};h.setDeepValue=function(c,d,b){const a=c.split(".");c=a.pop();(b=k(a,!0,b))&&c&&(b[c]=d)};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});