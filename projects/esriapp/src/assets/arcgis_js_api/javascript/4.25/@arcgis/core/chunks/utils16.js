/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import e from"../Color.js";import"../symbols.js";import"./object.js";import t from"../core/Error.js";import{i as n}from"./maybe.js";import{f as s,c as o}from"./number.js";import{r as i}from"./numberUtils.js";import{a}from"./PointSizeSplatAlgorithm.js";import{a as r}from"./scaleUtils.js";import l from"../renderers/visualVariables/SizeVariable.js";import{s as m}from"./spatialStatistics.js";import{v as u}from"./binningUtils.js";import{b as c,f,c as d,g as p}from"./layerUtils2.js";import y from"../smartMapping/statistics/classBreaks.js";import w from"../smartMapping/statistics/summaryStatistics.js";import{d as h,e as b,f as g}from"./utils11.js";import v from"../symbols/edges/SketchEdges3D.js";import j from"../symbols/edges/SolidEdges3D.js";import{getBackgroundColorTheme as D}from"../views/support/colorUtils.js";import S from"../symbols/MeshSymbol3D.js";import z from"../symbols/FillSymbol3DLayer.js";import x from"../symbols/SimpleFillSymbol.js";import V from"../symbols/PolygonSymbol3D.js";import U from"../symbols/ExtrudeSymbol3DLayer.js";import k from"../symbols/SimpleLineSymbol.js";import L from"../symbols/LineSymbol3D.js";import T from"../symbols/LineSymbol3DLayer.js";import B from"../symbols/PathSymbol3DLayer.js";import I from"../symbols/SimpleMarkerSymbol.js";import F from"../symbols/PointSymbol3D.js";import M from"../symbols/IconSymbol3DLayer.js";import A from"../symbols/ObjectSymbol3DLayer.js";const C=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];async function E(e){const{layerAdapter:s,...o}=await async function(e){const{view:s}=e;if(!(e&&s&&e.layer))throw new t("outline:missing-parameters","'view' and 'layer' parameters are required");e.forBinning&&u(e,"outline");const{layer:o,...i}=e,a=e.forBinning?c:f,r=d(o,a,e.forBinning),l={layerAdapter:r,...i};if(!r)throw new t("outline:invalid-parameters","'layer' must be one of these types: "+p(a).join(", "));await s.when();const m=n(l.signal)?{signal:l.signal}:null;if(await r.load(m),"polygon"!==r.geometryType)throw new t("outline:not-supported",`outline is not supported for geometryType: ${r.geometryType}`);return l}(e),i=await s.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...o});if(!i?.length)throw new t("outline:insufficient-info","No features are available to calculate statistics");const a=await m({features:i,geometryType:s.geometryType});if(!("avgSize"in a)||!a.avgSize)throw new t("outline:insufficient-info","average polygon size is invalid");return function(e,t){const n=e.avgSize,s=r(1,t.spatialReference),o=C.map((e=>({size:e.width,value:Math.round(n/e.size*s)})));return o.sort(((e,t)=>e.value-t.value)),{visualVariables:[new l({target:"outline",valueExpression:"$view.scale",stops:o})],opacity:.25}}(a,o.view)}const P=/^(\d+(\.\d+)?)\s*(%)$/i,R=[0,0,0,.4],q=["hours","minutes","seconds"],Y=[].concat(h.light).concat(h.dark);function $(e,t,n){if("string"==typeof e){const t=n.getField(e);if(t&&"date"===t.type)return t.alias||t.name}else if("number"==typeof e||e instanceof Date){const n=q.includes(t)?"short-date-short-time":"short-date";return s(e,o(n))}return e}function N(e,n){return new t(e,n)}function W(e,t,n){return e+t>0&&0>e-t&&n<0?0:e}function G(e,t,n,s,o=!0){const i="90-10"===n&&t?{min:t.classBreakInfos[0].maxValue,max:t.classBreakInfos[t.classBreakInfos.length-1].minValue,avg:null,stddev:null}:e,{avg:a,stddev:r,min:l,max:m}=i,u=O(i,s,o);let c=u?u[0]:l,f=u?u[1]:m;return u?{minDataValue:c,maxDataValue:f,defaultValuesUsed:!0}:("above"===n?c=W(a,r,l):"below"===n&&(f=W(a,r,l)),{minDataValue:c,maxDataValue:f,defaultValuesUsed:!1})}function O(e,t,n){let s,o;const i=function(e){let t,n,s=e&&e.statistics;if(s||(s={}),null==s.min)if(e.isDate){const e=H();t=e[0],n=e[1]}else t=0,n=100;else if(s.min===s.max)if(e.isDate){const e=H(s.min);t=e[0],n=e[1]}else s.min<0?(t=2*s.min,n=0):s.min>0?(t=0,n=2*s.min):(t=0,n=100);return{min:null!=t?t:s.min,max:null!=n?n:s.max,defaultValuesUsed:null!=t||null!=n}}({statistics:e,isDate:t});return i.defaultValuesUsed?(s=i.min,o=i.max):!n||null!=e.avg&&e.stddev||(s=e.min,o=e.max),null!=s?[s,o]:null}function H(e){const t=("number"==typeof e?new Date(e):new Date).getUTCFullYear();let n=Date.UTC(t,0,1,12,0,0,0),s=Date.UTC(t,11,31,12,0,0,0);return"number"==typeof e&&(e<n&&(n=e),e>s&&(s=e)),[n,s]}function J(t,n){const s=[],o=t.length;for(let i=0;i<n;i++)s.push(new e(t[i%o]));return s}function K(e,t,n,s=!0){const{minDataValue:o,maxDataValue:i,defaultValuesUsed:a}=e;return a||"above"===n||"below"===n||"90-10"===n?Z(o,i,5):_(t,s)}function Q(e){const{avg:t,stddev:n,min:s,max:o}=e;if(null==t||null==n)return Z(s,o,5);const a=W(t,n,s),r=o-a,l=a-s,m=Math.max(r,l);return i([a-m,a-m/2,a,m/2+a,a+m],{strictBounds:!0})}function X(e,t){const{min:n,max:s}=t,[o,a,r,l,m]=e,u=null!=n&&o<n,c=null!=s&&m>s;if(null==n||null==s||!u&&!c)return e;const f=u?n:o,d=c?s:m;return i([f,u?f+(r-f)/2:a,r,c?r+(d-r)/2:l,d],{strictBounds:!0})}function Z(e,t,n){const s=(t-e)/(n-1),o=[e];for(let t=1;t<=n-2;t++)o.push(e+t*s);return o.push(t),i(o,{strictBounds:!0})}function _(e,t=!0){let n=e.avg,s=n-e.stddev,o=n+e.stddev;s<e.min&&(s=e.min),o>e.max&&(o=e.max),t&&(n=s+(o-s)/2);let a=i([s,o],{strictBounds:!0});return s=a[0],o=a[1],a=[s,s+(n-s)/2,n,n+(o-n)/2,o],i(a,{strictBounds:!0})}function ee(e,t,n){switch(t){case"point":case"multipoint":return n?"noDataSize"in e?e.noDataSize:null:"size"in e?e.size:null;case"polyline":return n?"noDataWidth"in e?e.noDataWidth:null:"width"in e?e.width:null;case"polygon":return"size"in e?e.size:null;default:return}}function te(e,t,n){switch(t){case"point":case"multipoint":case"polygon":{if(!("outline"in e))return null;const t={color:e.outline.color,width:e.outline.width};if(null!=n&&t.color){const e=t.color.clone();e.a=n,t.color=e}return t}default:return}}function ne(e,t){const{type:n,size:s,color:o,outline:i}=t;let a;switch(e){case"point":case"multipoint":if("2d"===n)a=new I({color:o,size:s,outline:{color:i.color,width:i.width}});else if("3d-flat"===n)a=new F({symbolLayers:[new M({size:s,resource:{primitive:"circle"},material:{color:o},outline:{color:i.color,size:i.width}})]});else if(n.includes("3d-volumetric")){const e="3d-volumetric-uniform"===n,i=new A({height:s,resource:{primitive:e?"sphere":"cylinder"},material:{color:o}});e||(i.width=t.widthAndDepth,i.depth=t.widthAndDepth),a=new F({symbolLayers:[i]})}break;case"polyline":"2d"===n?a=new k({color:o,width:s}):"3d-flat"===n?a=new L({symbolLayers:[new T({size:s,material:{color:o}})]}):"3d-volumetric"===n&&(a=new L({symbolLayers:[new B({width:"number"==typeof s?s:parseFloat(s),height:"number"==typeof s?s:parseFloat(s),material:{color:o}})]}));break;case"polygon":"2d"===n?a=new x({color:o,outline:{color:i.color,width:i.width}}):"3d-flat"===n?a=new V({symbolLayers:[new z({material:{color:o},outline:{color:i.color,size:i.width}})]}):"3d-volumetric"===n&&(a=new V({symbolLayers:[new U({size:s,material:{color:o}})]}));break;case"mesh":{const e=t.meshInfo&&t.meshInfo.colorMixMode,n=t.meshInfo&&t.meshInfo.edgesType;a=new S({symbolLayers:[new z({material:{color:o,colorMixMode:e||null},edges:"solid"===n?new j({color:R}):"sketch"===n?new v({color:R}):null})]});break}}return a}function se(e,t,n){const s=function(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}({layer:e,fields:t});if(s.length)return N(n,"Unknown fields: "+s.join(", ")+". You can only use fields defined in the layer schema");const o=function(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsRenderer}))}({layer:e,fields:t});return o.length?N(n,"Unsupported fields: "+o.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}async function oe(e,t){const n={layer:e.layer,view:e.view,signal:e.signal},[s,o]=await Promise.all([y(e),t?E(n):null]),i=O({min:s.minValue,max:s.maxValue,avg:null,stddev:null},!1,!1);return{result:i?await y({...e,classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:i[0],maxValue:i[1],normalizationTotal:i[0]+i[1]}):s,defaultValuesUsed:!!i,outlineResult:o}}function ie(e){return w(e)}function ae(e,t){let{minSize:n,maxSize:s}=e;return"height"===t&&(n=((s-n)/2+n)/4.6,s*=2),{minSize:n,maxSize:s}}function re(e){return P.test(e)}function le(e){const t=e.match(P),n=Number(t[1]);if("%"===t[3])return new a({scaleFactor:n/100})}function me(e,t,n,s){e.startTime=t instanceof Date?t.getTime():t,e.endTime=n instanceof Date?n.getTime():n,e.units=s,e.field="string"==typeof t?t:"string"==typeof n?n:null}async function ue(e,t){let s=null,o=null;if(!e&&!t)return{basemapId:s,basemapTheme:o};if(!e&&t&&(e=t&&t.map?.basemap),e&&(s=b(e,Y,!1),s)){const e=g(s);n(e)&&(o=e)}return s||"2d"!==t?.type||(o=await D(t),n(o)&&(s="dark"===o?"dark-gray":"gray")),{basemapId:s,basemapTheme:o}}export{K as a,J as b,N as c,ue as d,ie as e,oe as f,G as g,le as h,$ as i,re as j,O as k,Z as l,_ as m,ne as n,E as o,ee as p,te as q,ae as r,Q as s,X as t,me as u,se as v};
