import React, { useContext } from "react";
import { ParticlesContext } from "./ParticlesContext";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";
const Matches = ({ users, currentUser }) => {
  const { params, style } = useContext(ParticlesContext);
  const filteredUsers = users.filter((user) =>
    currentUser.matches.includes(user.email)
  );

  console.log(currentUser.matches.length);
  console.log(currentUser.matches);

  return (
    <>
      {currentUser.matches.length >= 1 ? (
        <Wrapper>
          {filteredUsers.map((user) => {
            for (let i = 0; i < currentUser.matches.length; i++)
              if (user.email.includes(currentUser.matches[i]))
                return (
                  <>
                    <MatchWrap>
                      <NameDiv>
                        <StyledImg src={user.picture.thumbnail} />
                        <TextDiv>
                          <div>{user.name.first + " "} </div>
                          <StyledNavLink exact to={`/connect/user/${user._id}`}>
                            click to view profile{" "}
                          </StyledNavLink>
                        </TextDiv>
                      </NameDiv>
                    </MatchWrap>
                    <Particles params={params} style={style} />
                  </>
                );
          })}
        </Wrapper>
      ) : (
        <>
          <NoticeDiv>
            <div>Match with some users to see them here</div>
          </NoticeDiv>
          <Particles params={params} style={style} />
        </>
      )}
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  color: plum;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  text-decoration: none;
  &:active {
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  margin: 0 auto;
`;
const StyledImg = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 100px;
  height: 100px;
`;
const TextDiv = styled.div``;

const MatchWrap = styled.div`
  height: max-content;
  position: relative;
  z-index: 100;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 200px;
  background: navy;
  margin: 25px;
  padding: 25px;
  border-radius: 15px;
  opacity: 75%;
`;
const NameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 200px;
`;

const NoticeDiv = styled.div`
  position: relative;
  z-index: 100;
  color: white;
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
  position: relative;
  z-index: 100;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 200px;
  background: navy;
  margin: 40px;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px -10px;
  opacity: 75%;
`;
export default Matches;
