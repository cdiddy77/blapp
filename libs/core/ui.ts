
/**
 * Basic functionalities.
 */
//% color=#935BA5 weight=100
namespace UI {
    /**
     * The User Interface goes inside this
     * @param theme the general look of various UI elements, eg: UITheme.Calm
    **/
    //% weight=100
    //% color=#935BA5
    //% blockId=user_interface
    //% block="UI theme %theme"
    export function userInterface(theme: UITheme, body: () => void) {
        userInterfaceImpl(theme, body);
    }
    /**
      * An element for grouping other elements
      */
    //% weight=90
    //% color=#5B6DA5
    //% blockId=group_element
    //% block="GROUP id %name|dir %direction|flex %flex|class %className|style %style=lists_create_empty"
    //% handlerStmt=true
    //% externallyLoadedBlock=true
    //% name.fieldEditor="text" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true
    //% flex.fieldEditor="checkbox" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true
    export function groupElement(
        name: string,
        direction: UIGroupDirection,
        flex: boolean,
        className: UIGroupClass,
        style: string[],
        children: Action): void {
        groupElementImpl(name, direction, flex, className, style, children);
    }

    /**
      * An element for grouping other elements in a scrollable region
      */
    //% weight=30
    //% color=#80A55B
    //% blockId=scroller_element
    //% block="SCROLLER id %name|flex %flex|class %className|horizontal? %horz|style %style=lists_create_empty"
    //% handlerStmt=true
    //% externallyLoadedBlock=true
    //% name.fieldEditor="text" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true
    //% flex.fieldEditor="checkbox" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true
    //% horz.fieldEditor="checkbox" horz.fieldOptions.onParentBlock=true horz.fieldOptions.decompileLiterals=true
    export function scrollerElement(
        name: string,
        flex: boolean,
        className: UIGroupClass,
        horz: boolean,
        style: string[],
        children: Action): void {
        scrollerElementImpl(name, flex, className, horz, style, children);
    }

    /**
     * A block for making a button
     */
    //% weight=70
    //% color=#80A55B
    //% blockId=button_element
    //% block="BUTTON id %name|flex %flex|class %className|style %style=lists_create_empty"
    //% externallyLoadedBlock=true
    //% name.fieldEditor="text" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true
    //% flex.fieldEditor="checkbox" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true
    //% handlerStmt=true
    export function buttonElement(
        name: string,
        flex: boolean,
        className: UIButtonClass,
        style: string[],
        children: () => void,
        whenPressed: () => void): void {
        buttonElementImpl(name, flex, className, style, children, whenPressed);
    }

    /**
     * A block for making a text element
     * @param value the text to display, eg:Lorem Ipsum
     */
    //% weight=80
    //% color=#805BA5
    //% blockId=text_element
    //% block="TEXT flex %flex|class %className|%value|style %style=lists_create_empty"
    //% externallyLoadedBlock=true
    //% name.fieldEditor="text" name.fieldOptions.onParentBlock=true name.fieldOptions.decompileLiterals=true
    //% flex.fieldEditor="checkbox" flex.fieldOptions.onParentBlock=true flex.fieldOptions.decompileLiterals=true
    export function textElement(
        flex: boolean,
        className: UITextClass,
        value: string,
        style: string[]): void {
        textElementImpl(flex, className, style, value);
    }

    export class WhenTextChangesArgs {
        text: string;
    }
    /**
     * A block for making a text input element
     */
    //% weight=50
    //% color=#A55B93
    //% blockId=textinput_element
    //% block="TEXT INPUT id %name|flex %flex|class %className|style %style=lists_create_empty|initial %initialValue| when text changes"
    //% handlerStmt=true
    //% mutate=objectdestructuring
    //% mutateText="new text"
    //% mutateDefaults="text"
    export function textInputElement(
        name: string,
        flex: boolean,
        className: UITextInputClass,
        style: string[],
        initialValue: string,
        whenTextChanges: (args: WhenTextChangesArgs) => void): void {

        textInputElementImpl(name, flex, className, style, initialValue, (t) => {
            let args = new WhenTextChangesArgs();
            args.text = t;
            whenTextChanges(args);
        });
    }

    /**
     * A block for making a image element
     * @param width the width of the image, eg. 80
     * @param height the height of the image, eg. 60
     */
    //% weight=60
    //% color=#5BA5A5
    //% blockId=image_element
    //% block="IMAGE flex %flex|width %width|height %height|URL %url|style %style=lists_create_empty"
    export function imageElement(
        flex: boolean,
        width: number,
        height: number,
        url: string,
        style: string[]): void {
        imageElementImpl(flex, width, height, style, url);
    }

    /**
     * A block for making a divider element
     */
    //% weight=40
    //% color=#A55B5B
    //% blockId=divider_element
    //% block="DIVIDER class %className|style %style=lists_create_empty"
    export function dividerElement(
        className: UIDividerClass,
        style: string[]): void {
        dividerElementImpl(className, style);
    }

    /**
     * Cause the UI to update
    **/
    //% weight=20
    //% blockId=update_ui
    //% block="Update UI"
    export function updateUI() {
        updateUIImpl();
    }

    /**
     * Action Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_action
    //% block="Action Icon %name|size %size|%type|style %style=lists_create_empty"
    export function actionIcon(name: ActionIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('action', name, type, size, style);
    }

    /**
     * Alert Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_alert
    //% block="Alert Icon %name|size %size|%type|style %style=lists_create_empty"
    export function alert(name: AlertIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('alert', name, type, size, style);
    }

    /**
     * A/V Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_av
    //% block="A/V Icon %name|size %size|%type|style %style=lists_create_empty"
    export function avIcon(name: AvIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('av', name, type, size, style);
    }

    /**
     * Communication Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_communication
    //% block="Communication Icon %name|size %size|%type|style %style=lists_create_empty"
    export function communicationIcon(name: CommunicationIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('communication', name, type, size, style);
    }

    /**
     * Content Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_content
    //% block="Content Icon %name|size %size|%type|style %style=lists_create_empty"
    export function contentIcon(name: ContentIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('content', name, type, size, style);
    }

    /**
     * Device Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_device
    //% block="Device Icon %name|size %size|%type|style %style=lists_create_empty"
    export function deviceIcon(name: DeviceIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('device', name, type, size, style);
    }

    /**
     * Editor Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_editor
    //% block="Editor Icon %name|size %size|%type|style %style=lists_create_empty"
    export function editorIcon(name: EditorIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('editor', name, type, size, style);
    }

    /**
     * File Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_file
    //% block="File Icon %name|size %size|%type|style %style=lists_create_empty"
    export function fileIcon(name: FileIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('file', name, type, size, style);
    }

    /**
     * Hardware Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_hardware
    //% block="Hardware Icon %name|size %size|%type|style %style=lists_create_empty"
    export function hardwareIcon(name: HardwareIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('hardware', name, type, size, style);
    }

    /**
     * Image Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_image
    //% block="Image Icon %name|size %size|%type|style %style=lists_create_empty"
    export function imageIcon(name: ImageIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('image', name, type, size, style);
    }

    /**
     * Maps Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_maps
    //% block="Maps Icon %name|size %size|%type|style %style=lists_create_empty"
    export function mapsIcon(name: MapsIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('maps', name, type, size, style);
    }

    /**
     * Navigation Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_navigation
    //% block="Navigation Icon %name|size %size|%type|style %style=lists_create_empty"
    export function navigationIcon(name: NavigationIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('navigation', name, type, size, style);
    }

    /**
     * Notification Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_notification
    //% block="Notification Icon %name|size %size|%type|style %style=lists_create_empty"
    export function notificationIcon(name: NotificationIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('notification', name, type, size, style);
    }

    /**
     * Places Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_places
    //% block="Places Icon %name|size %size|%type|style %style=lists_create_empty"
    export function placesIcon(name: PlacesIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('places', name, type, size, style);
    }

    /**
     * Social Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_social
    //% block="Social Icon %name|size %size|%type|style %style=lists_create_empty"
    export function socialIcon(name: SocialIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('social', name, type, size, style);
    }

    /**
     * Toggle Icon
     * @param size the size of the icon, eg: 24
     */
    //% subcategory=Icons
    //% color=#93A55B
    //% blockId=icon_toggle
    //% block="Toggle Icon %name|size %size|%type|style %style=lists_create_empty"
    export function toggleIcon(name: ToggleIconCategory, size: number, type: IconType, style: string[]) {
        iconElementImpl('toggle', name, type, size, style);
    }

}
