interface AppProps {
    number: number;
}
declare const App: ({ number }: AppProps) => JSX.Element;
declare class Adaptors {
    private _ref;
    constructor(ref: HTMLDivElement);
    mount(props: AppProps): void;
    unmount(): void;
    update(props: AppProps): void;
}
export declare const Adaptor: (ref: HTMLDivElement) => Adaptors;
export default App;
