
    export type RemoteKeys = 'app4/Content';
    type PackageType<T> = T extends 'app4/Content' ? typeof import('app4/Content') :any;