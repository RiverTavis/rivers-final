import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ParticlesContext } from "./ParticlesContext";
// import { UserContext } from "./UserContext";
import { GiEclipse } from "react-icons/gi";

import Particles from "react-particles-js";
import styled from "styled-components";
function SignInPage({
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  users,
  setCurrentUser,
}) {
  const { params, style } = useContext(ParticlesContext);

  // const {
  //   emailValue,
  //   setEmailValue,
  //   passwordValue,
  //   setPasswordValue,
  //   users,
  //   setUsers,
  //   currentUser,
  //   setCurrentUser,
  // } = useContext(UserContext);
  const history = useHistory();

  /////revisit

  const handleSignIn = (ev) => {
    ev.preventDefault();
    users.map((user) => {
      if (emailValue === user.email && passwordValue === user.password) {
        setCurrentUser(user);
        // could set the current user msgs here or
        //could just access msgs like currentUser.recievedMessages
        history.push("/discover");
      }
    });
  };
  return (
    <>
      <Wrapper className="wrapper">
        <TipsyWrap className="TipsyWrap">
          <InnerTipsy className="InnerTipsy">
            <LogoDiv>
              <GiEclipse />
            </LogoDiv>
            {/* <WelcomeDiv>Welcome to Eclipse</WelcomeDiv> */}
            <Input
              name="email"
              type="text"
              placeholder="email"
              value={emailValue}
              onChange={(ev) => {
                setEmailValue(ev.target.value);
              }}
            />
            <Input
              name="password"
              type="password"
              placeholder="password"
              value={passwordValue}
              onChange={(ev) => {
                setPasswordValue(ev.target.value);
              }}
            />
            <SteezyMfBox></SteezyMfBox>

            <StyledButton onClick={handleSignIn}>Sign In</StyledButton>
          </InnerTipsy>
        </TipsyWrap>
      </Wrapper>
      {/* <AstroImg src={astroImage} /> */}
      <Particles params={params} style={style} />
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  opacity: 75%;
  width: 300px;
  height: 300px;
`;

const LogoDiv = styled.div`
  font-size: 25px;
  margin: 10px;
`;
// const WelcomeDiv = styled.div`
//   margin: 10px 0;
// `;

const TipsyWrap = styled.div`
  padding: 80px;
  background: navy;
  color: white;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 10px 10px 10px -10px;
`;
const InnerTipsy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
`;
const Input = styled.input`
  padding: 5px 2px;
  :focus {
    border: solid plum 5px;
  }
`;
const StyledButton = styled.button`
  width: 145px;

  font-family: var(--heading-font-family);
  font-size: 20px;
  margin: 10px;
  border-radius: 15px;
  border: none;
  background-color: white;
  color: plum;

  box-shadow: 10px 10px 10px -10px;

  :hover {
    color: white;
    background-color: plum;
    border: none;
  }
`;
const SteezyMfBox = styled.div`
  background-color: plum;
  width: 60px;
  height: 6px;
  /* border-bottom-left-radius: 70%; */
  /* border-bottom-right-radius: 70%; */
  border-radius: 110%;
  margin: 20px auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;
export default SignInPage;
