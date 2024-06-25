// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../TimeInterval ../core/arrayUtils ../core/Collection ../core/compilerUtils ../core/maybe ../core/reactiveUtils ../core/timeUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../intl/date ./Slider ./Widget ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ../support/themeUtils ./TimeSlider/TimeSliderViewModel".split(" "),
function(O,G,e,b,Y,Z,aa,d,H,P,g,ka,ba,y,ca,da,I,Q,ea,c,fa,ha,J){const ia=new Z([{minor:new b({value:100,unit:"milliseconds"}),major:new b({value:1,unit:"seconds"}),format:{second:"numeric"}},{minor:new b({value:500,unit:"milliseconds"}),major:new b({value:5,unit:"seconds"}),format:{second:"numeric"}},{minor:new b({value:1,unit:"seconds"}),major:new b({value:20,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new b({value:2,unit:"seconds"}),major:new b({value:30,unit:"seconds"}),
format:{minute:"numeric",second:"numeric"}},{minor:new b({value:10,unit:"seconds"}),major:new b({value:1,unit:"minutes"}),format:{minute:"numeric"}},{minor:new b({value:15,unit:"seconds"}),major:new b({value:5,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new b({value:1,unit:"minutes"}),major:new b({value:20,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new b({value:5,unit:"minutes"}),major:new b({value:2,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},
{minor:new b({value:15,unit:"minutes"}),major:new b({value:6,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new b({value:1,unit:"hours"}),major:new b({value:1,unit:"days"}),format:{day:"numeric",month:"short"}},{minor:new b({value:6,unit:"hours"}),major:new b({value:1,unit:"weeks"}),format:{day:"numeric",month:"short"}},{minor:new b({value:1,unit:"days"}),major:new b({value:1,unit:"months"}),format:{month:"long"}},{minor:new b({value:2,unit:"days"}),major:new b({value:1,unit:"months"}),
format:{month:"short"}},{minor:new b({value:3,unit:"days"}),major:new b({value:1,unit:"months"}),format:{month:"short"}},{minor:new b({value:4,unit:"days"}),major:new b({value:3,unit:"months"}),format:{month:"short",year:"numeric"}},{minor:new b({value:1,unit:"weeks"}),major:new b({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new b({value:1,unit:"months"}),major:new b({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new b({value:2,unit:"months"}),major:new b({value:2,unit:"years"}),
format:{year:"numeric"}},{minor:new b({value:1,unit:"years"}),major:new b({value:1,unit:"decades"}),format:{year:"numeric"}},{minor:new b({value:2,unit:"years"}),major:new b({value:5,unit:"decades"}),format:{year:"numeric"}},{minor:new b({value:5,unit:"decades"}),major:new b({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:1,unit:"centuries"}),major:new b({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:2,unit:"centuries"}),
major:new b({value:20,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:5,unit:"centuries"}),major:new b({value:50,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:10,unit:"centuries"}),major:new b({value:100,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:20,unit:"centuries"}),major:new b({value:200,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:50,unit:"centuries"}),major:new b({value:500,
unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:100,unit:"centuries"}),major:new b({value:1E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:200,unit:"centuries"}),major:new b({value:1E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:500,unit:"centuries"}),major:new b({value:5E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new b({value:1E3,unit:"centuries"}),major:new b({value:1E4,unit:"centuries"}),
format:{era:"short",year:"numeric"}}]);b=function(R){function z(a,f){a=R.call(this,a,f)||this;a._ignoreNextSliderUpdate=!1;a._slider=new ca({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1});a._tickFormat=null;a.disabled=!1;a.iconClass="esri-icon-time-clock";a.labelFormatFunction=null;a.messages=null;a.messagesCommon=null;a.tickConfigs=null;a.timeVisible=!1;a.viewModel=new J;return a}G._inheritsLoose(z,R);var k=z.prototype;k.initialize=function(){this.addHandles([H.watch(()=>
this._slider.values,a=>{this._ignoreNextSliderUpdate?this._ignoreNextSliderUpdate=!1:(a=this.viewModel.valuesToTimeExtent(a),d.isSome(this.timeExtent)?d.isSome(a)?this.timeExtent.equals(a)||(this.timeExtent=a):this.timeExtent=null:d.isSome(a)&&(this.timeExtent=a))}),H.watch(()=>this.effectiveStops,()=>this._updateSliderSteps(),H.initial)])};k.loadDependencies=function(){return Promise.all([new Promise((a,f)=>O(["../chunks/calcite-action"],a,f)),new Promise((a,f)=>O(["../chunks/calcite-action-menu"],
a,f))])};k.destroy=function(){this._slider.destroy();this._tickFormat=null};z.getPropertiesFromWebMap=function(){var a=G._asyncToGenerator(function*(f,r){return J.getPropertiesFromWebMap(f,r)});return function(f,r){return a.apply(this,arguments)}}();k.next=function(){return this.viewModel.next()};k.play=function(){return this.viewModel.play()};k.previous=function(){return this.viewModel.previous()};k.stop=function(){return this.viewModel.stop()};k.render=function(){const {_slider:a,actions:f,domNode:r,
effectiveStops:B,fullTimeExtent:m,interactive:t,messages:K,messagesCommon:q,mode:S,tickConfigs:L,timeExtent:h,timeVisible:C,viewModel:{state:T,timeExtentValues:M}}=this;if(d.isSome(m)){const {start:l,end:U}=m;if(d.isSome(l)&&d.isSome(U)){var n=l.getTime(),u=U.getTime(),w=a.min!==n||a.max!==u;w&&(a.min=n,a.max=u);if(d.isSome(L))a.tickConfigs!==L&&(a.tickConfigs=L);else{const ja=(u-n)/(a.trackElement?.offsetWidth||400),x=ia.find(A=>A.minor.toMilliseconds()>3*ja);if(n=this._tickFormat!==x&&null!=x)this._tickFormat=
x;if(w||n)w={mode:"position",values:this._getTickPositions(x.minor),labelsVisible:!1,tickCreatedFunction:(A,N)=>{N.classList.add("minorTick")}},n={mode:"position",values:this._getTickPositions(x.major),labelsVisible:!0,tickCreatedFunction:(A,N)=>{N.classList.add("majorTick")},labelFormatFunction:A=>y.formatDate(A,x.format)},a.tickConfigs=[w,n]}}}if(w=d.isNone(this.fullTimeExtent)||d.isNone(this.timeExtent)||this.timeExtent.isAllTime||this.timeExtent.isEmpty||d.isSome(this.timeExtent.start)&&(this.timeExtent.start<
this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||d.isSome(this.timeExtent.end)&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start))switch(this._ignoreNextSliderUpdate=!0,S){case "time-window":a.values=[a.min,a.max];break;case "instant":case "cumulative-from-end":a.values=[a.min];break;case "cumulative-from-start":a.values=[a.max]}else d.isSome(M)?Y.equals(a.values,M)||(a.values=M):a.values=null;a.disabled=!t;u="ready"===T;var v="playing"===
T,p=w||!t||d.isNone(B)||0===B.length;n="auto"===this.layout?858>r.clientWidth?"compact":"wide":this.layout;u=c.tsx("div",{class:"esri-time-slider__animation"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":v?q.control.stop:q.control.play,bind:this,class:this.classes("esri-widget--button","esri-time-slider__animation-button",p&&"esri-button--disabled"),disabled:p,title:v?q.control.stop:q.control.play,onclick:this._playOrStopClick,type:"button"},c.tsx("div",{class:this.classes((u||p)&&
"esri-icon-play",v&&"esri-icon-pause")})));var D=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"extent",bind:this,class:"esri-time-slider__time-extent-date","data-type":"extent","data-layout":n,"data-date":d.applySome(h,l=>[l.start,l.end]),afterCreate:this._createLabel,afterUpdate:this._createLabel}):d.isNone(h)||d.isSome(h)&&h.isAllTime?[c.tsx("div",{class:this.classes("esri-time-slider__warning","esri-icon-notice-triangle")}),c.tsx("div",{key:"warning-text",class:"esri-time-slider__warning-text"},
K.noTimeExtent)]:h.isEmpty?[c.tsx("div",{class:this.classes("esri-time-slider__warning","esri-icon-notice-triangle")}),c.tsx("div",{key:"warning-text",class:"esri-time-slider__warning-text"},K.emptyTimeExtent)]:[d.isSome(h.start)&&c.tsx("div",{key:"start-date-group",class:"esri-time-slider__time-extent-group"},c.tsx("div",{key:"start-date",class:"esri-time-slider__time-extent-date"},this._formatDate(h.start)),C&&c.tsx("div",{key:"start-time",class:"esri-time-slider__time-extent-time"},this._formatTime(h.start))),
d.isSome(h.start)&&d.isSome(h.end)&&h.start.getTime()!==h.end.getTime()&&c.tsx("div",{key:"separator",class:"esri-time-slider__time-extent-separator"},"\u2013"),d.isSome(h.end)&&(d.isNone(h.start)||h.start.getTime()!==h.end.getTime())&&c.tsx("div",{key:"end-date-group",class:"esri-time-slider__time-extent-group"},c.tsx("div",{key:"end-date",class:"esri-time-slider__time-extent-date"},this._formatDate(h.end)),C&&c.tsx("div",{key:"end-time",class:"esri-time-slider__time-extent-time"},this._formatTime(h.end)))];
D=c.tsx("div",{class:this.classes("esri-time-slider__time-extent",!t&&"esri-button--disabled")},[D]);var E=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"min-date",bind:this,class:"esri-time-slider__min-date","data-date":d.applySome(m,l=>l.start),"data-type":"min","data-layout":n,afterCreate:this._createLabel,afterUpdate:this._createLabel}):d.isSome(m)&&d.isSome(m.start)&&[c.tsx("div",{key:"min-date",class:"esri-time-slider__min-date"},this._formatDate(m.start)),C&&c.tsx("div",{key:"min-time",
class:"esri-time-slider__min-time"},this._formatTime(m.start))];E=c.tsx("div",{class:this.classes("esri-time-slider__min",!t&&"esri-button--disabled")},[E]);const V=c.tsx("div",{class:"esri-time-slider__slider"},a.render());var F=d.isSome(this.labelFormatFunction)?c.tsx("div",{key:"max-date",bind:this,class:"esri-time-slider__max-date","data-date":d.applySome(m,l=>l.end),"data-type":"max","data-layout":n,afterCreate:this._createLabel,afterUpdate:this._createLabel}):d.isSome(m)&&d.isSome(m.end)&&[c.tsx("div",
{key:"max-date",class:"esri-time-slider__max-date"},this._formatDate(m.end)),C&&c.tsx("div",{key:"max-time",class:"esri-time-slider__max-time"},this._formatTime(m.end))];F=c.tsx("div",{class:this.classes("esri-time-slider__max",!t&&"esri-button--disabled")},[F]);const W=c.tsx("div",{class:"esri-time-slider__previous"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":q.pagination.previous,bind:this,class:this.classes("esri-widget--button","esri-time-slider__previous-button",(v||p)&&"esri-button--disabled"),
disabled:p,title:q.pagination.previous,onclick:this._previousClick,type:"button"},c.tsx("div",{class:"esri-icon-reverse"})));v=c.tsx("div",{class:"esri-time-slider__next"},c.tsx("button",{"aria-disabled":p?"true":"false","aria-label":q.pagination.next,bind:this,class:this.classes("esri-widget--button","esri-time-slider__next-button",(v||p)&&"esri-button--disabled"),disabled:p,title:q.pagination.next,onclick:this._nextClick,type:"button"},c.tsx("div",{class:"esri-icon-forward"})));const X=(p=0<f?.length)&&
c.tsx("div",{class:"esri-time-slider__actions",title:q.options},c.tsx("calcite-action-menu",{label:q.options,class:"esri-time-slider__actions-button"},f.toArray().map(l=>c.tsx("calcite-action",{bind:this,icon:l.icon,id:l.id,onCalciteActionClick:()=>this.viewModel.triggerAction(l),text:l.title,textEnabled:!0}))));return c.tsx("div",{class:this.classes("esri-time-slider","esri-widget",`${"esri-time-slider__mode--"}${S}`,`${"esri-time-slider__layout--"}${n}`,!t&&"esri-disabled",w&&"esri-time-slider--out-of-bounds",
p&&"esri-time-slider--has-actions",ha.getCalciteThemeClass()),afterCreate:l=>{this.addHandles(fa.onResize(l,()=>this.scheduleRender()))},"aria-label":K.widgetLabel},"wide"===n&&c.tsx("div",{class:"esri-time-slider__row"},c.tsx("div",{class:"esri-time-slider__playback-controls"},[u,D,E,V,F,W,v]),X),"compact"===n&&[c.tsx("div",{key:"time-slider-row-1",class:"esri-time-slider__row"},[D,X]),c.tsx("div",{key:"time-slider-row-2",class:"esri-time-slider__row"},[V]),c.tsx("div",{key:"time-slider-row-3",class:"esri-time-slider__row"},
[E,W,u,v,F])])};k.updateWebDocument=function(a){this.viewModel?.updateWebDocument(a)};k._createLabel=function(a){if(!d.isNone(this.labelFormatFunction)){var f=a.getAttribute("data-type"),r=a.getAttribute("data-layout");this.labelFormatFunction(a["data-date"],f,a,r)}};k._getTickPositions=function(a){var {fullTimeExtent:f}=this;if(d.isNone(f)||d.isNone(f.start)||d.isNone(f.end))return[];const {start:r,end:B}=f;f=[];const {value:m,unit:t}=a;for(a=P.truncateDate(r,t);a.getTime()<=B.getTime();)a.getTime()>=
r.getTime()&&f.push(a.getTime()),a=P.offsetDate(a,m,t);return f};k._formatDate=function(a){return a?y.formatDate(a,y.convertDateFormatToIntlOptions("short-date")):null};k._formatTime=function(a){return a?y.formatDate(a,y.convertDateFormatToIntlOptions("long-time")):null};k._updateSliderSteps=function(){this._slider.steps=d.isSome(this.effectiveStops)&&0<this.effectiveStops.length?this.effectiveStops.map(a=>a.getTime()):null};k._playOrStopClick=function(){switch(this.viewModel.state){case "ready":this.viewModel.play();
break;case "playing":this.viewModel.stop();break;case "disabled":break;default:aa.neverReached(this.viewModel.state)}};k._previousClick=function(){this.viewModel.previous()};k._nextClick=function(){this.viewModel.next()};G._createClass(z,[{key:"actions",get:function(){return this.viewModel.actions},set:function(a){this.viewModel.actions=a}},{key:"effectiveStops",get:function(){return this.viewModel.effectiveStops}},{key:"fullTimeExtent",get:function(){return this.viewModel.fullTimeExtent},set:function(a){this.viewModel.fullTimeExtent=
a}},{key:"interactive",get:function(){return!this.disabled&&"disabled"!==this.viewModel?.state}},{key:"label",get:function(){return this.messages?.widgetLabel??""},set:function(a){this._overrideIfSome("label",a)}},{key:"layout",set:function(a){["auto","compact","wide"].includes(a)||(a="auto");this._set("layout",a)}},{key:"loop",get:function(){return this.viewModel.loop},set:function(a){this.viewModel.loop=a}},{key:"mode",get:function(){return this.viewModel.mode},set:function(a){this.viewModel.mode=
a}},{key:"playRate",get:function(){return this.viewModel.playRate},set:function(a){this.viewModel.playRate=a}},{key:"stops",get:function(){return this.viewModel.stops},set:function(a){this.viewModel.stops=a}},{key:"timeExtent",get:function(){return this.viewModel.timeExtent},set:function(a){this.viewModel.timeExtent=a}},{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}}]);return z}(da);e.__decorate([g.property()],b.prototype,"actions",null);e.__decorate([g.property()],
b.prototype,"disabled",void 0);e.__decorate([g.property()],b.prototype,"effectiveStops",null);e.__decorate([g.property()],b.prototype,"fullTimeExtent",null);e.__decorate([g.property()],b.prototype,"iconClass",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"interactive",null);e.__decorate([g.property()],b.prototype,"label",null);e.__decorate([g.property()],b.prototype,"labelFormatFunction",void 0);e.__decorate([g.property({value:"auto"})],b.prototype,"layout",null);e.__decorate([g.property()],
b.prototype,"loop",null);e.__decorate([g.property(),Q.messageBundle("esri/widgets/TimeSlider/t9n/TimeSlider")],b.prototype,"messages",void 0);e.__decorate([g.property(),Q.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);e.__decorate([g.property()],b.prototype,"mode",null);e.__decorate([g.property()],b.prototype,"playRate",null);e.__decorate([g.property()],b.prototype,"stops",null);e.__decorate([g.property()],b.prototype,"tickConfigs",void 0);e.__decorate([g.property()],b.prototype,
"timeExtent",null);e.__decorate([g.property({nonNullable:!0})],b.prototype,"timeVisible",void 0);e.__decorate([g.property()],b.prototype,"view",null);e.__decorate([g.property({type:J}),ea.vmEvent("trigger-action")],b.prototype,"viewModel",void 0);e.__decorate([I.accessibleHandler()],b.prototype,"_playOrStopClick",null);e.__decorate([I.accessibleHandler()],b.prototype,"_previousClick",null);e.__decorate([I.accessibleHandler()],b.prototype,"_nextClick",null);return b=e.__decorate([ba.subclass("esri.widgets.TimeSlider")],
b)});