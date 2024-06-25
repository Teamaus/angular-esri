/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/ensureType.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/get.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/object.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/string.js";import"../chunks/ArrayPool.js";import"../chunks/tracking.js";import"../chunks/watch.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../core/promiseUtils.js";import"../core/Error.js";let e=class extends r{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};o([t({json:{write:!0}})],e.prototype,"adminTokenServiceUrl",void 0),o([t({json:{write:!0}})],e.prototype,"currentVersion",void 0),o([t({json:{write:!0}})],e.prototype,"hasPortal",void 0),o([t({json:{write:!0}})],e.prototype,"hasServer",void 0),o([t({json:{write:!0}})],e.prototype,"owningSystemUrl",void 0),o([t({json:{write:!0}})],e.prototype,"owningTenant",void 0),o([t({json:{write:!0}})],e.prototype,"server",void 0),o([t({json:{write:!0}})],e.prototype,"shortLivedTokenValidity",void 0),o([t({json:{write:!0}})],e.prototype,"tokenServiceUrl",void 0),o([t({json:{write:!0}})],e.prototype,"webTierAuth",void 0),e=o([s("esri.identity.ServerInfo")],e);const i=e;export{i as default};
