import ReactDOM from 'react-dom';
class Adaptors {
    private _ref: HTMLDivElement | null = null;
    private _component: React.FC<any>;

    constructor(ref: HTMLDivElement, component: React.FC<any>) {
        this._ref = ref;
        this._component = component;
    }

    mount(props: any) {
        if (this._ref)
            ReactDOM.render(<this._component {...props} />, this._ref);
    }

    unmount() {
        if (this._ref)
            ReactDOM.unmountComponentAtNode(this._ref);
    }

    update(props: any) {
        this.mount(props);
    }
}

const Adaptor = (component: React.FC<any>) => (ref: HTMLDivElement) => {
    return new Adaptors(ref, component);
};

export default Adaptor;