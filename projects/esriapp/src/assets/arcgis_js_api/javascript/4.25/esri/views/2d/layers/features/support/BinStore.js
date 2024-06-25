// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../geometry ../../../../../core/Evented ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/accessorSupport/diffUtils ../../../../../geohash/GeohashTree ../../../../../geohash/geohashUtils ../../../../../geometry/support/aaBoundingBox ../../../../../geometry/support/Ellipsoid ../../../../../geometry/support/spatialReferenceUtils ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/data/projectionSupport ../../../engine/webgl/DisplayId ../FeatureStore2D ../Store2D ./FeatureSetReaderJSON ../../../../../geometry/SpatialReference ../../../../../geometry/Polygon ../../../../../geometry/Extent".split(" "),
function(y,n,z,D,A,E,k,p,F,q,G,B,H,r,I,J,t,K,L,M,C,u,N,O){const v=E.getLogger("esri.view.2d.layers.features.support.BinStore");z=function(w){function m(a,b,c,e){var d=w.call(this,a,c)||this;d.type="bin";d.events=new D;d.objectIdField="aggregateId";d.featureAdapter=L.featureAdapter;d._geohashLevel=5;d._geohashBuf=[];d._serviceInfo=e;d.geometryInfo=a.geometryInfo;d._spatialReference=b;d._projectionSupportCheck=t.checkProjectionSupport(b,u.WGS84);d._bitsets.geohash=c.getBitset(c.createBitset());d._bitsets.inserted=
c.getBitset(c.createBitset());return d}n._inheritsLoose(m,w);var f=m.prototype;f.destroy=function(){this._tree&&this._tree.destroy()};f.updateSchema=function(){var a=n._asyncToGenerator(function*(b,c){const e=this._schema;try{yield w.prototype.updateSchema.call(this,b,c),yield this._projectionSupportCheck}catch(g){}this._fields=this._schema.params.fields;const d=p.diff(e,c);if(!c||k.isNone(d)&&!b.source&&!b.storage.filters)e&&(b.mesh=!0);else{if(p.hasDiff(d,"params.fields")||p.hasDiff(d,"params")||
!this._tree||b.source)this._tree&&this._tree.destroy(),this._tree=new F.GeohashTree(this._statisticFields,this._serviceInfo),this._tree.onRelease=g=>g.displayId&&this._storage.releaseDisplayId(g.displayId),this._geohashLevel=this._schema.params.fixedBinLevel,this._rebuildTree(),A("esri-2d-update-debug")&&v.info("Aggregate mesh needs update due to tree changing");A("esri-2d-update-debug")&&v.info("Aggregate mesh needs update due to tree changing");b.targets[c.name]=!0;b.mesh=!1}});return function(b,
c){return a.apply(this,arguments)}}();f.clear=function(){this._rebuildTree()};f.sweepFeatures=function(a,b){this._bitsets.inserted.forEachSet(c=>{a.has(c)||(c=b.lookupByDisplayIdUnsafe(c),this._remove(c))})};f.sweepAggregates=function(a,b,c){};f.onTileData=function(a,b,c,e,d=!0){if(!this._schema||k.isNone(b.addOrUpdate))return b;this.events.emit("changed");var g=this._getTransforms(a,this._spatialReference);const h=b.addOrUpdate.getCursor();for(;h.next();)this._update(h,e);if(b.status.mesh||!d)return b;
e=[];this._getBinsForTile(e,a,g,c);b.addOrUpdate=C.FeatureSetReaderJSON.fromOptimizedFeatures(e,{...this._serviceInfo,geometryType:"esriGeometryPolygon"});b.addOrUpdate.attachStorage(c);b.end=!0;b.isRepush||(b.clear=!0);for(g=b.addOrUpdate.getCursor();g.next();)e=g.getDisplayId(),this._bitsets.computed.unset(e),this.setComputedAttributes(c,g,e,a.scale);return b};f.forEachBin=function(a){this._tree.forEach(a)};f.forEach=function(a){this._tree.forEach(b=>{b.depth===this._geohashLevel&&(b=this._toFeatureJSON(b),
b=C.FeatureSetReaderJSON.fromFeatures([b],{objectIdField:this.objectIdField,globalIdField:null,geometryType:this.geometryInfo.geometryType,fields:this.fields}).getCursor(),b.next(),a(b))})};f.forEachInBounds=function(a,b){};f.forEachBounds=function(a,b,c){const {hasM:e,hasZ:d}=this.geometryInfo;for(const g of a)a=r.getBoundsOptimizedGeometry([0,0,0,0],g.readGeometry(),d,e),k.isNone(a)||b(G.fromRect(c,a))};f.toArray=function(){const a=[];this.forEach(b=>a.push(b));return a};f.onTileUpdate=function(a){};
f.getAggregate=function(a){const b=K.createDisplayId(a,!0);a=this._tree.findIf(c=>c.displayId===b);return k.applySome(a,c=>this._toFeatureJSON(c))};f.getAggregates=function(){return this._tree.findAllIf(a=>a.depth===this._geohashLevel).map(this._toFeatureJSON.bind(this))};f.getDisplayId=function(a){const b=this._tree.findIf(c=>c.id===a);return k.applySome(b,c=>c.displayId)};f.getFeatureDisplayIdsForAggregate=function(a){const b=this._tree.findIf(c=>c.id===a);return k.mapOr(b,[],c=>Array.from(c.displayIds))};
f.getDisplayIdForReferenceId=function(a){const b=this._tree.findIf(c=>1===c.displayIds.size&&c.displayIds.has(a));return k.applySome(b,c=>c.displayId)};f._toFeatureJSON=function(a){const b=this._spatialReference;return{displayId:a.displayId,attributes:a.getAttributes(),geometry:r.convertToGeometry(a.getGeometry(b),"esriGeometryPolygon",!1,!1),centroid:null}};f._rebuildTree=function(){this._bitsets.computed.clear();this._bitsets.inserted.clear();this._tree&&this._tree.clear()};f._remove=function(a){const b=
a.getDisplayId(),c=a.getXHydrated(),e=a.getYHydrated(),d=this._geohashBuf[2*b],g=this._geohashBuf[2*b+1];this._bitsets.inserted.has(b)&&(this._bitsets.inserted.unset(b),this._tree.removeCursor(a,c,e,d,g,this._geohashLevel))};f._update=function(a,b){const c=a.getDisplayId(),e=this._bitsets.inserted;b=b.isVisible(c);var d=e.has(c);b!==d&&(b?(b=a.getXHydrated(),d=a.getYHydrated(),this._setGeohash(c,b,d)&&(this._tree.insertCursor(a,c,b,d,this._geohashBuf[2*c],this._geohashBuf[2*c+1],this._geohashLevel),
e.set(c))):this._remove(a))};f._setGeohash=function(a,b,c){if(this._bitsets.geohash.has(a))return!0;const e=this._geohashBuf;if(this._spatialReference.isWebMercator)b=b/B.earth.radius*57.29577951308232,q.setGeohashBuf(e,a,57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-c/B.earth.radius))),b-360*Math.floor((b+180)/360),12);else{c=t.project({x:b,y:c},this._spatialReference,u.WGS84);if(!c)return!1;q.setGeohashBuf(e,a,c.y,c.x,12)}this._bitsets.geohash.set(a);return!0};f._getBinsForTile=function(a,
b,c,e){try{var d=this._getGeohashBounds(b);const g=this._tree.getBins(d);for(const h of g){h.displayId||(h.displayId=e.createDisplayId(!0));d=null;const l=h.getGeometry(this._spatialReference,c.tile);l||(d=h.getGeometryCentroid(this._spatialReference,c.tile));const x=new I.OptimizedFeature(l,h.getAttributes(),d);x.objectId=h.id;x.displayId=h.displayId;a.push(x)}}catch(g){v.error("Unable to get bins for tile",b.key.id)}};f._getGeohash=function(a,b,c){const e={geohashX:0,geohashY:0};q.setGeohashXY(e,
b,a,c);return e};f._getGeohashBounds=function(a){const b=this._getGeohashLevel(a.key.level),c=[a.extent.xmin,a.extent.ymin,a.extent.xmax,a.extent.ymax];var e=N.fromExtent(O.fromBounds(c,this._spatialReference));a=t.project(e,this._spatialReference,u.WGS84,{densificationStep:64*a.resolution});a=r.convertFromPolygon(new J,a,!1,!1);var d=a.coords.filter((h,l)=>!(l%2)),g=a.coords.filter((h,l)=>l%2);a=Math.min(...d);e=Math.min(...g);d=Math.max(...d);g=Math.max(...g);a=this._getGeohash(a,e,b);e=this._getGeohash(d,
g,b);return{bounds:c,geohashBounds:{xLL:a.geohashX,yLL:a.geohashY,xTR:e.geohashX,yTR:e.geohashY},level:b}};f._getGeohashLevel=function(a){return this._schema.params.fixedBinLevel};f._getTransforms=function(a,b){const c={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};b=H.getInfo(b);if(!b)return{tile:c,left:null,right:null};const [e,d]=b.valid;return{tile:c,left:{...c,translate:[d,a.bounds[3]]},right:{...c,translate:[e-d+a.bounds[0],a.bounds[3]]}}};
n._createClass(m,[{key:"featureSpatialReference",get:function(){return this._spatialReference}},{key:"fields",get:function(){return this._fields}}]);return m}(M.Store2D);y.BinStore=z;Object.defineProperties(y,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});