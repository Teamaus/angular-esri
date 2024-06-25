// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","./maybe","./RandomLCG"],function(h,m,y){function q(a){return a}function r(a,d=q){if(a&&0!==a.length){var b=a[0],c=d(b);for(let e=1;e<a.length;++e){const f=a[e],g=Number(d(f));g>c&&(c=g,b=f)}return b}}function t(a,d,b,c){c=c||u;var e=Math.max(0,c.last-10);for(let f=e;f<b;++f)if(a[f]===d)return c.last=f;b=Math.min(e,b);for(e=0;e<b;++e)if(a[e]===d)return c.last=e;return-1}function v(a){return a?(w.seed=a,()=>w.getFloat()):Math.random}const z=!!Array.prototype.fill;let x=function(){this.last=
0};const u=new x,k=new Set,w=new y;h.PositionHint=x;h.binaryFindClosest=function(a,d,b){if(a&&0!==a.length){var c=a.length-1,e=a[0];if(d<=b(e))return e;e=a[c];if(d>=b(e))return e;var f=0;e=0;for(var g=c;f<g;){e=f+Math.floor((g-f)/2);const n=a[e],p=b(n);if(p===d)return n;if(d<p){if(0<e){g=a[e-1];var l=b(g);if(d>l)return d-l>=p-d?n:g}g=e}else{if(e<c&&(f=a[e+1],l=b(f),d<l))return d-p>=l-d?f:n;f=e+1}}return a[e]}};h.binaryIndexOf=function(a,d,b){const c=a.length;let e=0;for(var f=c-1;e<f;){const g=e+
Math.floor((f-e)/2);d>a[g]?e=g+1:f=g}f=a[e];return b?d>=a[c-1]?-1:f===d?e:e-1:f===d?e:-1};h.constant=function(a,d){if(z)return Array(a).fill(d);const b=Array(a);for(let c=0;c<a;c++)b[c]=d;return b};h.difference=function(a,d,b){let c,e;b?(c=d.filter(f=>!a.some(g=>b(g,f))),e=a.filter(f=>!d.some(g=>b(g,f)))):(c=d.filter(f=>!a.includes(f)),e=a.filter(f=>!d.includes(f)));return{added:c,removed:e}};h.equals=function(a,d,b){if(m.isNone(a)&&m.isNone(d))return!0;if(m.isNone(a)||m.isNone(d)||a.length!==d.length)return!1;
if(b)for(let c=0;c<a.length;c++){if(!b(a[c],d[c]))return!1}else for(b=0;b<a.length;b++)if(a[b]!==d[b])return!1;return!0};h.first=function(a){if(a)return 0<a.length?a[0]:void 0};h.groupToMap=function(a,d){const b=new Map,c=a.length;for(let e=0;e<c;e++){const f=a[e],g=d(f,e,a),l=b.get(g);l?l.push(f):b.set(g,[f])}return b};h.indexOf=t;h.intersect=function(a,d,b){return a&&d?b?a.filter(c=>-1<d.findIndex(e=>b(c,e))):a.filter(c=>d.includes(c)):[]};h.isArrayLike=function(a){return a&&"number"===typeof a.length};
h.last=function(a){if(a){var d=a.length;return 0<d?a[d-1]:void 0}};h.max=r;h.min=function(a,d=q){return r(a,b=>-d(b))};h.pickRandom=function(a,d,b){const c=a.length;if(d>=c)return a.slice(0);b=v(b);const e=new Set,f=[];for(;f.length<d;){const g=Math.floor(b()*c);e.has(g)||(e.add(g),f.push(a[g]))}return f};h.range=function(a,d){void 0===d&&(d=a,a=0);const b=Array(d-a);for(let c=a;c<d;c++)b[c-a]=c;return b};h.remove=function(a,d){const b=a.indexOf(d);return-1!==b?(a.splice(b,1),d):null};h.removeUnordered=
function(a,d,b,c){const e=null==b?a.length:b;c=t(a,d,e,c);if(-1!==c)return a[c]=a[e-1],null==b&&a.pop(),d};h.removeUnorderedMany=function(a,d,b=a.length,c=d.length,e,f){if(0===c||0===b)return b;k.clear();for(let g=0;g<c;++g)k.add(d[g]);e=e||u;d=Math.max(0,e.last-10);for(c=d;c<b;++c)if(k.has(a[c])&&(f&&f.push(a[c]),k.delete(a[c]),a[c]=a[b-1],--b,--c,0===k.size||0===b))return k.clear(),b;for(c=0;c<d;++c)if(k.has(a[c])&&(f&&f.push(a[c]),k.delete(a[c]),a[c]=a[b-1],--b,--c,0===k.size||0===b))return k.clear(),
b;k.clear();return b};h.shuffle=function(a,d){d=v(d);for(let b=a.length-1;0<b;b--){const c=Math.floor(d()*(b+1)),e=a[b];a[b]=a[c];a[c]=e}return a};h.splitIntoChunks=function(a,d){const b=a.length;if(0===b)return[];const c=[];for(let e=0;e<b;e+=d)c.push(a.slice(e,e+d));return c};h.unique=function(a,d){return d?a.filter((b,c,e)=>e.findIndex(d.bind(null,b))===c):a.filter((b,c,e)=>e.indexOf(b)===c)};h.update=function(a,d){let b=a.length!==d.length;b&&(a.length=d.length);for(let c=0;c<d.length;++c)a[c]!==
d[c]&&(a[c]=d[c],b=!0);return b};Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});