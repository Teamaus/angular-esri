// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/mat4f64","../../../chunks/vec3f64","./CloudsData"],function(b,f,g,d,c){let h=function(){function a(){this.readChannels=c.CloudsTextureChannels.RG;this.renderingStage=c.CloudsRenderingStages.FINISHED;this.startTimeHeightFade=this.startTime=0;this.cameraPositionLastFrame=d.create();this.isCameraPositionFinal=!0;this.parallax=new e;this.parallaxNew=new e;this.crossFade={enabled:!1,factor:1,distanceThresholdFactor:.3};this.fadeInOut=
{stage:b.FadeInOutStages.FINISHED,factor:1,distanceThresholdFactor:.6};this.fadeIn={stage:b.FadeInStages.FINISHED,factor:1,distanceThresholdFactor:2};this.fadeInOutHeight={stage:b.FadeHeightStages.FINISHED,factor:-1}}f._createClass(a,[{key:"isFading",get:function(){return this.fadeInOut.stage===b.FadeInOutStages.FADE_OUT||this.fadeInOut.stage===b.FadeInOutStages.FADE_IN||this.fadeIn.stage===b.FadeInStages.FADE_IN||this.fadeInOutHeight.stage!==b.FadeHeightStages.FINISHED||this.renderingStage===c.CloudsRenderingStages.FADING_TEXTURE_CHANNELS}}]);
return a}();b.FadeInStages=void 0;(function(a){a[a.FINISHED=0]="FINISHED";a[a.CHANGE_ANCHOR=1]="CHANGE_ANCHOR";a[a.FADE_IN=2]="FADE_IN"})(b.FadeInStages||(b.FadeInStages={}));b.FadeInOutStages=void 0;(function(a){a[a.FINISHED=0]="FINISHED";a[a.FADE_OUT=1]="FADE_OUT";a[a.SWITCH=2]="SWITCH";a[a.FADE_IN=3]="FADE_IN"})(b.FadeInOutStages||(b.FadeInOutStages={}));b.FadeHeightStages=void 0;(function(a){a[a.FINISHED=0]="FINISHED";a[a.HEIGHT_FADE=1]="HEIGHT_FADE"})(b.FadeHeightStages||(b.FadeHeightStages=
{}));let e=function(){this.anchorPointClouds=d.create();this.cloudsHeight=1E5;this.radiusCurvatureCorrectionFactor=0;this.transform=g.create()};b.CloudsFadeParameters=h;Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});