/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import{clone as r}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"./Content.js";import"../../chunks/maybe.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";var i;let p=i=class extends e{constructor(o){super(o),this.creator=null,this.destroyer=null,this.outFields=null,this.type="custom"}clone(){return new i({creator:this.creator,destroyer:this.destroyer,outFields:Array.isArray(this.outFields)?r(this.outFields):null})}};o([t()],p.prototype,"creator",void 0),o([t()],p.prototype,"destroyer",void 0),o([t()],p.prototype,"outFields",void 0),o([t({type:["custom"],readOnly:!0})],p.prototype,"type",void 0),p=i=o([s("esri.popup.content.CustomContent")],p);const c=p;export{c as default};