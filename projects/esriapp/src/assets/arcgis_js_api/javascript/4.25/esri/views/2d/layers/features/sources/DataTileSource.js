// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../TimeExtent ../../../../../core/Evented ../../../../../core/has ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/diffUtils ../../../../../rest/support/Query ./DataTileSubscription ../support/UpdateToken".split(" "),function(q,h,r,t,u,v,n,p,w,x,y){function z(k,c){const b=new Set;k&&k.forEach(a=>b.add(a));c&&c.forEach(a=>b.add(a));return b.has("*")?["*"]:Array.from(b)}let B=function(){function k(b){this.events=
new t;this._resolver=n.createResolver();this._didEdit=!1;this._subscriptions=new Map;this._outSR=b.outSR;this._serviceInfo=b.serviceInfo;this._onTileUpdateMessage=b.onMessage}var c=k.prototype;c.destroy=function(){};c._onMessage=function(){var b=h._asyncToGenerator(function*(a){const d=this._subscriptions.get(a.id);if(d)return a={...a,remove:a.remove??[],status:a.status??y.UpdateToken.empty()},n.ignoreAbortErrors(this._onTileUpdateMessage(a,d.options))});return function(a){return b.apply(this,arguments)}}();
c.update=function(b,a){var d=a.fields.length;a.outFields=z(this._schema?.outFields,a.outFields);a.outFields=a.outFields.length>=.75*d?["*"]:a.outFields;a.outFields.sort();if(d=p.diff(this._schema,a)){u("esri-2d-update-debug")&&console.debug("Applying Update - Source:",d);var l={returnCentroid:"esriGeometryPolygon"===this._serviceInfo.geometryType,returnGeometry:!0,timeReferenceUnknownClient:"stream"!==this._serviceInfo.type&&this._serviceInfo.timeReferenceUnknownClient,outFields:a.outFields,outSpatialReference:this._outSR,
orderByFields:["orderByFields"in this._serviceInfo&&this._serviceInfo.orderByFields?this._serviceInfo.orderByFields:this._serviceInfo.objectIdField+" ASC"],where:a.definitionExpression||"1\x3d1",gdbVersion:a.gdbVersion,historicMoment:a.historicMoment,timeExtent:r.fromJSON(a.timeExtent)},g=this._schema&&p.hasDiff(d,"outFields");this._schema&&p.hasDiffAny(d,["timeExtent","definitionExpression","gdbVersion","historicMoment","customParameters"])&&(b.why.mesh.push("Layer filter and/or custom parameters changed"),
b.why.source.push("Layer filter and/or custom parameters changed"),b.mesh=!0,b.source=!0,b.queryFilter=!0);g&&(b.why.source.push("Layer required fields changed"),b.source=!0);p.diff(l,this._queryInfo)&&(this._queryInfo=l);this._schema=a;this._resolver.resolve()}};c.whenInitialized=function(){return this._resolver.promise};c.applyUpdate=function(){var b=h._asyncToGenerator(function*(a){a.queryFilter||a.source&&this._didEdit?(this.refresh(a.version),this._didEdit=!1):(this._subscriptions.forEach(d=>
d.applyUpdate(a)),yield this.resend())});return function(a){return b.apply(this,arguments)}}();c.refresh=function(b,a){for(const d of this._tiles())this.unsubscribe(d),this.subscribe(d,b)};c.subscribe=function(b,a){a=new x.DataTileSubscription(b,a);this._subscriptions.set(b.id,a)};c.unsubscribe=function(b){const a=this.get(b.id);v.isSome(a)&&a.abort();this._subscriptions.delete(b.id)};c.createQuery=function(b={}){return new w({...this._queryInfo,historicMoment:this._queryInfo.historicMoment?new Date(this._queryInfo.historicMoment):
null,...b})};c.get=function(b){return this._subscriptions.has(b)?this._subscriptions.get(b):null};c.queryLastEditDate=function(){var b=h._asyncToGenerator(function*(){throw Error("Service does not support query type");});return function(){return b.apply(this,arguments)}}();c.query=function(){var b=h._asyncToGenerator(function*(a){throw Error("Service does not support query");});return function(a){return b.apply(this,arguments)}}();c._tiles=function*(){const b=Array.from(this._subscriptions.values());
for(const a of b)yield a.tile};c.edit=function(){var b=h._asyncToGenerator(function*(a,d){var l=this,g=Array.from(this._subscriptions.values());const A=g.map(({tile:e})=>e);for(const e of g)e.removeIds(d);a.length&&(g=A.map(e=>{const f=this.createTileQuery(e);f.objectIds=a;return{tile:e,query:f}}).map(function(){var e=h._asyncToGenerator(function*({tile:f,query:m}){return{tile:f,result:yield l.query(m),query:m}});return function(f){return e.apply(this,arguments)}}()),g=(yield n.eachAlwaysValues(g)).map(function(){var e=
h._asyncToGenerator(function*({tile:f,result:m}){(m.hasFeatures||d.length||a.length)&&(f=l._subscriptions.get(f.key.id))&&f.edit(m,a)});return function(f){return e.apply(this,arguments)}}()),yield n.eachAlways(g));this._didEdit=!0});return function(a,d){return b.apply(this,arguments)}}();return k}();q.DataTileSource=B;Object.defineProperties(q,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});