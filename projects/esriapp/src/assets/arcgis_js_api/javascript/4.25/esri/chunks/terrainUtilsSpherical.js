// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ../core/Error ../core/maybe ../geometry/projection ../geometry/support/spatialReferenceUtils ../views/3d/terrain/TilingScheme".split(" "),function(c,b,f,p,g,e){function h(){return!0}function k(){return 0}function l(a,m){if(f.isNone(a))return e.getMissingTileInfoError();const n=a.lods.length-1,d=a.spatialReference,q=p.canProjectToWGS84ComparableLonLat(d)||g.isMars(d)||g.isMoon(d);if(d.isWebMercator){if(!e.TilingScheme.makeWebMercatorAuxiliarySphere(n).compatibleWith(a))return new b("tilingscheme:incompatible-global-web-mercator",
"The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else if(q){if(!e.TilingScheme.makeGCSWithTileSize(a.spatialReference,a.size[0],n).compatibleWith(a))return a.spatialReference.isWGS84?new b("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme"):new b("tilingscheme:incompatible-global","The tiling scheme is not compatible with the ArcGIS Online tiling scheme")}else return new b("tilingscheme:global-unsupported-spatial-reference",
"The tiling scheme spatial reference is not supported in global scenes");if(f.isSome(m)&&!a.spatialReference.equals(m))return new b("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}const r=Object.freeze(Object.defineProperty({__proto__:null,isInsideExtent:h,tiltToExtentEdge:k,checkIfTileInfoSupportedForViewSR:l},Symbol.toStringTag,{value:"Module"}));c.checkIfTileInfoSupportedForViewSR=l;c.isInsideExtent=h;c.terrainUtilsSpherical=
r;c.tiltToExtentEdge=k});