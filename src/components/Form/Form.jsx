import React, { useState } from "react";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import "./Form.css";
const axios = require("axios");
const BASE_URL = "https://petstore.swagger.io/v2";

export function Form() {
  const [formValues, setFormValues] = useState({
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    userStatus: 0,
  });

  const setFieldValue = (value, name) => {
    setFormValues({ ...formValues, [`${name}`]: value });
  };

  const [user, setUser]=useState(null);

  const registerUser = () => {
    axios
      .post("https://petstore.swagger.io/v2/user", formValues)
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
    console.log(formValues);
  };

  const getUser = (name) => {
    axios
      .get(`${BASE_URL}/user/${name}`)
      .then(function (response) {
        console.log(response);
        setUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h3>{user && user.firstName}</h3>
      <div className="form">
        <Input
          fieldName="Username"
          onChange={(text) => setFieldValue(text.target.value, "username")}
          value={formValues.username}
        />
        <Input
          fieldName="First name"
          onChange={(text) => setFieldValue(text.target.value, "firstName")}
          value={formValues.firstName}
        />
        <Input
          fieldName="Last name"
          onChange={(text) => setFieldValue(text.target.value, "lastName")}
          value={formValues.lastName}
        />
        <Input
          fieldName="Email"
          onChange={(text) => setFieldValue(text.target.value, "email")}
          value={formValues.email}
        />
        <Input
          type="password"
          fieldName="Password"
          onChange={(text) => setFieldValue(text.target.value, "password")}
          value={formValues.password}
        />
        <Input
          type="number"
          fieldName="Phone"
          onChange={(text) => setFieldValue(text.target.value, "phone")}
          value={formValues.phone}
        />
        <Button text="submit" onClick={() => registerUser()} />
      </div>
    </>
  );
}
