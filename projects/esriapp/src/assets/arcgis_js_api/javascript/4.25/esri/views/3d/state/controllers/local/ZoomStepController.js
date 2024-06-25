// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/maybe ../../../../../core/time ../../../../../core/Logger ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/Error ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../camera/constraintUtils ../../../camera/constraintUtils/ConstraintTypes ../../../camera/constraintUtils/InteractionType ../../../camera/constraintUtils/TiltMode ../PointToPointAnimationController ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/verticalOffsetUtils ../../../../animation/easing".split(" "),
function(h,t,u,v,w,I,J,K,L,M,x,d,e,y,z,A,B,C,n,D,E,F){h.ZoomStepController=function(p){function l(){var b=p.apply(this,arguments)||this;b._zoomLocation=e.create();b._tmpCamera=new n.Camera;b._tmpRayDir=e.create();b._tmpCenter=e.create();b._constraintOptions={selection:z.ConstraintTypes.ALL,interactionType:A.InteractionType.ZOOM,interactionFactor:null,interactionStartCamera:new n.Camera,interactionDirection:null,tiltMode:B.TiltMode.TUMBLE};return b}t._inheritsLoose(l,p);var m=l.prototype;m.zoomStep=
function(b,c){if(this.active){var a=this.view.state,{interactionStartCamera:f}=this._constraintOptions;this.animation.finished?f.copyFrom(a.camera):this.animation.cameraAt(1,f);this._tmpCamera.copyFrom(a.camera);a=D.newIntersector(this.view.state.viewingMode);0<b?(0===this.view.map.ground.opacity?this.intersectionHelper.intersectScreenFreePointFallback(c,this._zoomLocation,G):this.intersectionHelper.intersectScreenFreePointFallback(c,this._zoomLocation),this.intersectionHelper.intersectRay(this._tmpCamera.ray,
a,this._tmpCenter)&&(this._tmpCamera.center=this._tmpCenter)):this.intersectionHelper.intersectRay(this._tmpCamera.ray,a,this._zoomLocation)?this._tmpCamera.center=this._zoomLocation:d.copy(this._zoomLocation,this._tmpCamera.center);b=.6**b;c=this.view._stage.renderView.getMinimalDepthForArea(this.view.voxelWasm,c[0],c[1],this.view.state.camera,60);d.subtract(k,this._tmpCamera.eye,this._zoomLocation);d.normalize(k,k);a=Math.max(Math.min(14,1/Math.abs(d.dot(H,k)))*Math.abs(this.view.camera.position.z),
200);if(c=v.isSome(c)?Math.min(c,a):a)a=e.create(),d.subtract(a,this._zoomLocation,this._tmpCamera.eye),c<d.length(a)&&(d.normalize(a,a),d.add(this._zoomLocation,this._tmpCamera.eye,d.scale(a,a,c)));this._updateCamera(this._tmpCamera,b,this._zoomLocation);this.begin(this._tmpCamera)}};m.animationSettings=function(){return{apex:null,duration:w.Milliseconds(600),easing:F.outExpo}};m._updateCamera=function(b,c,a){d.subtract(this._tmpRayDir,a,b.eye);const f=d.length(this._tmpRayDir);let g=f*c;const q=
Math.max(4,1.01*b.nearFar[0]);0!==g&&(1>=c&&g<q&&(g=q,c=g/f),1E-6>Math.abs(f-g)||(d.scale(this._tmpRayDir,this._tmpRayDir,c),b.eye=d.subtract(r,a,this._tmpRayDir),b.center=d.lerp(r,b.center,a,1-c),y.applyAll(this.view,b,this._constraintOptions)))};return l}(C.PointToPointAnimationController);h.ZoomStepController=u.__decorate([x.subclass("esri.views.3d.state.controllers.local.ZoomStepController")],h.ZoomStepController);const r=e.create(),H=e.fromValues(0,0,1),k=e.create(),G={exclude:new Set([E.TERRAIN_ID])};
Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});