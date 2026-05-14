import React, { ComponentType, ReactNode } from 'react';
interface WithErrorBoundaryOptions {
    fallback?: (error: Error, resetErrorBoundary: () => void) => ReactNode;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}
declare function withErrorBoundary<P extends object>(WrappedComponent: ComponentType<P>, options?: WithErrorBoundaryOptions): ComponentType<P>;
export default withErrorBoundary;
