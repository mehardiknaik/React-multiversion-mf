import './polyfills';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <>
    <App number={30} />
  </>,
  document.getElementById('root')
);
