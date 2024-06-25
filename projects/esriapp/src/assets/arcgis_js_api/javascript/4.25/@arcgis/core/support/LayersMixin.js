/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import r from"../core/Collection.js";import{r as t}from"../chunks/collectionUtils.js";import{L as s}from"../chunks/Logger.js";import{isPromiseLike as o}from"../core/promiseUtils.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import n from"../layers/Layer.js";import"../chunks/ArrayPool.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Error.js";import"../config.js";import"../chunks/string.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";function m(e,r,t){let s,o;if(e)for(let i=0,a=e.length;i<a;i++){if(s=e.getItemAt(i),s[r]===t)return s;if("group"===s?.type&&(o=m(s.layers,r,t),o))return o}}const p=p=>{let l=class extends p{constructor(...e){super(...e),this.layers=new r;const t=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||s.getLogger(this.declaredClass).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},o=e=>{e.parent=null,this.layerRemoved(e)};this.layers.on("before-add",(e=>{var r;(r=e.item).parent&&"remove"in r.parent&&r.parent.remove(r)})),this.layers.on("after-add",(e=>t(e.item))),this.layers.on("after-remove",(e=>o(e.item)))}destroy(){const e=this.layers.removeAll();for(const r of e)this.layerRemoved(r),r.destroy();this.layers.destroy()}set layers(e){this._set("layers",t(e,this._get("layers")))}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof n){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r)}else o(e)?e.then((e=>{this.destroyed||this.add(e,r)})):s.getLogger(this.declaredClass).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,r){const t=this.layers;r=t.getNextIndex(r),e.slice().forEach((e=>{e.parent!==this?(t.add(e,r),r+=1):this.reorder(e,r)}))}findLayerById(e){return m(this.layers,"id",e)}findLayerByUid(e){return m(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return e([i()],l.prototype,"layers",null),l=e([a("esri.support.LayersMixin")],l),l};export{p as LayersMixin};