import * as React from 'react';
import { Image, View } from 'react-native';
import * as BlockThemes from '../util/BlockThemes';
import { EdgeKind, EdgeKinds, CodegenComponent, CodegenRuntime } from '../util/CodegenRuntime';
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
    }

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
    img: Image | View;

    // WARNING : Currently does not take into account rotation
    boundingBox(): jsutil.Rect {
        let width = this.props.width || defaultWidth;
        let height = this.props.height || defaultHeight;
        return {
            left: this.spriteState.translateX,
            top: this.spriteState.translateY,
            right: this.spriteState.translateX + (width * this.spriteState.scale),
            bottom: this.spriteState.translateY + (height * this.spriteState.scale)
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
    isIntersectingEdge(edgeKinds: EdgeKinds): EdgeKind {
        let canvasWidth = CodegenRuntime.canvasGetWidth(this.props.canvasId);
        let canvasHeight = CodegenRuntime.canvasGetHeight(this.props.canvasId);
        if (!canvasWidth || canvasWidth == 0 || !canvasHeight || canvasHeight == 0)
            return 'none';

        let bb = this.boundingBox();
        if ((edgeKinds == 'any' || edgeKinds == 'horizontal' || edgeKinds == 'left') && bb.left <= 0) return 'left';
        if ((edgeKinds == 'any' || edgeKinds == 'vertical' || edgeKinds == 'top') && bb.top <= 0) return 'top';
        if ((edgeKinds == 'any' || edgeKinds == 'horizontal' || edgeKinds == 'right') && bb.right >= canvasWidth) return 'right';
        if ((edgeKinds == 'any' || edgeKinds == 'vertical' || edgeKinds == 'bottom') && bb.bottom >= canvasHeight) return 'bottom';

        return 'none';
    }

    isIntersectingSprite(other: SpriteBlock): boolean {
        if (!other) return false;
        let thisbb = this.boundingBox();
        let otherbb = other.boundingBox();

        return jsutil.rectsIntersect(thisbb, otherbb);
    }

    bounceOnEdgeIntersect(edgeKinds: EdgeKinds, speed: number): void {
        let canvasWidth = CodegenRuntime.canvasGetWidth(this.props.canvasId);
        let canvasHeight = CodegenRuntime.canvasGetHeight(this.props.canvasId);
        let bb = this.boundingBox();
        let dir = jsutil.Vector.fromMagnitudeAndDirection(speed, this.getDirection());

        let sortedByTime = [];
        if (edgeKinds == 'any' || edgeKinds == 'horizontal' || edgeKinds == 'left') {
            let leftEdge: jsutil.Rect = { left: -1, right: 0, top: 0, bottom: canvasHeight };
            let intersectData = jsutil.rectIntersection(bb, leftEdge, dir);
            if (intersectData.intersects) {
                sortedByTime.push(intersectData);
                intersectData.normal = -90;
            }
        }
        if (edgeKinds == 'any' || edgeKinds == 'vertical' || edgeKinds == 'top') {
            let topEdge: jsutil.Rect = { left: 0, right: canvasWidth, top: -1, bottom: 0 };
            let intersectData = jsutil.rectIntersection(bb, topEdge, dir);
            if (intersectData.intersects) {
                sortedByTime.push(intersectData);
                intersectData.normal = 180;
            }
        }
        if (edgeKinds == 'any' || edgeKinds == 'horizontal' || edgeKinds == 'right') {
            let rightEdge: jsutil.Rect = { left: canvasWidth, right: canvasWidth + 1, top: 0, bottom: canvasHeight };
            let intersectData = jsutil.rectIntersection(bb, rightEdge, dir);
            if (intersectData.intersects) {
                sortedByTime.push(intersectData);
                intersectData.normal = 90;
            }
        }
        if (edgeKinds == 'any' || edgeKinds == 'vertical' || edgeKinds == 'bottom') {
            let bottomEdge: jsutil.Rect = { left: 0, right: canvasWidth, top: canvasHeight, bottom: canvasHeight + 1 };
            let intersectData = jsutil.rectIntersection(bb, bottomEdge, dir);
            if (intersectData.intersects) {
                sortedByTime.push(intersectData);
                intersectData.normal = 0;
            }
        }

        // let remainingSpeed = speed;
        let usedTime = 0;
        let currentDirection = this.getDirection();

        // for each of the sides which we intersected with, we are going to go in order
        // by time, 
        if (sortedByTime.length > 1)
            sortedByTime.sort((a, b) => a.tEnter - b.tEnter);

        for (let i = 0; i < sortedByTime.length && sortedByTime[i].tEnter <= 1; i++) {
            let idata = sortedByTime[i];
            // move
            this.move(speed * (idata.tEnter - usedTime));
            // change direction
            currentDirection = jsutil.reflect(currentDirection, idata.normal);
            this.setDirection(currentDirection);
            // subtract speed
            usedTime = idata.tEnter;
        }
        if (sortedByTime.length > 0) {
            // then move the remaining time
            this.move(speed * (1 - usedTime));
        }
    }

    bounceOnSpriteIntersect(speed: number, other: SpriteBlock, otherSpeed: number): void {
        // COLLIDE : implement this
        let thisRect = this.boundingBox();
        let otherRect = other.boundingBox();
        let thisDir = jsutil.Vector.fromMagnitudeAndDirection(speed, this.getDirection());
        let otherDir = jsutil.Vector.fromMagnitudeAndDirection(otherSpeed, other.getDirection());
        let dir = thisDir.subtract(otherDir);
        let idata = jsutil.rectIntersection(thisRect, otherRect, dir);
        if (idata.intersects) {
            this.move(speed * idata.tEnter);
            // change direction
            let newDirection = jsutil.reflect(this.getDirection(), idata.normal);
            this.setDirection(newDirection);
            // subtract speed
            // then move the remaining time

            this.move(speed * (1 - idata.tEnter));
        }
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
            color,
            // elementId,
            graphicType,
            canvasId,
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
        if (!color) color = 'black';
        if (!graphicType) graphicType = 'image';

        let propStyle: React.CSSProperties = {};
        propStyle.position = 'absolute';
        propStyle.width = width;
        propStyle.height = height;
        propStyle.left = 0; // -width / 2;
        propStyle.top = 0; // -height / 2;
        if (graphicType == 'rectangle') {
            propStyle.backgroundColor = color;
        }

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
        if (graphicType == 'image') {
            return (
                <Image {...other} ref={(c: any) => this.img = c} source={{ uri: url }} resizeMode='stretch' style={viewStyles} />
            );
        } else if (graphicType == 'rectangle') {
            return (
                <View {...other} ref={(c: any) => this.img = c} style={viewStyles} />
            );
        }
    }
}