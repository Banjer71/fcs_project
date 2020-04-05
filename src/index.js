import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import English from "./translation/en.json";
import Italian from "./translation/it.json";

const language = window.navigator.language.split(/[-_]/)[0];

const message = {
  en: English,
  it: Italian,
};
ReactDOM.render(
  <IntlProvider locale={language} messages={message[language]}>
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
