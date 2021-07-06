import React, { useContext } from "react";
import { ParticlesContext } from "./ParticlesContext";
import Particles from "react-particles-js";
import { GiEclipse } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SignUpPage = ({
  formData,
  setFormData,
  initialState,
  setCurrentUser,
}) => {
  const history = useHistory();
  const { params, style } = useContext(ParticlesContext);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const postObj = {
      gender: formData.gender,
      name: {
        first: formData.first,
        last: formData.last,
      },
      interestedIn: formData.interestedIn,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      email: formData.email,
      password: formData.password,
      likedBy: [],
      likes: [],
      recievedMessages: [],
      matches: [],
      dateOfBirth: formData.dateOfBirth,
      age: formData.age,
      sign: formData.sign,
      picture: {
        large: "https://image.flaticon.com/icons/png/512/1077/1077063.png",
        medium: "https://image.flaticon.com/icons/png/512/1077/1077063.png",
        thumbnail: "https://image.flaticon.com/icons/png/512/1077/1077063.png",
      },
    };

    fetch("/users/new", {
      method: "POST",
      body: JSON.stringify(postObj),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((json) => {
        setCurrentUser(json.data);
        history.push("/discover");
      });
    });
  };
  return (
    <>
      <Wrapper>
        <StyledForm>
          <LogoDiv>
            <GiEclipse />
          </LogoDiv>
          <SelectWrapTopper>
            <SelectWrapTop>
              <p>I am:</p>
              <SelectWrapRadio>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(ev) => handleChange(ev.target.value, "gender")}
                />
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(ev) => handleChange(ev.target.value, "gender")}
                />
                <label for="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={(ev) => handleChange(ev.target.value, "gender")}
                />
                <label for="other">Other</label>
              </SelectWrapRadio>
            </SelectWrapTop>
            <SelectWrapTop>
              <p>I am interested in:</p>
              <SelectWrapRadio>
                <input
                  type="radio"
                  id="men"
                  name="interestedIn"
                  value="men"
                  onChange={(ev) =>
                    handleChange(ev.target.value, "interestedIn")
                  }
                />
                <label for="men">Men</label>
                <input
                  type="radio"
                  id="women"
                  name="interestedIn"
                  value="women"
                  onChange={(ev) =>
                    handleChange(ev.target.value, "interestedIn")
                  }
                />
                <label for="women">Women</label>
                <input
                  type="radio"
                  id="everyone"
                  name="interestedIn"
                  value="everyone"
                  onChange={(ev) =>
                    handleChange(ev.target.value, "interestedIn")
                  }
                />
                <label for="everyone">Everyone</label>
              </SelectWrapRadio>
            </SelectWrapTop>
          </SelectWrapTopper>
          <SelectWrap>
            <label for="first">First Name</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "first")}
              type="text"
              name="first"
            ></StyledInput>
            <label for="last">Last Name</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "last")}
              type="text"
              name="last"
            ></StyledInput>
          </SelectWrap>
          <SelectWrap>
            <label for="email">Email</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "email")}
              type="email"
              name="email"
              required
            ></StyledInput>
            <label for="city">City</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "city")}
              type="city"
              name="city"
              required
            ></StyledInput>
          </SelectWrap>{" "}
          <SelectWrap>
            <label for="state">State</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "state")}
              type="state"
              name="state"
              required
            ></StyledInput>
            <label for="country">Country</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "country")}
              type="country"
              name="country"
              required
            ></StyledInput>
          </SelectWrap>{" "}
          <SelectWrap>
            <label for="dateOfBirth">Date Of Birth</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "dateOfBirth")}
              type="dateOfBirth"
              name="dateOfBirth"
              required
            ></StyledInput>
            <label for="age">Age</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "age")}
              type="age"
              name="age"
              required
            ></StyledInput>
          </SelectWrap>
          <SelectWrap>
            <label for="password">Password</label>
            <StyledInput
              onChange={(ev) => handleChange(ev.target.value, "password")}
              type="password"
              placeholder="password"
              name="password"
              required
            ></StyledInput>
            <label for="confirmPassword"> Confirm Password</label>
            <StyledInput
              onChange={(ev) =>
                handleChange(ev.target.value, "confirmPassword")
              }
              type="password"
              name="confirmPassword"
              required
            ></StyledInput>
          </SelectWrap>
          <SelectWrap>
            <SelectSignWrap>
              <label for="sign">Select Sign</label>
              <StyledSelect
                id="sign"
                name="sign"
                onChange={(ev) => handleChange(ev.target.value, "sign")}
              >
                <option value="" disabled selected hidden></option>

                <option value="aries">aries</option>
                <option value="taurus">taurus</option>
                <option value="gemini">gemini</option>
                <option value="cancer">cancer</option>
                <option value="leo">leo</option>
                <option value="virgo">virgo</option>
                <option value="libra">libra</option>
                <option value="scorpio">scorpio</option>
                <option value="sagittarius">sagittarius</option>

                <option value="capricorn">capricorn</option>
                <option value="aquarius">aquarius</option>
                <option value="pisces">pisces</option>
              </StyledSelect>
            </SelectSignWrap>
            <ButtonWrapper>
              <StyledButton
                id="sign-up-button"
                onClick={(ev) => {
                  handleClick(ev);
                }}
              >
                Sign Up
              </StyledButton>
            </ButtonWrapper>
          </SelectWrap>
          {/* <LogoDiv>
            <GiEclipse />
          </LogoDiv>{" "} */}
        </StyledForm>
      </Wrapper>
      <Particles params={params} style={style} />
    </>
  );
};
const LogoDiv = styled.div`
  font-size: 25px;
  margin: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  /* margin-top: 250px;
  margin-bottom: 250px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 700px;
  width: 700px;
  border-style: 1px solid plum;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  background-color: navy;
  color: white;
  position: relative;
  z-index: 2;
  opacity: 75%;
  //?
`;

const ButtonWrapper = styled.div``;

const SelectSignWrap = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const SelectWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SelectWrapTop = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 0 auto;
  }
`;

const SelectWrapTopper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SelectWrapRadio = styled.div`
  /* display: flex;
  flex: 1; */
`;

const StyledForm = styled.form`
  padding: 30px 60px;
  width: 100%;
  box-shadow: 10px 10px 10px -10px;

  label {
    width: 90px;
  }
`;

const StyledInput = styled.input`
  padding: 5px;
  border: none;
  width: 150px;
  margin: 5px;
  border-radius: 15px; ;
`;

const StyledButton = styled.button`
  padding: 10px 4px;
  border: none;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-self: center;
  font-weight: bold;
  width: 178px;

  font-family: var(--heading-font-family);
  font-size: 18px;
  border-radius: 15px;
  border: none;
  background-color: white;
  color: plum;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;

  box-shadow: 10px 10px 10px -10px;
  font-weight: bold;
  :hover {
    color: white;
    background-color: plum;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    border: none;
    border-radius: 15px;
  }
  &:active {
    border-radius: 15px;
    border: none;
  }
`;

const StyledSelect = styled.select`
  width: 163px;
  margin-left: 24px;
  padding: 5px;
  height: 30px;
  border-radius: 15px; ;
`;

export default SignUpPage;
