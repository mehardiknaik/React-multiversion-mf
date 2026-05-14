
    export type RemoteKeys = 'app3/Content';
    type PackageType<T> = T extends 'app3/Content' ? typeof import('app3/Content') :any;