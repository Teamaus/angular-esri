// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Handles ../../../../core/maybe ../../../../core/accessorSupport/decorators/property ../../../../core/arrayUtils ../../../../core/accessorSupport/ensureType ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingRect ../../../support/Scheduler".split(" "),function(b,p,d,u,v,w,q,g,
C,D,x,r,l,y){b.SurfaceGeometryUpdates=function(t){function m(a){a=t.call(this,a)||this;a._handles=new w;a._tileGeometryUpdateExtent=l.empty();a._tileGeometryUpdateSpatialReference=null;a.events=new v;a.updating=!1;return a}p._inheritsLoose(m,t);var h=m.prototype;h.initialize=function(){this._handles.add([this.surface.on("elevation-change",a=>this._tileGeometryChanged(a)),this.scheduler.registerTask(y.TaskPriority.SURFACE_GEOMETRY_UPDATES,this)])};h.destroy=function(){this._handles=q.destroyMaybe(this._handles)};
h.runTask=function(){this.updating&&(this._centerIntersectsExtent(this._tileGeometryUpdateExtent,this._tileGeometryUpdateSpatialReference)&&this.events.emit("request-update",z),l.empty(this._tileGeometryUpdateExtent),this._set("updating",!1))};h._tileGeometryChanged=function(a){this._tileGeometryUpdateSpatialReference=q.unwrap(a.spatialReference);l.expand(this._tileGeometryUpdateExtent,a.extent,this._tileGeometryUpdateExtent);this._set("updating",!0)};h._furthestCenterOnSurface=function(){let a=this.centerOnSurfaces[0];
for(let k=1;k<this.centerOnSurfaces.length;k++){const n=this.centerOnSurfaces[k];n.distance>a.distance&&(a=n)}return a};h._centerIntersectsExtent=function(a,k){const n=this.state.camera.eye,c=A,B=this._furthestCenterOnSurface();this.renderCoordsHelper.fromRenderCoords(n,e,k);this.renderCoordsHelper.fromRenderCoords(B.renderLocation,f,k);e[0]<f[0]?(c[0]=e[0],c[2]=f[0]):(c[0]=f[0],c[2]=e[0]);e[1]<f[1]?(c[1]=e[1],c[3]=f[1]):(c[1]=f[1],c[3]=e[1]);return l.intersects(c,a)};p._createClass(m,[{key:"running",
get:function(){return this.updating}}]);return m}(u);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"state",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"centerOnSurfaces",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"renderCoordsHelper",void 0);d.__decorate([g.property({constructOnly:!0})],b.SurfaceGeometryUpdates.prototype,"scheduler",void 0);d.__decorate([g.property({constructOnly:!0})],
b.SurfaceGeometryUpdates.prototype,"surface",void 0);d.__decorate([g.property({readOnly:!0})],b.SurfaceGeometryUpdates.prototype,"updating",void 0);b.SurfaceGeometryUpdates=d.__decorate([x.subclass("esri.views.3d.support.SurfaceGeometryUpdates")],b.SurfaceGeometryUpdates);const z={},e=r.create(),f=r.create(),A=l.empty();Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});