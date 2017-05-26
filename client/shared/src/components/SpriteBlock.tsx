import * as React from 'react';
import { Image } from 'react-native';
import * as BlockThemes from '../util/BlockThemes';
import { EdgeKind, CodegenComponent, CodegenRuntime } from '../util/CodegenRuntime';
import * as jsutil from '../util/jsutil';

const defaultWidth = 100;
const defaultHeight = 100;

export interface SpriteState {
    perspective?: number;
    rotate?: string;
    rotateX?: string;
    rotateY?: string;
    rotateZ?: string;
    scale?: number;
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
    skewX?: string;
    skewY?: string;
}

export class SpriteBlock extends React.Component<any, any> implements CodegenComponent {
    constructor(props: any) {
        super(props);
        this.resetState();
        this.width = props.width || defaultWidth;
        this.height = props.height || defaultHeight;
        this.canvasId = props.canvasId;
    }

    width: number;
    height: number;
    canvasId: string;

    // CodegenComponent implementation ///////////////////////////////////////////////
    //
    resetState(): void {
        this.spriteState = {
            rotate: '0deg',
            scale: 1,
            translateX: 0,
            translateY: 0,
        };
    }
    componentName(): string {
        return 'SpriteBlock';
    }
    //
    //////////////////////////////////////////////////////////////////////////////////

    spriteState: SpriteState;
    img: Image;

    // WARNING : Currently does not take into account rotation
    boundingBox(): jsutil.Rect {
        return {
            left: this.spriteState.translateX,
            top: this.spriteState.translateY,
            right: this.spriteState.translateX + (this.width * this.spriteState.scale),
            bottom: this.spriteState.translateY + (this.height * this.spriteState.scale)
        };
    }

    getX(): number {
        return this.spriteState.translateX;
    }
    getY(): number {
        return this.spriteState.translateY;
    }
    getDirection(): number {
        if (this.spriteState.rotate)
            return parseInt(this.spriteState.rotate);
        else
            return 0;
    }
    getScale(): number {
        return this.spriteState.scale;
    }
    setX(val: number) {
        this.spriteState.translateX = val;
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    setY(val: number) {
        this.spriteState.translateY = val;
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    setPosition(xval: number, yval: number): void {
        this.spriteState.translateX = xval;
        this.spriteState.translateY = yval;
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    setDirection(val: number): void {
        this.spriteState.rotate = (val % 360) + 'deg';
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    setScale(val: number): void {
        this.spriteState.scale = val;
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    rotateLeft(val: number): void {
        let current = this.getDirection();
        this.setDirection(current - val);
    }
    rotateRight(val: number): void {
        let current = this.getDirection();
        this.setDirection(current + val);
    }
    changeX(val: number): void {
        this.setX(this.getX() + val);
    }
    changeY(val: number): void {
        this.setY(this.getY() + val);
    }
    changePosition(xval: number, yval: number): void {
        this.spriteState.translateX += xval;
        this.spriteState.translateY += yval;
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    changeScale(val: number): void {
        this.setScale(this.getScale() + val);
    }
    move(val: number): void {
        let dir = this.getDirection();
        this.spriteState.translateX += val * Math.sin(dir * (Math.PI / 180));
        this.spriteState.translateY -= val * Math.cos(dir * (Math.PI / 180));
        if (this.img)
            this.img.setNativeProps({ style: { transform: this.createTransformValue() } });
    }
    isIntersectingEdge(): EdgeKind {
        let canvasWidth = CodegenRuntime.canvasGetWidth(this.canvasId);
        let canvasHeight = CodegenRuntime.canvasGetHeight(this.canvasId);
        if (!canvasWidth || canvasWidth == 0 || !canvasHeight || canvasHeight == 0)
            return 'none';

        let bb = this.boundingBox();
        if (bb.left <= 0) return 'left';
        if (bb.top <= 0) return 'top';
        if (bb.right >= canvasWidth) return 'right';
        if (bb.bottom >= canvasHeight) return 'bottom';

        return 'none';
    }
    isIntersectingSprite(other: SpriteBlock): boolean {
        return false;
    }

    createTransformValue(): any[] {
        let transformValue = [];
        if (this.spriteState.translateX)
            transformValue.push({ translateX: this.spriteState.translateX });
        if (this.spriteState.translateY)
            transformValue.push({ translateY: this.spriteState.translateY });
        if (this.spriteState.scale)
            transformValue.push({ scale: this.spriteState.scale });
        if (this.spriteState.rotate)
            transformValue.push({ rotate: this.spriteState.rotate });
        // let spriteStateObj: any = this.spriteState;
        // for (var k in spriteStateObj) {
        //     let valueElem: any = {};
        //     valueElem[k] = spriteStateObj[k];
        //     transformValue.push(valueElem);
        // }
        return transformValue;
    }

    render() {
        let {
            style,
            width,
            height,
            url,
            elementId,
            ...other
        } = this.props;

        let viewStyles: any = [];

        // if there is a theme, then grab the correct
        // style from the theme, otherwise use the default
        // theme, whatever that is

        // some of the properties apply indirectly to styles
        // if any of these properties are present, then create
        // a style block just for them 
        if (width === undefined) width = defaultWidth;
        if (height === undefined) height = defaultHeight;

        let propStyle: React.CSSProperties = {};
        propStyle.width = width;
        propStyle.height = height;
        propStyle.left = 0; // -width / 2;
        propStyle.top = 0; // -height / 2;
        let transformValue = this.createTransformValue();
        if (transformValue.length > 0) {
            propStyle.transform = transformValue;
        }
        viewStyles.push(propStyle);

        // finally, if the user defined their own style block
        // that trumps everything else
        if (style) {
            viewStyles.push(style);
        }
        return (
            <Image {...other} ref={(c: any) => this.img = c} source={{ uri: url }} resizeMode='stretch' style={viewStyles} />
        );
    }
}