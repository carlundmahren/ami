declare const _default: {
    new (domTarget: any, lut?: string, lutO?: string, color?: number[][], opacity?: number[][], discrete?: boolean): {
        _dom: any;
        _discrete: boolean;
        _color: number[][];
        _lut: string;
        _luts: {
            [x: string]: number[][];
        };
        _opacity: number[][];
        _lutO: string;
        _lutsO: {
            [x: string]: number[][];
        };
        initCanvas(): void;
        _canvasContainer: any;
        _canvasBg: HTMLCanvasElement;
        _canvas: HTMLCanvasElement;
        initCanvasContainer(dom: any): any;
        createCanvas(): HTMLCanvasElement;
        paintCanvas(): void;
        readonly texture: any;
        lut: string;
        luts: {
            [x: string]: number[][];
        };
        lutO: string;
        lutsO: {
            [x: string]: number[][];
        };
        discrete: boolean;
        lutsAvailable(type?: string): string[];
    };
    presetLuts(): {
        default: number[][];
        spectrum: number[][];
        hot_and_cold: number[][];
        gold: number[][];
        red: number[][];
        green: number[][];
        blue: number[][];
        walking_dead: number[][];
        random: number[][];
        muscle_bone: number[][];
    };
    presetLutsO(): {
        linear: number[][];
        lowpass: number[][];
        bandpass: number[][];
        highpass: number[][];
        flat: number[][];
        random: number[][];
        linear_full: number[][];
    };
};
export default _default;
/**
 * @module helpers/lut
 */
export function helpersLut(three?: any): {
    new (domTarget: any, lut?: string, lutO?: string, color?: number[][], opacity?: number[][], discrete?: boolean): {
        _dom: any;
        _discrete: boolean;
        _color: number[][];
        _lut: string;
        _luts: {
            [x: string]: number[][];
        };
        _opacity: number[][];
        _lutO: string;
        _lutsO: {
            [x: string]: number[][];
        };
        initCanvas(): void;
        _canvasContainer: any;
        _canvasBg: HTMLCanvasElement;
        _canvas: HTMLCanvasElement;
        initCanvasContainer(dom: any): any;
        createCanvas(): HTMLCanvasElement;
        paintCanvas(): void;
        readonly texture: any;
        lut: string;
        luts: {
            [x: string]: number[][];
        };
        lutO: string;
        lutsO: {
            [x: string]: number[][];
        };
        discrete: boolean;
        lutsAvailable(type?: string): string[];
    };
    presetLuts(): {
        default: number[][];
        spectrum: number[][];
        hot_and_cold: number[][];
        gold: number[][];
        red: number[][];
        green: number[][];
        blue: number[][];
        walking_dead: number[][];
        random: number[][];
        muscle_bone: number[][];
    };
    presetLutsO(): {
        linear: number[][];
        lowpass: number[][];
        bandpass: number[][];
        highpass: number[][];
        flat: number[][];
        random: number[][];
        linear_full: number[][];
    };
};
