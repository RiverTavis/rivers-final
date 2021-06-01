import Particles from "react-particles-js";
import React, { useContext } from "react";
import { ParticlesContext } from "./ParticlesContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "./SignInPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route>
            <SignInPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
