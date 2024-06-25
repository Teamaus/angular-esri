/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{L as t}from"../../chunks/Logger.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{k as p}from"../../chunks/ensureType.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/maybe.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../chunks/ArrayPool.js";import"../../chunks/tracking.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var n;let c=n=class extends r{constructor(s){super(s),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(s){return null==s?s:"function"==typeof s?(t.getLogger(this.declaredClass).error(".field: field must be a string value"),null):p(s)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};s([e({type:o,json:{type:[Number],write:!0}})],c.prototype,"color",void 0),s([e({type:String,json:{write:!0}})],c.prototype,"field",void 0),s([i("field")],c.prototype,"castField",null),s([e({type:String,json:{write:!0}})],c.prototype,"label",void 0),s([e({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),s([e({type:String,json:{write:!0}})],c.prototype,"valueExpressionTitle",void 0),c=n=s([l("esri.renderers.support.AttributeColorInfo")],c);const u=c;export{u as default};