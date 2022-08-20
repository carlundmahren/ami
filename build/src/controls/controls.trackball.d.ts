declare const _default: {
    new (object: any, domElement: any): {
        object: any;
        domElement: any;
        enabled: boolean;
        screen: {
            left: number;
            top: number;
            width: number;
            height: number;
        };
        rotateSpeed: number;
        zoomSpeed: number;
        panSpeed: number;
        noRotate: boolean;
        noZoom: boolean;
        noPan: boolean;
        noCustom: boolean;
        forceState: number;
        staticMoving: boolean;
        dynamicDampingFactor: number;
        minDistance: number;
        maxDistance: number;
        keys: number[];
        target: any;
        target0: any;
        position0: any;
        up0: any;
        handleResize: () => void;
        handleEvent: (event: any) => void;
        rotateCamera: () => void;
        zoomCamera: () => void;
        panCamera: () => void;
        checkDistances: () => void;
        update: () => void;
        reset: () => void;
        setState: (targetState: any) => void;
        custom: (customStart: any, customEnd: any) => void;
        dispose: () => void;
    };
};
export default _default;
/**
 * Original authors from THREEJS repo
 * @author Eberhard Graether / http://egraether.com/
 * @author Mark Lundin  / http://mark-lundin.com
 * @author Simone Manini / http://daron1337.github.io
 * @author Luca Antiga  / http://lantiga.github.io
 */
export function trackball(three?: any): {
    new (object: any, domElement: any): {
        object: any;
        domElement: any;
        enabled: boolean;
        screen: {
            left: number;
            top: number;
            width: number;
            height: number;
        };
        rotateSpeed: number;
        zoomSpeed: number;
        panSpeed: number;
        noRotate: boolean;
        noZoom: boolean;
        noPan: boolean;
        noCustom: boolean;
        forceState: number;
        staticMoving: boolean;
        dynamicDampingFactor: number;
        minDistance: number;
        maxDistance: number;
        keys: number[];
        target: any;
        target0: any;
        position0: any;
        up0: any;
        handleResize: () => void;
        handleEvent: (event: any) => void;
        rotateCamera: () => void;
        zoomCamera: () => void;
        panCamera: () => void;
        checkDistances: () => void;
        update: () => void;
        reset: () => void;
        setState: (targetState: any) => void;
        custom: (customStart: any, customEnd: any) => void;
        dispose: () => void;
    };
};
