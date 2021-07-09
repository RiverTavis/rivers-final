//use twitterclone tweetinput
import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";
import Particles from "react-particles-js";
import { ParticlesContext } from "./ParticlesContext";
import { GiEclipse } from "react-icons/gi";
import { AiOutlineArrowLeft } from "react-icons/ai";
const ChatPage = ({ setCurrentUser, currentUser, users, signs }) => {
  const { id } = useParams();
  const [currentPerson, setCurrentPerson] = useState({});
  const { params, style } = useContext(ParticlesContext);
  const [msgs, setMsgs] = useState("");
  const [msgContent, setMsgContent] = useState("");
  const [newMsg, setNewMsg] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    fetch(`/users/${id}`).then((response) =>
      response.json().then((json) => {
        setCurrentPerson(json.data);
        let filteredMsgs = currentUser.messageThreads.filter((user) => {
          return (
            user.connectionWithId === id ||
            user.connectionWithId === currentUser._id
          );
        });

        setMsgs(filteredMsgs);
      })
    );
  }, [currentUser]);

  let msgData = {};
  // console.log(msgs, "filtered messages");

  const handleChat = (ev) => {
    ev.preventDefault();

    setNewMsg(true);
    console.log(msgContent);

    console.log(currentPerson, "them");
    console.log(currentUser, "me");
    let currentdate = new Date();
    let dateTime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();
    msgData = {
      connectionWithId: currentPerson._id,
      myId: currentUser._id,
      newMessage: {
        connectionWithId: currentPerson._id,
        sentByName: currentUser.name.first,
        timestamp: dateTime,
        message: msgContent,
      },
    };

    setMsgContent("");

    fetch("/users/messages/update", {
      method: "PATCH",
      body: JSON.stringify(msgData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((json) => {
        console.log(json);
        setCurrentUser(json.data);
      });
    });
  };

  return (
    <Wrapper>
      {" "}
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
                <ChatWrap>
                  <StyledNavLink exact to="/connect">
                    <StyledAiOutlineArrowLeft /> Back
                  </StyledNavLink>
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
                </ChatWrap>

                <ChatWrap2>
                  <MsgDiv>
                    {msgs.length > 0 ? (
                      msgs.map((msg) => {
                        console.log(msg);
                        return (
                          <>
                            {msg.connectionWithId === id ? (
                              <MatchDiv>
                                {msg.timestamp} <br></br>
                                {msg.message}
                              </MatchDiv>
                            ) : (
                              <UserDiv>
                                {msg.timestamp} <br></br>
                                {msg.message}
                              </UserDiv>
                            )}
                          </>
                        );
                      })
                    ) : (
                      <StyledBnr>
                        send {currentPerson.name.first} a message!
                      </StyledBnr>
                    )}
                  </MsgDiv>
                  <StyledForm>
                    <StyledInput
                      onChange={(ev) => setMsgContent(ev.target.value)}
                      type="text"
                      placeholder="send a message"
                    ></StyledInput>
                    <div>
                      <StyledBtn
                        id="chatInput"
                        onClick={(ev) => handleChat(ev)}
                      >
                        Send Message
                      </StyledBtn>
                    </div>
                  </StyledForm>
                </ChatWrap2>
              </>
            );
          }
        })
      ) : (
        <ChatWrap>
          Loading...
          <GiEclipse />
          <GiEclipse />
          <GiEclipse />
        </ChatWrap>
      )}
      <Particles params={params} style={style} />
    </Wrapper>
  );
};
const StyledBnr = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  background-color: plum;
  padding: 30px 10px;
  max-width: 45%;
  margin-left: 27%;
  margin-top: 30px;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  box-shadow: 10px 10px 10px -10px;
  border-radius: 15px;
`;

const MsgDiv = styled.div``;

const StyledBtn = styled.button`
  padding: 10px;
  margin-left: 20px;
  font-family: var(--heading-font-family);
  font-size: 20px;
  border-radius: 15px;

  box-shadow: 10px 10px 10px -10px;
  color: white;
  background-color: plum;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  border: none;
  :hover {
    border: none;
    background-color: white;
    color: plum;
    text-shadow: -1px - 1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
  }
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 15px;
  border: none;
  font-weight: bold;
  :focus {
    border: solid plum 5px;
    border-style: none;
    outline: none;
    border-radius: 15px;
  }
`;
const StyledForm = styled.form`
  margin-top: 30%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
`;

const MatchDiv = styled.p`
  display: flex;
  justify-content: flex-end;
`;
const UserDiv = styled.p`
  display: flex;
  justify-content: flex-start;
`;

const ChatWrap2 = styled.div`
  z-index: 99;
  position: relative;
  color: white;
  margin: 20px;
  border: solid 10px navy;
  border-radius: 15px;
  width: 600px;
  padding: 15px;
`;

const StyledAiOutlineArrowLeft = styled(AiOutlineArrowLeft)`
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  :hover {
    background-color: plum;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    padding: 5px;
  }
`;

const CompatHeader = styled.h3`
  padding: 2px 0;
  color: plum;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
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
  padding: 20px;
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
