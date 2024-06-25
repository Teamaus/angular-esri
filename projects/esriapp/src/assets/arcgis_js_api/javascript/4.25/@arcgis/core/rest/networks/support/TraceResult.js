/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import"../../../chunks/ensureType.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import s from"./AggregatedGeometry.js";import i from"./FunctionResult.js";import p from"./NetworkElement.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/get.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../chunks/object.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/string.js";import"../../../chunks/ArrayPool.js";import"../../../chunks/tracking.js";import"../../../chunks/watch.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../geometry/Multipoint.js";import"../../../chunks/writer.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/extentUtils.js";import"../../../geometry/Polyline.js";let n=class extends o{constructor(t){super(t),this.aggregatedGeometry=null,this.elements=null,this.globalFunctionResults=null,this.kFeaturesForKNNFound=!1,this.startingPointsIgnored=!1,this.warnings=null}};t([r({type:s,json:{write:!0},readOnly:!0})],n.prototype,"aggregatedGeometry",void 0),t([r({type:[p],json:{write:!0},readOnly:!0})],n.prototype,"elements",void 0),t([r({type:[i],json:{write:!0},readOnly:!0})],n.prototype,"globalFunctionResults",void 0),t([r({type:Boolean,json:{write:!0},readOnly:!0})],n.prototype,"kFeaturesForKNNFound",void 0),t([r({type:Boolean,json:{write:!0},readOnly:!0})],n.prototype,"startingPointsIgnored",void 0),t([r({type:[String],json:{write:!0},readOnly:!0})],n.prototype,"warnings",void 0),n=t([e("esri.rest.networks.support.TraceResult")],n);const m=n;export{m as default};