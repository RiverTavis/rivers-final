import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import DiscoverPage from "./components/DiscoverPage";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import Matches from "./components/Matches";
import ChatPage from "./components/ChatPage";
import GlobalStyles from "./GlobalStyles.js";
import Footer from "./components/Footer";

///

const App = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([null]);
  const [matches, setMatches] = useState([]);
  const [signs, setSigns] = useState([]);
  const [likes, setLikes] = useState([]);

  let initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    interestedIn: "",
    city: "",
    state: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    age: "",
    sign: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    fetch("/users").then((response) =>
      response.json().then((json) => {
        setUsers(json);
      })
    );
  }, [currentUser]);

  useEffect(() => {
    fetch("/signs").then((response) =>
      response.json().then((json) => {
        setSigns(json);
      })
    );
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />

      <StyledApp className="App">
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage
              initialState={initialState}
              formData={formData}
              setFormData={setFormData}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route exact path="/signin">
            <SignInPage
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              passwordValue={passwordValue}
              setPasswordValue={setPasswordValue}
              users={users}
              setUsers={setUsers}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route exact path="/discover">
            <DiscoverPage
              users={users}
              currentUser={currentUser}
              matches={matches}
              setMatches={setMatches}
              setLikes={setLikes}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route exact path="/connect">
            <Matches
              matches={matches}
              setMatches={setMatches}
              users={users}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route exact path="/connect/user/:id">
            <ChatPage
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
              users={users}
              signs={signs}
            />
          </Route>
        </Switch>
        <Footer />
      </StyledApp>
    </BrowserRouter>
    /* </UserProvider> */
  );
};

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  @import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@300&display=swap");
`;

export default App;
