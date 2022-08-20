declare const _default: {
    new (targetMesh: any, controls: any, params?: {}): {
        [x: string]: any;
        _widgetType: string;
        _calibrationFactor: any;
        _distances: any[] | number[];
        _line01: import("three").Vector3;
        _normal: import("three").Vector3;
        _distance: any;
        _distance2: any;
        _units: string;
        _domHovered: boolean;
        _moving: boolean;
        _material: any;
        _geometry: any;
        _mesh: any;
        _line: HTMLDivElement;
        _line2: HTMLDivElement;
        _label: HTMLDivElement;
        _label2: HTMLDivElement;
        _handles: {
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
        }[];
        _moveHandle: {
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
        onHover(evt: any): void;
        onMove(evt: any): void;
        addEventListeners(): void;
        removeEventListeners(): void;
        _hovered: boolean;
        hoverMesh(): void;
        hoverDom(evt: any): void;
        onStart(evt: any): void;
        _active: boolean;
        _dragged: boolean;
        onEnd(): void;
        _selected: any;
        create(): void;
        createMesh(): void;
        createDOM(): void;
        hideDOM(): void;
        showDOM(): void;
        update(): void;
        updateMeshColor(): void;
        updateMeshPosition(): void;
        updateDOM(): void;
        updateDOMColor(): void;
        free(): void;
        initLineAndNormal(): void;
        initOrtho(): void;
        repositionOrtho(): void;
        recalculateOrtho(): void;
        /**
         * Get length of rulers
         *
         * @return {Array}
         */
        getDimensions(): any[];
        /**
         * Get CrossRuler handles position
         *
         * @return {Array.<Vector3>} First begin, first end, second begin, second end
         */
        getCoordinates(): Array<Vector3>;
        /**
         * Set CrossRuler handles position
         *
         * @param {Vector3} first   The beginning of the first line
         * @param {Vector3} second  The end of the first line
         * @param {Vector3} third   The beginning of the second line (clockwise relative to the first line)
         * @param {Vector3} fourth  The end of the second line
         */
        initCoordinates(first: Vector3, second: Vector3, third: Vector3, fourth: Vector3): void;
        active: boolean;
        hovered: boolean;
        targetMesh: any;
        _targetMesh: any;
        worldPosition: any;
        calibrationFactor: any;
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
        showMesh(): void;
        readonly widgetType: any;
        enabled: boolean;
        selected: boolean;
        dragged: boolean;
        displayed: boolean;
        color: any;
    };
};
export default _default;
/**
 * @module widgets/crossRuler
 */
export function widgetsCrossRuler(three?: any): {
    new (targetMesh: any, controls: any, params?: {}): {
        [x: string]: any;
        _widgetType: string;
        _calibrationFactor: any;
        _distances: any[] | number[];
        _line01: import("three").Vector3;
        _normal: import("three").Vector3;
        _distance: any;
        _distance2: any;
        _units: string;
        _domHovered: boolean;
        _moving: boolean;
        _material: any;
        _geometry: any;
        _mesh: any;
        _line: HTMLDivElement;
        _line2: HTMLDivElement;
        _label: HTMLDivElement;
        _label2: HTMLDivElement;
        _handles: {
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
        }[];
        _moveHandle: {
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
        onHover(evt: any): void;
        onMove(evt: any): void;
        addEventListeners(): void;
        removeEventListeners(): void;
        _hovered: boolean;
        hoverMesh(): void;
        hoverDom(evt: any): void;
        onStart(evt: any): void;
        _active: boolean;
        _dragged: boolean;
        onEnd(): void;
        _selected: any;
        create(): void;
        createMesh(): void;
        createDOM(): void;
        hideDOM(): void;
        showDOM(): void;
        update(): void;
        updateMeshColor(): void;
        updateMeshPosition(): void;
        updateDOM(): void;
        updateDOMColor(): void;
        free(): void;
        initLineAndNormal(): void;
        initOrtho(): void;
        repositionOrtho(): void;
        recalculateOrtho(): void;
        /**
         * Get length of rulers
         *
         * @return {Array}
         */
        getDimensions(): any[];
        /**
         * Get CrossRuler handles position
         *
         * @return {Array.<Vector3>} First begin, first end, second begin, second end
         */
        getCoordinates(): Array<Vector3>;
        /**
         * Set CrossRuler handles position
         *
         * @param {Vector3} first   The beginning of the first line
         * @param {Vector3} second  The end of the first line
         * @param {Vector3} third   The beginning of the second line (clockwise relative to the first line)
         * @param {Vector3} fourth  The end of the second line
         */
        initCoordinates(first: Vector3, second: Vector3, third: Vector3, fourth: Vector3): void;
        active: boolean;
        hovered: boolean;
        targetMesh: any;
        _targetMesh: any;
        worldPosition: any;
        calibrationFactor: any;
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
        showMesh(): void;
        readonly widgetType: any;
        enabled: boolean;
        selected: boolean;
        dragged: boolean;
        displayed: boolean;
        color: any;
    };
};
