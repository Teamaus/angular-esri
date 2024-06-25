// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/asyncUtils ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/unitUtils ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polyline ../../geometry/projection ../../geometry/support/aaBoundingRect ./ElevationSampler ./ElevationTile ./TileKey".split(" "),function(C,q,N,w,x,z,F,G,I,O,A,D,J,K,L){function H(n,k=0){let d=n.lods.length-1;if(0<k){const a=F.getMetersPerUnitForSR(n.spatialReference),b=k/a;n=n.lods.findIndex(c=>
c.resolution<b);0===n?d=0:0<n&&(d=n-1)}return d}let R=function(){function n(){}var k=n.prototype;k.queryAll=function(){var d=q._asyncToGenerator(function*(a,b,c){a=c&&c.ignoreInvisibleLayers?a.filter(f=>f.visible):a.slice();if(!a.length)throw new w("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");var e=B.fromGeometry(b);b=!1;c&&c.returnSampleInfo||(b=!0);c={...E,...c,returnSampleInfo:!0};e=yield this.query(a[a.length-1],e,c);a=yield this._queryAllContinue(a,
e,c);a.geometry=a.geometry.export();b&&delete a.sampleInfo;return a});return function(a,b,c){return d.apply(this,arguments)}}();k.query=function(){var d=q._asyncToGenerator(function*(a,b,c){if(!a)throw new w("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!b||!(b instanceof B)&&"point"!==b.type&&"multipoint"!==b.type&&"polyline"!==b.type)throw new w("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");
var e={...E,...c};c=new P(a,b.spatialReference,e);e=e.signal;yield a.load({signal:e});yield this._createGeometryDescriptor(c,b,e);yield this._selectTiles(c,e);yield this._populateElevationTiles(c,e);this._sampleGeometryWithElevation(c);return this._createQueryResult(c,e)});return function(a,b,c){return d.apply(this,arguments)}}();k.createSampler=function(){var d=q._asyncToGenerator(function*(a,b,c){if(!a)throw new w("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");
if(!b||"extent"!==b.type)throw new w("elevation-query:invalid-extent","Invalid or undefined extent");return this._createSampler(a,b,{...E,...c})});return function(a,b,c){return d.apply(this,arguments)}}();k.createSamplerAll=function(){var d=q._asyncToGenerator(function*(a,b,c){a=c&&c.ignoreInvisibleLayers?a.filter(f=>f.visible):a.slice();if(!a.length)throw new w("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!b||"extent"!==b.type)throw new w("elevation-query:invalid-extent",
"Invalid or undefined extent");c={...E,...c,returnSampleInfo:!0};const e=yield this._createSampler(a[a.length-1],b,c);return this._createSamplerAllContinue(a,b,e,c)});return function(a,b,c){return d.apply(this,arguments)}}();k._createSampler=function(){var d=q._asyncToGenerator(function*(a,b,c,e){const f=c.signal;yield a.load({signal:f});const h=b.spatialReference,l=a.tileInfo.spatialReference;h.equals(l)||(yield A.initializeProjection([{source:h,dest:l}],{signal:f}),b=A.project(b,l));a=new Q(a,b,
c,e);yield this._selectTiles(a,f);yield this._populateElevationTiles(a,f);return new J.MultiTileElevationSampler(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)});return function(a,b,c,e){return d.apply(this,arguments)}}();k._createSamplerAllContinue=function(){var d=q._asyncToGenerator(function*(a,b,c,e){a.pop();if(!a.length)return c;var f=c.samplers.map(h=>D.fromExtent(h.extent));f=yield this._createSampler(a[a.length-1],b,e,f);if(0===f.samplers.length)return c;c=c.samplers.concat(f.samplers);
c=new J.MultiTileElevationSampler(c,e.noDataValue);return this._createSamplerAllContinue(a,b,c,e)});return function(a,b,c,e){return d.apply(this,arguments)}}();k._queryAllContinue=function(){var d=q._asyncToGenerator(function*(a,b,c){var e=a.pop();const f=b.geometry.coordinates,h=b.sampleInfo;x.assertIsSome(h);const l=[],p=[];for(let g=0;g<f.length;g++){const m=h[g];0<=m.demResolution?m.source||(m.source=e):a.length&&(l.push(f[g]),p.push(g))}if(!a.length||0===l.length)return b;e=b.geometry.clone(l);
const r=yield this.query(a[a.length-1],e,c),t=r.sampleInfo;if(!t)throw Error("no sampleInfo");p.forEach((g,m)=>{f[g].z=r.geometry.coordinates[m].z;h[g].demResolution=t[m].demResolution});return this._queryAllContinue(a,b,c)});return function(a,b,c){return d.apply(this,arguments)}}();k._createQueryResult=function(){var d=q._asyncToGenerator(function*(a,b){b=yield a.geometry.project(a.outSpatialReference,b);x.assertIsSome(b);b={geometry:b.export(),noDataValue:a.options.noDataValue};a.options.returnSampleInfo&&
(b.sampleInfo=this._extractSampleInfo(a));a.geometry.coordinates.forEach(c=>{c.tile=null;c.elevationTile=null});return b});return function(a,b){return d.apply(this,arguments)}}();k._createGeometryDescriptor=function(){var d=q._asyncToGenerator(function*(a,b,c){const e=a.layer.tileInfo.spatialReference;b instanceof B?c=yield b.project(e,c):(yield A.initializeProjection([{source:b.spatialReference,dest:e}],{signal:c}),c=A.project(b,e));if(!c)throw new w("elevation-query:spatial-reference-mismatch",
`Cannot query elevation in '${b.spatialReference.wkid}' on an elevation service in '${e.wkid}'`);a.geometry=B.fromGeometry(c)});return function(a,b,c){return d.apply(this,arguments)}}();k._selectTiles=function(){var d=q._asyncToGenerator(function*(a,b){const c=a.options.demResolution;"geometry"===a.type&&this._preselectOutsideLayerExtent(a);if("number"===typeof c)this._selectTilesClosestResolution(a);else if("finest-contiguous"===c)yield this._selectTilesFinestContiguous(a,b);else if("auto"===c)yield this._selectTilesAuto(a,
b);else throw new w("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${c}', expected a number, "finest-contiguous" or "auto"`);});return function(a,b){return d.apply(this,arguments)}}();k._preselectOutsideLayerExtent=function(d){if(!x.isNone(d.layer.fullExtent)){var a=new K.ElevationTile(null);a.sample=()=>d.options.noDataValue;d.outsideExtentTile=a;var b=d.layer.fullExtent;d.geometry.coordinates.forEach(c=>{const e=c.x,f=c.y;if(e<b.xmin||e>b.xmax||f<b.ymin||f>b.ymax)c.elevationTile=
a})}};k._selectTilesClosestResolution=function(d){const a=this._findNearestDemResolutionLODIndex(d.layer.tileInfo,d.options.demResolution);d.selectTilesAtLOD(a)};k._findNearestDemResolutionLODIndex=function(d,a){var b=F.getMetersPerUnitForSR(d.spatialReference);a/=b;b=d.lods[0];let c=0;for(let e=1;e<d.lods.length;e++){const f=d.lods[e];Math.abs(f.resolution-a)<Math.abs(b.resolution-a)&&(b=f,c=e)}return c};k._selectTilesFinestContiguous=function(){var d=q._asyncToGenerator(function*(a,b){const c=H(a.layer.tileInfo,
a.options.minDemResolution);yield this._selectTilesFinestContiguousAt(a,c,b)});return function(a,b){return d.apply(this,arguments)}}();k._selectTilesFinestContiguousAt=function(){var d=q._asyncToGenerator(function*(a,b,c){var e=a.layer;a.selectTilesAtLOD(b);if(!(0>b)){var f=e.tilemapCache;e=a.getTilesToFetch();try{if(f)yield z.whenOrAbort(Promise.all(e.map(h=>f.fetchAvailability(h.level,h.row,h.col,{signal:c}))),c);else if(yield this._populateElevationTiles(a,c),!a.allElevationTilesFetched())throw a.clearElevationTiles(),
new w("elevation-query:has-unavailable-tiles");}catch(h){z.throwIfAbortError(h),yield this._selectTilesFinestContiguousAt(a,b-1,c)}}});return function(a,b,c){return d.apply(this,arguments)}}();k._populateElevationTiles=function(){var d=q._asyncToGenerator(function*(a,b){var c=a.getTilesToFetch();const e={},f=a.options.cache,h=a.options.noDataValue;c=c.map(function(){var l=q._asyncToGenerator(function*(p){if(null!=p.id){var r=`${a.layer.uid}:${p.id}:${h}`,t=x.isSome(f)?f.get(r):null;t=x.isSome(t)?
t:yield a.layer.fetchTile(p.level,p.row,p.col,{noDataValue:h,signal:b});x.isSome(f)&&f.put(r,t);e[p.id]=new K.ElevationTile(p,t)}});return function(p){return l.apply(this,arguments)}}());yield z.whenOrAbort(z.eachAlways(c),b);a.populateElevationTiles(e)});return function(a,b){return d.apply(this,arguments)}}();k._selectTilesAuto=function(){var d=q._asyncToGenerator(function*(a,b){this._selectTilesAutoFinest(a);this._reduceTilesForMaximumRequests(a);const c=a.layer.tilemapCache;if(!c)return this._selectTilesAutoPrefetchUpsample(a,
b);const e={},f=a.getTilesToFetch().map(function(){var h=q._asyncToGenerator(function*(l){const p=new L.TileKey(null,0,0,0,D.create()),r=yield N.result(c.fetchAvailabilityUpsample(l.level,l.row,l.col,p,{signal:b}));!1===r.ok?z.throwIfAbortError(r.error):null!=l.id&&(e[l.id]=p)});return function(l){return h.apply(this,arguments)}}());yield z.whenOrAbort(Promise.all(f),b);a.remapTiles(e)});return function(a,b){return d.apply(this,arguments)}}();k._reduceTilesForMaximumRequests=function(d){const a=d.layer.tileInfo;
let b=0;const c={},e=l=>{null!=l.id&&(l.id in c?c[l.id]++:(c[l.id]=1,b++))},f=l=>{if(null!=l.id){var p=c[l.id];1===p?(delete c[l.id],b--):c[l.id]=p-1}};d.forEachTileToFetch(e,f);let h=!0;for(;h&&(h=!1,d.forEachTileToFetch(l=>{b<=d.options.maximumAutoTileRequests||(f(l),a.upsampleTile(l)&&(h=!0),e(l))},f),h););};k._selectTilesAutoFinest=function(d){const a=H(d.layer.tileInfo,d.options.minDemResolution);d.selectTilesAtLOD(a,d.options.maximumAutoTileRequests)};k._selectTilesAutoPrefetchUpsample=function(){var d=
q._asyncToGenerator(function*(a,b){const c=a.layer.tileInfo;yield this._populateElevationTiles(a,b);let e=!1;a.forEachTileToFetch((f,h)=>{c.upsampleTile(f)?e=!0:h()});e&&(yield this._selectTilesAutoPrefetchUpsample(a,b))});return function(a,b){return d.apply(this,arguments)}}();k._sampleGeometryWithElevation=function(d){d.geometry.coordinates.forEach(a=>{var b=a.elevationTile;let c=d.options.noDataValue;b&&(b=b.sample(a.x,a.y),x.isSome(b)?c=b:a.elevationTile=null);a.z=c})};k._extractSampleInfo=function(d){const a=
d.layer.tileInfo,b=F.getMetersPerUnitForSR(a.spatialReference);return d.geometry.coordinates.map(c=>{let e=-1;c.elevationTile&&c.elevationTile!==d.outsideExtentTile&&(e=a.lodAt(c.elevationTile.tile.level).resolution*b);return{demResolution:e}})};return n}(),B=function(){function n(){}var k=n.prototype;k.export=function(){return this._exporter(this.coordinates,this.spatialReference)};k.clone=function(d){const a=new n;a.geometry=this.geometry;a.spatialReference=this.spatialReference;a.coordinates=d||
this.coordinates.map(b=>b.clone());a._exporter=this._exporter;return a};k.project=function(){var d=q._asyncToGenerator(function*(a,b){if(this.spatialReference.equals(a))return this.clone();yield A.initializeProjection([{source:this.spatialReference,dest:a}],{signal:b});b=new G({spatialReference:this.spatialReference,points:this.coordinates.map(e=>[e.x,e.y])});const c=A.project(b,a);if(!c)return null;b=this.coordinates.map((e,f)=>{e=e.clone();f=c.points[f];e.x=f[0];e.y=f[1];return e});b=this.clone(b);
b.spatialReference=a;return b});return function(a,b){return d.apply(this,arguments)}}();n.fromGeometry=function(d){const a=new n;a.geometry=d;a.spatialReference=d.spatialReference;if(d instanceof n)a.coordinates=d.coordinates.map(b=>b.clone()),a._exporter=(b,c)=>{b=d.clone(b);b.spatialReference=c;return b};else switch(d.type){case "point":const {hasZ:b,hasM:c}=d;a.coordinates=b&&c?[new u(d.x,d.y,d.z,d.m)]:b?[new u(d.x,d.y,d.z)]:c?[new u(d.x,d.y,null,d.m)]:[new u(d.x,d.y)];a._exporter=(g,m)=>d.hasM?
new I(g[0].x,g[0].y,g[0].z,g[0].m,m):new I(g[0].x,g[0].y,g[0].z,m);break;case "multipoint":const {hasZ:e,hasM:f}=d;a.coordinates=e&&f?d.points.map(g=>new u(g[0],g[1],g[2],g[3])):e?d.points.map(g=>new u(g[0],g[1],g[2])):f?d.points.map(g=>new u(g[0],g[1],null,g[2])):d.points.map(g=>new u(g[0],g[1]));a._exporter=(g,m)=>d.hasM?new G({points:g.map(y=>[y.x,y.y,y.z,y.m]),hasZ:!0,hasM:!0,spatiaReference:m}):new G(g.map(y=>[y.x,y.y,y.z]),m);break;case "polyline":const h=[],l=[],{hasZ:p,hasM:r}=d;let t=0;for(const g of d.paths)if(l.push([t,
t+g.length]),t+=g.length,p&&r)for(const m of g)h.push(new u(m[0],m[1],m[2],m[3]));else if(p)for(const m of g)h.push(new u(m[0],m[1],m[2]));else if(r)for(const m of g)h.push(new u(m[0],m[1],null,m[2]));else for(const m of g)h.push(new u(m[0],m[1]));a.coordinates=h;a._exporter=(g,m)=>{const y=d.hasM?g.map(v=>[v.x,v.y,v.z,v.m]):g.map(v=>[v.x,v.y,v.z]);g=l.map(v=>y.slice(v[0],v[1]));return new O({paths:g,hasM:d.hasM,hasZ:!0,spatialReference:m})}}return a};return n}(),u=function(){function n(k,d,a=null,
b=null,c=null,e=null){this.x=k;this.y=d;this.z=a;this.m=b;this.tile=c;this.elevationTile=e}n.prototype.clone=function(){return new n(this.x,this.y,this.z,this.m)};return n}(),M=function(n,k){this.layer=n;this.options=k},P=function(n){function k(a,b,c){a=n.call(this,a,c)||this;a.outSpatialReference=b;a.type="geometry";return a}q._inheritsLoose(k,n);var d=k.prototype;d.selectTilesAtLOD=function(a){if(0>a)this.geometry.coordinates.forEach(b=>{b.tile=null});else{const b=this.layer.tileInfo,c=b.lods[a].level;
this.geometry.coordinates.forEach(e=>{e.tile=b.tileAt(c,e.x,e.y)})}};d.allElevationTilesFetched=function(){return!this.geometry.coordinates.some(a=>!a.elevationTile)};d.clearElevationTiles=function(){for(const a of this.geometry.coordinates)a.elevationTile!==this.outsideExtentTile&&(a.elevationTile=null)};d.populateElevationTiles=function(a){for(const b of this.geometry.coordinates)!b.elevationTile&&b.tile?.id&&(b.elevationTile=a[b.tile.id])};d.remapTiles=function(a){for(const b of this.geometry.coordinates){const c=
b.tile?.id;b.tile=c?a[c]:null}};d.getTilesToFetch=function(){const a={},b=[];for(const c of this.geometry.coordinates){const e=c.tile;if(!e)continue;const f=c.tile?.id;c.elevationTile||!f||a[f]||(a[f]=e,b.push(e))}return b};d.forEachTileToFetch=function(a){for(const b of this.geometry.coordinates)b.tile&&!b.elevationTile&&a(b.tile,()=>{b.tile=null})};return k}(M),Q=function(n){function k(a,b,c,e){c=n.call(this,a,c)||this;c.type="extent";c.elevationTiles=[];c._candidateTiles=[];c._fetchedCandidates=
new Set;c.extent=b.intersection(a.fullExtent);c.maskExtents=e;return c}q._inheritsLoose(k,n);var d=k.prototype;d.selectTilesAtLOD=function(a,b){b=this._maximumLodForRequests(b);a=Math.min(b,a);0>a?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(a)};d._maximumLodForRequests=function(a){const b=this.layer.tileInfo;if(!a)return b.lods.length-1;const c=this.extent;if(x.isNone(c))return-1;for(let e=b.lods.length-1;0<=e;e--){const f=b.lods[e];if(Math.ceil(c.width/(f.resolution*
b.size[0]))*Math.ceil(c.height/(f.resolution*b.size[1]))<=a)return e}return-1};d.allElevationTilesFetched=function(){return this._candidateTiles.length===this.elevationTiles.length};d.clearElevationTiles=function(){this.elevationTiles.length=0;this._fetchedCandidates.clear()};d.populateElevationTiles=function(a){for(const b of this._candidateTiles){const c=b.id&&a[b.id];c&&(this._fetchedCandidates.add(b),this.elevationTiles.push(c))}};d.remapTiles=function(a){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map(b=>
a[b.id]))};d.getTilesToFetch=function(){return this._candidateTiles};d.forEachTileToFetch=function(a,b){const c=this._candidateTiles;this._candidateTiles=[];c.forEach(e=>{if(this._fetchedCandidates.has(e))b&&b(e);else{var f=!1;a(e,()=>f=!0);f?b&&b(e):this._candidateTiles.push(e)}});this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,b)};d._uniqueNonOverlappingTiles=function(a,b){const c={},e=[];for(const h of a)(a=h.id)&&!c[a]?(c[a]=h,e.push(h)):b&&b(h);const f=e.sort((h,l)=>
h.level-l.level);return f.filter((h,l)=>{for(let p=0;p<l;p++){const r=f[p].extent;if(r&&h.extent&&D.contains(r,h.extent))return b&&b(h),!1}return!0})};d._selectCandidateTilesCoveringExtentAt=function(a){this._candidateTiles.length=0;var b=this.extent;if(!x.isNone(b)){var c=this.layer.tileInfo,e=c.lods[a];a=c.tileAt(e.level,b.xmin,b.ymin);var f=a.extent;if(!x.isNone(f)){var h=Math.ceil((b.xmax-f[0])/(e.resolution*c.size[0]));b=Math.ceil((b.ymax-f[1])/(e.resolution*c.size[1]));for(e=0;e<b;e++)for(f=
0;f<h;f++){const l=new L.TileKey(null,a.level,a.row-e,a.col+f);c.updateTileInfo(l);this._tileIsMasked(l)||this._candidateTiles.push(l)}}}};d._tileIsMasked=function(a){return this.maskExtents?this.maskExtents.some(b=>a.extent&&D.contains(b,a.extent)):!1};return k}(M);const E={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};C.ElevationQuery=R;C.GeometryDescriptor=B;C.getFinestLodIndex=H;Object.defineProperties(C,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});