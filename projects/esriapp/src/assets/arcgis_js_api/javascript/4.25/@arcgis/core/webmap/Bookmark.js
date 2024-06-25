/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../TimeExtent.js";import o from"../Viewpoint.js";import r from"../core/Error.js";import{IdentifiableMixin as s}from"../core/Identifiable.js";import{JSONSupport as i}from"../core/JSONSupport.js";import{clone as n}from"../core/lang.js";import{L as p}from"../chunks/Logger.js";import{i as m,a}from"../chunks/maybe.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import{cast as l}from"../core/accessorSupport/decorators/cast.js";import{r as u}from"../chunks/reader.js";import{subclass as j}from"../core/accessorSupport/decorators/subclass.js";import{w as h}from"../chunks/writer.js";import{e as y}from"../chunks/ensureType.js";import{S as w}from"../chunks/SlideThumbnail.js";import"../chunks/timeUtils.js";import"../chunks/object.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../config.js";import"../chunks/string.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";var k;let g=k=class extends(s(i)){constructor(t){super(t),this.name=null,this.thumbnail=new w,this.timeExtent=null}castThumbnail(t){return"string"==typeof t?new w({url:t}):y(w,t)}set viewpoint(t){const{targetGeometry:e,scale:o}=t;m(e)&&"point"===e.type&&a(o)&&p.getLogger(this.declaredClass).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",t),this._set("viewpoint",t)}readViewpoint(t,e){const{extent:r,viewpoint:s}=e;return o.fromJSON(s||{targetGeometry:r})}writeViewpoint(t,e,o,s){if(!t)return;const{targetGeometry:i}=t;if(m(i)&&"extent"!==i.type){const t="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";s?.messages?s.messages.push(new r("property:unsupported",t)):p.getLogger(this.declaredClass).error(t)}else m(i)&&(e.extent=i.toJSON()),e[o]=t.toJSON()}clone(){return new k(n({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};t([c({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],g.prototype,"name",void 0),t([c({type:w,json:{write:{overridePolicy:t=>({enabled:!(!t||!t.url)})}}})],g.prototype,"thumbnail",void 0),t([l("thumbnail")],g.prototype,"castThumbnail",null),t([c({type:e,json:{write:!0}})],g.prototype,"timeExtent",void 0),t([c({type:o,nonNullable:!0,json:{write:!0}})],g.prototype,"viewpoint",null),t([u("viewpoint",["extent","viewpoint"])],g.prototype,"readViewpoint",null),t([h("viewpoint")],g.prototype,"writeViewpoint",null),g=k=t([j("esri.webmap.Bookmark")],g);const d=g;export{d as default};
