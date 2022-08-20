/// <reference types="node" />
/**
 *
 * It is typically used to load a DICOM image. Use loading manager for
 * advanced usage, such as multiple files handling.
 *
 * Demo: {@link https://fnndsc.github.io/vjs#loader_dicom}
 *
 * @module loaders/base
 * @extends EventEmitter
 * @example
 * var files = ['/data/dcm/fruit'];
 *
 * // Instantiate a dicom loader
 * var lDicomoader = new dicom();
 *
 * // load a resource
 * loader.load(
 *   // resource URL
 *   files[0],
 *   // Function when resource is loaded
 *   function(object) {
 *     //scene.add( object );
 *     window.console.log(object);
 *   }
 * );
 */
export default class LoadersBase extends EventEmitter {
    /**
     * Create a Loader.
     * @param {dom} container - The dom container of loader.
     * @param {object} ProgressBar - The progressbar of loader.
     */
    constructor(container?: dom, ProgressBar?: object);
    _loaded: number;
    _totalLoaded: number;
    _parsed: number;
    _totalParsed: number;
    _data: any[];
    _container: dom;
    _progressBar: any;
    /**
     * free the reference.
     */
    free(): void;
    /**
     * load the resource by url.
     * @param {string} url - resource url.
     * @param {Map} requests - used for cancellation.
     * @return {promise} promise.
     */
    fetch(url: string, requests: Map<any, any>): Promise<any>;
    /**
     * parse the data loaded
     * SHOULD BE implementd by detail loader.
     * @param {object} response - loaded data.
     * @return {promise} promise.
     */
    parse(response: object): Promise<any>;
    /**
     * default load sequence group promise.
     * @param {array} url - resource url.
     * @param {Map} requests - used for cancellation.
     * @return {promise} promise.
     */
    loadSequenceGroup(url: any[], requests: Map<any, any>): Promise<any>;
    /**
     * default load sequence promise.
     * @param {string} url - resource url.
     * @param {Map} requests - used for cancellation.
     * @return {promise} promise.
     */
    loadSequence(url: string, requests: Map<any, any>): Promise<any>;
    /**
     * load the data by url(urls)
     * @param {string|array} url - resource url.
     * @param {Map} requests - used for cancellation.
     * @return {promise} promise
     */
    load(url: string | any[], requests: Map<any, any>): Promise<any>;
    /**
     * Set data
     * @param {array} data
     */
    set data(arg: any[]);
    /**
     * Get data
     * @return {array} data loaded
     */
    get data(): any[];
}
import EventEmitter from "events";
