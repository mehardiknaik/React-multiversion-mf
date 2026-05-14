import { useEffect, useRef } from "react";

interface RemoteLoaderType {
    importer: () => Promise<{ default: any }>;
    [key: string]: any;
}

const RemoteLoader = ({ importer, ...rest }: RemoteLoaderType) => {
    const ref = useRef<HTMLDivElement>(null)
    const elementRef = useRef<any>(null)
    useEffect(() => {
        (async function () {
            try {
                const remote = await importer() as any
                if (remote && remote.Adaptor) {
                    elementRef.current = remote.Adaptor(ref.current)
                    elementRef.current.mount(rest)
                } else if (remote && remote.default && remote.default.Adaptor) {
                    elementRef.current = remote.default.Adaptor(ref.current)
                    elementRef.current.mount(rest)
                } else {
                    throw new Error('Remote module does not export an Adaptor');
                }
            }
            catch (e) {
                console.error('[RemoteLoader] Error:', e)
                if (ref.current) {
                    ref.current.innerHTML = `<div style="color: orange; border: 1px solid orange; padding: 10px;">Error loading remote component</div>`;
                }
            }
        })()
        return () => {
            elementRef.current?.unmount()
        }
    }, []);
    useEffect(() => {
        elementRef.current?.update(rest)
    }, [rest]);

    return (
        <div ref={ref}></div>
    )
}

export default RemoteLoader