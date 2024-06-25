// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/_rollupPluginBabelHelpers ../../../geometry/support/aaBoundingRect ./BitmapTile ./brushes ./webgl/enums ./webgl/TileContainer".split(" "),function(h,k,m,n,p,l,e){e=function(b){function c(){return b.apply(this,arguments)||this}k._inheritsLoose(c,b);var f=c.prototype;f.createTile=function(a){const d=this._tileInfoView.getTileBounds(m.create(),a),g=this._tileInfoView.getTileResolution(a.level),[q,r]=this._tileInfoView.tileInfo.size;return new n.BitmapTile(a,g,d[0],d[3],
q,r)};f.prepareRenderPasses=function(a){const d=a.registerRenderPass({name:"bitmap (tile)",brushes:[p.brushes.bitmap],target:()=>this.children.map(g=>g.bitmap),drawPhase:l.WGLDrawPhase.MAP});return[...b.prototype.prepareRenderPasses.call(this,a),d]};f.doRender=function(a){this.visible&&a.drawPhase===l.WGLDrawPhase.MAP&&b.prototype.doRender.call(this,a)};k._createClass(c,[{key:"requiresDedicatedFBO",get:function(){return this.children.some(a=>"additive"===a.bitmap.blendFunction)}}]);return c}(e);h.BitmapTileContainer=
e;Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});