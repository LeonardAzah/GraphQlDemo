import React, { useState, useContext } from "react";
import TextField from "./TextField";
import { Typography, Box, Button } from "@mui/material";
import ButtonInput from "./ButtonInput";
import { StepperContext } from "../contexts/StepperContext";

const inputStyle = {
  display: "flex",
  flexBasis: "50%",
  gap: "20px",
  width: "100%",
  paddingTop: "24px",
};
function BussinessForm() {
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

  const [brandName, setBrandName] = useState("");
  const [brandType, setBrandType] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  return (
    <div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Box
          sx={{
            display: "block",
          }}
        >
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Step 2
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Business Information
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              width: "60%",
              margin: "0 auto",
              fontSize: "18px",
            }}
          >
            Please, enter information about your company
          </Typography>
        </Box>
        <form>
          <div style={{ fontSize: "18px", color: "lightblue" }}>
            General Information
          </div>

          <div style={inputStyle}>
            <TextField
              label="Brand Name"
              type="text"
              placeholder="Input Your Brand Name"
              name="brandName"
              value={userData["brandName"]}
              onChange={handleChange}
            />
            <TextField
              label="Brand Type"
              type="text"
              placeholder="Input Your Brand Type"
              name="brandType"
              value={userData["brandType"]}
              onChange={handleChange}
            />
          </div>
          <div style={inputStyle}>
            <TextField
              label="Street Address"
              type="streetAddress"
              placeholder="Input Your Street Address"
              name="streetAddress"
              value={userData["streetAddress"]}
              onChange={handleChange}
            />
            <TextField
              label="City"
              type="text"
              placeholder="Input Your City"
              name="city"
              value={userData["city"]}
              onChange={handleChange}
            />
          </div>
          <div style={inputStyle}>
            <TextField
              label="Zip Code"
              type="zipCode"
              placeholder="Input Zip Code"
              name="zipCode"
              value={userData["zipCode"]}
              onChange={handleChange}
            />
            <TextField
              label="Tax ID Number"
              type="taxNumber"
              placeholder="Input Tax ID Number"
              name="taxNumber"
              value={userData["taxNumber"]}
              onChange={handleChange}
            />
          </div>
          <div style={{ fontSize: "18px", color: "lightblue" }}>Document</div>
          <p>
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <ButtonInput
            type="doc1"
            name="doc1"
            value={userData["doc1"]}
            onChange={handleChange}
            placeholder="Electronically sign the agreement(s)"
          />
          <ButtonInput
            type="doc2"
            name="doc2"
            value={userData["doc2"]}
            onChange={handleChange}
            placeholder="Non adult beverge Kroger market supplier waiver and release"
          />
          <div style={{ fontSize: "18px", color: "lightblue" }}>Document</div>
          <p>
            Once the following documents are signed, you'll be ready to get
            started
          </p>
          <ButtonInput
            type="doc3"
            name="doc3"
            value={userData["doc3"]}
            onChange={handleChange}
            placeholder="Electronically sign the agreement(s)"
          />
          <Button
            onSubmit={() => {
              console.log(userData);
            }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default BussinessForm;
