"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9214],{94751:(e,t,s)=>{s.d(t,{c:()=>a,g:()=>c,o:()=>o,u:()=>u});var r=s(92896),n=s(60947),i=s(32422);const a={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new r.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator}),minus180Line:new r.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:n.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new r.Z({paths:[[[180,-180],[180,180]]],spatialReference:n.Z.WGS84}),minus180Line:new r.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:n.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function u(e,t){const s=c(e);for(const e of s)for(const s of e)s[0]+=t;return e}function c(e){return(0,i.oU)(e)?e.rings:e.paths}},11385:(e,t,s)=>{s.d(t,{P:()=>c});var r,n,i=s(71552),a=s(91055);(n=r||(r={}))[n.varint=0]="varint",n[n.fixed64=1]="fixed64",n[n.delimited=2]="delimited",n[n.fixed32=5]="fixed32",n[n.unknown=99]="unknown";const o=new TextDecoder("utf-8"),u=(0,i.h)("safari")||(0,i.h)("ios")?6:(0,i.h)("ff")?12:32;class c{constructor(e,t,s=0,n=(e?e.byteLength:0)){this._tag=0,this._dataType=r.unknown,this._init(e,t,s,n)}_init(e,t,s,r){this._data=e,this._dataView=t,this._pos=s,this._end=r}asUnsafe(){return this}clone(){return new c(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(e){this._pos=e}nextTag(e){for(;;){if(this._pos===this._end)return!1;const t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const e=this._decodeVarint();return this._tag=e>>3,this._dataType=7&e,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))}getUInt64(){return this._decodeVarint()}getSInt32(){const e=this.getUInt32();if(void 0!==e)return e>>>1^-(1&e)|0}getSInt64(){return this._decodeSVarint()}getBool(){const e=0!==this._data[this._pos];return this._skip(1),e}getEnum(){return this._decodeVarint()}getFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),s}getSFixed64(){const e=this._dataView,t=this._pos,s=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),s}getDouble(){const e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e}getFixed32(){const e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e}getSFixed32(){const e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e}getFloat(){const e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e}getString(){const e=this._getLength(),t=this._pos,s=this._toString(this._data,t,t+e);return this._skip(e),s}getBytes(){const e=this._getLength(),t=this._pos,s=this._toBytes(this._data,t,t+e);return this._skip(e),s}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(e,t,s,r){const n=this.getMessage(),i=e(n,t,s,r);return n.release(),i}processMessage(e){const t=this.getMessage(),s=e(t);return t.release(),s}getMessage(){const e=this._getLength(),t=c.pool.acquire();return t._init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),t}release(){c.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case r.varint:this._decodeVarint();break;case r.fixed64:this._skip(8);break;case r.delimited:this._skip(this._getLength());break;case r.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(e){this._skip(e)}_skip(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e}_decodeVarint(){const e=this._data;let t=this._pos,s=0,r=0;if(this._end-t>=10)do{if(r=e[t++],s|=127&r,0==(128&r))break;if(r=e[t++],s|=(127&r)<<7,0==(128&r))break;if(r=e[t++],s|=(127&r)<<14,0==(128&r))break;if(r=e[t++],s|=(127&r)<<21,0==(128&r))break;if(r=e[t++],s+=268435456*(127&r),0==(128&r))break;if(r=e[t++],s+=34359738368*(127&r),0==(128&r))break;if(r=e[t++],s+=4398046511104*(127&r),0==(128&r))break;if(r=e[t++],s+=562949953421312*(127&r),0==(128&r))break;if(r=e[t++],s+=72057594037927940*(127&r),0==(128&r))break;if(r=e[t++],s+=0x8000000000000000*(127&r),0==(128&r))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(r=e[t],0!=(128&r));)++t,s+=(127&r)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,s+=r*n}return this._pos=t,s}_decodeSVarint(){const e=this._data;let t=this._pos,s=0,r=0;const n=1&e[t];if(this._end-t>=10)do{if(r=e[t++],s|=127&r,0==(128&r))break;if(r=e[t++],s|=(127&r)<<7,0==(128&r))break;if(r=e[t++],s|=(127&r)<<14,0==(128&r))break;if(r=e[t++],s|=(127&r)<<21,0==(128&r))break;if(r=e[t++],s+=268435456*(127&r),0==(128&r))break;if(r=e[t++],s+=34359738368*(127&r),0==(128&r))break;if(r=e[t++],s+=4398046511104*(127&r),0==(128&r))break;if(r=e[t++],s+=562949953421312*(127&r),0==(128&r))break;if(r=e[t++],s+=72057594037927940*(127&r),0==(128&r))break;if(r=e[t++],s+=0x8000000000000000*(127&r),0==(128&r))break;throw new Error("Varint too long!")}while(0);else{let n=1;for(;t!==this._end&&(r=e[t],0!=(128&r));)++t,s+=(127&r)*n,n*=128;if(t===this._end)throw new Error("Varint overrun!");++t,s+=r*n}return this._pos=t,n?-(s+1)/2:s/2}_getLength(){if(this._dataType!==r.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(e,t,s){if((s=Math.min(this._end,s))-t>u){const r=e.subarray(t,s);return o.decode(r)}let r="",n="";for(let i=t;i<s;++i){const t=e[i];128&t?n+="%"+t.toString(16):(r+=decodeURIComponent(n)+String.fromCharCode(t),n="")}return n.length&&(r+=decodeURIComponent(n)),r}_toBytes(e,t,s){return s=Math.min(this._end,s),new Uint8Array(e.buffer,t,s-t)}}c.pool=new a.O(c,void 0,(e=>{e._data=null,e._dataView=null}))},76733:(e,t,s)=>{s.d(t,{O:()=>f,a:()=>R,b:()=>g,p:()=>V});var r=s(60991),n=s(71252),i=s(11385),a=s(85674),o=s(53785),u=s(60947),c=s(9006);const l=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class f{constructor(e){this._options=e,this.geometryTypes=l,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new c.O}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(e){if(!e||!e.features||!e.hasZ||!this._options.sourceSpatialReference||!e.spatialReference||(0,u.e)(e.spatialReference,this._options.sourceSpatialReference)||e.spatialReference.vcsWkid)return;const t=(0,o.g)(this._options.sourceSpatialReference)/(0,o.g)(e.spatialReference);if(1!==t)for(const s of e.features){if(!(0,a.h)(s))continue;const e=s.geometry.coords;for(let s=2;s<e.length;s+=3)e[s]*=t}}addFeature(e,t){e.features.push(t)}createFeature(){return new a.O}createSpatialReference(){return{wkid:0}}createGeometry(){return new a.a}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new a.a}}const p=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],d=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],h=["upperLeft","lowerLeft"];function g(e){return e>=p.length?null:p[e]}function y(e){return e>=h.length?null:h[e]}function m(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function _(e,t,s){const r=e.asUnsafe(),n=t.createPointGeometry(s);for(;r.next();)switch(r.tag()){case 3:{const e=r.getUInt32(),s=r.pos()+e;let i=0;for(;r.pos()<s;)t.addCoordinatePoint(n,r.getSInt64(),i++);break}default:r.skip()}return n}function b(e,t,s){const r=e.asUnsafe(),n=t.createGeometry(s),i=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;r.next();)switch(r.tag()){case 2:{const e=r.getUInt32(),s=r.pos()+e;let i=0;for(;r.pos()<s;)t.addLength(n,r.getUInt32(),i++);break}case 3:{const e=r.getUInt32(),s=r.pos()+e;let a=0;for(t.allocateCoordinates(n);r.pos()<s;)t.addCoordinate(n,r.getSInt64(),a),a++,a===i&&(a=0);break}default:r.skip()}return n}function k(e){const t=e.asUnsafe(),s=new a.a;let r="esriGeometryPoint";for(;t.next();)switch(t.tag()){case 2:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.lengths.push(t.getUInt32());break}case 3:{const e=t.getUInt32(),r=t.pos()+e;for(;t.pos()<r;)s.coords.push(t.getSInt64());break}case 1:r=l[t.getEnum()];break;default:t.skip()}return{queryGeometry:s,queryGeometryType:r}}function x(e){const t=e.asUnsafe();for(;t.next();)switch(t.tag()){case 1:return t.getString();case 2:return t.getFloat();case 3:return t.getDouble();case 4:return t.getSInt32();case 5:return t.getUInt32();case 6:return t.getInt64();case 7:return t.getUInt64();case 8:return t.getSInt64();case 9:return t.getBool();default:return t.skip(),null}return null}function S(e){const t=e.asUnsafe(),s={type:g(0)};for(;t.next();)switch(t.tag()){case 1:s.name=t.getString();break;case 2:s.type=g(t.getEnum());break;case 3:s.alias=t.getString();break;case 4:s.sqlType=(r=t.getEnum())>=d.length?null:d[r];break;case 5:default:t.skip();break;case 6:s.defaultValue=t.getString()}var r;return s}function w(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.name=s.getString();break;case 2:t.isSystemMaintained=s.getBool();break;default:s.skip()}return t}function T(e,t,s,r){const n=t.createFeature(s);let i=0;for(;e.next();)switch(e.tag()){case 1:{const t=r[i++].name;n.attributes[t]=e.processMessage(x);break}case 2:n.geometry=e.processMessageWithArgs(b,t,s);break;case 4:n.centroid=e.processMessageWithArgs(_,t,s);break;default:e.skip()}return n}function q(e){const t=[1,1,1,1],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function F(e){const t=[0,0,0,0],s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t[0]=s.getDouble();break;case 2:t[1]=s.getDouble();break;case 4:t[2]=s.getDouble();break;case 3:t[3]=s.getDouble();break;default:s.skip()}return t}function R(e){const t={originPosition:y(0)},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.originPosition=y(s.getEnum());break;case 2:t.scale=s.processMessage(q);break;case 3:t.translate=s.processMessage(F);break;default:s.skip()}return t}function I(e){const t={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case 1:t.shapeAreaFieldName=s.getString();break;case 2:t.shapeLengthFieldName=s.getString();break;case 3:t.units=s.getString();break;default:s.skip()}return t}function U(e,t){const s=t.createSpatialReference();for(;e.next();)switch(e.tag()){case 1:s.wkid=e.getUInt32();break;case 5:s.wkt=e.getString();break;case 2:s.latestWkid=e.getUInt32();break;case 3:s.vcsWkid=e.getUInt32();break;case 4:s.latestVcsWkid=e.getUInt32();break;default:e.skip()}return s}function O(e,t){const s=t.createFeatureResult(),r=e.asUnsafe();s.geometryType=m(t,0);let n=!1;for(;r.next();)switch(r.tag()){case 1:s.objectIdFieldName=r.getString();break;case 3:s.globalIdFieldName=r.getString();break;case 4:s.geohashFieldName=r.getString();break;case 5:s.geometryProperties=r.processMessage(I);break;case 7:s.geometryType=m(t,r.getEnum());break;case 8:s.spatialReference=r.processMessageWithArgs(U,t);break;case 10:s.hasZ=r.getBool();break;case 11:s.hasM=r.getBool();break;case 12:s.transform=r.processMessage(R);break;case 9:{const e=r.getBool();s.exceededTransferLimit=e;break}case 13:t.addField(s,r.processMessage(S));break;case 15:n||(t.prepareFeatures(s),n=!0),t.addFeature(s,r.processMessageWithArgs(T,t,s,s.fields));break;case 2:s.uniqueIdField=r.processMessage(w);break;default:r.skip()}return t.finishFeatureResult(s),s}function E(e,t){const s={};let r=null;for(;e.next();)switch(e.tag()){case 4:r=e.processMessageWithArgs(k);break;case 1:s.featureResult=e.processMessageWithArgs(O,t);break;default:e.skip()}return(0,n.i)(r)&&s.featureResult&&t.addQueryGeometry(s,r),s}function V(e,t){const s=function(e,t){try{const s=2,r=new i.P(new Uint8Array(e),new DataView(e)),n={};for(;r.next();)r.tag()===s?n.queryResult=r.processMessageWithArgs(E,t):r.skip();return n}catch(e){throw new r.Z("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}(e,t),n=s.queryResult.featureResult,a=s.queryResult.queryGeometry,o=s.queryResult.queryGeometryType;if(n&&n.features&&n.features.length&&n.objectIdFieldName){const e=n.objectIdFieldName;for(const t of n.features)t.attributes&&(t.objectId=t.attributes[e])}return n&&(n.queryGeometry=a,n.queryGeometryType=o),n}},49214:(e,t,s)=>{s.r(t),s.d(t,{a:()=>m,b:()=>y,c:()=>_,d:()=>h,e:()=>d,f:()=>g,m:()=>l,q:()=>k,r:()=>b});var r=s(82058),n=s(71252),i=s(32101),a=s(32422),o=s(95533),u=s(76733),c=s(55823);function l(e){const t={};for(const s in e){if("declaredClass"===s)continue;const r=e[s];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){t[s]=[];for(let e=0;e<r.length;e++)t[s][e]=l(r[e])}else"object"==typeof r?r.toJSON&&(t[s]=JSON.stringify(r)):t[s]=r}return t}function f(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const s=e.toJSON();return delete s.spatialReference,JSON.stringify(s)}function p(e,t){const s=e.geometry,r=e.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;const i=r;let o,u,c;if((0,n.i)(s)&&(u=s.spatialReference,c=s.spatialReference.wkid||JSON.stringify(s.spatialReference),i.geometryType=(0,a.Ji)(s),i.geometry=f(s,e.compactGeometryEnabled),i.inSR=c),r.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete i.outFields:r.outFields.includes("*")?i.outFields="*":i.outFields=r.outFields.join(","),r.outSR?(i.outSR=r.outSR.wkid||JSON.stringify(r.outSR),o=e.outSpatialReference):s&&(r.returnGeometry||r.returnCentroid)&&(i.outSR=i.inSR,o=u),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(i.outStatistics=JSON.stringify(r.outStatistics)),r.fullText&&(i.fullText=JSON.stringify(r.fullText)),r.pixelSize&&(i.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&(0,n.i)(u)&&(0,n.i)(e.quantizationParameters)&&(0,n.i)(e.quantizationParameters.extent)&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,i.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(i.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(i.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(i.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){const e=r.timeExtent,{start:t,end:s}=e;null==t&&null==s||(i.time=t===s?t:`${t??"null"},${s??"null"}`),delete r.timeExtent}return e.defaultSpatialReferenceEnabled&&(0,n.i)(u)&&(0,n.i)(o)&&u.equals(o)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}async function d(e,t,s,r){const i=(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await b(e,t,"json",r);return(0,c.a)(t,s,i.data),i}async function h(e,t,s,r){if((0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty)return{data:s.createFeatureResult()};const i=await g(e,t,r),a=i;return a.data=(0,u.p)(i.data,s),a}function g(e,t,s){return b(e,t,"pbf",s)}function y(e,t,s){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):b(e,t,"json",s,{returnIdsOnly:!0})}function m(e,t,s){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):b(e,t,"json",s,{returnIdsOnly:!0,returnCountOnly:!0})}function _(e,t,s){return(0,n.i)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):b(e,t,"json",s,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error("Layer does not support extent calculation.");if(t.hasOwnProperty("count"))throw new Error("Layer does not support extent calculation.");return e}))}function b(e,t,s,a={},u={}){const c="string"==typeof e?(0,i.mN)(e):e,f=t.geometry?[t.geometry]:[];return a.responseType="pbf"===s?"array-buffer":"json",(0,o.aX)(f,null,a).then((e=>{const o=e&&e[0];(0,n.i)(o)&&((t=t.clone()).geometry=o);const f=l({...c.query,f:s,...u,...p(t,u)});return(0,r.default)((0,i.v_)(c.path,"query"),{...a,query:{...f,...a.query}})}))}const k=Object.freeze(Object.defineProperty({__proto__:null,encodeGeometry:f,queryToQueryStringParameters:p,executeQuery:d,executeQueryPBF:h,executeQueryPBFBuffer:g,executeQueryForIds:y,executeQueryForCount:m,executeQueryForExtent:_,runQuery:b},Symbol.toStringTag,{value:"Module"}))},95307:(e,t,s)=>{s.d(t,{c:()=>u,s:()=>c}),s(74569);var r=s(82058),n=s(32422),i=s(94216),a=s(32101),o=s(81731);async function u(e,t,s,a){const o=(0,i.p)(e),u=t[0].spatialReference,c={...a,query:{...o.query,f:"json",sr:JSON.stringify(u),target:JSON.stringify({geometryType:(0,n.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(s)}},l=await(0,r.default)(o.path+"/cut",c),{cutIndexes:f,geometries:p=[]}=l.data;return{cutIndexes:f,geometries:p.map((e=>{const t=(0,n.im)(e);return t.spatialReference=u,t}))}}async function c(e,t,s){const i="string"==typeof e?(0,a.mN)(e):e,u=t[0].spatialReference,c=(0,n.Ji)(t[0]),l={...s,query:{...i.query,f:"json",sr:u.wkid?u.wkid:JSON.stringify(u),geometries:JSON.stringify((0,o.e)(t))}},{data:f}=await(0,r.default)(i.path+"/simplify",l);return(0,o.d)(f.geometries,c,u)}},94216:(e,t,s)=>{s.d(t,{a:()=>i,e:()=>o,p:()=>a}),s(31450),s(88762);var r=s(76506),n=s(32101);function i(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function a(e){return"string"==typeof e?(0,n.mN)(e):(0,r.d9)(e)}function o(e,t,s){const r={};for(const n in e){if("declaredClass"===n)continue;const i=e[n];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){r[n]=[];for(let e=0;e<i.length;e++)r[n][e]=o(i[e])}else if("object"==typeof i)if(i.toJSON){const e=i.toJSON(s&&s[n]);r[n]=t?e:JSON.stringify(e)}else r[n]=t?i:JSON.stringify(i);else r[n]=i}return r}s(82058)},81731:(e,t,s)=>{s.d(t,{d:()=>i,e:()=>n});var r=s(32422);function n(e){return{geometryType:(0,r.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function i(e,t,s){const n=(0,r.q9)(t);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=s,t}))}},95533:(e,t,s)=>{s.d(t,{aX:()=>y});var r=s(31450),n=s(60991),i=s(92143),a=s(71252),o=s(44567),u=s(92896),c=s(94751),l=s(60947),f=s(35132),p=s(95307);s(71552),s(76506),s(40642),s(34250),s(91306),s(60474),s(66396),s(86656),s(17533),s(6540),s(2906),s(21801),s(73796),s(12047),s(21972),s(91055),s(19657),s(6906),s(50406),s(97714),s(91597),s(86787),s(89623),s(98380),s(32422),s(84069),s(74569),s(22781),s(57251),s(82058),s(88762),s(32101),s(94216),s(81731);const d=i.L.getLogger("esri.geometry.support.normalizeUtils");function h(e,t,s){if(t){const t=function(e,t){if(!(e instanceof u.Z||e instanceof o.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw d.error(e),new n.Z(e)}const s=(0,c.g)(e),r=[];for(const e of s){const s=[];r.push(s),s.push([e[0][0],e[0][1]]);for(let r=0;r<e.length-1;r++){const n=e[r][0],i=e[r][1],a=e[r+1][0],o=e[r+1][1],u=Math.sqrt((a-n)*(a-n)+(o-i)*(o-i)),c=(o-i)/u,l=(a-n)/u,f=u/t;if(f>1){for(let e=1;e<=f-1;e++){const r=e*t,a=l*r+n,o=c*r+i;s.push([a,o])}const e=(u+Math.floor(f-1)*t)/2,r=l*e+n,a=c*e+i;s.push([r,a])}s.push([a,o])}}return function(e){return"polygon"===e.type}(e)?new o.Z({rings:r,spatialReference:e.spatialReference}):new u.Z({paths:r,spatialReference:e.spatialReference})}(e,1e6);e=(0,f.Sx)(t,!0)}return s&&(e=(0,c.u)(e,s)),e}function g(e,t,s){if(Array.isArray(e)){const r=e[0];if(r>t){const s=(0,c.o)(r,t);e[0]=r+s*(-2*t)}else if(r<s){const t=(0,c.o)(r,s);e[0]=r+t*(-2*s)}}else{const r=e.x;if(r>t){const s=(0,c.o)(r,t);e=e.clone().offset(s*(-2*t),0)}else if(r<s){const t=(0,c.o)(r,s);e=e.clone().offset(t*(-2*s),0)}}return e}async function y(e,t,s){if(!Array.isArray(e))return y([e],t);t&&"string"!=typeof t&&d.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??r.Z.geometryServiceUrl;let i,m,_,b,k,x,S,w,T=0;const q=[],F=[];for(const t of e)if((0,a.a)(t))F.push(t);else if(i||(i=t.spatialReference,m=(0,l.g)(i),_=i.isWebMercator,x=_?102100:4326,b=c.c[x].maxX,k=c.c[x].minX,S=c.c[x].plus180Line,w=c.c[x].minus180Line),m)if("mesh"===t.type)F.push(t);else if("point"===t.type)F.push(g(t.clone(),b,k));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>g(e,b,k))),F.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,m);F.push(e.rings?new o.Z(e):e)}else if(t.extent){const e=t.extent,s=(0,c.o)(e.xmin,k)*(2*b);let r=0===s?t.clone():(0,c.u)(t.clone(),s);e.offset(s,0),e.intersects(S)&&e.xmax!==b?(T=e.xmax>T?e.xmax:T,r=h(r,_),q.push(r),F.push("cut")):e.intersects(w)&&e.xmin!==k?(T=e.xmax*(2*b)>T?e.xmax*(2*b):T,r=h(r,_,360),q.push(r),F.push("cut")):F.push(r)}else F.push(t.clone());else F.push(t);let R=(0,c.o)(T,b),I=-90;const U=R,O=new u.Z;for(;R>0;){const e=360*R-180;O.addPath([[e,I],[e,-1*I]]),I*=-1,R--}if(q.length>0&&U>0){const t=function(e,t){let s=-1;for(let r=0;r<t.cutIndexes.length;r++){const n=t.cutIndexes[r],i=t.geometries[r],a=(0,c.g)(i);for(let e=0;e<a.length;e++){const t=a[e];t.some((s=>{if(s[0]<180)return!0;{let s=0;for(let e=0;e<t.length;e++){const r=t[e][0];s=r>s?r:s}s=Number(s.toFixed(9));const r=-360*(0,c.o)(s,180);for(let s=0;s<t.length;s++){const t=i.getPoint(e,s);i.setPoint(e,s,t.clone().offset(r,0))}return!0}}))}if(n===s){if("polygon"===e[0].type)for(const t of(0,c.g)(i))e[n]=e[n].addRing(t);else if("polyline"===e[0].type)for(const t of(0,c.g)(i))e[n]=e[n].addPath(t)}else s=n,e[n]=i}return e}(q,await(0,p.c)(n,q,O,s)),r=[],i=[];for(let s=0;s<F.length;s++){const n=F[s];if("cut"!==n)i.push(n);else{const n=t.shift(),o=e[s];(0,a.i)(o)&&"polygon"===o.type&&o.rings&&o.rings.length>1&&n.rings.length>=o.rings.length?(r.push(n),i.push("simplify")):i.push(_?(0,f.$)(n):n)}}if(!r.length)return i;const o=await(0,p.s)(n,r,s),u=[];for(let e=0;e<i.length;e++){const t=i[e];"simplify"!==t?u.push(t):u.push(_?(0,f.$)(o.shift()):o.shift())}return u}const E=[];for(let e=0;e<F.length;e++){const t=F[e];if("cut"!==t)E.push(t);else{const e=q.shift();E.push(!0===_?(0,f.$)(e):e)}}return E}}}]);