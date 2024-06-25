// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../request ../core/Error ../core/Loadable ../core/Logger ../core/maybe ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/SpatialReference ../layers/mixins/EditBusLayer ../layers/support/arcgisLayerUrl ./support/utils ../rest/networks/support/QueryNamedTraceConfigurationsParameters ../rest/networks/support/ValidateNetworkTopologyParameters".split(" "),
function(q,h,e,r,w,c,x,t,y,z,A,f,I,J,B,C,D,E,u,F,G,H){c=function(v){function l(a){a=v.call(this,a)||this;a.id=null;a.title=null;a.layerUrl=null;a.dataElement=null;a.fullExtent=null;a.spatialReference=null;a.type=null;a.sourceJSON=null;return a}h._inheritsLoose(l,v);l.fromPortalItem=function(a){return F.networkFromPortalItem(a)};var k=l.prototype;k.initialize=function(){this.when().catch(a=>{z.isAbortError(a)||x.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??
"no title"}', id: '${this.id??"no id"}')`,{error:a})})};k.load=function(){var a=h._asyncToGenerator(function*(b){this.addResolvingPromise(this._fetchDataElement(this.featureServiceUrl,this.layerId.toString(),b));this.addResolvingPromise(this._fetchLayerMetaData(this.layerUrl,b));return this});return function(b){return a.apply(this,arguments)}}();k.getLayerIdBySourceId=function(a){if(this.dataElement){const b=this.dataElement.domainNetworks;for(const d of b){for(const g of d.edgeSources?d.edgeSources:
[])if(g.sourceId===a)return g.layerId;for(const g of d.junctionSources?d.junctionSources:[])if(g.sourceId===a)return g.layerId}}return null};k.queryNamedTraceConfigurations=function(){var a=h._asyncToGenerator(function*(b,d){const {queryNamedTraceConfigurations:g}=yield new Promise((n,p)=>q(["../rest/networks/queryNamedTraceConfigurations"],n,p)),m=this.networkServiceUrl;b=new G({...b});return(yield g(m,b,{...d}))?.namedTraceConfigurations??null});return function(b,d){return a.apply(this,arguments)}}();
k.validateNetworkTopology=function(){var a=h._asyncToGenerator(function*(b,d){if(!b.validateArea)throw new w("network:undefined-validateArea","the network must have validateArea defined in the validate network topology parameters.");const {validateNetworkTopology:g}=yield new Promise((n,p)=>q(["../rest/networks/validateNetworkTopology"],n,p)),m=this.networkServiceUrl;b=new H({...b,returnEdits:!0});d=yield g(m,b,{...d});d?.serviceEdits&&E.editEventBus.emit("edits",{serviceUrl:this.featureServiceUrl??
"",layerId:null,event:{edits:null,addedFeatures:[],updatedFeatures:[],deletedFeatures:[],addedAttachments:[],updatedAttachments:[],deletedAttachments:[],editedFeatures:d.serviceEdits}});return d});return function(b,d){return a.apply(this,arguments)}}();k._fetchLayerMetaData=function(){var a=h._asyncToGenerator(function*(b,d){b=yield r(b,{responseType:"json",query:{f:"json"},...d});this.sourceJSON=b.data;this.read(b.data,{origin:"service"})});return function(b,d){return a.apply(this,arguments)}}();
k._fetchDataElement=function(){var a=h._asyncToGenerator(function*(b,d,g){this.dataElement||(b=yield r(`${b}/queryDataElements`,{responseType:"json",query:{layers:JSON.stringify([d]),f:"json"},...g}).then(m=>m.data.layerDataElements?.[0]))&&this.read(b,{origin:"service"})});return function(b,d,g){return a.apply(this,arguments)}}();h._createClass(l,[{key:"datasetName",get:function(){return this.dataElement?.name??null}},{key:"owner",get:function(){return this.dataElement?.userIdentity??null}},{key:"schemaGeneration",
get:function(){return this.dataElement?.schemaGeneration??null}},{key:"parsedUrl",get:function(){return A.urlToObject(this.layerUrl)}},{key:"featureServiceUrl",get:function(){const a=this.parsedUrl&&u.parse(this.parsedUrl.path);return t.isSome(a)?a.url.path:null}},{key:"networkServiceUrl",get:function(){return this.featureServiceUrl?this.featureServiceUrl.replace(/\/FeatureServer/i,"/UtilityNetworkServer"):null}},{key:"layerId",get:function(){const a=this.parsedUrl&&u.parse(this.parsedUrl.path);return t.isSome(a)?
a.sublayer:null}},{key:"networkSystemLayers",get:function(){return null}}]);return l}(y.MultiOriginJSONMixin(c));e.__decorate([f.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:!0,write:{isRequired:!0}},service:{read:!0}},read:!1}})],c.prototype,"id",void 0);e.__decorate([f.property({type:String,nonNullable:!0,json:{origins:{"web-map":{read:!0,write:{isRequired:!0}},service:{read:{source:"name"}}},read:!1}})],c.prototype,"title",void 0);e.__decorate([f.property({type:String,nonNullable:!0,
json:{origins:{"web-map":{read:{source:"url"},write:{target:"url",isRequired:!0}}},read:!1}})],c.prototype,"layerUrl",void 0);e.__decorate([f.property({type:Object,json:{origins:{service:{read:!0}},read:!1}})],c.prototype,"dataElement",void 0);e.__decorate([f.property({type:C,json:{origins:{service:{read:{source:"extent"}}},read:!1}})],c.prototype,"fullExtent",void 0);e.__decorate([f.property({type:D,json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:!1}})],c.prototype,"spatialReference",
void 0);e.__decorate([f.property({type:["utility","trace"],readOnly:!0,json:{read:!1,write:!1}})],c.prototype,"type",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"datasetName",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"owner",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"schemaGeneration",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"parsedUrl",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"featureServiceUrl",null);e.__decorate([f.property({readOnly:!0})],
c.prototype,"networkServiceUrl",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"layerId",null);e.__decorate([f.property()],c.prototype,"sourceJSON",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"networkSystemLayers",null);return c=e.__decorate([B.subclass("esri.networks.Network")],c)});