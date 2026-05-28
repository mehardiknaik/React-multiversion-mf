import { useEffect, version } from 'react';
import style from './App.module.css';
import connector from './adaptor';
import logo from "./assets/vite.svg?inline"

interface AppProps {
  number: number;
}

const App = ({ number }: AppProps) => {

  useEffect(() => {
    console.log('Vite App5 mounted')
    return () => {
      console.log('Vite App5 Unmounted')
    }
  }, [])
  console.log('Vite App5 Rendered')
  return (
    <div className={style.container}>
      <h1>Vite App5</h1>
      <img src={logo} alt="vite" height={100} width={100} />
      <h2>{number}</h2>
      <div>
        React
      </div>
      <div>
        React Version: <code>{version}</code>
      </div>
    </div>
  );
};



export const Adaptor = connector(App);

export default App;
