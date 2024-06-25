// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("require ../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/arrayUtils ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ./PortalFolder ./PortalGroup".split(" "),function(v,q,d,r,c,e,y,z,w,x,t){var p;c=p=function(u){function m(...a){a=u.call(this,...a)||this;a.access=null;a.created=null;a.culture=null;a.description=null;a.email=null;a.fullName=null;a.modified=null;a.orgId=
null;a.portal=null;a.preferredView=null;a.privileges=null;a.region=null;a.role=null;a.roleId=null;a.sourceJSON=null;a.units=null;a.username=null;a.userType=null;return a}q._inheritsLoose(m,u);var k=m.prototype;k.addItem=function(a){const b=a&&a.item;var f=a&&a.data;a=a&&a.folder;const g={method:"post"};b&&(g.query=b.createPostQuery(),null!=f&&("string"===typeof f?g.query.text=f:"object"===typeof f&&(g.query.text=JSON.stringify(f))));f=this.userContentUrl;a&&(f+="/"+("string"===typeof a?a:a.id));return this.portal._request(f+
"/addItem",g).then(h=>{b.id=h.id;b.portal=this.portal;return b.loaded?b.reload():b.load()})};k.deleteItem=function(a){let b=this.userContentUrl;a.ownerFolder&&(b+="/"+a.ownerFolder);return this.portal._request(b+`/items/${a.id}/delete`,{method:"post"}).then(()=>{a.id=null;a.portal=null})};k.deleteItems=function(a){const b=this.userContentUrl+"/deleteItems";var f=a.map(g=>g.id);return f.length?(f={method:"post",query:{items:f.join(",")}},this.portal._request(b,f).then(()=>{a.forEach(g=>{g.id=null;
g.portal=null})})):Promise.resolve(void 0)};k.fetchFolders=function(){return this.portal._request(this.userContentUrl??"",{query:{num:1}}).then(a=>a&&a.folders?a.folders.map(b=>{b=x.fromJSON(b);b.portal=this.portal;return b}):[])};k.fetchGroups=function(){return this.portal._request(this.url??"").then(a=>a&&a.groups?a.groups.map(b=>{b=t.fromJSON(b);b.portal=this.portal;return b}):[])};k.fetchItems=function(a){const b=a??{};let f=this.userContentUrl??"";b.folder&&(f+="/"+b.folder.id);let g;return(new Promise((h,
n)=>v(["./PortalItem"],l=>h(Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"}))),n))).then(({default:h})=>{g=h;return this.portal._request(f,{query:{folders:!1,num:b.num||10,start:b.start||1,sortField:b.sortField||"created",sortOrder:b.sortOrder||"asc"}})}).then(h=>{let n;return h&&h.items?(n=h.items.map(l=>{l=g.fromJSON(l);l.portal=this.portal;return l}),Promise.all(n.map(l=>l.load())).catch(l=>l).then(()=>({items:n,nextStart:h.nextStart,total:h.total}))):
{items:[],nextStart:-1,total:0}})};k.fetchTags=function(){return this.portal._request(this.url+"/tags").then(a=>a.tags)};k.getThumbnailUrl=function(a){let b=this.thumbnailUrl;b&&a&&(b+=`&w=${a}`);return b};k.queryFavorites=function(a){return this.favGroupId?(this._favGroup||(this._favGroup=new t({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(a)):Promise.reject(new r("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))};k.toJSON=function(){throw new r("internal:not-yet-implemented",
"PortalGroup.toJSON is not yet implemented");};m.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");const b=new p;b.sourceJSON=a;b.read(a);return b};q._createClass(m,[{key:"thumbnailUrl",get:function(){const a=this.url,b=this.thumbnail;return a&&b?this.portal._normalizeUrl(`${a}/info/${b}?f=json`):null}},{key:"userContentUrl",get:function(){const a=this.get("portal.restUrl");return a?`${a}/content/users/${this.username}`:null}},{key:"url",get:function(){const a=
this.get("portal.restUrl");return a?`${a}/community/users/${this.username}`:null}}]);return m}(c.JSONSupport);d.__decorate([e.property()],c.prototype,"access",void 0);d.__decorate([e.property({type:Date})],c.prototype,"created",void 0);d.__decorate([e.property()],c.prototype,"culture",void 0);d.__decorate([e.property()],c.prototype,"description",void 0);d.__decorate([e.property()],c.prototype,"email",void 0);d.__decorate([e.property()],c.prototype,"favGroupId",void 0);d.__decorate([e.property()],
c.prototype,"fullName",void 0);d.__decorate([e.property({type:Date})],c.prototype,"modified",void 0);d.__decorate([e.property()],c.prototype,"orgId",void 0);d.__decorate([e.property()],c.prototype,"portal",void 0);d.__decorate([e.property()],c.prototype,"preferredView",void 0);d.__decorate([e.property()],c.prototype,"privileges",void 0);d.__decorate([e.property()],c.prototype,"region",void 0);d.__decorate([e.property()],c.prototype,"role",void 0);d.__decorate([e.property()],c.prototype,"roleId",void 0);
d.__decorate([e.property()],c.prototype,"sourceJSON",void 0);d.__decorate([e.property()],c.prototype,"thumbnail",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"thumbnailUrl",null);d.__decorate([e.property()],c.prototype,"units",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"userContentUrl",null);d.__decorate([e.property({readOnly:!0})],c.prototype,"url",null);d.__decorate([e.property()],c.prototype,"username",void 0);d.__decorate([e.property()],c.prototype,"userType",
void 0);return c=p=d.__decorate([w.subclass("esri.portal.PortalUser")],c)});