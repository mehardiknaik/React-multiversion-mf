import { useState, version } from 'react'
import RemoteLoader from './RemoteLoader'
import style from './App.module.css'

const App = () => {
  const [number, setNumber] = useState(0)
  const [show, setShow] = useState(true)

  return (
    <div>
      <div className={style.container}>
        <h1>Vite Host</h1>
        <h2>{number}</h2>
        <div>
          React
        </div>
        <div>
          React Version: <code>{version}</code>
        </div>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <button onClick={(() => setNumber(number - 1))}>Decrement</button>
        <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'} Remotes</button>
      </div>
      {show && <div>
        <div className={style.remotesTitle}>Remotes</div>
        <div className={style.grid}>
          <RemoteLoader importer={() => import('app1/Content')} number={number} />
          <RemoteLoader importer={() => import('app2/Content')} number={number} />
          <RemoteLoader importer={() => import('app3/Content')} number={number} />
          <RemoteLoader importer={() => import('app4/Content')} number={number} />
          <RemoteLoader importer={() => import('app5/Content')} number={number} />
        </div>
      </div>}
    </div>
  );
};


export default App
