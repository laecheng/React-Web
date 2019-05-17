import React from 'react';
import {TopBar} from "./TopBar";
import {Main} from "./Main";

/**
 * App --> TopBar
 *     --> Main
 *            --> Register
 *            --> Login
 *            --> Home
 */
function App() {
  return (
    <div className="App">
      <TopBar />
      <Main />
    </div>
  );
}

export default App;
