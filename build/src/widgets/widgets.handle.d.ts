declare const _default: {
    new (targetMesh: any, controls: any, params?: {}): {
        [x: string]: any;
        _widgetType: string;
        visible: boolean;
        _plane: {
            position: any;
            direction: any;
        };
        _offset: any;
        _raycaster: any;
        _active: boolean;
        _hovered: boolean;
        _tracking: boolean;
        _mouse: any;
        _initialized: boolean;
        _material: any;
        _geometry: any;
        _mesh: any;
        _meshHovered: boolean;
        _dom: HTMLDivElement;
        _domHovered: boolean;
        _screenPosition: import("three").Vector3;
        onResize(): void;
        /**
         * @param {Object} evt - Browser event
         * @param {Boolean} forced - true to move inactive handles
         */
        onMove(evt: any, forced: boolean): void;
        onHover(evt: any): void;
        addEventListeners(): void;
        removeEventListeners(): void;
        hoverMesh(): void;
        hoverDom(evt: any): void;
        onStart(evt: any): void;
        _dragged: boolean;
        onEnd(): void;
        _selected: any;
        create(): void;
        createMesh(): void;
        createDOM(): void;
        update(): void;
        updateMeshColor(): void;
        updateMeshPosition(): void;
        updateDOMPosition(): void;
        updateDOMColor(): void;
        showMesh(): void;
        free(): void;
        hideDOM(): void;
        showDOM(): void;
        screenPosition: import("three").Vector3;
        active: boolean;
        tracking: boolean;
        initOffsets(): void;
        getMouseOffsets(event: MouseEvent, container: HTMLDivElement): {
            x: number;
            y: number;
            screenX: number;
            screenY: number;
        };
        getArea(points: import("three").Vector3[]): number;
        getRegionByXY(regions: import("./widgets.base").USRegion[], point: import("three").Vector3): any;
        getPointInRegion(region: import("./widgets.base").USRegion, point: import("three").Vector3): any;
        getUsPoint(regions: import("./widgets.base").USRegion[], point: import("three").Vector3): any;
        getUsDistance(pointA: import("three").Vector3, pointB: import("three").Vector3): any;
        getDistanceData(pointA: import("three").Vector3, pointB: import("three").Vector3, calibrationFactor: number): {
            distance: any;
            units: any;
        };
        getLineData(pointA: import("three").Vector3, pointB: import("three").Vector3): {
            line: import("three").Vector3;
            length: number;
            transformX: number;
            transformY: number;
            transformAngle: number;
            center: import("three").Vector3;
        };
        getRectData(pointA: import("three").Vector3, pointB: import("three").Vector3): {
            width: number;
            height: number;
            transformX: number;
            transformY: number;
            paddingVector: import("three").Vector3;
        };
        adjustLabelTransform(label: HTMLDivElement, point: import("three").Vector3, corner: boolean): any;
        worldToScreen(worldCoordinate: import("three").Vector3): import("three").Vector3;
        updateColor(): void;
        setDefaultColor(color: any): void;
        show(): void;
        hide(): void;
        hideMesh(): void;
        readonly widgetType: any;
        targetMesh: import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
        worldPosition: import("three").Vector3;
        enabled: boolean;
        selected: boolean;
        hovered: boolean;
        dragged: boolean;
        displayed: boolean;
        color: any;
    };
};
export default _default;
/**
 * @module widgets/handle
 */
export function widgetsHandle(three?: any): {
    new (targetMesh: any, controls: any, params?: {}): {
        [x: string]: any;
        _widgetType: string;
        visible: boolean;
        _plane: {
            position: any;
            direction: any;
        };
        _offset: any;
        _raycaster: any;
        _active: boolean;
        _hovered: boolean;
        _tracking: boolean;
        _mouse: any;
        _initialized: boolean;
        _material: any;
        _geometry: any;
        _mesh: any;
        _meshHovered: boolean;
        _dom: HTMLDivElement;
        _domHovered: boolean;
        _screenPosition: import("three").Vector3;
        onResize(): void;
        /**
         * @param {Object} evt - Browser event
         * @param {Boolean} forced - true to move inactive handles
         */
        onMove(evt: any, forced: boolean): void;
        onHover(evt: any): void;
        addEventListeners(): void;
        removeEventListeners(): void;
        hoverMesh(): void;
        hoverDom(evt: any): void;
        onStart(evt: any): void;
        _dragged: boolean;
        onEnd(): void;
        _selected: any;
        create(): void;
        createMesh(): void;
        createDOM(): void;
        update(): void;
        updateMeshColor(): void;
        updateMeshPosition(): void;
        updateDOMPosition(): void;
        updateDOMColor(): void;
        showMesh(): void;
        free(): void;
        hideDOM(): void;
        showDOM(): void;
        screenPosition: import("three").Vector3;
        active: boolean;
        tracking: boolean;
        initOffsets(): void;
        getMouseOffsets(event: MouseEvent, container: HTMLDivElement): {
            x: number;
            y: number;
            screenX: number;
            screenY: number;
        };
        getArea(points: import("three").Vector3[]): number;
        getRegionByXY(regions: import("./widgets.base").USRegion[], point: import("three").Vector3): any;
        getPointInRegion(region: import("./widgets.base").USRegion, point: import("three").Vector3): any;
        getUsPoint(regions: import("./widgets.base").USRegion[], point: import("three").Vector3): any;
        getUsDistance(pointA: import("three").Vector3, pointB: import("three").Vector3): any;
        getDistanceData(pointA: import("three").Vector3, pointB: import("three").Vector3, calibrationFactor: number): {
            distance: any;
            units: any;
        };
        getLineData(pointA: import("three").Vector3, pointB: import("three").Vector3): {
            line: import("three").Vector3;
            length: number;
            transformX: number;
            transformY: number;
            transformAngle: number;
            center: import("three").Vector3;
        };
        getRectData(pointA: import("three").Vector3, pointB: import("three").Vector3): {
            width: number;
            height: number;
            transformX: number;
            transformY: number;
            paddingVector: import("three").Vector3;
        };
        adjustLabelTransform(label: HTMLDivElement, point: import("three").Vector3, corner: boolean): any;
        worldToScreen(worldCoordinate: import("three").Vector3): import("three").Vector3;
        updateColor(): void;
        setDefaultColor(color: any): void;
        show(): void;
        hide(): void;
        hideMesh(): void;
        readonly widgetType: any;
        targetMesh: import("three").Mesh<import("three").BufferGeometry, import("three").Material | import("three").Material[]>;
        worldPosition: import("three").Vector3;
        enabled: boolean;
        selected: boolean;
        hovered: boolean;
        dragged: boolean;
        displayed: boolean;
        color: any;
    };
};
