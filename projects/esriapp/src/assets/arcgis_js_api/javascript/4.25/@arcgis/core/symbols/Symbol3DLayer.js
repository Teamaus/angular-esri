/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{w as e}from"../chunks/writer.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";let p=class extends o{constructor(r){super(r),this.enabled=!0,this.type=null}writeEnabled(r,o,s){r||(o[s]=r)}};r([s({type:Boolean,json:{read:{source:"enable"},write:{target:"enable"}}})],p.prototype,"enabled",void 0),r([e("enabled")],p.prototype,"writeEnabled",null),r([s({type:["icon","object","line","path","fill","water","extrude","text"],readOnly:!0})],p.prototype,"type",void 0),p=r([t("esri.symbols.Symbol3DLayer")],p);const i=p;export{i as default};