import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import { GiClick } from "react-icons/gi";
import { GiEclipse } from "react-icons/gi";

import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";

require("react-dom");
const Swipe = ({ swiped, outOfFrame, users, currentUser, matches }) => {
  const filteredUsers = users.filter(
    (user) =>
      !currentUser.matches.includes(user.email) &&
      !currentUser.email.includes(user.email)
  );

  return (
    <>
      <TinderWrapper>
        {filteredUsers.map((user) => {
          if (
            (currentUser.interestedIn === "women" &&
              user.gender === "female") ||
            (currentUser.interestedIn === "men" && user.gender === "male") ||
            currentUser.interestedIn === "everyone"
          ) {
            return (
              <StyledTinderCard
                className="swipe"
                key={user.email}
                onSwipe={(dir) => swiped(dir, user)}
                onCardLeftScreen={() => outOfFrame(user.name.first)}
              >
                <CardWrapper>
                  <LogoDiv>
                    <GiEclipse />
                  </LogoDiv>

                  <Img src={user.picture.large} />
                  <Text>
                    <h4>{user.name.first}</h4>
                    <SteezyMfBox></SteezyMfBox>

                    <AgeDiv>{user.age}</AgeDiv>
                    <div>{user.sign}</div>
                  </Text>
                  <Arrows>
                    <Arrow>
                      <CgArrowLeftR /> No{" "}
                    </Arrow>
                    <Arrow>
                      <GiClick />
                    </Arrow>
                    <Arrow>
                      {" "}
                      Yes <CgArrowRightR />
                    </Arrow>
                  </Arrows>
                </CardWrapper>
              </StyledTinderCard>
            );
          }
        })}
      </TinderWrapper>
      {/* {lastDirection ? (
      <h2 className="infoText">You swiped {lastDirection}</h2>
    ) : (
      <h2 className="infoText" />
    )} */}
    </>
  );
};

const AgeDiv = styled.div`
  font-weight: bold;
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 5px 0 5px; ;
`;
const SteezyMfBox = styled.div`
  background-color: white;
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
const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Arrow = styled.div`
  margin: 0 5px;
  font-weight: bold;
`;

const TinderWrapper = styled.div`
  width: 90vw;
  max-width: 260px;
  height: 300px;
  box-shadow: 10px 10px 10px -10px;
  margin-bottom: 175px;

  :hover {
    cursor: pointer;
  }
`;
const Text = styled.div`
  background-color: plum;
  padding: 10px;
  border-radius: 15px; ;
`;
const CardWrapper = styled.div`
  border-radius: 15px;
  padding: 40px;
  background-color: navy;
  color: white;
  position: absolute;
  /* box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3); */
  box-shadow: 10px 10px 10px -10px;
`;

const StyledTinderCard = styled(TinderCard)`
  /* height: 200px;
width: 100px;
background: pink;
border: 1px solid blue;
border-radius: 5px; */
  position: absolute;
  margin-bottom: 500px;
  .card {
    position: relative;
    background-color: #fff;
    width: 80vw;
    max-width: 260px;
    height: 300px;
    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    background-size: cover;
    background-position: center;
  }
`;
const Img = styled.img`
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin: 10px;
  width: 150px;
  height: auto;
`;
export default Swipe;
