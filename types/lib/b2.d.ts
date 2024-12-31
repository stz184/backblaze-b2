export = B2;
declare function B2(options: any): void;
declare class B2 {
    constructor(options: any);
    accountId: any;
    applicationKeyId: any;
    applicationKey: any;
    authorizationToken: any;
    apiUrl: any;
    downloadUrl: any;
    BUCKET_TYPES: {
        ALL_PUBLIC: string;
        ALL_PRIVATE: string;
    };
    authorize(args: any): any;
    createBucket(argsOrBucketName: any, undefOrBucketType: any): any;
    deleteBucket(argsOrBucketId: any): any;
    listBuckets(args: any): any;
    getBucket(args: any): any;
    updateBucket(bucketId: any, bucketType: any, bucketInfo: any): any;
    getUploadUrl(argsOrBucketId: any): any;
    uploadFile(args: any): any;
    listFileNames(args: any): any;
    listFileVersions(args: any): any;
    hideFile(args: any): any;
    getFileInfo(argsOrFileId: any): any;
    getDownloadAuthorization(args: any): any;
    downloadFileByName(args: any): any;
    downloadFileById(args: any): any;
    deleteFileVersion(args: any): any;
    copyFile(args: any): any;
    cancelLargeFile(args: any): any;
    finishLargeFile(args: any): any;
    listParts(args: any): any;
    listUnfinishedLargeFiles: typeof notYetImplemented;
    startLargeFile(args: any): any;
    getUploadPartUrl(args: any): any;
    uploadPart(args: any): any;
    KEY_CAPABILITIES: {
        LIST_KEYS: string;
        WRITE_KEYS: string;
        DELETE_KEYS: string;
        LIST_BUCKETS: string;
        WRITE_BUCKETS: string;
        DELETE_BUCKETS: string;
        LIST_FILES: string;
        READ_FILES: string;
        SHARE_FILES: string;
        WRITE_FILES: string;
        DELETE_FILES: string;
    };
    createKey(args: any): any;
    deleteKey(args: any): any;
    listKeys(args: any): any;
}
declare function notYetImplemented(): any;
//# sourceMappingURL=b2.d.ts.map