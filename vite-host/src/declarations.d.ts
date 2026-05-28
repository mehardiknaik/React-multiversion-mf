

declare module 'app5/Content' {
  import { ComponentType } from 'react';
  const App: ComponentType<{ number: number }>;
  export const Adaptor: (el: HTMLElement) => {
    mount: (props: { number: number }) => void;
    unmount: () => void;
    update: (props: { number: number }) => void;
  };
  export default App;
}

