import { lazy, useEffect, version } from 'react';
import style from './App.module.css';
import webpackLogo from './assets/webpack.png';
import connector from './adaptor';

interface AppProps {
  number: number;
}

const App = ({ number }: AppProps) => {

  useEffect(() => {
    console.log('App4 mounted')
    return () => {
      console.log('App4 Unmounted')
    }
  }, [])
  console.log('App4 Rendered')
  return (
    <div className={style.container}>
      <h1>App4</h1>
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



export const Adaptor = connector(App);

export default App;
