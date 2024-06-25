/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../core/Error.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{i as s}from"../../chunks/maybe.js";import{s as o}from"../../chunks/object.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{r as c,w as n}from"../../chunks/jsonUtils.js";import p from"./FeatureFilter.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../chunks/parser.js";import"../../chunks/colorUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4f32.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/_commonjsHelpers.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/jsonMap.js";import"../../geometry/support/jsonUtils.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../chunks/enumeration.js";import"../../chunks/DataLayerSource.js";import"./Field.js";import"../../chunks/domains.js";import"./CodedValueDomain.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../core/Clonable.js";import"../../rest/support/StatisticDefinition.js";var u;const m={read:{reader:c},write:{writer:n,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},a={read:{reader:c},write:{writer:n,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},d={name:"showExcludedLabels",default:!0};let j=u=class extends r{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,r){const s=super.write(e,r);if(r?.origin){if(s.filter){const e=Object.keys(s.filter);if(e.length>1||"where"!==e[0])return r.messages?.push(new t("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:r.layer,effect:this})),null}if("showExcludedLabels"in s)return r.messages?.push(new t("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:r.layer,effect:this})),null}return s}clone(){return new u({filter:s(this.filter)?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};e([i({type:p,json:{write:{allowNull:!0,writer(e,t,r,s){const i=e?.write({},s);i&&0!==Object.keys(i).length?o(r,i,t):o(r,null,t)}}}})],j.prototype,"filter",void 0),e([i({json:{write:!0,origins:{"web-map":m,"portal-item":m}}})],j.prototype,"includedEffect",void 0),e([i({json:{write:!0,origins:{"web-map":a,"portal-item":a}}})],j.prototype,"excludedEffect",void 0),e([i({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":d,"portal-item":d}}})],j.prototype,"excludedLabelsVisible",void 0),j=u=e([l("esri.layers.support.FeatureEffect")],j);const f=j;export{f as default};
