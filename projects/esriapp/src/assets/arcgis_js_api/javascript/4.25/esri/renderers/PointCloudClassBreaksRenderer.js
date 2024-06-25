// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./PointCloudRenderer ./support/LegendOptions ./support/pointCloud/ColorClassBreakInfo".split(" "),function(l,c,h,e,a,m,n,d,p,q){var f;a=f=function(k){function g(b){b=k.call(this,b)||this;b.type="point-cloud-class-breaks";b.field=null;b.legendOptions=null;
b.fieldTransformType=null;b.colorClassBreakInfos=null;return b}l._inheritsLoose(g,k);g.prototype.clone=function(){return new f({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:h.clone(this.colorClassBreakInfos),legendOptions:h.clone(this.legendOptions)})};return g}(d);c.__decorate([m.enumeration({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a.prototype,"type",void 0);c.__decorate([e.property({json:{write:!0},type:String})],
a.prototype,"field",void 0);c.__decorate([e.property({type:p.LegendOptions,json:{write:!0}})],a.prototype,"legendOptions",void 0);c.__decorate([e.property({type:d.fieldTransformTypeKebabDict.apiValues,json:{type:d.fieldTransformTypeKebabDict.jsonValues,read:d.fieldTransformTypeKebabDict.read,write:d.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0);c.__decorate([e.property({type:[q],json:{write:!0}})],a.prototype,"colorClassBreakInfos",void 0);return a=f=c.__decorate([n.subclass("esri.renderers.PointCloudClassBreaksRenderer")],
a)});