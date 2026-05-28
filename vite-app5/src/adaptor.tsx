import { createRoot, type Root } from 'react-dom/client';
class Adaptors {
    private _ref: HTMLDivElement | null = null;
    private _root: Root | null = null;

    private _component: React.FC<any>;

    constructor(ref: HTMLDivElement, component: React.FC<any>) {
        this._ref = ref;
        this._component = component;
    }

    mount(props: any) {
        if (!this._ref) return;

        if (!this._root) {
            this._root = createRoot(this._ref);
        }
        this._root.render(<this._component {...props} />);
    }

    unmount() {
        if (this._root) {
            this._root.unmount();
            this._root = null;
        }
    }

    update(props: any) {
        this.mount(props);
    }
}

const Adaptor = (component: React.FC<any>) => (ref: HTMLDivElement) => {
    return new Adaptors(ref, component);
};

export default Adaptor;