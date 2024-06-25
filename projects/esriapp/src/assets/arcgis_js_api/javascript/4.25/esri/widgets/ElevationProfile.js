// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/asyncUtils ../core/maybe ../core/memoize ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./Widget ./ElevationProfile/css ./ElevationProfile/ElevationProfileViewModel ./ElevationProfile/ElevationProfileVisibleElements ./ElevationProfile/components/Legend ./ElevationProfile/components/SettingsButton ./ElevationProfile/support/chartUtils ./ElevationProfile/support/constants ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(x,e,C,k,z,D,r,g,d,M,E,F,h,A,B,G,H,I,l,J,y,p){var n;(function(q){q.Sketch="sketch";q.SketchCancel="sketch-cancel";q.SketchDone="sketch-done";q.Select="select";q.SelectCancel="select-cancel"})(n||(n={}));const u=[{type:n.Select},{type:n.Sketch}],K={[l.ElevationProfileErrorState.None]:null,[l.ElevationProfileErrorState.NoValidInput]:"noProfile",[l.ElevationProfileErrorState.NoVisibleProfiles]:"noProfile",[l.ElevationProfileErrorState.RefinedButNoChartData]:"noProfile",[l.ElevationProfileErrorState.TooComplex]:"tooComplex",
[l.ElevationProfileErrorState.UnknownError]:"unknown",[l.ElevationProfileErrorState.InvalidGeometry]:"invalidGeometry",[l.ElevationProfileErrorState.InvalidElevationInfo]:"invalidElevationInfo"};d=function(q){function w(a,b){b=q.call(this,a,b)||this;b.viewModel=null;b.visibleElements=new B;b.iconClass=h.CSS.widgetIcon;b.messages=null;b.messagesCommon=null;b.messagesUnits=null;b._chartContainer=null;b._chart=null;b._chartInitTask=null;b._chartIsRefined=!1;b._width=0;b._zoomOutButtonVisible=!1;b._getChartUpdateParamsMemoized=
z.memoize((f,m,t,v)=>({chart:f,data:m,stationary:t,messages:v}));b._getDetailsPropsMemoized=z.memoize((f,m)=>({effectiveUnits:f,profiles:m}));a?.viewModel||(b._defaultViewModel=new A({view:a?.view}),b.viewModel=b._defaultViewModel);return b}x._inheritsLoose(w,q);var c=w.prototype;c.initialize=function(){this._legend=new G.Legend(this._legendProps);this._settingsButton=new H.SettingsButton(this._settingsButtonProps);this.addHandles([r.watch(()=>this._legendProps,a=>this._legend.set(a)),r.watch(()=>
this._settingsButtonProps,a=>this._settingsButton.set(a))])};c.postInitialize=function(){this.addHandles([r.watch(()=>({container:this._chartContainer,width:this._width}),({container:a,width:b})=>{this._destroyChart();k.isSome(a)&&0<b&&this._initializeChart(a)},r.initial),r.watch(()=>this._chartUpdateParams,()=>this._updateChart(this._chartUpdateParams),r.initial)])};c.destroy=function(){this._destroyChart();k.isSome(this._defaultViewModel)&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy();
this._legend=k.destroyMaybe(this._legend);this._settingsButton=k.destroyMaybe(this._settingsButton)};c.render=function(){const {viewModel:a,visible:b}=this;return p.tsx("div",{key:this,class:this.classes({[h.CSS.base]:b,[h.CSS.esriWidget]:b,[h.CSS.esriWidgetDisabled]:b&&"disabled"===a.state,[h.CSS.portrait]:this._portrait,[h.CSS.refined]:1===a.progress}),"aria-label":this.messages.widgetLabel,afterCreate:f=>{this.addHandles(J.onResize(f,m=>{this._width=m.contentRect.width}))}},b&&this._renderContentForState())};
c._renderContentForState=function(){switch(this.viewModel.state){case l.ElevationProfileState.Ready:return this._renderContentForReadyState();case l.ElevationProfileState.Selecting:return this._renderContentForSelectingState();case l.ElevationProfileState.Creating:return this._renderContentForCreatingState();case l.ElevationProfileState.Selected:return this._renderContentForSelectedState();case l.ElevationProfileState.Created:return this._renderContentForCreatedState();case l.ElevationProfileState.Disabled:return this._renderContentForReadyState()}};
c._renderContentForReadyState=function(){const {sketchButton:a,selectButton:b}=this.visibleElements,f=this.messages;return this._renderContent({prompt:a&&b?f.readyPrompt:a?f.readyPromptCreateOnly:b?f.readyPromptSelectOnly:f.errors?.noProfile,chart:!1,actions:u})};c._renderContentForSelectingState=function(){const a=this.view;return k.isNone(a)?null:this._renderContent({prompt:this.messages[`selectingPrompt-${a.type}`],chart:!1,actions:[{type:n.SelectCancel}]})};c._renderContentForCreatingState=function(){const {view:a,
viewModel:b}=this;if(k.isNone(a))return null;const f=b.hasVertices?[{type:n.SketchCancel},{type:n.SketchDone,disabled:!b.tool.interaction.canStopCreating}]:[{type:n.Select},{type:n.Sketch,disabled:!0}];if(b.errorState===l.ElevationProfileErrorState.NoValidInput)return this._renderContent({chart:!1,actions:f,prompt:this.messages[`creatingPrompt-${a.type}`]});const m=this._getErrorMessage();return m?this._renderContent({chart:!1,actions:f,prompt:m}):this._renderContent({chart:!0,actions:f})};c._renderContentForSelectedState=
function(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:u,prompt:a}):this._renderContent({chart:!0,actions:u})};c._renderContentForCreatedState=function(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:u,prompt:a}):this._renderContent({chart:!0,actions:u})};c._getErrorMessage=function(){const a=K[this.viewModel.errorState];return this.messages?.errors?.[a]};c._renderContent=function(a){const b=k.isSome(a.prompt)?this._renderPrompt(a.prompt):
a.chart&&this._renderChart(),f=k.isSome(this.viewModel.input);return[p.tsx("header",{key:"header",class:h.CSS.header},this._zoomOutButtonVisible&&this._renderZoomOutButton(),this.visibleElements.clearButton&&f&&this._renderClearButton(),this.visibleElements.settingsButton&&this._settingsButton.render()),p.tsx("div",{class:h.CSS.mainContainer},b),this.visibleElements.legend&&this._legend.render(),this._renderActions(a)]};c._renderZoomOutButton=function(){return p.tsx("button",{key:"zoom-out",class:h.CSS.zoomOutButton,
bind:this,onclick:this._onZoomOutButtonClick,title:this.messages.zoomOut,type:"button"})};c._onZoomOutButtonClick=function(){k.applySome(this._chart,a=>a.zoomOut())};c._renderClearButton=function(){return p.tsx("button",{key:"clear-profile",class:h.CSS.clearButton,bind:this,onclick:this._onClearButtonClick,title:this.messages.clearProfile,type:"button"})};c._onClearButtonClick=function(){this.viewModel.clear()};c._renderPrompt=function(a){return[p.tsx("div",{key:"prompt-container",bind:this,class:h.CSS.promptContainer},
p.tsx("p",null,a))]};c._renderChart=function(){if(!this.visibleElements.chart)return[p.tsx("div",{key:"empty-chart-container",class:h.CSS.chartContainer})];const a=this._chartIsRefined||this._canRenderChart();if(!a)return[this._renderSpinner({size:"large"}),p.tsx("div",{key:"chart-container-empty",class:h.CSS.chartContainer})];const {chartData:b,progress:f}=this.viewModel;return[k.isSome(b)&&0<f&&1>f&&this._renderSpinner({size:a?"small":"large"}),p.tsx("div",{key:"chart-container",bind:this,class:h.CSS.chartContainer,
afterCreate:this._onChartContainerAfterCreate,afterRemoved:this._onChartContainerRemoved})]};c._renderSpinner=function(a){return p.tsx("div",{key:"spinner",class:this.classes(h.CSS.chartSpinner,{[h.CSS.chartSpinnerSmall]:"small"===a.size}),afterCreate:this._onSpinnerAfterCreate,exitAnimation:this._onSpinnerExit})};c._onSpinnerAfterCreate=function(a){requestAnimationFrame(()=>a.classList.add(h.CSS.chartSpinnerVisible))};c._onSpinnerExit=function(a,b){a.classList.remove(h.CSS.chartSpinnerVisible);setTimeout(b,
200)};c._canRenderChart=function(){const a=this.viewModel.chartData;if(k.isNone(a))return!1;if(!this.viewModel.inputIsSketched)return a.refined;let b=0;for(const {samples:f}of a.lines)b+=k.isSome(f)?f.length:0;return a.refined||b<=l.getConfig().largeChartSamples};c._renderActions=function({actions:a}){a=a.map(b=>{switch(b.type){case n.Sketch:return this.visibleElements.sketchButton&&this._renderAction({action:b,onClick:this._onSketchButtonClick,className:h.CSS.sketchButton,label:this.messages.sketchButtonLabel});
case n.SketchCancel:return this.visibleElements.sketchButton&&this._renderAction({action:b,onClick:this._onCancelButtonClick,className:h.CSS.sketchCancelButton,label:this.messagesCommon.cancel});case n.SketchDone:return this.visibleElements.sketchButton&&this._renderAction({action:b,onClick:this._onDoneButtonClick,className:h.CSS.sketchDoneButton,label:this.messagesCommon.done});case n.Select:return this.visibleElements.selectButton&&this._renderAction({action:b,onClick:this._onSelectButtonClick,
className:h.CSS.selectButton,label:this.messages.selectButtonLabel});case n.SelectCancel:return this.visibleElements.selectButton&&this._renderAction({action:b,onClick:this._onCancelButtonClick,className:h.CSS.selectCancelButton,label:this.messagesCommon.cancel})}}).filter(Boolean);return a.length?p.tsx("footer",{key:"footer",class:h.CSS.footer},a):null};c._renderAction=function({action:a,onClick:b,className:f,label:m}){return p.tsx("button",{key:`action-${a.type}`,class:this.classes(h.CSS.actionButton,
f,{[h.CSS.buttonDisabled]:a.disabled}),bind:this,disabled:a.disabled,onclick:b,type:"button"},m)};c._onSketchButtonClick=function(){this.viewModel.start({mode:"sketch"})};c._onSelectButtonClick=function(){this.viewModel.start({mode:"select"})};c._onCancelButtonClick=function(){this.viewModel.cancel()};c._onDoneButtonClick=function(){this.viewModel.stop()};c._updateChart=function(a){const {data:b,chart:f,messages:m,stationary:t}=a;!k.isNone(f)&&!k.isNone(m)&&t&&this._canRenderChart()&&(f.update(a),
this._chartIsRefined=k.isSome(b)&&b.refined)};c._onChartContainerAfterCreate=function(a){this._chartContainer=a};c._onChartContainerRemoved=function(){this._chartContainer=null};c._initializeChart=function(a){var b=this;k.abortMaybe(this._chartInitTask);this._chartInitTask=C.createTask(function(){var f=x._asyncToGenerator(function*(m){const t=yield I.createChart({container:a,abortOptions:{signal:m},onRangeChange:(v,L)=>{b._zoomOutButtonVisible=1!==v||1!==L},onCursorPositionChange:v=>{b.viewModel.hoveredChartPosition=
v}});if(m.aborted)throw k.destroyMaybe(t),D.createAbortError();b._chart=t;b._updateChart(b._chartUpdateParams)});return function(m){return f.apply(this,arguments)}}())};c._destroyChart=function(){this._chartInitTask=k.abortMaybe(this._chartInitTask);this._chart=k.destroyMaybe(this._chart);this._chartIsRefined=!1};x._createClass(w,[{key:"view",get:function(){return this.viewModel.view},set:function(a){this.viewModel.view=a}},{key:"input",get:function(){return this.viewModel.input},set:function(a){this.viewModel.input=
a}},{key:"profiles",get:function(){return this.viewModel.profiles},set:function(a){this.viewModel.profiles=a}},{key:"unitOptions",get:function(){return this.viewModel.unitOptions},set:function(a){this.viewModel.unitOptions=a}},{key:"unit",get:function(){return this.viewModel.unit},set:function(a){this.viewModel.unit=a}},{key:"geodesicDistanceThreshold",get:function(){return this.viewModel.geodesicDistanceThreshold},set:function(a){this.viewModel.geodesicDistanceThreshold=a}},{key:"label",get:function(){return this.messages?.widgetLabel??
""},set:function(a){this._overrideIfSome("label",a)}},{key:"visible",get:function(){return this.viewModel.visible},set:function(a){this.viewModel.visible=a}},{key:"_portrait",get:function(){return this._width<l.getConfig().portraitModePixelBreakpoint}},{key:"_chartUpdateParams",get:function(){const a=this.view;return this._getChartUpdateParamsMemoized(this._chart,this.viewModel.chartData,k.isSome(a)?a.stationary:!0,this._chartMessages)}},{key:"_chartMessages",get:function(){return{...this.messagesUnits,
...this.messages}}},{key:"_legendProps",get:function(){return this._getDetailsPropsMemoized(this.viewModel.effectiveUnits,this._profilesArray)}},{key:"_profilesArray",get:function(){return this.profiles.toArray()}},{key:"_settingsButtonProps",get:function(){return{viewModel:this.viewModel,visibleElements:this.visibleElements}}},{key:"test",get:function(){return{projector:this._projector,chart:this._chart}}}]);return w}(F);e.__decorate([g.property({type:A})],d.prototype,"viewModel",void 0);e.__decorate([g.property()],
d.prototype,"view",null);e.__decorate([g.property()],d.prototype,"input",null);e.__decorate([g.property()],d.prototype,"profiles",null);e.__decorate([g.property()],d.prototype,"unitOptions",null);e.__decorate([g.property()],d.prototype,"unit",null);e.__decorate([g.property()],d.prototype,"geodesicDistanceThreshold",null);e.__decorate([g.property({type:B,nonNullable:!0})],d.prototype,"visibleElements",void 0);e.__decorate([g.property()],d.prototype,"iconClass",void 0);e.__decorate([g.property()],d.prototype,
"label",null);e.__decorate([g.property()],d.prototype,"visible",null);e.__decorate([g.property(),y.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],d.prototype,"messages",void 0);e.__decorate([g.property(),y.messageBundle("esri/t9n/common")],d.prototype,"messagesCommon",void 0);e.__decorate([g.property(),y.messageBundle("esri/core/t9n/Units")],d.prototype,"messagesUnits",void 0);e.__decorate([g.property()],d.prototype,"_chartContainer",void 0);e.__decorate([g.property()],d.prototype,
"_chart",void 0);e.__decorate([g.property()],d.prototype,"_chartInitTask",void 0);e.__decorate([g.property()],d.prototype,"_chartIsRefined",void 0);e.__decorate([g.property()],d.prototype,"_settingsButton",void 0);e.__decorate([g.property()],d.prototype,"_legend",void 0);e.__decorate([g.property()],d.prototype,"_width",void 0);e.__decorate([g.property()],d.prototype,"_portrait",null);e.__decorate([g.property()],d.prototype,"_zoomOutButtonVisible",void 0);e.__decorate([g.property()],d.prototype,"_chartUpdateParams",
null);e.__decorate([g.property()],d.prototype,"_chartMessages",null);e.__decorate([g.property()],d.prototype,"_legendProps",null);e.__decorate([g.property()],d.prototype,"_profilesArray",null);e.__decorate([g.property()],d.prototype,"_settingsButtonProps",null);return d=e.__decorate([E.subclass("esri.widgets.ElevationProfile")],d)});