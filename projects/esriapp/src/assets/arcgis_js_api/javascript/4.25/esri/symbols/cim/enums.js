// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.25/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){b.CapType=void 0;(function(a){a[a.BUTT=0]="BUTT";a[a.ROUND=1]="ROUND";a[a.SQUARE=2]="SQUARE";a[a.UNKNOWN=4]="UNKNOWN"})(b.CapType||(b.CapType={}));b.JoinType=void 0;(function(a){a[a.BEVEL=0]="BEVEL";a[a.ROUND=1]="ROUND";a[a.MITER=2]="MITER";a[a.UNKNOWN=4]="UNKNOWN"})(b.JoinType||(b.JoinType={}));b.Alignment=void 0;(function(a){a[a.SCREEN=0]="SCREEN";a[a.MAP=1]="MAP"})(b.Alignment||(b.Alignment={}));b.ExternalColorMixMode=void 0;(function(a){a[a.Tint=0]="Tint";a[a.Ignore=
1]="Ignore";a[a.Multiply=99]="Multiply"})(b.ExternalColorMixMode||(b.ExternalColorMixMode={}));b.ExtremityPlacement=void 0;(function(a){a.Both="Both";a.JustBegin="JustBegin";a.JustEnd="JustEnd";a.None="None"})(b.ExtremityPlacement||(b.ExtremityPlacement={}));b.FillMode=void 0;(function(a){a[a.Mosaic=0]="Mosaic";a[a.Centered=1]="Centered"})(b.FillMode||(b.FillMode={}));b.FontEffects=void 0;(function(a){a[a.Normal=0]="Normal";a[a.Superscript=1]="Superscript";a[a.Subscript=2]="Subscript"})(b.FontEffects||
(b.FontEffects={}));b.FontEncoding=void 0;(function(a){a[a.MSSymbol=0]="MSSymbol";a[a.Unicode=1]="Unicode"})(b.FontEncoding||(b.FontEncoding={}));b.FontType=void 0;(function(a){a[a.Unspecified=0]="Unspecified";a[a.TrueType=1]="TrueType";a[a.PSOpenType=2]="PSOpenType";a[a.TTOpenType=3]="TTOpenType";a[a.Type1=4]="Type1"})(b.FontType||(b.FontType={}));b.AngleAlignment=void 0;(function(a){a[a.Display=0]="Display";a[a.Map=1]="Map"})(b.AngleAlignment||(b.AngleAlignment={}));b.AnimatedSymbolRepeatType=void 0;
(function(a){a.None="None";a.Loop="Loop";a.Oscillate="Oscillate"})(b.AnimatedSymbolRepeatType||(b.AnimatedSymbolRepeatType={}));b.DominantSizeAxis=void 0;(function(a){a[a.Z=0]="Z";a[a.X=1]="X";a[a.Y=2]="Y"})(b.DominantSizeAxis||(b.DominantSizeAxis={}));b.RotationOrder=void 0;(function(a){a[a.XYZ=0]="XYZ";a[a.ZXY=1]="ZXY";a[a.YXZ=2]="YXZ"})(b.RotationOrder||(b.RotationOrder={}));b.BalloonCalloutStyle=void 0;(function(a){a[a.Rectangle=0]="Rectangle";a[a.RoundedRectangle=1]="RoundedRectangle";a[a.Oval=
2]="Oval"})(b.BalloonCalloutStyle||(b.BalloonCalloutStyle={}));b.BlendingMode=void 0;(function(a){a[a.None=0]="None";a[a.Alpha=1]="Alpha";a[a.Screen=2]="Screen";a[a.Multiply=3]="Multiply";a[a.Add=4]="Add"})(b.BlendingMode||(b.BlendingMode={}));b.BlockProgression=void 0;(function(a){a[a.TTB=0]="TTB";a[a.RTL=1]="RTL";a[a.BTT=2]="BTT"})(b.BlockProgression||(b.BlockProgression={}));b.BillBoardMode=void 0;(function(a){a[a.None=0]="None";a[a.SignPost=1]="SignPost";a[a.FaceNearPlane=2]="FaceNearPlane"})(b.BillBoardMode||
(b.BillBoardMode={}));b.CGAAttributeType=void 0;(function(a){a[a.Float=0]="Float";a[a.String=1]="String";a[a.Boolean=2]="Boolean"})(b.CGAAttributeType||(b.CGAAttributeType={}));b.ClippingType=void 0;(function(a){a[a.Intersect=0]="Intersect";a[a.Subtract=1]="Subtract"})(b.ClippingType||(b.ClippingType={}));b.GeometricEffectArrowType=void 0;(function(a){a.OpenEnded="OpenEnded";a.Block="Block";a.Crossed="Crossed"})(b.GeometricEffectArrowType||(b.GeometricEffectArrowType={}));b.GeometricEffectControlMeasureLineRule=
void 0;(function(a){a.FullGeometry="FullGeometry";a.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment";a.ReversedFirstSegment="ReversedFirstSegment";a.PerpendicularToSecondSegment="PerpendicularToSecondSegment";a.SecondSegmentWithTicks="SecondSegmentWithTicks";a.DoublePerpendicular="DoublePerpendicular";a.OppositeToFirstSegment="OppositeToFirstSegment";a.TriplePerpendicular="TriplePerpendicular";a.HalfCircleFirstSegment="HalfCircleFirstSegment";a.HalfCircleSecondSegment="HalfCircleSecondSegment";
a.HalfCircleExtended="HalfCircleExtended";a.OpenCircle="OpenCircle";a.CoverageEdgesWithTicks="CoverageEdgesWithTicks";a.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks";a.GapExtentMidline="GapExtentMidline";a.Chevron="Chevron";a.PerpendicularWithArc="PerpendicularWithArc";a.ClosedHalfCircle="ClosedHalfCircle";a.TripleParallelExtended="TripleParallelExtended";a.ParallelWithTicks="ParallelWithTicks";a.Parallel="Parallel";a.PerpendicularToFirstSegment="PerpendicularToFirstSegment";a.ParallelOffset=
"ParallelOffset";a.OffsetOpposite="OffsetOpposite";a.OffsetSame="OffsetSame";a.CircleWithArc="CircleWithArc";a.DoubleJog="DoubleJog";a.PerpendicularOffset="PerpendicularOffset";a.LineExcludingLastSegment="LineExcludingLastSegment";a.MultivertexArrow="MultivertexArrow";a.CrossedArrow="CrossedArrow";a.ChevronArrow="ChevronArrow";a.ChevronArrowOffset="ChevronArrowOffset";a.PartialFirstSegment="PartialFirstSegment";a.Arch="Arch";a.CurvedParallelTicks="CurvedParallelTicks";a.Arc90Degrees="Arc90Degrees"})(b.GeometricEffectControlMeasureLineRule||
(b.GeometricEffectControlMeasureLineRule={}));b.GeometricEffectDonutMethod=void 0;(function(a){a.Mitered="Mitered";a.Bevelled="Bevelled";a.Rounded="Rounded";a.Square="Square";a.TrueBuffer="TrueBuffer"})(b.GeometricEffectDonutMethod||(b.GeometricEffectDonutMethod={}));b.GeometricEffectEnclosingPolygonMethod=void 0;(function(a){a.ClosePath="ClosePath";a.ConvexHull="ConvexHull";a.RectangularBox="RectangularBox"})(b.GeometricEffectEnclosingPolygonMethod||(b.GeometricEffectEnclosingPolygonMethod={}));
b.GeometricEffectExtensionOrigin=void 0;(function(a){a.BeginningOfLine="BeginningOfLine";a.EndOfLine="EndOfLine"})(b.GeometricEffectExtensionOrigin||(b.GeometricEffectExtensionOrigin={}));b.GeometricEffectOffsetMethod=void 0;(function(a){a.Mitered="Mitered";a.Bevelled="Bevelled";a.Rounded="Rounded";a.Square="Square"})(b.GeometricEffectOffsetMethod||(b.GeometricEffectOffsetMethod={}));b.GeometricEffectOffsetOption=void 0;(function(a){a.Fast="Fast";a.Accurate="Accurate"})(b.GeometricEffectOffsetOption||
(b.GeometricEffectOffsetOption={}));b.GeometricEffectOffsetTangentMethod=void 0;(function(a){a.BeginningOfLine="BeginningOfLine";a.EndOfLine="EndOfLine"})(b.GeometricEffectOffsetTangentMethod||(b.GeometricEffectOffsetTangentMethod={}));b.GeometricEffectWaveform=void 0;(function(a){a.Sinus="Sinus";a.Square="Square";a.Triangle="Triangle";a.Random="Random"})(b.GeometricEffectWaveform||(b.GeometricEffectWaveform={}));b.GlyphHinting=void 0;(function(a){a[a.None=0]="None";a[a.Default=1]="Default";a[a.Force=
2]="Force"})(b.GlyphHinting||(b.GlyphHinting={}));b.GradientAlignment=void 0;(function(a){a[a.Buffered=0]="Buffered";a[a.Left=1]="Left";a[a.Right=2]="Right";a[a.AlongLine=3]="AlongLine"})(b.GradientAlignment||(b.GradientAlignment={}));b.GradientFillMethod=void 0;(function(a){a[a.Linear=0]="Linear";a[a.Rectangular=1]="Rectangular";a[a.Circular=2]="Circular";a[a.Buffered=3]="Buffered"})(b.GradientFillMethod||(b.GradientFillMethod={}));b.GradientStrokeType=void 0;(function(a){a[a.Discrete=0]="Discrete";
a[a.Continuous=1]="Continuous"})(b.GradientStrokeType||(b.GradientStrokeType={}));b.GradientStrokeMethod=void 0;(function(a){a[a.AcrossLine=0]="AcrossLine";a[a.AloneLine=1]="AloneLine"})(b.GradientStrokeMethod||(b.GradientStrokeMethod={}));b.HorizontalAlignment=void 0;(function(a){a[a.Left=0]="Left";a[a.Right=1]="Right";a[a.Center=2]="Center";a[a.Justify=3]="Justify"})(b.HorizontalAlignment||(b.HorizontalAlignment={}));b.LeaderLineStyle=void 0;(function(a){a[a.Base=0]="Base";a[a.MidPoint=1]="MidPoint";
a[a.ThreePoint=2]="ThreePoint";a[a.FourPoint=3]="FourPoint";a[a.Underline=4]="Underline";a[a.CircularCW=5]="CircularCW";a[a.CircularCCW=6]="CircularCCW"})(b.LeaderLineStyle||(b.LeaderLineStyle={}));b.LineCapStyle=void 0;(function(a){a.Butt="Butt";a.Round="Round";a.Square="Square"})(b.LineCapStyle||(b.LineCapStyle={}));b.LineDashEnding=void 0;(function(a){a.NoConstraint="NoConstraint";a.HalfPattern="HalfPattern";a.HalfGap="HalfGap";a.FullPattern="FullPattern";a.FullGap="FullGap";a.Custom="Custom"})(b.LineDashEnding||
(b.LineDashEnding={}));b.LineDecorationStyle=void 0;(function(a){a[a.None=-1]="None";a[a.Custom=0]="Custom";a[a.Circle=1]="Circle";a[a.OpenArrow=2]="OpenArrow";a[a.ClosedArrow=3]="ClosedArrow";a[a.Diamond=4]="Diamond"})(b.LineDecorationStyle||(b.LineDecorationStyle={}));b.LineGapType=void 0;(function(a){a[a.ExtraLeading=0]="ExtraLeading";a[a.Multiple=1]="Multiple";a[a.Exact=2]="Exact"})(b.LineGapType||(b.LineGapType={}));b.LineJoinStyle=void 0;(function(a){a.Bevel="Bevel";a.Round="Round";a.Miter=
"Miter"})(b.LineJoinStyle||(b.LineJoinStyle={}));b.ExpressionReturnType=void 0;(function(a){a[a.Default=0]="Default";a[a.String=1]="String";a[a.Numeric=2]="Numeric"})(b.ExpressionReturnType||(b.ExpressionReturnType={}));b.MarkerPlacementType=void 0;(function(a){a[a.InsidePolygon=0]="InsidePolygon";a[a.PolygonCenter=1]="PolygonCenter";a[a.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"})(b.MarkerPlacementType||(b.MarkerPlacementType={}));b.MaterialMode=void 0;(function(a){a[a.Tint=0]="Tint";a[a.Replace=
1]="Replace";a[a.Multiply=2]="Multiply"})(b.MaterialMode||(b.MaterialMode={}));b.PlacementClip=void 0;(function(a){a[a.ClipAtBoundary=0]="ClipAtBoundary";a[a.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary";a[a.DoNotTouchBoundary=2]="DoNotTouchBoundary";a[a.DoNotClip=3]="DoNotClip"})(b.PlacementClip||(b.PlacementClip={}));b.PlacementEndings=void 0;(function(a){a.NoConstraint="NoConstraint";a.WithMarkers="WithMarkers";a.WithFullGap="WithFullGap";a.WithHalfGap="WithHalfGap";a.Custom=
"Custom"})(b.PlacementEndings||(b.PlacementEndings={}));b.PlacementGridType=void 0;(function(a){a.Fixed="Fixed";a.Random="Random";a.RandomFixedQuantity="RandomFixedQuantity"})(b.PlacementGridType||(b.PlacementGridType={}));b.PlacementOnLineRelativeTo=void 0;(function(a){a.LineMiddle="LineMiddle";a.LineBeginning="LineBeginning";a.LineEnd="LineEnd";a.SegmentMidpoint="SegmentMidpoint"})(b.PlacementOnLineRelativeTo||(b.PlacementOnLineRelativeTo={}));b.PlacementPolygonCenterMethod=void 0;(function(a){a.OnPolygon=
"OnPolygon";a.CenterOfMass="CenterOfMass";a.BoundingBoxCenter="BoundingBoxCenter"})(b.PlacementPolygonCenterMethod||(b.PlacementPolygonCenterMethod={}));b.PlacementRandomlyAlongLineRandomization=void 0;(function(a){a[a.Low=0]="Low";a[a.Medium=1]="Medium";a[a.High=2]="High"})(b.PlacementRandomlyAlongLineRandomization||(b.PlacementRandomlyAlongLineRandomization={}));b.PlacementStepPosition=void 0;(function(a){a[a.MarkerCenter=0]="MarkerCenter";a[a.MarkerBounds=1]="MarkerBounds"})(b.PlacementStepPosition||
(b.PlacementStepPosition={}));b.PointSymbolCalloutScale=void 0;(function(a){a[a.None=0]="None";a[a.PropUniform=1]="PropUniform";a[a.PropNonuniform=2]="PropNonuniform";a[a.DifUniform=3]="DifUniform";a[a.DifNonuniform=4]="DifNonuniform"})(b.PointSymbolCalloutScale||(b.PointSymbolCalloutScale={}));b.Simple3DLineStyle=void 0;(function(a){a.Tube="Tube";a.Strip="Strip";a.Wall="Wall"})(b.Simple3DLineStyle||(b.Simple3DLineStyle={}));b.SizeVariationMethod=void 0;(function(a){a[a.Random=0]="Random";a[a.Increasing=
1]="Increasing";a[a.Decreasing=2]="Decreasing";a[a.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"})(b.SizeVariationMethod||(b.SizeVariationMethod={}));b.SymbolUnits=void 0;(function(a){a[a.Relative=0]="Relative";a[a.Absolute=1]="Absolute"})(b.SymbolUnits||(b.SymbolUnits={}));b.TextCase=void 0;(function(a){a[a.Normal=0]="Normal";a[a.LowerCase=1]="LowerCase";a[a.Allcaps=2]="Allcaps"})(b.TextCase||(b.TextCase={}));b.TextReadingDirection=void 0;(function(a){a[a.LTR=0]="LTR";a[a.RTL=1]="RTL"})(b.TextReadingDirection||
(b.TextReadingDirection={}));b.TextureFilter=void 0;(function(a){a.Draft="Draft";a.Picture="Picture";a.Text="Text"})(b.TextureFilter||(b.TextureFilter={}));b.VerticalAlignment=void 0;(function(a){a[a.Top=0]="Top";a[a.Center=1]="Center";a[a.Baseline=2]="Baseline";a[a.Bottom=3]="Bottom"})(b.VerticalAlignment||(b.VerticalAlignment={}));b.VerticalGlyphOrientation=void 0;(function(a){a[a.Right=0]="Right";a[a.Upright=1]="Upright"})(b.VerticalGlyphOrientation||(b.VerticalGlyphOrientation={}));b.WaterbodySize=
void 0;(function(a){a[a.Small=0]="Small";a[a.Medium=1]="Medium";a[a.Large=2]="Large"})(b.WaterbodySize||(b.WaterbodySize={}));b.WaveStrength=void 0;(function(a){a[a.Calm=0]="Calm";a[a.Rippled=1]="Rippled";a[a.Slight=2]="Slight";a[a.Moderate=3]="Moderate"})(b.WaveStrength||(b.WaveStrength={}));Object.defineProperties(b,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});