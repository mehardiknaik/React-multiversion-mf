import React, { Component, version } from 'react';
import style from './App.module.css';
import connector from './adaptor';
import logo from './assets/webpack.png';

interface AppProps {
  number: number;
}



interface AppProps {
  number: number;
}

class App extends Component<AppProps> {
  componentDidMount() {
    console.log('App1 mounted');
  }

  componentWillUnmount() {
    console.log('App1 Unmounted');
  }

  render() {
    console.log('App1 Rendered');

    const { number } = this.props;

    return (
      <div className={style.container}>
        <h1>App1</h1>
        <img src={logo} alt="logo" width={100} height={100} />
        <h2>{number}</h2>
        <div>
          React <u>{process.env.APP_NAME}</u> <code>{process.env.NODE_ENV}</code>
        </div>
        <div>
          React Version: <code>{version}</code>
        </div>
      </div>
    );
  }
}


export const Adaptor = connector(App);

export default App;
