import React from 'react';
import ReactDOM from 'react-dom';

class Adaptors {
    private _ref: HTMLDivElement | null = null;
    private _component: any;

    constructor(ref: HTMLDivElement, component: any) {
        this._ref = ref;
        this._component = component;
    }

    mount(props: any) {
        if (!this._ref) return;

        ReactDOM.render(
            <this._component {...props} />,
            this._ref
        );
    }

    unmount() {
        if (this._ref) {
            ReactDOM.unmountComponentAtNode(this._ref);
        }
    }

    update(props: any) {
        this.mount(props);
    }
}

const Adaptor = (component: any) => (ref: HTMLDivElement) => {
    return new Adaptors(ref, component);
};

export default Adaptor;