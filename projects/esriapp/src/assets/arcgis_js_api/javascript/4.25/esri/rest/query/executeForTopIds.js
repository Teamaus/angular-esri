// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../utils","./operations/queryTopFeatures","../support/TopFeaturesQuery"],function(c,f,g,h,k){function b(){b=f._asyncToGenerator(function*(a,d,e){a=g.parseUrl(a);return(yield h.executeQueryForTopIds(a,k.from(d),{...e})).data.objectIds});return b.apply(this,arguments)}c.executeForTopIds=function(a,d,e){return b.apply(this,arguments)};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});