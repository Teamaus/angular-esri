// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define("exports ./effects/EffectAddControlPoints ./effects/EffectArrow ./effects/EffectBuffer ./effects/EffectControlMeasureLine ./effects/EffectCut ./effects/EffectDashes ./effects/EffectDonut ./effects/EffectJog ./effects/EffectMove ./effects/EffectOffset ./effects/EffectReverse ./effects/EffectRotate ./effects/EffectScale ./effects/EffectWave ./placements/PlacementAlongLineSameSize ./placements/PlacementAtExtremities ./placements/PlacementAtRatioPositions ./placements/PlacementInsidePolygon ./placements/PlacementOnLine ./placements/PlacementOnVertices ./placements/PlacementPolygonCenter".split(" "),
function(b,c,d,e,f,g,h,k,l,m,n,p,q,r,t,u,v,w,x,y,z,A){b.getEffectOperator=function(a){if(!a)return null;switch(a.type){case "CIMGeometricEffectAddControlPoints":return c.EffectAddControlPoints.local();case "CIMGeometricEffectArrow":return d.EffectArrow.local();case "CIMGeometricEffectBuffer":return e.EffectBuffer.local();case "CIMGeometricEffectControlMeasureLine":return f.EffectControlMeasureLine.local();case "CIMGeometricEffectCut":return g.EffectCut.local();case "CIMGeometricEffectDashes":return h.EffectDashes.local();
case "CIMGeometricEffectDonut":return k.EffectDonut.local();case "CIMGeometricEffectJog":return l.EffectJog.local();case "CIMGeometricEffectMove":return m.EffectMove.local();case "CIMGeometricEffectOffset":return n.EffectOffset.local();case "CIMGeometricEffectReverse":return p.EffectReverse.local();case "CIMGeometricEffectRotate":return q.EffectRotate.local();case "CIMGeometricEffectScale":return r.EffectScale.local();case "CIMGeometricEffectWave":return t.EffectWave.local()}return null};b.getPlacementOperator=
function(a){if(!a)return null;switch(a.type){case "CIMMarkerPlacementAlongLineSameSize":return u.PlacementAlongLineSameSize.local();case "CIMMarkerPlacementAtExtremities":return v.PlacementAtExtremities.local();case "CIMMarkerPlacementAtRatioPositions":return w.PlacementAtRatioPositions.local();case "CIMMarkerPlacementInsidePolygon":return x.PlacementInsidePolygon.local();case "CIMMarkerPlacementOnLine":return y.PlacementOnLine.local();case "CIMMarkerPlacementOnVertices":return z.PlacementOnVertices.local();
case "CIMMarkerPlacementPolygonCenter":return A.PlacementPolygonCenter.local()}return null};Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});