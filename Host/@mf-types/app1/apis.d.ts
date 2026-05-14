
    export type RemoteKeys = 'app1/Content';
    type PackageType<T> = T extends 'app1/Content' ? typeof import('app1/Content') :any;