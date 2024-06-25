// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/_rollupPluginBabelHelpers ../../../../../chunks/tslib.es6 ../../../../../core/accessorSupport/decorators/property ../../../../../core/arrayUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),function(b,f,d,g,r,t,m,h,k,n,p,q){b.ZoomPlanarMomentumController=
function(l){function c(a){a=l.call(this,a)||this;a.interactionType=n.InteractionType.ZOOM;a.constraintOptions.interactionDirection=k.create();return a}f._inheritsLoose(c,l);c.prototype.momentumStep=function(a,e){h.copy(this.constraintOptions.interactionDirection,e.eye);a=this.momentum.valueDelta(0,a);q.applyZoomToPoint(e,this.zoomCenter,a,this.view.state.constraints.minimumPoiDistance);this.constraintOptions.interactionDirection=h.direction(this.constraintOptions.interactionDirection,e.eye,this.constraintOptions.interactionDirection)};
f._createClass(c,[{key:"zoomCenter",set:function(a){this._set("zoomCenter",k.clone(a))}}]);return c}(p.MomentumController);d.__decorate([g.property({constructOnly:!0})],b.ZoomPlanarMomentumController.prototype,"momentum",void 0);d.__decorate([g.property({constructOnly:!0})],b.ZoomPlanarMomentumController.prototype,"zoomCenter",null);b.ZoomPlanarMomentumController=d.__decorate([m.subclass("esri.views.3d.state.controllers.momentum.ZoomPlanarMomentumController")],b.ZoomPlanarMomentumController);Object.defineProperties(b,
{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});