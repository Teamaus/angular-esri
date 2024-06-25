/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as o}from"../../geometry.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{e as i}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{q as m,t as n}from"../../chunks/networkEnums.js";import{fromJSON as c}from"../../geometry/support/jsonUtils.js";import"../../geometry/Extent.js";import"../../chunks/maybe.js";import"../../chunks/string.js";import"../../chunks/object.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";let a=class extends(r(s)){constructor(t){super(t),this.doNotLocateOnRestrictedElements=null,this.geometry=null,this.geometryType=null,this.name=null,this.spatialRelationship=null,this.type="layer",this.where=null}};t([e({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0),t([e({types:o,json:{read:c,write:!0}})],a.prototype,"geometry",void 0),t([i(m)],a.prototype,"geometryType",void 0),t([e({type:String,json:{name:"layerName",write:!0}})],a.prototype,"name",void 0),t([i(n,{name:"spatialRel"})],a.prototype,"spatialRelationship",void 0),t([e({type:String,json:{write:!0}})],a.prototype,"type",void 0),t([e({type:String,json:{write:!0}})],a.prototype,"where",void 0),a=t([p("esri.rest.support.DataLayer")],a);const j=a;export{j as default};