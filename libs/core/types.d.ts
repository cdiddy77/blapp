declare interface StylePropertySet {
    name: string;
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
