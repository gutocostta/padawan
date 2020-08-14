import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { toast } from "react-toastify";
import * as serviceWorker from "./serviceWorker";
import store from "./store";
import AppContainer from "./componentes/containers/AppContainer";

import "react-toastify/dist/ReactToastify.css";
import "./sass/app.scss";

const hashHistory = createHashHistory();

toast.configure({
  autoClose: 3000,
  draggable: false,
  hideProgressBar: true
});

const Root = ({ store }) => (
  <div className="starWars-app">
    <Provider store={store}>
      <Router history={hashHistory}>
        <AppContainer />
      </Router>
    </Provider>
  </div>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
serviceWorker.unregister();
