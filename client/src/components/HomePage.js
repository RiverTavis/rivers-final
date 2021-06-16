import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ParticlesContext } from "./ParticlesContext";
import Particles from "react-particles-js";
import styled from "styled-components";
import astroImage from "./astroImage.png";

const HomePage = ({}) => {
  const { params, style } = useContext(ParticlesContext);

  return (
    <BodyWrap>
      <Wrapper>
        <ImageWrap>
          <AstroImg src={astroImage} />
        </ImageWrap>
        <BlurbWrap>
          Tired of useless dating apps and matching with people that you have
          absolutely no common interests or chemistry with? Sick of going on a
          first date with someone only to find out they're an insufferable
          Aries? Not Anymore! Eclipse offers you an elevated online dating
          experience where your unique astrological chemistry is provided on
          each users profile. Your days of dating incompatable signs are OVER
          with Eclipse. Sign up now for free!
        </BlurbWrap>
        <StyledNavLink exact to="/signup">
          <StyledH1>Sign up now!</StyledH1>
        </StyledNavLink>{" "}
      </Wrapper>
      <ParticlesWrap>
        <Particles params={params} style={style} />
      </ParticlesWrap>{" "}
    </BodyWrap>

    //      )}
  );
};
const BodyWrap = styled.div`
  height: 78%;
`;

const BlurbWrap = styled.div`
  max-width: 600px;
  padding: 60px;
  background-image: url("astroImg");
  font-size: 20px;
  background: navy;
  opacity: 75%;
  border-radius: 15px;
`;
const Wrapper = styled.div`
  color: white;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const ImageWrap = styled.div``;

const StyledH1 = styled.h1`
  color: white;
  &:hover {
    color: plum;
  }
`;
const AstroImg = styled.img`
  width: 300px;
  border-radius: 40%;
  opacity: 75%;
`;

const ParticlesWrap = styled.div``;

export default HomePage;
