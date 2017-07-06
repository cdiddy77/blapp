declare interface StylePropertySet {
    rules: StyleProperty[];
}

declare interface StyleProperty {
    name:string;
    stringValue?:string;
    numberValue?:number;
    boolValue?:boolean;
}

declare const enum UITheme {
    //% block=calm
    Calm,
    //% block=bright
    Bright,
    //% block=wickeddahk
    Dark
}
declare const enum UIGroupDirection {
    //% block=column
    Column,
    //% block=row
    Row,
    //% block=reverse-column
    ReverseColumn,
    //% block=reverse-row
    ReverseRow,
}
declare const enum UIGroupClass {
    //% block=panel
    Panel,
    //% block=frame
    Frame,
    //% block="framed panel"
    Framepanel,
    //% block=header
    Header,
    //% block=footer
    Footer,
    //% block=row
    Row,
    //% block="(none)"
    None
}
declare const enum UIButtonClass {
    //% block=small
    Small,
    //% block=medium
    Medium,
    //% block=large
    Large,
    //% block="small (accented)"
    SmallAccent,
    //% block="medium (accented)"
    MediumAccent,
    //% block="large (accented)"
    LargeAccent,
    //% block="(none)"
    None
}
declare const enum UITextClass {
    //% block=label
    Label,
    //% block=button
    Button,
    //% block="button (accented)"
    AccentButton,
    //% block="menu"
    Menu,
    //% block="caption"
    Caption,
    //% block="body"
    Body,
    //% block="subtitle"
    Subtitle,
    //% block="title"
    Title,
    //% block="headline"
    Headline,
    //% block="(none)"
    None
}
declare const enum UITextInputClass {
    //% block=small
    Inline,
    //% block=medium
    Form,
    //% block=large
    Headline,
    //% block="(none)"
    None
}
declare const enum UIDividerClass {
    //% block="horizontal top"
    HorzTop,
    //% block="horizontal bottom"
    HorzBottom,
    //% block="vertical left"
    VertLeft,
    //% block="vertical right"
    VertRight,
    //% block="(none)"
    None
}

declare const enum StyAlignContent {
    //% block=start
    Start,
    //% block=end
    End,
    //% block=center
    Center,
    //% block=stretch
    Stretch,
    //% block="space between"
    SpaceBetween,
    //% block="space around"
    SpaceAround
}

declare const enum StyAlignItems {
    //% block=start
    start,
    //% block=end
    end,
    //% block=center
    center,
    //% block=stretch
    stretch,
    //% block=baseline
    baseline,
}

declare const enum StyFlexDirection {
    //% block=row
    row,
    //% block="reverse row"
    rowReverse,
    //% block=column
    column,
    //% block="reverse column"
    columnReverse
}

declare const enum StyFlexWrap {
    //% block=yes
    wrap,
    //% block=no
    nowrap
}

declare const enum StyPosition {
    //% block=absolute
    absolute,
    //% block=relative
    relative
}

declare const enum StyOffsetType {
    //% block=bottom
    bottom,
    //% block=left
    left,
    //% block=right
    right,
    //% block=top
    top,
    //% block=z-index
    zIndex
}

declare const enum StyBoxSide {
    //% block=all
    all,
    //% block=bottom
    bottom,
    //% block=top
    top,
    //% block=left
    left,
    //% block=right
    right
}

declare const enum StyBoxCorner {
    //% block=all
    all,
    //% block="bottom left"
    bottomLeft,
    //% block="bottom right"
    bottomRight,
    //% block="top left"
    topLeft,
    //% block="top right"
    topRight
}

declare const enum StyBorderStyle {
    //% block=solid
    solid,
    //% block=double
    double,
    //% block=dotted
    dotted,
    //% block=dashed
    dashed
}

declare const enum StyFlexType {
    //% block=---
    flex,
    //% block=basis
    basis,
    //% block=grow
    grow,
    //% block=shrink
    shrink
}

declare const enum StyPropSize {
    //% block=height
    height,
    //% block=width
    width,
    //% block="max height"
    maxHeight,
    //% block="max width"
    maxWidth,
    //% block="min height"
    minHeight,
    //% block="min width"
    minWidth
}

declare const enum StyPropMargin {
    //% block=all
    margin,
    //% block=bottom
    marginBottom,
    //% block=horizontal
    marginHorizontal,
    //% block=left
    marginLeft,
    //% block=right
    marginRight,
    //% block=top
    marginTop,
    //% block=vertical
    marginVertical,
}

declare const enum StyPropPadding {
    //% block=all
    padding,
    //% block=bottom
    paddingBottom,
    //% block=horizontal
    paddingHorizontal,
    //% block=left
    paddingLeft,
    //% block=right
    paddingRight,
    //% block=top
    paddingTop,
    //% block=vertical
    paddingVertical,
}

declare const enum StyPropOverflow {
    //% block=visible
    visible,
    //% block=hidden
    hidden,
    //% block=scroll
    scroll
}

declare const enum StyImageResizeMode {
    //% block=cover
    cover,
    //% block=contain
    contain,
    //% block=center
    center,
    //% block=stretch
    stretch,
    //% block=repeat
    repeat,
}

declare const enum StyTextFontStyle {
    //% block=normal
    normal,
    //% block=italic
    italic
}

declare const enum StyTextFontWeight {
    //% block=normal
    normal,
    //% block=bold
    bold,
    //% block=100
    fw100,
    //% block=200
    fw200,
    //% block=300
    fw300,
    //% block=400
    fw400,
    //% block=500
    fw500,
    //% block=600
    fw600,
    //% block=700
    fw700,
    //% block=800
    fw800,
    //% block=900
    fw900,
}

declare const enum StyTextAlign {
    //% block=auto
    inherit,
    //% block=left
    left,
    //% block=right
    right,
    //% block=center
    center,
    //% block=justify
    justify,
    //% block="justify all"
    justifyAll,
}

declare const enum StyTextDecorationLine {
    //% block=none
    none,
    //% block=underline
    underline,
    //% block="line through"
    lineThrough,
    //% block=both
    both
}