import React, { useState } from "react";
import ProfileForm from "../components/ProfileForm";
import BussinessForm from "../components/BussinessForm";
import Stepper from "../components/Stepper";
import AddUserForm from "../components/AddUserForm";
import SteperControl from "../components/SteperControl";
import { StepperContext } from "../contexts/StepperContext";
import { Paper } from "@mui/material";

function LoginForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <ProfileForm />;
      case 2:
        return <BussinessForm />;
      case 3:
        return <AddUserForm />;
      default:
        return null;
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const steps = ["Your Profile", "Business Information", "Additional Users"];
  return (
    <div>
      <Paper
        elevation={5}
        sx={{
          width: "65%",
          margin: "0 auto",
          marginTop: "24px",
          borderRadius: "8px",
          paddingBottom: "3rem",
        }}
      >
        <div>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div style={{ paddingTop: "28px" }}>
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </Paper>

      {currentStep !== steps.length && (
        <SteperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default LoginForm;
