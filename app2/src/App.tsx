import React, { lazy, useEffect, version } from 'react';
import style from './App.module.css';
import comnnector from './adaptor';

interface AppProps {
  number: number;
}

const App = ({ number }: AppProps) => {

  useEffect(() => {
    console.log('App2 mounted')
    return () => {
      console.log('App2 Unmounted')
    }
  }, [])
  console.log('App2 Rendered')
  return (
    <div className={style.container}>
      <h1>App2</h1>
      <h2>{number}</h2>
      <div>
        React <u>{process.env.APP_NAME}</u> <code>{process.env.NODE_ENV}</code>
      </div>
      <div>
        React Version: <code>{version}</code>
      </div>
    </div>
  );
};



export const Adaptor = comnnector(App);

export default App;
