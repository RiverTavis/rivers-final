import React, { useContext } from "react";
import { ParticlesContext } from "./ParticlesContext";
import Particles from "react-particles-js";
import styled from "styled-components";
function SignInPage() {
  const { params, style } = useContext(ParticlesContext);

  return (
    <SignInWrap style={style}>
      <div>sign in page</div>
      <Particles params={params} />
    </SignInWrap>
  );
}

const SignInWrap = styled.div``;
export default SignInPage;
