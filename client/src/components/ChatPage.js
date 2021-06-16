//use twitterclone tweetinput
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Particles from "react-particles-js";
import { ParticlesContext } from "./ParticlesContext";
import { GiEclipse } from "react-icons/gi";

const ChatPage = ({ currentUser, users, signs }) => {
  const { id } = useParams();
  const [currentPerson, setCurrentPerson] = useState({});
  const { params, style } = useContext(ParticlesContext);

  useEffect(() => {
    fetch(`/users/${id}`).then((response) =>
      response.json().then((json) => {
        setCurrentPerson(json.data);
      })
    );
  }, []);

  return (
    <Wrapper>
      <ChatWrap>
        {currentPerson.email ? (
          signs.map((sign) => {
            if (currentPerson.sign === sign.sign) {
              let compats = Object.keys(sign.compatibility);
              let compatMatch = "";
              compats.forEach((c) => {
                if (c === currentUser.sign) {
                  compatMatch = c;
                }
              });

              return (
                <>
                  <InnerWrapper>
                    <Img src={currentPerson.picture.large} />
                    <PersonTxtWrapper>
                      <div>{currentPerson.name.first}</div>
                      <div>{currentPerson.age}</div>
                      <div>{currentPerson.sign}</div>
                    </PersonTxtWrapper>
                  </InnerWrapper>
                  <CompatHeader>
                    You and {currentPerson.name.first}'s Compatability:
                  </CompatHeader>
                  <div>{sign.compatibility[compatMatch]}</div>
                </>
              );
            }
          })
        ) : (
          <div>
            Loading...
            <GiEclipse />
            <GiEclipse />
            <GiEclipse />
          </div>
        )}
      </ChatWrap>
      <Particles params={params} style={style} />
    </Wrapper>
  );
};
const CompatHeader = styled.h3`
  padding: 2px 0;
  color: plum;
`;
const Wrapper = styled.div``;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PersonTxtWrapper = styled.div`
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
`;
const ChatWrap = styled.div`
  border: #eaeaea;
  background-color: navy;
  border-radius: 15px;
  box-shadow: 10px 10px 10px -10px;
  width: 100%;
  max-width: 500px;
  padding: 40px;
  position: relative;
  z-index: 100;
  color: white;
  opacity: 75%;
`;
const Img = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
`;
export default ChatPage;
