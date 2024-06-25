// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Handles ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/arrayUtils ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../ViewingMode ../camera/constraintUtils ../camera/intersectionUtils ../camera/constraintUtils/ConstraintTypes ../camera/constraintUtils/InteractionType ../camera/constraintUtils/TiltMode ./NearFarHeuristic ./SurfaceCollisionConstraint".split(" "),
function(e,q,f,r,t,h,k,c,l,B,C,u,m,v,w,n,x,y,z,A){e.ConstraintsManager=function(p){function g(a){var b=p.call(this,a)||this;b._handles=new t;b.nearFarHeuristic=z.createNearFarHeuristic(a.view.state.viewingMode,a.view.basemapTerrain,a.view.renderCoordsHelper.spatialReference);return b}q._inheritsLoose(g,p);var d=g.prototype;d.initialize=function(){this._handles.add([c.watch(()=>[this.view.constraints?.clipDistance?.near,this.view.constraints?.clipDistance?.far],()=>this._clipDistanceNearFarChanged()),
c.watch(()=>this.view.constraints?.clipDistance?.mode,()=>this._updateNearFar()),this.view.state.events.on("before-camera-change",a=>this._updateCameraNearFar(a.camera)),c.watch(()=>this.view.renderDataExtent,()=>this._updateNearFar(),c.sync),c.watch(()=>[this.view.constraints?.altitude?.min,this.view.constraints?.altitude?.max],()=>this._updateAltitude(),c.sync),c.watch(()=>this.view.constraints?.tilt?.max,()=>this._updateTiltMax(),c.sync),c.watch(()=>this.view.constraints?.tilt?.mode,()=>this._updateTilt(),
c.sync),c.watch(()=>this.view.state?.camera,()=>this._updateTiltAutoMax(),c.sync),c.watch(()=>[this.view.map?.ground?.navigationConstraint?.type,this.view.state?.constraints?.collision?.enabled],()=>this._updateCollision(),c.sync)]);this.view.state.isLocal&&this._handles.add(c.watch(()=>this.view.renderDataExtent,a=>this._updateLocalSurfaceDistance(a),c.initial));this._updateNearFar();this.view.state.viewingMode!==m.ViewingMode.Local&&this._updateAltitude();this._updateTilt();this._updateCollision();
this._set("surfaceCollisionConstraint",new A.SurfaceCollisionConstraint({view:this.view}))};d.destroy=function(){this._handles=k.destroyMaybe(this._handles);this.surfaceCollisionConstraint&&(this.surfaceCollisionConstraint.destroy(),this._set("surfaceCollisionConstraint",null))};d._clipDistanceNearFarChanged=function(){const a=this.view.constraints?.clipDistance;a&&"auto"!==a.mode&&this.view.state.updateCamera(b=>this._updateCameraNearFarManual(b,a))};d._updateNearFar=function(){this.view.state.updateCamera(a=>
this._updateCameraNearFar(a))};d._updateCameraNearFar=function(a){const b=this.view.constraints&&this.view.constraints.clipDistance;"manual"===(b?b.mode:"auto")?this._updateCameraNearFarManual(a,b):this._updateCameraNearFarAuto(a,b)};d._updateCameraNearFarAuto=function(a,b){this.nearFarHeuristic.compute(a.eye,a.center,this.view.renderDataExtent,w.surfaceElevationBelowRenderLocation(this.view,a.eye),a);b&&b.autoUpdate(a.near,a.far)};d._updateCameraNearFarManual=function(a,b){b&&(a.near=b.near,a.far=
b.far)};d._updateCollision=function(){var a=this.view.map?.ground?.navigationConstraint?.type;a=a?"stay-above"===a:!0;const b=this.view.state.constraints.collision;a!==b.enabled&&((b.enabled=a)&&this._reapplyConstraints(n.ConstraintTypes.COLLISION),(a=this.view.constraints&&this.view.constraints.tilt)&&"auto"!==a.mode||this._updateTiltAuto())};d._updateAltitude=function(){const a=this.view.constraints&&this.view.constraints.altitude;this.view.state.constraints.altitude=a&&this.view.state.viewingMode!==
m.ViewingMode.Local?{min:a.min,max:a.max}:null;this._reapplyConstraints()};d._updateTiltMax=function(){const a=this.view.constraints&&this.view.constraints.tilt;a&&"auto"!==a.mode&&(this._updateTiltManual(a),this._reapplyConstraints())};d._updateTilt=function(){const a=this.view.constraints&&this.view.constraints.tilt;"manual"===(a?a.mode:"auto")?this._updateTiltManual(a):this._updateTiltAuto();this._reapplyConstraints()};d._updateTiltManual=function(a){const b=this.view.state.constraints;b.tilt=
b.createConstantMaxTilt(h.deg2rad(a.max))};d._updateTiltAuto=function(){const a=this.view.state.constraints;a.tilt=a.createDefaultTilt();this._updateTiltAutoMax()};d._updateTiltAutoMax=function(){const a=this.view.constraints&&this.view.constraints.tilt;if(a&&"auto"===a.mode){var b=this.view.state.constraints;b.tilt&&(b=b.tilt(this.view.state.camera.distance).max,a.autoUpdate(h.rad2deg(b)))}};d._updateLocalSurfaceDistance=function(a){if(!k.isNone(a)){var b=Math.max(a.width,a.height);0>=b||(a.hasZ&&
(b=Math.max(b,a.zmax-a.zmin)),a=this.view.state,b=3*b/Math.atan(a.camera.fov/2),b!==a.constraints.distance&&(a.constraints.distance=b))}};d._reapplyConstraints=function(a=n.ConstraintTypes.ALL){this.view.state.updateCamera(b=>v.applyAll(this.view,b,{selection:a,interactionType:x.InteractionType.NONE,interactionFactor:null,interactionStartCamera:null,interactionDirection:null,tiltMode:y.TiltMode.TUMBLE}))};return g}(r);f.__decorate([l.property({constructOnly:!0})],e.ConstraintsManager.prototype,"view",
void 0);f.__decorate([l.property({readOnly:!0})],e.ConstraintsManager.prototype,"surfaceCollisionConstraint",void 0);e.ConstraintsManager=f.__decorate([u.subclass("esri.views.3d.state.ConstraintsManager")],e.ConstraintsManager);Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});