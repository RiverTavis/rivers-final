import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import styled from "styled-components";
import { GiEclipse } from "react-icons/gi";

const Footer = () => {
  return (
    <Wrapper>
      <CopyrightWrapper>
        <FaRegCopyright size="2rem" />
        <CopyrightText>
          <Year>2021</Year> River Tavis | All Rights Reserved
        </CopyrightText>
        <GiEclipse />
      </CopyrightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 25px;
  z-index: 10;
  height: 80px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: navy;
  opacity: 75%;
  box-shadow: 10px 10px 10px -10px;
  @import url("https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@300&display=swap");
`;

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 10;
  color: white;
`;
const Year = styled.span`
  font-weight: bold;
`;

const CopyrightText = styled.p`
  font-size: 18px;
  font-family: Var(--font-family);
`;

export default Footer;
