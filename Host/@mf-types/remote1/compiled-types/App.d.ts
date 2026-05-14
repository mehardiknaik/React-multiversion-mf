interface AppProps {
    text: string;
    setText: (text: string) => void;
}
declare const App: ({ text, setText }: AppProps) => import("react/jsx-runtime").JSX.Element;
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
