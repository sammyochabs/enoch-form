import React from "react";
import { CountryInput } from "./CountryInput";
import { PhoneInput } from "./PhoneInput";
import TextInput from "./TextInput";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
    $country: String!
    $phoneNumber: String!
    $dateOfBirth: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      country: $country
      phoneNumber: $phoneNumber
      dateOfBirth: $dateOfBirth
    ) {
      newUser
    }
  }
`;

function AddTodo() {
  let input;
  const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [signup, { data }] = useMutation(SIGNUP_MUTATION);
  console.log(signup, data);

  const handleSignUp = (e) => {
    e.preventDefault();
    signup({
      variables: {
        firstName,
        lastName,
        email,
        dateOfBirth,
        country,
        phoneNumber,
        password,
      },
    });
  };

  return (
    <form onSubmit={handleSignUp}>
      <div className="row">
        <div className="col-md-6">
          <TextInput
            value={firstName}
            setValue={setFirstName}
            type={"text"}
            placeholder={"First Name"}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            value={lastName}
            setValue={setLastName}
            type={"text"}
            placeholder={"Last Name"}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            value={dateOfBirth}
            setValue={setDateOfBirth}
            type={"text"}
            placeholder={"Date of Birth"}
          />
        </div>
        <div className="col-md-6">
          <CountryInput setValue={setCountry} value={country} />
        </div>
        <div className="col-md-6">
          <TextInput
            value={email}
            setValue={setEmail}
            type={"text"}
            placeholder={"Email"}
          />
        </div>
        <div className="col-md-6">
          <PhoneInput value={phoneNumber} setValue={setPhoneNumber} />
        </div>
        <div className="col-md-6">
          <TextInput
            value={password}
            setValue={setPassword}
            type={"password"}
            placeholder={"Password"}
          />
        </div>
        <div className="col-md-6">
          <TextInput
            // value={repeatPassword}
            setValue={setRepeatPassword}
            type={"password"}
            placeholder={"Repeat Password"}
          />
        </div>
        <div className="col-md-12">
          <p className="signup-form-bttm-xt">
            Use 8 or more characters with a mix of letters, atleast one
            uppercase, numbers &amp; symbols
          </p>
        </div>
        <div className="col-md-12">
          <div className="signup-check">
            <Checkbox
              text={" I want to receive the emails from Element Zero Dao"}
            />
            <Checkbox text={""} privacy={true} />
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="sign-up-button">
            Sign up
          </button>
        </div>
        <div className="col-md-12">
          <p className="signup-bttm-xt">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
    </form>
  );
};
