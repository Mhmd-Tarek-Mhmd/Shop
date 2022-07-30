import { render } from "preact";
import { Provider } from 'react-redux';

import "normalize.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App from './components/app';

import store from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);
