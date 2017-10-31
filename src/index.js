import React from "react";
import { render } from "react-dom";

import "./styles.css";

import App from "./composants/App";

const Root = () => {
  return <App />;
};

render(<Root />, document.getElementById("root"));
