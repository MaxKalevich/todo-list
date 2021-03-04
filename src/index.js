import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import {AppContainer} from "./app-container";

import {store} from "./redux/redux-store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <AppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
