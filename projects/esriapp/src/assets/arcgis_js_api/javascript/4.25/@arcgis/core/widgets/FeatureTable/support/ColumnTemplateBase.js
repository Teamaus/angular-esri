/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/object.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";let i=class extends o{constructor(t){super(t),this.description=null,this.direction=null,this.formatFunction=null,this.initialSortPriority=null,this.label=null,this.menuConfig=null,this.sortable=!0,this.textAlign="start",this.type=null,this.visible=!0}};t([r()],i.prototype,"description",void 0),t([r()],i.prototype,"direction",void 0),t([r()],i.prototype,"formatFunction",void 0),t([r()],i.prototype,"initialSortPriority",void 0),t([r()],i.prototype,"label",void 0),t([r()],i.prototype,"menuConfig",void 0),t([r()],i.prototype,"sortable",void 0),t([r()],i.prototype,"textAlign",void 0),t([r({type:String,json:{read:!1,write:!0}})],i.prototype,"type",void 0),t([r()],i.prototype,"visible",void 0),i=t([s("esri.widgets.FeatureTable.support.ColumnTemplateBase")],i);const e=i;export{e as default};
