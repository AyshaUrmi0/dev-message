import React from "react";
import "./app.css";

const App = ({ children }) => {
  return <section className="app" data-theme="dark">{children}</section>;
};

export default App;
