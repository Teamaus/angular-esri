/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{J as t}from"../../chunks/jsonMap.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{a as o}from"../../chunks/maybe.js";import{e as r}from"../../chunks/unitUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{I as l}from"../../chunks/ensureType.js";import{r as n}from"../../chunks/reader.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{w as p}from"../../chunks/writer.js";import c from"../../geometry/Point.js";import u,{j as h,g as m,l as f,e as d}from"../../geometry/SpatialReference.js";import{c as g}from"../../chunks/aaBoundingRect.js";import{project as j}from"../../geometry/support/webMercatorUtils.js";import y from"./LOD.js";import{T as v}from"../../chunks/TileKey.js";import"../../chunks/object.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/projectionEllipsoid.js";import"../../chunks/Ellipsoid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Geometry.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../geometry/Extent.js";var w;const x=new t({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let O=w=class extends s{constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.minScale=0,this.maxScale=0,this.size=null,this.spatialReference=null}static create(e={}){const{resolutionFactor:t=1,scales:s,size:o=256,spatialReference:i=u.WebMercator,numLODs:l=24}=e;if(!h(i)){const e=[];if(s)for(let t=0;t<s.length;t++){const o=s[t];e.push({level:t,scale:o,resolution:o})}else{let t=5e-4;for(let s=l-1;s>=0;s--)e.unshift({level:s,scale:t,resolution:t}),t*=2}return new w({dpi:96,lods:e,origin:new c(0,0,i),size:[o,o],spatialReference:i})}const n=m(i),a=e.origin?new c({x:e.origin.x,y:e.origin.y,spatialReference:i}):new c(n?{x:n.origin[0],y:n.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),p=1/(39.37*r(i)*96),d=[];if(s)for(let e=0;e<s.length;e++){const t=s[e],o=t*p;d.push({level:e,scale:t,resolution:o})}else{let e=f(i)?512/o*591657527.5917094:256/o*591657527.591555;const s=Math.ceil(l/t);d.push({level:0,scale:e,resolution:e*p});for(let o=1;o<s;o++){const s=e/2**t,r=s*p;d.push({level:o,scale:s,resolution:r}),e=s}}return new w({dpi:96,lods:d,origin:a,size:[o,o],spatialReference:i})}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=m(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return c.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const o=[],r=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach((e=>{o.push(e.scale),t=e.scale>t?e.scale:t,s=e.scale<s?e.scale:s,r[e.level]=e}))),this._set("scales",o),this._set("minScale",t),this._set("maxScale",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),o=s+1;return t[s]/(t[s]/t[o])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let o=0;for(;o<s;o++){const s=t[o],r=t[o+1];if(s<=e)return o;if(r===e)return o+1;if(s>e&&r<e)return o+Math.log(s/e)/Math.log(s/r)}return o}snapScale(e,t=.95){const s=this.scaleToZoom(e);return s%Math.floor(s)>=t?this.zoomToScale(Math.ceil(s)):this.zoomToScale(Math.floor(s))}tileAt(e,t,s,r){const i=this.lodAt(e);if(!i)return null;let l,n;if("number"==typeof t)l=t,n=s;else if(d(t.spatialReference,this.spatialReference))l=t.x,n=t.y,r=s;else{const e=j(t,this.spatialReference);if(o(e))return null;l=e.x,n=e.y,r=s}const a=i.resolution*this.size[0],p=i.resolution*this.size[1];return r||(r=new v(null,0,0,0,g())),r.level=e,r.row=Math.floor((this.origin.y-n)/p+.001),r.col=Math.floor((l-this.origin.x)/a+.001),this.updateTileInfo(r),r}updateTileInfo(e,t=w.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===w.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(s=t)}if(!s)return;const o=e.level-s.level,r=s.resolution*this.size[0]/2**o,i=s.resolution*this.size[1]/2**o;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=g()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel||(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),0))}getTileBounds(e,t){const s=this.lodAt(t.level);if(null==s)return null;const{resolution:o}=s,r=o*this.size[0],i=o*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return w.fromJSON(this.write({}))}getOrCreateCompatible(e,t){if(256===this.size[0]&&256===this.size[1])return 256===e?this:null;const s=[],o=this.lods.length;for(let e=0;e<o;e++){const o=this.lods[e],r=o.resolution*t;s.push(new y({level:o.level,scale:o.scale,resolution:r}))}return new w({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const o=e[s];this._upsampleLevels[o.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/o.resolution:0},t=o}}};e([i({type:Number,json:{write:!0}})],O.prototype,"compressionQuality",void 0),e([i({type:Number,json:{write:!0}})],O.prototype,"dpi",void 0),e([i({type:String,json:{read:x.read,write:x.write,origins:{"web-scene":{read:!1,write:!1}}}})],O.prototype,"format",void 0),e([i({readOnly:!0})],O.prototype,"isWrappable",null),e([i({type:c,json:{write:!0}})],O.prototype,"origin",void 0),e([n("origin")],O.prototype,"readOrigin",null),e([i({type:[y],value:null,json:{write:!0}})],O.prototype,"lods",null),e([i({readOnly:!0})],O.prototype,"minScale",void 0),e([i({readOnly:!0})],O.prototype,"maxScale",void 0),e([i({readOnly:!0})],O.prototype,"scales",void 0),e([i({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],O.prototype,"size",void 0),e([n("size",["rows","cols"])],O.prototype,"readSize",null),e([p("size",{cols:{type:l},rows:{type:l}})],O.prototype,"writeSize",null),e([i({type:u,json:{write:!0}})],O.prototype,"spatialReference",void 0),O=w=e([a("esri.layers.support.TileInfo")],O),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(O||(O={}));const k=O;export{k as default};