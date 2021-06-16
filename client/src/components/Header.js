import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { GiEclipse } from "react-icons/gi";
const Header = ({ currentUser, setCurrentUser }) => {
  const history = useHistory();
  return (
    <>
      {currentUser.name ? (
        <Wrapper>
          <InnerDiv>
            <Logo>
              <Icon>
                <GiEclipse />
              </Icon>
              Eclipse
            </Logo>

            <NavDiv>
              <StyledNavLink exact to="/connect">
                <StyledDiv>Connect</StyledDiv>
              </StyledNavLink>
            </NavDiv>
            <NavDiv>
              <StyledNavLink exact to="/discover">
                <StyledDiv>Explore</StyledDiv>
              </StyledNavLink>
            </NavDiv>

            <SignOutDiv>
              <StyledDiv>{currentUser.name.first}</StyledDiv>
              <NavDiv>
                <StyledBtn
                  onClick={() => {
                    setCurrentUser([null]);
                    history.push("/");
                  }}
                >
                  Sign Out
                </StyledBtn>
              </NavDiv>
            </SignOutDiv>
          </InnerDiv>
        </Wrapper>
      ) : (
        <Wrapper>
          <InnerDiv>
            <StyledNavLink exact to="/">
              <NavDiv>
                <LinkLogo>
                  <Icon>
                    <GiEclipse />
                  </Icon>
                  Eclipse
                </LinkLogo>
              </NavDiv>
            </StyledNavLink>
            <SignInDiv>
              <StyledNavLink to="/signin">
                <NavDiv>Sign In</NavDiv>
              </StyledNavLink>
            </SignInDiv>
          </InnerDiv>
        </Wrapper>
      )}
    </>
  );
};
const Icon = styled.div`
  color: white;
`;
const Wrapper = styled.div`
  font-size: 25px;
  z-index: 10;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: navy;
  opacity: 75%;
  box-shadow: 10px 10px 10px -10px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@300&display=swap");
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: space-between;
  color: white;
  /* margin: 10px; */
  &:hover {
    color: plum;
  }
`;
const StyledBtn = styled.button`
  border-style: none;
  background-color: navy;
  color: white;
  font-family: Raleway, Sans-Serif;
  display: flex;
  align-self: flex-end;
  font-size: 16px;
  &:hover {
    color: plum;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;

  color: white;
`;
const LinkLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;

  color: white;
  &:hover {
    color: plum;
  }
`;
const SignInDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 10px;
`;
const SignOutDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv = styled.div`
  color: white;
  margin: 10px;

  &:hover {
    color: plum;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    color: plum;
  }
`;
export default Header;
