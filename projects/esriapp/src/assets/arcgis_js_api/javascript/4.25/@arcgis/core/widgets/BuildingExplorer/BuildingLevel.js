/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{i as e}from"../../chunks/maybe.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import r,{g as o}from"./BuildingNumericFilterViewModel.js";import{d as l,e as n}from"../../chunks/filterUtils.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/get.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/ArrayPool.js";import"../../chunks/watch.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../core/promiseUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../chunks/uuid.js";import"../../chunks/BuildingFilterBlock.js";import"../../core/JSONSupport.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/utils2.js";import"../../symbols/edges/Edges3D.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";let c=class extends r{constructor(){super(...arguments),this._levelFieldName=null,this._parseValueFromFilter=s=>{const t=new RegExp(`${this._levelFieldName}\\s*=\\s*(\\d+)`,"gi"),i=new RegExp(`${this._levelFieldName}\\s*<\\s*(\\d+)`,"gi");for(const{filterMode:r,filterExpression:o}of s.filterBlocks.items){let s=null;if("solid"===r.type?s=t.exec(o):"x-ray"===r.type&&(s=i.exec(o)),e(s))return parseInt(s[1],10)}return null}}get filterExpressions(){return this.enabled&&this._levelFieldName?{xRay:`${this._levelFieldName} < ${this.value}`,solid:`${this._levelFieldName} = ${this.value}`}:{solid:null,xRay:null}}get _firstValue(){const s=this.allowedValues;return s.length>0?s[0]:0}_setup(){const s=[];this.layers.forEach((t=>{const i=l(t,"bldglevel");e(i)&&(this._levelFieldName=i.fieldName,s.push(i))})),this._domainInfo=o(s);const t=this._valueBeforeReady;this._set("state","ready"),this._valueBeforeReady=null;const i=t??n(this.layers,this._parseValueFromFilter);e(i)?this.select(i):(this.enabled=!1,this.value=this._firstValue)}};s([t({readOnly:!0})],c.prototype,"filterExpressions",null),s([t()],c.prototype,"_levelFieldName",void 0),s([t({readOnly:!0})],c.prototype,"_firstValue",null),c=s([i("esri.widgets.BuildingExplorer.BuildingLevel")],c);const p=c;export{p as default};
