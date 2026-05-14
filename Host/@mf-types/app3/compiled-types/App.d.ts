interface AppProps {
    number: number;
}
declare const App: ({ number }: AppProps) => import("react/jsx-runtime").JSX.Element;
declare class Adaptors {
    private _ref;
    private _root;
    constructor(ref: HTMLDivElement);
    mount(props: AppProps): void;
    unmount(): void;
    update(props: AppProps): void;
}
export declare const Adaptor: (ref: HTMLDivElement) => Adaptors;
export default App;
