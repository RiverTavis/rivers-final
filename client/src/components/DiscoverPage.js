import React, { useState, useContext } from "react";
import { ParticlesContext } from "./ParticlesContext";
import styled from "styled-components";
import Swipe from "./Swipe";
import Particles from "react-particles-js";

require("react-dom");

const DiscoverPage = ({
  users,
  currentUser,
  matches,
  setMatches,
  setLikes,
  setCurrentUser,
}) => {
  const [lastDirection, setLastDirection] = useState();

  const likesArray = [];
  const matchesArray = [];
  const { params, style } = useContext(ParticlesContext);

  const handlePush = (user) => {
    likesArray.push(user.email);
    setLikes(likesArray);
    // this is where we patch to our own likes array when we swipe
    // we are patching to currentUser.likes
    // everytime they swipe right aka like someone
    fetch(`/user/likes/${currentUser._id}`, {
      method: "PATCH",
      body: JSON.stringify(likesArray),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((json) => {});
    });

    if (user.likes.includes(currentUser.email)) {
      matchesArray.push(user.email);
      matchesArray.push(...currentUser.matches);
      setMatches(matchesArray);
      fetch(`/user/matches/${currentUser._id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(matchesArray),
      }).then((res) => {
        res.json().then((json) => {
          setCurrentUser(json.data);
        });
      });

      window.alert(
        `you matched with ${user.name.first}! send them a message in connect tab`
      );
    }
  };
  const swiped = (direction, like) => {
    setLastDirection(direction);

    if (direction === "right") {
      handlePush(like);
    }
  };

  const outOfFrame = (name) => {};

  return (
    <Wrapper>
      <SwipeWrap>
        <Swipe
          swiped={swiped}
          outOfFrame={outOfFrame}
          users={users}
          currentUser={currentUser}
          matches={matches}
        />
      </SwipeWrap>
      <Particles params={params} style={style} />
    </Wrapper>
  );
};
const SwipeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  z-index: 100;
`;

const Wrapper = styled.div``;
export default DiscoverPage;
