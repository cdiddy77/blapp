
/**
 * Basic functionalities.
 */
//% color=#00BCD4 weight=90
namespace Style {
    /**
     * Modify the visual appearance of a UI element
    **/
    //% weight=100
    //% blockId=styledef
    //% block="Rules %props=Array<StyleProperty>"
    //% acceptArrays=true
    export function styleDef(props: StyleProperty[]): StylePropertySet {
        return {};//styleDefImpl(null);
    }

    /**
     * Set a property of a style
    **/
    //% weight=100
    //% blockId=stylepropdef
    //% block="Prop %prop|with %value=AnyValue"
    export function stylePropDef(name: string, value: AnyValue): StyleProperty {
        let retval: StyleProperty = {};//styleDefImpl(null);
        if (value) {
            retval[name] = value.v;
        }
        return retval;
    }

}
