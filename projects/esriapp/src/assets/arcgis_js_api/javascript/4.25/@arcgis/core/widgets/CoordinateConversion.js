/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{e as t}from"../core/promiseUtils.js";import{L as o}from"../chunks/Logger.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{cast as i}from"../core/accessorSupport/decorators/cast.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import n from"./Widget.js";import a from"./CoordinateConversion/CoordinateConversionViewModel.js";import l from"./CoordinateConversion/support/Conversion.js";import{H as p}from"../chunks/Heading.js";import{a as c}from"../chunks/accessibleHandler.js";import{m as d}from"../chunks/messageBundle.js";import{t as m}from"../chunks/jsxFactory.js";import{s as u,i as h}from"../chunks/widgetUtils.js";import"../chunks/object.js";import"../core/Error.js";import"../chunks/maybe.js";import"../config.js";import"../chunks/string.js";import"../chunks/ensureType.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../intl.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Evented.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/ArrayPool.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/Promise.js";import"../core/reactiveUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../layers/support/fieldUtils.js";import"../chunks/arcadeOnDemand.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/common.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils2.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils3.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../chunks/aaBoundingRect.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../geometry/projection.js";import"../chunks/unitUtils.js";import"../chunks/projectionEllipsoid.js";import"../chunks/mat4.js";import"../chunks/pe.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"./CoordinateConversion/support/Format.js";import"../geometry/coordinateFormatter.js";import"../chunks/number3.js";import"./support/GoTo.js";const _="esri-coordinate-conversion__popup",b="esri-coordinate-conversion__conversion-list",g="esri-coordinate-conversion__tools",v="esri-coordinate-conversion__input-coordinate",y="esri-coordinate-conversion__pattern-input",j="esri-widget--button",C={settingsButton:!0,inputButton:!0,captureButton:!0,expandButton:!0};let k=class extends n{constructor(e,t){super(e,t),this._popupMessage=null,this._popupTimeoutId=null,this._clipboardPopupTimeoutId=null,this._coordinateInput=null,this._badInput=!1,this._goToEnabled=!1,this._conversionFormat=null,this._settingsFormat=null,this._previewConversion=null,this._expanded=!1,this._clipboardPopupVisible=!1,this._popupVisible=!1,this._settingsVisible=!1,this._inputVisible=!1,this.headingLevel=4,this.messages=null,this.messagesCommon=null,this.orientation="auto",this.viewModel=new a,this.visibleElements={...C}}get conversions(){return this.viewModel.conversions}set conversions(e){this.viewModel.conversions=e}get currentLocation(){return this.viewModel.currentLocation}set currentLocation(e){this.viewModel.currentLocation=e}get formats(){return this.viewModel.formats}set formats(e){this.viewModel.formats=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get mode(){return this.viewModel.mode}set mode(e){this.viewModel.mode=e}set multipleConversions(e){!1===e&&(this._expanded=!1,this.conversions.splice(1,this.conversions.length-1)),this._set("multipleConversions",e)}get multipleConversions(){const e=this._get("multipleConversions");return"boolean"!=typeof e||e}get locationSymbol(){return this.viewModel.locationSymbol}set locationSymbol(e){this.viewModel.locationSymbol=e}get storageEnabled(){return this.viewModel.storageEnabled}set storageEnabled(e){this.viewModel.storageEnabled=e}get storageType(){return this.viewModel.storageType}set storageType(e){this.viewModel.storageType=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...C,...e}}reverseConvert(e,t){return this.viewModel.reverseConvert(e,t)}render(){const e=this.get("viewModel.state"),t="disabled"===e?m("div",{key:"esri-coordinate__no-basemap"},this.messages.noBasemap):null,o=!t&&this._inputVisible?this._renderInputForm():null,s=!t&&this._settingsVisible?this._renderSettings():null,i=t||o||s?null:this._renderConversionsView(),r=this._popupVisible?this._renderPopup():null,n={"esri-coordinate-conversion--capture-mode":"capture"===this.mode,"esri-disabled":"loading"===e,"esri-coordinate-conversion--no-basemap":"disabled"===e};return m("div",{class:this.classes("esri-coordinate-conversion esri-widget",n)},r,t,i,s,o)}_addConversion(e){const t=e.target,o=t.options[t.options.selectedIndex]["data-format"],s=t["data-index"],i=new l({format:o});t.options.selectedIndex=0,s>=0&&this.conversions.removeAt(s),this.conversions.add(i,s)}_findSettingsFormat(){return this._settingsFormat||this.conversions.reduceRight(((e,t)=>{const o=t.format;return o.get("hasDisplayProperties")?o:e}),null)||this.formats.find((e=>e.hasDisplayProperties))}_hidePopup(){this._popupTimeoutId&&(clearTimeout(this._popupTimeoutId),this._popupTimeoutId=null),this._popupVisible=!1,this._popupMessage=null,this.scheduleRender()}_hideClipboardPopup(){this._clipboardPopupTimeoutId&&(clearTimeout(this._clipboardPopupTimeoutId),this._clipboardPopupTimeoutId=null),this._clipboardPopupVisible=!1,this.scheduleRender()}_onConvertComplete(){this._inputVisible=!1,this._coordinateInput.value=""}_onCopy(e){const t=e.currentTarget["data-conversion"].displayCoordinate;e.clipboardData.setData("text/plain",t),this._showClipboardPopup(),e.preventDefault()}_processUserInput(e){const s=t(e),i=this.viewModel;if("Enter"!==s&&s)this._badInput&&(this._badInput=!1);else{const e=this._coordinateInput["data-format"],t=this._coordinateInput.value;this._reverseConvert(t,e).then((e=>{"capture"===this.mode?i.resume():this.mode="capture",this.currentLocation=e,i.setLocation(e),this._onConvertComplete()})).catch((e=>{o.getLogger(this.declaredClass).error(e),this._showPopup(this.messages.invalidCoordinate),this._badInput=!0}))}}_reverseConvert(e,t){const s=this.viewModel;return t.reverseConvert(e).then((e=>(this._goToEnabled&&s.goToLocation(e).catch((e=>{o.getLogger(this.declaredClass).warn(e),this._showPopup(this.messages.locationOffBasemap)})),e)))}_setInputFormat(e){const t=e.target,o=t[t.options.selectedIndex]["data-format"];this._conversionFormat=o}_setPreviewConversion(){const e=this._findSettingsFormat(),t=this.viewModel;if(e){const o=this.conversions.find((t=>t.format===e));this._previewConversion=new l({format:e,position:{location:this.currentLocation,coordinate:o&&o.position.coordinate}}),this._previewConversion.position.coordinate||t.previewConversion(this._previewConversion)}}_setSettingsFormat(e){const t=e.target,o=t[t.options.selectedIndex]["data-format"];this._settingsFormat=o,this._setPreviewConversion()}_showClipboardPopup(){this._clipboardPopupVisible?clearTimeout(this._clipboardPopupTimeoutId):this._clipboardPopupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=null,this._hideClipboardPopup()}),750)}_showPopup(e,t=2500){this._popupMessage=e,this._popupVisible?clearTimeout(this._popupTimeoutId):this._popupVisible=!0,this.scheduleRender(),this._popupTimeoutId=setTimeout((()=>{this._popupTimeoutId=null,this._hidePopup()}),t)}_toggleGoTo(){this._goToEnabled=!this._goToEnabled}_updateCurrentPattern(e){e.stopPropagation();const t=e.target,o=this._findSettingsFormat();o&&(o.currentPattern=t.value)}_renderConversion(e,t){const{messages:o}=this,s=`${this.id}__list-item-${t}`,i=`${e.format.label} ${o.conversionOutputSuffix}`,r=0===t,n=r||this._expanded,a=r?this._renderFirstConversion(e):this._renderTools(t,e,s),l=r&&!e.displayCoordinate?o.noLocation:e.displayCoordinate,p=m("div",{"aria-label":l,class:"esri-coordinate-conversion__display","data-conversion":e,role:"listitem",tabindex:"0",title:l},l),c=this._renderOptions(this.formats.filter((t=>t!==e.format)));return n?m("li",{"aria-label":i,class:"esri-coordinate-conversion__row",id:s,key:e,role:"group",title:i,tabindex:"0"},m("select",{"aria-controls":s,"aria-label":o.selectFormat,class:this.classes("esri-select","esri-coordinate-conversion__select-row"),bind:this,"data-index":t,onchange:this._addConversion,title:o.selectFormat},m("option",{"aria-label":e.format.label,selected:!0,title:e.format.label},e.format.label.toUpperCase()),c),p,a):null}_renderCopyButton(e){const t=this._clipboardPopupVisible&&this._renderClipboardPopup();return m("li",{"aria-label":this.messagesCommon.copy,bind:this,class:this.classes(j,"esri-coordinate-conversion__row-button"),"data-conversion":e,onclick:this._copyCoordinateOutput,onkeydown:this._copyCoordinateOutput,oncopy:this._onCopy,role:"button",tabindex:"0",title:this.messagesCommon.copy},t,m("span",{"aria-hidden":"true",class:"esri-icon-duplicate"}))}_renderFirstConversion(e){const t=this.id,o={"esri-icon-down":!this._expanded,"esri-icon-up":this._expanded},{messages:s,messagesCommon:i,multipleConversions:r,visibleElements:n}=this,a="live"===this.mode?s.captureMode:s.liveMode,l=this._expanded?i.collapse:i.expand,p=e.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(e):null,c=r&&n.expandButton&&m("li",{"aria-controls":`${t}__${b}`,"aria-label":l,bind:this,class:j,key:"esri-coordinate-conversion__expand-button",onclick:this._toggleExpand,onkeydown:this._toggleExpand,role:"button",tabindex:"0",title:l},m("span",{"aria-hidden":"true",class:this.classes(o)})),d=!r&&n.captureButton&&m("li",{"aria-label":a,bind:this,class:this.classes(j,"esri-coordinate-conversion__mode-toggle"),key:"esri-coordinate-conversion__mode-toggle",onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:a},m("span",{"aria-hidden":"true",class:"esri-icon-map-pin"}));return m("ul",{class:g},p,c,d)}_renderInputForm(){const e=this._conversionFormat||this.conversions.getItemAt(0).format,t=this.formats.findIndex((t=>t.name===e.name)),o=this.id,s=`${o}__${v}`,i=`${o}__${v}__header`,r=this._renderOptions(this.formats,!0,t),n={"esri-coordinate-conversion__input-coordinate--rejected":this._badInput},{messages:a,messagesCommon:l,headingLevel:c}=this;return m("div",{"aria-labelledby":i,class:"esri-coordinate-conversion__input-form",key:"esri-coordinate-conversion__input-form",role:"search"},m("div",{class:"esri-coordinate-conversion__heading"},m("div",{"aria-label":l.back,bind:this,class:this.classes(j,"esri-coordinate-conversion__back-button"),onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:l.back},this._renderBackIcon()),m(p,{level:c,class:"esri-widget__heading",id:i},a.inputCoordTitle)),m("div",{class:"esri-coordinate-conversion__input-group"},m("select",{"aria-controls":s,"aria-label":a.selectFormat,bind:this,class:this.classes("esri-select","esri-coordinate-conversion__select-row"),onchange:this._setInputFormat,title:a.selectFormat},r),m("input",{afterCreate:u,"aria-labelledby":i,"aria-required":"true",bind:this,class:this.classes(v,"esri-input",n),"data-format":e,"data-node-ref":"_coordinateInput",id:s,onkeydown:this._processUserInput,placeholder:a.inputCoordTitle,role:"textbox",spellcheck:!1,title:a.inputCoordTitle,type:"text"})),m("div",{class:"esri-coordinate-conversion__input-group"},m("label",{"aria-label":a.goTo},m("input",{bind:this,checked:this._goToEnabled,onclick:this._toggleGoTo,title:a.goTo,type:"checkbox"}),a.goTo),m("button",{"aria-label":a.convert,bind:this,class:this.classes("esri-coordinate-conversion__button","esri-button"),onclick:this._processUserInput,title:a.convert,type:"button"},m("span",{class:"esri-coordinate-conversion__convert-button-span"},a.convert))))}_renderConversionsView(){const e=`${this.id}__${b}`,t=this._renderPrimaryTools(),o=this._renderOptions(this.formats),s=this.conversions.map(((e,t)=>this._renderConversion(e,t))).toArray(),{messages:i}=this,r=this._expanded?m("div",{class:"esri-coordinate-conversion__row"},m("select",{"aria-controls":e,"aria-label":i.addConversion,bind:this,class:this.classes("esri-select","esri-coordinate-conversion__select-primary"),onchange:this._addConversion,title:i.addConversion},m("option",{disabled:!0,selected:!0,value:""},i.addConversion),o),t):null,n={"esri-coordinate-conversion__conversions-view--expanded":this._expanded,"esri-coordinate-conversion__conversions-view--expand-up":"expand-up"===this.orientation,"esri-coordinate-conversion__conversions-view--expand-down":"expand-down"===this.orientation};return m("div",{class:this.classes("esri-coordinate-conversion__conversions-view",n),key:"esri-coordinate-conversion__main-view"},m("ul",{"aria-expanded":this._expanded?"true":"false",class:b,id:e},s),r)}_renderOptions(e,t,o){const s=this.conversions.getItemAt(0);return e.map(((e,i)=>{const r=!(t||!s)&&(s.format.name===e.name||this.conversions.map((e=>e.format.name)).includes(e.name));return m("option",{"aria-label":e.label,"data-format":e,disabled:r,key:e.name,selected:i===o,value:e.label},e.label.toUpperCase())})).toArray()}_renderPopup(){return m("div",{class:_,role:"alert"},this._popupMessage)}_renderClipboardPopup(){return m("div",{class:this.classes(_,"esri-coordinate-conversion__clipboard-popup"),role:"alert"},this.messages.copySuccessMessage)}_renderPrimaryTools(){const{messages:e,visibleElements:t}=this,o="live"===this.mode?e.captureMode:e.liveMode,s=t.inputButton&&m("li",{bind:this,class:j,onclick:this._toggleInputVisibility,onkeydown:this._toggleInputVisibility,role:"button",tabindex:"0",title:e.inputCoordTitle},m("span",{"aria-hidden":"true",class:"esri-icon-edit"})),i=t.captureButton&&m("li",{bind:this,class:this.classes(j,"esri-coordinate-conversion__mode-toggle"),onclick:this._toggleMode,onkeydown:this._toggleMode,role:"button",tabindex:"0",title:o},m("span",{"aria-hidden":"true",class:"esri-icon-map-pin"})),r=t.settingsButton&&m("li",{bind:this,class:j,onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:e.settingsTitle},m("span",{"aria-hidden":"true",class:"esri-icon-settings2"}));return m("ul",{class:g},s,i,r)}_renderSettings(){const e=this.id,t=`${e}__${y}`,o=`${e}__${y}__header`,s=`${e}__esri-coordinate-conversion__preview-coordinate`,i=this.formats.filter((e=>e.hasDisplayProperties)),r=this._findSettingsFormat(),n=i.indexOf(r),a=this._renderOptions(i,!0,n),l=r.get("currentPattern"),{messages:c,messagesCommon:d,headingLevel:u}=this;return m("div",{"aria-labelledby":o,class:"esri-coordinate__settings",key:"esri-coordinate-conversion__settings"},m("div",{class:"esri-coordinate-conversion__heading"},m("div",{bind:this,class:this.classes(j,"esri-coordinate-conversion__back-button"),onclick:this._toggleSettingsVisibility,onkeydown:this._toggleSettingsVisibility,role:"button",tabindex:"0",title:d.back},this._renderBackIcon()),m(p,{level:u,class:"esri-widget__heading",id:o},c.settingsTitle)),m("div",{class:"esri-coordinate-conversion__settings-group"},m("label",{for:t},c.changeCoordinateDisplay),m("select",{"aria-label":c.selectFormat,class:"esri-select",bind:this,onchange:this._setSettingsFormat,title:c.selectFormat},a),m("div",{class:"esri-coordinate-conversion__settings-group-horizontal"},m("input",{"aria-controls":s,bind:this,class:this.classes(y,"esri-input"),id:t,oninput:this._updateCurrentPattern,spellcheck:!1,title:c.changeCoordinateDisplay,type:"text",value:l}),m("div",{"aria-controls":t,bind:this,class:j,onclick:this._setDefaultPattern,onkeydown:this._setDefaultPattern,role:"button",tabindex:"0",title:c.defaultPattern},m("span",{"aria-hidden":"true",class:"esri-icon-refresh"})))),m("div",{class:"esri-coordinate-conversion__settings-group"},m("label",null,d.preview,m("div",{class:"esri-coordinate-conversion__preview-coordinate",id:s,tabindex:"0"},this._previewConversion.displayCoordinate))))}_renderBackIcon(){return m("span",{"aria-hidden":"true",class:h(this.container)?"esri-icon-right-arrow":"esri-icon-left-arrow"})}_renderTools(e,t,o){const s=t.displayCoordinate&&"capture"===this.mode?this._renderCopyButton(t):null,{messages:i}=this;return m("ul",{class:g,role:"listitem"},s,m("li",{"aria-controls":o,"aria-label":i.removeConversion,bind:this,class:this.classes(j,"esri-coordinate-conversion__row-button"),"data-index":e,key:`${o}__esri-widget--button`,onclick:this._removeConversion,onkeydown:this._removeConversion,tabindex:"0",role:"button",title:i.removeConversion},m("span",{"aria-hidden":"true",class:"esri-icon-close"})))}_copyCoordinateOutput(e){const t=e.target;if(!("createTextRange"in document.body)){const e=window.getSelection(),o=document.createRange();o.selectNodeContents(t),e.removeAllRanges(),e.addRange(o)}document.execCommand("copy")}_removeConversion(e){const t=e.currentTarget["data-index"];this.conversions.removeAt(t)}_setDefaultPattern(e){e.stopPropagation();const t=this._findSettingsFormat();t&&(t.currentPattern=t.get("defaultPattern"))}_toggleExpand(){this._expanded=!this._expanded}_toggleInputVisibility(){this._inputVisible=!this._inputVisible,this._popupVisible&&this._hidePopup(),this._inputVisible?this.viewModel.pause():this.viewModel.resume()}_toggleMode(){this.mode="live"===this.mode?"capture":"live"}_toggleSettingsVisibility(){this._settingsVisible=!this._settingsVisible,this._popupVisible&&this._hidePopup(),this._settingsVisible?(this._setPreviewConversion(),this.viewModel.pause()):this.viewModel.resume()}};e([s()],k.prototype,"conversions",null),e([s()],k.prototype,"currentLocation",null),e([s()],k.prototype,"formats",null),e([s()],k.prototype,"goToOverride",null),e([s()],k.prototype,"headingLevel",void 0),e([s()],k.prototype,"label",null),e([s(),d("esri/widgets/CoordinateConversion/t9n/CoordinateConversion")],k.prototype,"messages",void 0),e([s(),d("esri/t9n/common")],k.prototype,"messagesCommon",void 0),e([s()],k.prototype,"mode",null),e([s()],k.prototype,"orientation",void 0),e([s()],k.prototype,"multipleConversions",null),e([s()],k.prototype,"locationSymbol",null),e([s()],k.prototype,"storageEnabled",null),e([s()],k.prototype,"storageType",null),e([s()],k.prototype,"view",null),e([s({type:a})],k.prototype,"viewModel",void 0),e([s()],k.prototype,"visibleElements",void 0),e([i("visibleElements")],k.prototype,"castVisibleElements",null),e([c()],k.prototype,"_copyCoordinateOutput",null),e([c()],k.prototype,"_removeConversion",null),e([c()],k.prototype,"_setDefaultPattern",null),e([c()],k.prototype,"_toggleExpand",null),e([c()],k.prototype,"_toggleInputVisibility",null),e([c()],k.prototype,"_toggleMode",null),e([c()],k.prototype,"_toggleSettingsVisibility",null),k=e([r("esri.widgets.CoordinateConversion")],k);const f=k;export{f as default};