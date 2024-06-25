/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{A as t}from"../chunks/Analysis.js";import r from"./SlicePlane.js";import e from"../core/Collection.js";import{r as o,c as i}from"../chunks/collectionUtils.js";import{g as p}from"../chunks/maybe.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../core/Clonable.js";import"../core/Identifiable.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/jsonUtils.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../chunks/persistable.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../core/urlUtils.js";import"../chunks/uuid.js";import"../chunks/persistableUrlUtils.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";let m=class extends t{constructor(s){super(s),this.type="slice",this.tiltEnabled=!1,this.shape=null,this.excludeGroundSurface=!1}get excludedLayers(){return this._get("excludedLayers")||new e}set excludedLayers(s){this._set("excludedLayers",o(s,this._get("excludedLayers")))}get requiredPropertiesForEditing(){return[p(this.shape,(s=>s.position))]}clear(){this.shape=null}};s([c({type:["slice"]})],m.prototype,"type",void 0),s([c()],m.prototype,"tiltEnabled",void 0),s([c({types:{key:"type",base:null,typeMap:{plane:r},defaultKeyValue:"plane"}})],m.prototype,"shape",void 0),s([c({cast:i,clonable:s=>s.slice()})],m.prototype,"excludedLayers",null),s([c({type:Boolean,nonNullable:!0})],m.prototype,"excludeGroundSurface",void 0),s([c({readOnly:!0})],m.prototype,"requiredPropertiesForEditing",null),m=s([l("esri.analysis.SliceAnalysis")],m);const n=m;export{n as default};
