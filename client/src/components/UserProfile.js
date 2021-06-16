import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

const UserProfile = ({ signs, users, currentUser }) => {
  const { id } = useParams();
  const [userSign, setUserSign] = useState("");
  //////////
  const signsArray = signs[0];
  // console.log(Object.keys(signsArray));
  // const bullShit = users.map((user) => {
  //   if (user._id === id) {
  //     console.log("hi");
  //     setUserSign(user.sign);
  //   }
  // });
  return (
    <>
      <div>fuck u</div>
      <div>
        {/* {}

          // for (let i = 0; i < signsArray.length; i++) {
          //   console.log("hi");

          // if (user.sign === Object.keys(signsArray))
          // {
          // //   console.log("hit");
          // }
          // }
        })} */}
      </div>
    </>
  );
};

export default ;
