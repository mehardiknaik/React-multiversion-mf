
    export type RemoteKeys = 'esm_remote/Content';
    type PackageType<T> = T extends 'esm_remote/Content' ? typeof import('esm_remote/Content') :any;