/**
 * @module helpers/x/mesh
 */
export default class _default {
    _file: any;
    _3jsVTK_loader: any;
    _mesh: import("three").Mesh<any, import("three").MeshLambertMaterial>;
    _materialColor: number;
    _RAStoLPS: Matrix4;
    _material: import("three").MeshLambertMaterial;
    set file(arg: any);
    get file(): any;
    set materialColor(arg: number);
    get materialColor(): number;
    load(): Promise<any>;
}
import { Matrix4 } from "three/src/math/Matrix4";
