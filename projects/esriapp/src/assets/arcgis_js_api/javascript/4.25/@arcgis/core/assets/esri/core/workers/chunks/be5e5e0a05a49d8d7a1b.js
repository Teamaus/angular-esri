"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3958,7258],{89219:(e,t,r)=>{r.d(t,{q:()=>o});const o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},4571:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>u,c:()=>d,d:()=>c});var o=r(71552),i=r(76506),n=r(89219),s=r(6941);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.d:"esriGeometryPolyline"===e?s.a:s.b}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function u(e,t){if((0,o.h)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const o=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new o}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.q,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},6941:(e,t,r)=>{r.d(t,{a:()=>n,b:()=>s,c:()=>a,d:()=>i,e:()=>l,f:()=>p,g:()=>u});const o=[252,146,31,255],i={type:"esriSMS",style:"esriSMSCircle",size:6,color:o,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},90995:(e,t,r)=>{r.d(t,{c:()=>C,g:()=>a,i:()=>v,v:()=>S});var o=r(60991),i=r(85674),n=r(14249);const s={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function a(e){return s[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*p(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function u(e){for(const t of e)if(t.length>2)return!0;return!1}function c(e){let t=0;for(let r=0;r<e.length;r++){const o=e[r],i=e[(r+1)%e.length];t+=o[0]*i[1]-i[0]*o[1]}return t<=0}function d(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function y(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return h(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const o of t.coordinates)h(e,o,r);return e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const o of t.coordinates){f(e,o[0],r);for(let t=1;t<o.length;t++)m(e,o[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return w(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const o=t.coordinates;f(e,o[0],r);for(let t=1;t<o.length;t++)m(e,o[t],r);return e}(e,t,r)}}function f(e,t,r){const o=d(t);c(o)?h(e,o,r):g(e,o,r)}function m(e,t,r){const o=d(t);c(o)?g(e,o,r):h(e,o,r)}function h(e,t,r){for(const o of t)w(e,o,r);e.lengths.push(t.length)}function g(e,t,r){for(let o=t.length-1;o>=0;o--)w(e,t[o],r);e.lengths.push(t.length)}function w(e,t,r){const[o,i,n]=t;e.coords.push(o,i),r.hasZ&&e.coords.push(n||0)}function b(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new o.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new o.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!i.test(r))throw new o.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function v(e,t={}){const r=[],o=new Set,i=new Set;let s,c=!1,d=null,y=!1,{geometryType:f=null}=t,m=!1;for(const t of l(e)){const{geometry:e,properties:l,id:h}=t;if((!e||(f||(f=a(e.type)),a(e.type)===f))&&(c||(c=u(p(e))),y||(y=null!=h,y&&(s=typeof h,d=Object.keys(l).filter((e=>l[e]===h)))),y&&null!=h&&(d.length>1?d=d.filter((e=>l[e]===h)):1===d.length&&(d=l[d[0]]===h?d:[])),!m&&l)){let e=!0;for(const t in l){if(o.has(t))continue;const s=l[t];if(null==s){e=!1,i.add(t);continue}const a=b(s);"unknown"!==a?(i.delete(t),o.add(t),r.push({name:(0,n.q6)(t),alias:t,type:a})):i.add(t)}m=e}}const h=(0,n.q6)(1===d?.length&&d[0]||null);if(h)for(const e of r)if(e.name===h&&(0,n.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:r,geometryType:f,hasZ:c,objectIdFieldName:h,objectIdFieldType:s,unknownFields:Array.from(i)}}function C(e,t){return Array.from(function*(e,t={}){const{geometryType:r,objectIdField:o}=t;for(const n of e){const{geometry:e,properties:s,id:l}=n;if(e&&a(e.type)!==r)continue;const p=s||{};let u=p[o]??null;o&&null!=l&&!p[o]&&(p[o]=u=l);const c=new i.O(e?y(new i.a,e,t):null,p,null,u);yield c}}(l(e),t))}},51637:(e,t,r)=>{r.d(t,{a:()=>v,b:()=>S,c:()=>g,d:()=>b,e:()=>C,f:()=>w,g:()=>F,h:()=>h,i:()=>T,q:()=>x}),r(74569);var o=r(82058),i=r(60991),n=r(92143),s=r(71252),a=r(60947),l=r(35132),p=r(40267),u=r(9006),c=r(90995),d=r(4571),y=r(1709),f=r(54732);const m=n.L.getLogger("esri.layers.graphics.sources.ogcfeature"),h="http://www.opengis.net/def/crs/",g=`${h}OGC/1.3/CRS84`;async function w(e,t,r={},n=5){const{links:l}=e,p=R(l,"items","application/geo+json")||R(l,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.a)(p))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:u}=await(0,o.default)(p.href,{signal:r.signal,query:{limit:n,...r.customParameters,token:r.apiKey},headers:{accept:"application/geo+json"}});await(0,c.v)(u);const h=(0,c.i)(u,{geometryType:t.geometryType}),g=t.fields||h.fields||[],w=null!=t.hasZ?t.hasZ:h.hasZ,b=h.geometryType,S=t.objectIdField||h.objectIdFieldName||"OBJECTID";let v=t.timeInfo;const C=g.find((({name:e})=>e===S));if(C)C.editable=!1,C.nullable=!1;else{if(!h.objectIdFieldType)throw new i.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");g.unshift({name:S,alias:S,type:"number"===h.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(S!==h.objectIdFieldName){const e=g.find((({name:e})=>e===h.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}g===h.fields&&h.unknownFields.length>0&&m.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:h.unknownFields}});for(const e of g){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new i.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!f.k.jsonValues.includes(e.type))throw new i.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(v){const e=new y.Z(g);if(v.startTimeField){const t=e.get(v.startTimeField);t?(v.startTimeField=t.name,t.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const t=e.get(v.endTimeField);t?(v.endTimeField=t.name,t.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const t=e.get(v.trackIdField);t?v.trackIdField=t.name:(v.trackIdField=null,m.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(m.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)}const F=b?(0,d.a)(b):null,x=function(e){const t=e.extent?.spatial;if(!t)return null;const r=t.bbox[0],o=4===r.length,i=r[0],n=r[1],s=o?void 0:r[2];return{xmin:i,ymin:n,xmax:o?r[2]:r[3],ymax:o?r[3]:r[4],zmin:s,zmax:o?void 0:r[5],spatialReference:a.Z.WGS84.toJSON()}}(e);return{drawingInfo:F,extent:x,geometryType:b,fields:g,hasZ:!!w,objectIdField:S,timeInfo:v}}async function b(e,t={}){const{links:r}=e,n=R(r,"data","application/json")||R(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,s.a)(n))throw new i.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,o.default)(n.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function S(e,t={}){const{links:r}=e,n=R(r,"conformance","application/json")||R(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,s.a)(n))throw new i.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,o.default)(n.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function v(e,t={}){const{apiKey:r,customParameters:i,signal:n}=t,{data:s}=await(0,o.default)(e,{signal:n,headers:{accept:"application/json"},query:{...i,token:r}});return s}async function C(e,t={}){const r="application/vnd.oai.openapi+json;version=3.0",i=R(e.links,"service-desc",r);if((0,s.a)(i))return m.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:n,customParameters:a,signal:l}=t,{data:p}=await(0,o.default)(i.href,{signal:l,headers:{accept:r},query:{...a,token:n}});return p}function F(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e)?.groups;if(!t)return null;const{authority:r,code:o}=t;switch(r.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return a.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return a.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(o,10);return Number.isNaN(e)?null:e}default:return null}}async function x(e,t,r){const o=await T(e,t,r);return(0,p.c)(o)}async function T(e,t,r){const{collection:n,layerDefinition:d,maxRecordCount:y,queryParameters:{apiKey:f,customParameters:m},spatialReference:h,supportedCrs:g}=e,{links:w}=n,b=R(w,"items","application/geo+json")||R(w,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.a)(b))throw new i.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:v,start:C,timeExtent:F,where:x}=t;if(t.objectIds)throw new i.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const T=a.Z.fromJSON(h),I=(0,s.e)(t.outSpatialReference,T),O=I.isWGS84?null:_(I,g),P=function(e,t){if(!function(e){return(0,s.i)(e)&&"extent"===e.type}(e))return null;const{spatialReference:r}=e;if(!r||r.isWGS84)return{bbox:j(e)};const o=_(r,t);return(0,s.i)(o)?{bbox:j(e),"bbox-crs":o}:r.isWebMercator?{bbox:j((0,l.iV)(e,a.Z.WGS84))}:null}(S,g),Z=function(e){if((0,s.a)(e))return null;const{start:t,end:r}=e;return`${(0,s.i)(t)?t.toISOString():".."}/${(0,s.i)(r)?r.toISOString():".."}`}(F),k=(M=x,(0,s.a)(M)||!M||"1=1"===M?null:M),D=v??(null!=C&&void 0!==C?10:y),{data:G}=await(0,o.default)(b.href,{...r,query:{...m,...P,crs:O,datetime:Z,query:k,limit:D,startindex:C,token:f},headers:{accept:"application/geo+json"}});var M;let E=!1;G.links&&(E=!!G.links.find((e=>"next"===e.rel))),!E&&Number.isInteger(G.numberMatched)&&Number.isInteger(G.numberReturned)&&(E=G.numberReturned<G.numberMatched);const{fields:q,geometryType:N,hasZ:A,objectIdField:L}=d,z=(0,c.c)(G,{geometryType:N,hasZ:A,objectIdField:L});if(!O&&I.isWebMercator)for(const e of z)if((0,s.i)(e.geometry)){const t=(0,p.a)(e.geometry,N,A,!1);t.spatialReference=a.Z.WGS84,e.geometry=(0,p.b)((0,l.iV)(t,I))}for(const e of z)e.objectId=e.attributes[L];const J=O||!O&&I.isWebMercator?I.toJSON():a.W,Q=new u.O;return Q.exceededTransferLimit=E,Q.features=z,Q.fields=q,Q.geometryType=N,Q.hasZ=A,Q.objectIdFieldName=L,Q.spatialReference=J,Q}function _(e,t){const{isWebMercator:r,wkid:o}=e;if(!o)return null;const i=r?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return i?`${h}${i}`:null}function j(e){if((0,s.a)(e))return"";const{xmin:t,ymin:r,xmax:o,ymax:i}=e;return`${t},${r},${o},${i}`}function R(e,t,r){return e.find((e=>e.rel===t&&e.type===r))||e.find((e=>e.rel===t&&!e.type))}},52228:(e,t,r)=>{var o,i;function n(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?o.Expression:e.field&&"string"==typeof e.field?o.Field:o.Unknown}function l(e,t){const r=t||a(e),n=e.valueUnit||"unknown";return r===o.Unknown?i.Constant:e.stops?i.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?i.ClampedLinear:"unknown"===n?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?i.Proportional:i.Additive:i.Identity:i.RealWorldSize}r.d(t,{I:()=>o,T:()=>i,a:()=>l,b:()=>s,g:()=>a,i:()=>n}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(o||(o={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(i||(i={}))},63958:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var o=r(29768),i=(r(74569),r(86748)),n=(r(55306),r(71206),r(51979),r(60698),r(53321),r(65684),r(86758),r(95310),r(20208)),s=r(54179),a=r(34250),l=(r(76506),r(91306),r(17533)),p=r(22781),u=r(41617),c=r(60991),d=r(81184),y=r(71252),f=r(51637),m=r(87258),h=r(60947),g=r(96994),w=r(80462),b=r(21471),S=r(9641),v=r(39275),C=r(89440),F=r(86861),x=r(39241),T=r(68219),_=r(6416),j=r(82377),R=r(67541),I=r(78303),O=r(97546),P=r(47346),Z=r(14249),k=r(77807),D=r(68653),G=r(31292),M=r(78893),E=r(21801);r(73796),r(12047),r(21972),r(60474),r(66396),r(86656),r(71552),r(92143),r(31450),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(97714),r(2906),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(32422),r(57251),r(66122),r(15324),r(75067),r(89914),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(60217),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(72836),r(29794),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(67477),r(78533),r(74653),r(91091),r(58943),r(33101),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(26822),r(51723),r(23243),r(51669),r(6090),r(3977),r(36741),r(11253),r(90319),r(38822),r(52228),r(74057),r(23761),r(48190),r(85557),r(53785),r(95587),r(94070),r(43022),r(16218),r(9075),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(9352),r(89241),r(91700),r(32037),r(90811),r(60045),r(68681),r(58085),r(93939),r(62407),r(90033),r(97807),r(238),r(68714),r(40267),r(90995),r(4571),r(89219),r(6941),r(1709),r(54732),r(9801),r(53523),r(42911),r(46826),r(45433),r(92200),r(65949),r(22465),r(65775),r(5777),r(6210),r(36231),r(93314),r(35197),r(69218),r(32925),r(27207),r(70846),r(67961),r(29395),r(94303),r(1557),r(47842),r(17298),r(50203),r(30439),r(14460),r(13322),r(13201),r(41864),r(56420),r(73173),r(74742),r(28239),r(59765),r(77361),r(61261),r(46495);let q=class extends d.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:o},layer:{apiKey:i,customParameters:n,effectiveMaxRecordCount:s}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:s,queryParameters:{apiKey:i,customParameters:n},spatialReference:r,supportedCrs:o}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>m.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){const r=this.getSource();return this.load(t).then((()=>(0,f.q)(r,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){const r=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){return e?.components?.parameters?.limit?.schema?.maximum??e?.components?.parameters?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??f.c,r=(0,f.g)(t);return(0,y.a)(r)?h.Z.WGS84:new h.Z({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",o=e.crs??[f.c],i=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs):o,n=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((e=>!n.test(e)))}async _loadOGCServices(e,t){const r=(0,y.i)(t)?t.signal:null,{apiKey:o,collectionId:i,customParameters:n,fields:s,geometryType:a,hasZ:l,objectIdField:u,timeInfo:d,url:m}=e,h={fields:s?.map((e=>e.toJSON())),geometryType:p.t.toJSON(a),hasZ:l,objectIdField:u,timeInfo:d?.toJSON()},g={apiKey:o,customParameters:n,signal:r},w=await(0,f.a)(m,g),[b,S]=await Promise.all([(0,f.b)(w,g),(0,f.d)(w,g)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const v=S.collections.find((e=>e.id===i));if(!v)throw new c.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,f.e)(w,g):null,F=await(0,f.f)(v,h,g),x=this._getMaxRecordCount(C),T=this._getCapabilities(F.hasZ,x),_=this._getStorageSpatialReference(v).toJSON(),j=this._getSupportedSpatialReferences(v,S),R=new RegExp(`^${f.h}`,"i"),I={};for(const e of j){const t=(0,f.g)(e);(0,y.i)(t)&&(I[t]||(I[t]=e.replace(R,"")))}this.featureDefinition={capabilities:T,collection:v,layerDefinition:F,spatialReference:_,supportedCrs:I}}};(0,o._)([(0,a.Cb)()],q.prototype,"featureDefinition",void 0),(0,o._)([(0,a.Cb)({constructOnly:!0})],q.prototype,"layer",void 0),(0,o._)([(0,a.Cb)()],q.prototype,"type",void 0),q=(0,o._)([(0,l.j)("esri.layers.graphics.sources.OGCFeatureSource")],q);const N=(0,P.d)();let A=class extends((0,g.V)((0,b.N)((0,v.M)((0,S.b)((0,w.h)((0,F.c)((0,j.n)((0,_.M)((0,C.O)((0,x.I)((0,T.Q)((0,s.M)(u.Z))))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new q({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,Z.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){return new G.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,o=!1;const i=t?.feature?.attributes,n=this.typeIdField&&i?.[this.typeIdField];return null!=n&&this.types&&(o=this.types.some((t=>t.id==n&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),o||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(G.Z.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,Z.YN)(this.renderer,this.fieldsIndex),(0,Z.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,o._)([(0,a.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],A.prototype,"capabilities",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],A.prototype,"collectionId",void 0),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"copyright",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],A.prototype,"defaultPopupTemplate",null),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"definitionExpression",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],A.prototype,"description",void 0),(0,o._)([(0,a.Cb)({type:String})],A.prototype,"displayField",void 0),(0,o._)([(0,a.Cb)({type:Number})],A.prototype,"effectiveMaxRecordCount",null),(0,o._)([(0,a.Cb)(R.e)],A.prototype,"elevationInfo",void 0),(0,o._)([(0,a.Cb)({type:[O.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],A.prototype,"fields",void 0),(0,o._)([(0,a.Cb)(N.fieldsIndex)],A.prototype,"fieldsIndex",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:E.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],A.prototype,"fullExtent",void 0),(0,o._)([(0,a.Cb)({type:p.f.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:p.f.read}}}}})],A.prototype,"geometryType",void 0),(0,o._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],A.prototype,"hasZ",void 0),(0,o._)([(0,a.Cb)({type:Boolean,readOnly:!0})],A.prototype,"isTable",null),(0,o._)([(0,a.Cb)({type:[k.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:D.r},write:!0}}}})],A.prototype,"labelingInfo",void 0),(0,o._)([(0,a.Cb)(R.l)],A.prototype,"labelsVisible",void 0),(0,o._)([(0,a.Cb)(R.a)],A.prototype,"legendEnabled",void 0),(0,o._)([(0,a.Cb)({type:Number})],A.prototype,"maxRecordCount",void 0),(0,o._)([(0,a.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],A.prototype,"objectIdField",void 0),(0,o._)([(0,a.Cb)({type:["OGCFeatureLayer"]})],A.prototype,"operationalLayerType",void 0),(0,o._)([(0,a.Cb)(R.p)],A.prototype,"popupEnabled",void 0),(0,o._)([(0,a.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],A.prototype,"popupTemplate",void 0),(0,o._)([(0,a.Cb)({types:n.r,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:n.w,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],A.prototype,"renderer",null),(0,o._)([(0,a.Cb)(R.s)],A.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,a.Cb)({readOnly:!0})],A.prototype,"source",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,type:h.Z,json:{origins:{service:{read:!0}}}})],A.prototype,"spatialReference",void 0),(0,o._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],A.prototype,"title",void 0),(0,o._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],A.prototype,"type",void 0),(0,o._)([(0,a.Cb)({type:String,readOnly:!0})],A.prototype,"typeIdField",void 0),(0,o._)([(0,a.Cb)({type:[I.Z]})],A.prototype,"types",void 0),(0,o._)([(0,a.Cb)(R.u)],A.prototype,"url",void 0),A=(0,o._)([(0,l.j)("esri.layers.OGCFeatureLayer")],A);const L=A},96994:(e,t,r)=>{r.d(t,{V:()=>s});var o=r(29768),i=r(34250),n=(r(76506),r(91306),r(17533));r(92143),r(31450),r(71552),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540);const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,o._)([(0,i.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,o._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},86861:(e,t,r)=>{r.d(t,{c:()=>m});var o,i=r(29768),n=r(71552),s=r(34250),a=(r(76506),r(91306),r(17533)),l=r(57251),p=r(12047);r(92143),r(31450),r(40642),r(60474),r(66396),r(86656),r(60991),r(6540),r(21972),r(91055),r(19657),r(6906),r(50406);const u=new l.J({asc:"ascending",desc:"descending"});let c=o=class extends p.wq{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new o({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),(0,i._)([(0,s.Cb)({type:u.apiValues,json:{read:u.read,write:u.write}})],c.prototype,"order",void 0),c=o=(0,i._)([(0,a.j)("esri.layers.support.OrderByInfo")],c);const d=c;function y(e,t,r){if(!e)return null;const o=e.find((e=>!!e.field));if(!o)return null;const i=new d;return i.read(o,r),[i]}function f(e,t,r,o){const i=e.find((e=>!!e.field));i&&(0,n.s)(r,[i.toJSON()],t)}const m=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,i._)([(0,s.Cb)({type:[d],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:y},write:{target:"layerDefinition.orderBy",writer:f}}})],t.prototype,"orderBy",void 0),t=(0,i._)([(0,a.j)("esri.layers.mixins.OrderedLayer")],t),t}},46495:(e,t,r)=>{r.d(t,{Z:()=>c});var o=r(29768),i=r(66122),n=r(57251),s=r(12047),a=r(34250),l=(r(76506),r(91306),r(17533));r(21972),r(60474),r(66396),r(86656),r(71552),r(92143),r(31450),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991);const p=new n.J({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,i.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,o._)([(0,a.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,o._)([(0,a.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,o._)([(0,l.j)("esri.layers.support.FeatureTemplate")],u);const c=u},78303:(e,t,r)=>{r.d(t,{Z:()=>y});var o=r(29768),i=r(66122),n=r(12047),s=r(34250),a=(r(76506),r(91306),r(97714)),l=r(17533),p=r(2906),u=r(9801),c=r(46495);r(21972),r(60474),r(66396),r(86656),r(71552),r(92143),r(31450),r(40642),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(53523),r(59465),r(57251),r(42911),r(46826),r(45433);let d=class extends((0,i.J)(n.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.f)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"id",void 0),(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,o._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"domains",void 0),(0,o._)([(0,a.r)("domains")],d.prototype,"readDomains",null),(0,o._)([(0,p.w)("domains")],d.prototype,"writeDomains",null),(0,o._)([(0,s.Cb)({type:[c.Z],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,o._)([(0,l.j)("esri.layers.support.FeatureType")],d);const y=d},87258:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var o,i=r(29768),n=r(74569),s=r(23761),a=r(57251),l=r(12047),p=r(76506),u=r(71252),c=r(34250),d=(r(91306),r(97714)),y=r(17533),f=r(2906),m=r(60947),h=r(32422),g=r(97546);r(21801),r(40642),r(71552),r(73796),r(91597),r(92143),r(31450),r(86787),r(86656),r(66396),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(86748),r(66122),r(21972),r(60474),r(91055),r(6540),r(19657),r(6906),r(50406),r(60991),r(15324),r(75067),r(89914),r(14249),r(60217),r(29107),r(30574),r(2157),r(25977),r(58076),r(98242),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(93603),r(15438),r(593),r(85699),r(55531),r(96055),r(47776),r(18033),r(6331),r(62048),r(56890),r(30493),r(4292),r(75626),r(72652),r(29641),r(70821),r(3296),r(34229),r(37029),r(96467),r(63571),r(30776),r(48027),r(54174),r(82426),r(72836),r(29794),r(63130),r(25696),r(98402),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(11799),r(48649),r(59877),r(9960),r(30823),r(53326),r(92482),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(88762),r(82058),r(81184),r(33101),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(36834),r(8487),r(17817),r(90814),r(15459),r(97189),r(61847),r(28212),r(16955),r(22401),r(48699),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(9801),r(53523),r(42911),r(46826),r(45433),r(54732);const w=new a.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let b=o=class extends l.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),o=[];for(let t=0;t<e.length;t++){const i=e[t],n=s.Z.fromJSON(i),a=i.geometry&&i.geometry.spatialReference;(0,u.i)(n.geometry)&&!a&&(n.geometry.spatialReference=r);const l=i.aggregateGeometries,p=n.aggregateGeometries;if(l&&(0,u.i)(p))for(const e in p){const t=p[e],o=l[e]?.spatialReference;(0,u.i)(t)&&!o&&(t.spatialReference=r)}o.push(n)}return o}writeGeometryType(e,t,r,o){if(e)return void w.write(e,t,r,o);const{features:i}=this;if(i)for(const e of i)if(e&&(0,u.i)(e.geometry))return void w.write(e.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,h.im)(e);return o&&!r&&t.spatialReference&&(o.spatialReference=m.Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,u.i)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new o(this.cloneProperties())}cloneProperties(){return(0,p.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,i]}=e,n=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((i-e)/r)));for(let e=0,t=n.length;e<t;e++)s?.((0,u.u)(n[e].geometry))||(n.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,i],scale:[n,s]}=r,a=this._getHydrationFunction(e,(e=>e*n+o),(e=>i-e*s));for(const{geometry:e}of t)(0,u.i)(e)&&a&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let o,i;const n=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=r(a[1]);e===o&&s===i||(n.push([e-o,s-i]),o=e,i=s)}else o=t(a[0]),i=r(a[1]),n.push([o,i])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,h.oU)(e)?e.rings:e.paths,i=[];for(let e=0,n=o.length;e<n;e++){const n=o[e],s=this._quantizePoints(n,t,r);s&&i.push(s)}return i.length>0?((0,h.oU)(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o&&o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,h.oU)(e)?e.rings:e.paths;let i,n;for(let e=0,s=o.length;e<s;e++){const s=o[e];for(let e=0,o=s.length;e<o;e++){const o=s[e];e>0?(i+=o[0],n+=o[1]):(i=o[0],n=o[1]),o[0]=t(i),o[1]=r(n)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let i,n;for(let e=0,s=o.length;e<s;e++){const s=o[e];e>0?(i+=s[0],n+=s[1]):(i=s[0],n=s[1]),s[0]=t(i),s[1]=r(n)}}:null}};(0,i._)([(0,c.Cb)({type:String,json:{write:!0}})],b.prototype,"displayFieldName",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"exceededTransferLimit",void 0),(0,i._)([(0,c.Cb)({type:[s.Z],json:{write:!0}})],b.prototype,"features",void 0),(0,i._)([(0,d.r)("features")],b.prototype,"readFeatures",null),(0,i._)([(0,c.Cb)({type:[g.Z],json:{write:!0}})],b.prototype,"fields",void 0),(0,i._)([(0,c.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],b.prototype,"geometryType",void 0),(0,i._)([(0,f.w)("geometryType")],b.prototype,"writeGeometryType",null),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasM",void 0),(0,i._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasZ",void 0),(0,i._)([(0,c.Cb)({types:n.qM,json:{write:!0}})],b.prototype,"queryGeometry",void 0),(0,i._)([(0,d.r)("queryGeometry")],b.prototype,"readQueryGeometry",null),(0,i._)([(0,c.Cb)({type:m.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,i._)([(0,f.w)("spatialReference")],b.prototype,"writeSpatialReference",null),(0,i._)([(0,c.Cb)({json:{write:!0}})],b.prototype,"transform",void 0),b=o=(0,i._)([(0,y.j)("esri.rest.support.FeatureSet")],b),b.prototype.toJSON.isDefaultToJSON=!0;const S=b}}]);