// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Error","../../../../core/Logger","./enums","./Utils"],function(c,e,f,b,d){c.getTypeOfSizeVisualVariable=function(a){if(d.isNumber(a.minDataValue)&&d.isNumber(a.maxDataValue)&&null!=a.minSize&&null!=a.maxSize)return b.WGLVVFlag.SIZE_MINMAX_VALUE;if((a.expression&&"view.scale"===a.expression||a.valueExpression&&"$view.scale"===a.valueExpression)&&Array.isArray(a.stops))return b.WGLVVFlag.SIZE_SCALE_STOPS;if((null!=a.field||a.expression&&"view.scale"!==a.expression||
a.valueExpression&&"$view.scale"!==a.valueExpression)&&(Array.isArray(a.stops)||"levels"in a&&a.levels))return b.WGLVVFlag.SIZE_FIELD_STOPS;if((null!=a.field||a.expression&&"view.scale"!==a.expression||a.valueExpression&&"$view.scale"!==a.valueExpression)&&null!=a.valueUnit)return b.WGLVVFlag.SIZE_UNIT_VALUE;f.getLogger("esri.views.2d.engine.webgl").error(new e("mapview-bad-type","Found invalid size VisualVariable",a));return b.WGLVVFlag.NONE};Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});