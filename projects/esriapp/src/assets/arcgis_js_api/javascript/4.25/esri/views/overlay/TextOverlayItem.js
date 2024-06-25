// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../Color ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../libs/maquette/projection ../../libs/maquette/h ../../libs/maquette/projector".split(" "),function(p,d,q,e,g,y,z,u,A,v,B){const r={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",
top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};e=function(t){function m(a){a=t.call(this,a)||this;a.x=0;a.y=0;a.text="-";a.fontSize=14;a.anchor="center";a.visible=!0;a.backgroundColor=new q([0,0,0,.6]);a.textColor=new q([255,255,255]);a._textShadowSize=1;return a}p._inheritsLoose(m,
t);var l=m.prototype;l.render=function(){return v.h("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])};l.renderCanvas=function(a){if(this.visible){var b=a.font.replace(/^(.*?)px/,
"");a.font=`${this.fontSize}px ${b}`;var c=this._padding,k=this._borderRadius,h=a.measureText(this.text).width,f=this.fontSize;b=w[this.anchor];a.textAlign="center";a.textBaseline="middle";h+=2*c;c=f+2*c;this._roundedRect(a,this.x+b.x*h,this.y+b.y*c,h,c,k);a.fillStyle=this.backgroundColor.toCss(!0);a.fill();k=this.x+(b.x+.5)*h;b=this.y+(b.y+.5)*c;this._renderTextShadow(a,this.text,k,b);a.fillStyle=this.textColor.toCss(!0);a.fillText(this.text,k,b)}};l._renderTextShadow=function(a,b,c,k){a.lineJoin=
"miter";a.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/n.length})`;const h=this._textShadowSize;for(const [f,x]of n)a.fillText(b,c+h*f,k+h*x)};l._roundedRect=function(a,b,c,k,h,f){a.beginPath();a.moveTo(b,c+f);a.arcTo(b,c,b+f,c,f);a.lineTo(b+k-f,c);a.arcTo(b+k,c,b+k,c+f,f);a.lineTo(b+k,c+h-f);a.arcTo(b+k,c+h,b+k-f,c+h,f);a.lineTo(b+f,c+h);a.arcTo(b,c+h,b,c+h-f,f);a.closePath()};l._cssClasses=function(){const a={"esri-text-overlay-item":!0};
for(const b in r)a[r[b]]=this.anchor===b;return a};p._createClass(m,[{key:"position",get:function(){return[this.x,this.y]},set:function(a){this._set("x",a[0]);this._set("y",a[1])}},{key:"_textShadowColor",get:function(){return this.backgroundColor}},{key:"_textShadow",get:function(){const a=this._textShadowColor.toCss(!1);return`0 0 ${this._textShadowSize}px ${a}`}},{key:"_padding",get:function(){return.5*this.fontSize}},{key:"_borderRadius",get:function(){return this._padding}}]);return m}(e);d.__decorate([g.property()],
e.prototype,"x",void 0);d.__decorate([g.property()],e.prototype,"y",void 0);d.__decorate([g.property()],e.prototype,"position",null);d.__decorate([g.property()],e.prototype,"text",void 0);d.__decorate([g.property()],e.prototype,"fontSize",void 0);d.__decorate([g.property()],e.prototype,"anchor",void 0);d.__decorate([g.property()],e.prototype,"visible",void 0);d.__decorate([g.property()],e.prototype,"backgroundColor",void 0);d.__decorate([g.property()],e.prototype,"textColor",void 0);d.__decorate([g.property()],
e.prototype,"_textShadowSize",void 0);d.__decorate([g.property()],e.prototype,"_textShadowColor",null);d.__decorate([g.property()],e.prototype,"_textShadow",null);d.__decorate([g.property()],e.prototype,"_padding",null);d.__decorate([g.property()],e.prototype,"_borderRadius",null);e=d.__decorate([u.subclass("esri.views.overlay.TextOverlayItem")],e);const w={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,
y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},n=[];for(d=0;360>d;d+=22.5)n.push([Math.cos(Math.PI*d/180),Math.sin(Math.PI*d/180)]);return e});