import React, { ComponentType, ReactNode } from 'react';
declare function withSuspense<T extends object>(LazyComponent: React.LazyExoticComponent<ComponentType<T>>, fallback?: ReactNode): React.FC<T>;
export default withSuspense;
