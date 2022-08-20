import { Matrix4, Vector3 } from 'three';
interface WidgetParameter {
    calibrationFactor: number;
    frameIndex: number;
    hideMesh: boolean;
    hideHandleMesh: boolean;
    ijk2LPS: Matrix4;
    lps2IJK: Matrix4;
    pixelSpacing: number;
    stack: {};
    ultrasoundRegions: Array<{}>;
    worldPosition: Vector3;
}
export interface USRegion {
    x0: number;
    x1: number;
    y0: number;
    y1: number;
    axisX: number;
    axisY: number;
    deltaX: number;
    deltaY: number;
}
/**
 * @module Abstract Widget
 */
declare const widgetsBase: (three?: any) => {
    new (targetMesh: THREE.Mesh, controls: THREE.OrbitControls, params: WidgetParameter): {
        [x: string]: any;
        initOffsets(): void;
        getMouseOffsets(event: MouseEvent, container: HTMLDivElement): {
            x: number;
            y: number;
            screenX: number;
            screenY: number;
        };
        /**
         * Get area of polygon.
         *
         * @param {Array} points Ordered vertices' coordinates
         *
         * @returns {Number}
         */
        getArea(points: THREE.Vector3[]): number;
        /**
         * Get index of ultrasound region by data coordinates.
         *
         * @param {Array}   regions US regions
         * @param {Vector3} point   Data coordinates
         *
         * @returns {Number|null}
         */
        getRegionByXY(regions: USRegion[], point: THREE.Vector3): any;
        /**
         * Get point inside ultrasound region by data coordinates.
         *
         * @param {Object}  region US region data
         * @param {Vector3} point  Data coordinates
         *
         * @returns {Vector2|null}
         */
        getPointInRegion(region: USRegion, point: THREE.Vector3): any;
        /**
         * Get point's ultrasound coordinates by data coordinates.
         *
         * @param {Array}   regions US regions
         * @param {Vector3} point   Data coordinates
         *
         * @returns {Vector2|null}
         */
        getUsPoint(regions: USRegion[], point: THREE.Vector3): any;
        /**
         * Get distance between points inside ultrasound region.
         *
         * @param {Vector3} pointA Begin data coordinates
         * @param {Vector3} pointB End data coordinates
         *
         * @returns {Number|null}
         */
        getUsDistance(pointA: THREE.Vector3, pointB: THREE.Vector3): any;
        /**
         * Get distance between points
         *
         * @param {Vector3} pointA Begin world coordinates
         * @param {Vector3} pointB End world coordinates
         * @param {number}  cf     Calibration factor
         *
         * @returns {Object}
         */
        getDistanceData(pointA: THREE.Vector3, pointB: THREE.Vector3, calibrationFactor: number): {
            distance: any;
            units: any;
        };
        getLineData(pointA: THREE.Vector3, pointB: THREE.Vector3): {
            line: Vector3;
            length: number;
            transformX: number;
            transformY: number;
            transformAngle: number;
            center: Vector3;
        };
        getRectData(pointA: THREE.Vector3, pointB: THREE.Vector3): {
            width: number;
            height: number;
            transformX: number;
            transformY: number;
            paddingVector: Vector3;
        };
        /**
         * @param {HTMLElement} label
         * @param {Vector3}     point  label's center coordinates (default)
         * @param {Boolean}     corner if true, then point is the label's top left corner coordinates
         */
        adjustLabelTransform(label: HTMLDivElement, point: THREE.Vector3, corner: boolean): any;
        worldToScreen(worldCoordinate: THREE.Vector3): Vector3;
        update(): void;
        updateColor(): void;
        setDefaultColor(color: any): void;
        show(): void;
        hide(): void;
        hideDOM(): void;
        showDOM(): void;
        hideMesh(): void;
        showMesh(): void;
        free(): void;
        readonly widgetType: any;
        targetMesh: import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
        worldPosition: Vector3;
        enabled: boolean;
        selected: boolean;
        hovered: boolean;
        dragged: boolean;
        displayed: boolean;
        active: boolean;
        color: any;
    };
    [x: string]: any;
};
export { widgetsBase };
declare const _default: {
    new (targetMesh: import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>, controls: THREE.OrbitControls, params: WidgetParameter): {
        [x: string]: any;
        initOffsets(): void;
        getMouseOffsets(event: MouseEvent, container: HTMLDivElement): {
            x: number;
            y: number;
            screenX: number;
            screenY: number;
        };
        /**
         * Get area of polygon.
         *
         * @param {Array} points Ordered vertices' coordinates
         *
         * @returns {Number}
         */
        getArea(points: Vector3[]): number;
        /**
         * Get index of ultrasound region by data coordinates.
         *
         * @param {Array}   regions US regions
         * @param {Vector3} point   Data coordinates
         *
         * @returns {Number|null}
         */
        getRegionByXY(regions: USRegion[], point: Vector3): any;
        /**
         * Get point inside ultrasound region by data coordinates.
         *
         * @param {Object}  region US region data
         * @param {Vector3} point  Data coordinates
         *
         * @returns {Vector2|null}
         */
        getPointInRegion(region: USRegion, point: Vector3): any;
        /**
         * Get point's ultrasound coordinates by data coordinates.
         *
         * @param {Array}   regions US regions
         * @param {Vector3} point   Data coordinates
         *
         * @returns {Vector2|null}
         */
        getUsPoint(regions: USRegion[], point: Vector3): any;
        /**
         * Get distance between points inside ultrasound region.
         *
         * @param {Vector3} pointA Begin data coordinates
         * @param {Vector3} pointB End data coordinates
         *
         * @returns {Number|null}
         */
        getUsDistance(pointA: Vector3, pointB: Vector3): any;
        /**
         * Get distance between points
         *
         * @param {Vector3} pointA Begin world coordinates
         * @param {Vector3} pointB End world coordinates
         * @param {number}  cf     Calibration factor
         *
         * @returns {Object}
         */
        getDistanceData(pointA: Vector3, pointB: Vector3, calibrationFactor: number): {
            distance: any;
            units: any;
        };
        getLineData(pointA: Vector3, pointB: Vector3): {
            line: Vector3;
            length: number;
            transformX: number;
            transformY: number;
            transformAngle: number;
            center: Vector3;
        };
        getRectData(pointA: Vector3, pointB: Vector3): {
            width: number;
            height: number;
            transformX: number;
            transformY: number;
            paddingVector: Vector3;
        };
        /**
         * @param {HTMLElement} label
         * @param {Vector3}     point  label's center coordinates (default)
         * @param {Boolean}     corner if true, then point is the label's top left corner coordinates
         */
        adjustLabelTransform(label: HTMLDivElement, point: Vector3, corner: boolean): any;
        worldToScreen(worldCoordinate: Vector3): Vector3;
        update(): void;
        updateColor(): void;
        setDefaultColor(color: any): void;
        show(): void;
        hide(): void;
        hideDOM(): void;
        showDOM(): void;
        hideMesh(): void;
        showMesh(): void;
        free(): void;
        readonly widgetType: any;
        targetMesh: import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
        worldPosition: Vector3;
        enabled: boolean;
        selected: boolean;
        hovered: boolean;
        dragged: boolean;
        displayed: boolean;
        active: boolean;
        color: any;
    };
    [x: string]: any;
};
export default _default;
