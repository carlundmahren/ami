declare const HelpersDummy_base: typeof import("three").Object3D;
/**
 * @module helpers/dummy
 */
export default class HelpersDummy extends HelpersDummy_base {
    constructor();
    _mesh: import("three").Mesh<import("three").SphereGeometry, import("three").MeshBasicMaterial>;
    _create(): void;
    _update(): void;
}
export {};
