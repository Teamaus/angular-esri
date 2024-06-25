/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/object.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";let s=class extends e{constructor(r){super(r),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};r([t({type:String,json:{write:!0}})],s.prototype,"facilityIdField",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"levelIdField",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"levelNumberField",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"longNameField",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"shortNameField",void 0),r([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),r([t({type:String,json:{write:!0}})],s.prototype,"verticalOrderField",void 0),s=r([o("esri.layers.support.LevelLayerInfo")],s);const i=s;export{i as default};
