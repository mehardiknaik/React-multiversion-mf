
    export type RemoteKeys = 'remote1/Content';
    type PackageType<T> = T extends 'remote1/Content' ? typeof import('remote1/Content') :any;