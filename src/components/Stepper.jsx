import { Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div key={index} style={{ width: "80%" }}>
        <div>
          <div>
            {step.completed ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "12px",
                  paddingTop: "12px",
                  // borderRadius: "0 30px 30px 0",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
                class={`${step.selected}
            ? "col-6  bg-info text-white p-3"
            : ""`}
              >
                <Typography
                  sx={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "#BEC8E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {index + 1}
                </Typography>

                <Typography sx={{ color: "white" }}>
                  {step.description}
                </Typography>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "12px",
                  paddingTop: "12px",
                }}
              >
                <Typography
                  sx={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#BEC8E9",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  {index + 1}
                </Typography>{" "}
                <Typography sx={{ color: "#BEC8E9" }}>
                  {step.description}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        backgroundColor: "#EDEEFD",
      }}
    >
      {stepsDisplay}
    </div>
  );
}

export default Stepper;
