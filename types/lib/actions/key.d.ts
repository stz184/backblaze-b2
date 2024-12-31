export namespace CAPABILITIES {
    let LIST_KEYS: string;
    let WRITE_KEYS: string;
    let DELETE_KEYS: string;
    let LIST_BUCKETS: string;
    let WRITE_BUCKETS: string;
    let DELETE_BUCKETS: string;
    let LIST_FILES: string;
    let READ_FILES: string;
    let SHARE_FILES: string;
    let WRITE_FILES: string;
    let DELETE_FILES: string;
}
export function create(b2: B2, args: {
    capabilities: string[];
    keyName: string;
    : number;
    : number;
    : number;
}): any;
declare function _delete(b2: B2, args: {
    applicationKeyId: string;
}): any;
export { _delete as delete };
export function list(b2: B2, args?: {
    : number;
    : number;
}): any;
//# sourceMappingURL=key.d.ts.map