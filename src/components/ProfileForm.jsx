import React, { useState, useContext } from "react";

import { Typography, Box } from "@mui/material";
import TextField from "./TextField";

import { StepperContext } from "../contexts/StepperContext";

const inputStyle = {
  display: "flex",
  flexBasis: "50%",
  gap: "20px",
  width: "100%",
  paddingTop: "24px",
};

function ProfileForm() {
  const { userData, setUserData } = useContext(StepperContext);
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setUserData({ ...userData, [name]: value });
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setUserData((prevUserData) => {
      console.log("Previous UserData:", prevUserData);
      return { ...prevUserData, [name]: value };
    });
  };
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Box
        sx={{
          display: "block",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Step 1
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Your Profile
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            width: "60%",
            margin: "0 auto",
            fontSize: "18px",
          }}
        >
          Enter the login information for your account. You will be able to
          create additional user after registration
        </Typography>
      </Box>
      <form>
        <div style={inputStyle}>
          <TextField
            label="First Name"
            type="text"
            placeholder="Input Your First Name"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            type="text"
            placeholder="Input Your Last Name"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </div>
        <div style={inputStyle}>
          <TextField
            label="Email"
            type="email"
            placeholder="Input Your Email"
            name="email"
            value={userData["email"]}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            type="text"
            placeholder="Input Your Phone Number"
            name="phoneNumber"
            value={userData["phoneNumber"]}
            onChange={handleChange}
          />
        </div>
        <div style={inputStyle}>
          <TextField
            label="Password"
            type="password"
            placeholder="Create Password"
            name="password"
            value={userData["password"]}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
