// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./Content".split(" "),function(h,c,d,a,m,k,l){var e;a=e=function(g){function f(b){b=g.call(this,b)||this;b.description=null;b.displayType="auto";b.title=null;b.type="attachments";return b}h._inheritsLoose(f,g);f.prototype.clone=function(){return new e({description:this.description,
displayType:this.displayType,title:this.title})};return f}(l);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);c.__decorate([d.property({type:["auto","preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c.__decorate([d.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=e=c.__decorate([k.subclass("esri.popup.content.AttachmentsContent")],
a)});