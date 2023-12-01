import React, { useEffect, useState, useRef } from "react";

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      if (count == stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
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
    const stepState = steps.map((step, index) => {
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlited: (index = 0 ? true : false),
          selected: (index = 0 ? true : false),
        }
      );
    });
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index != newStep.length - 1
            ? "d-flex w-full  align-items-center"
            : "d-flex align-items-center"
        }
      >
        <div class="d-flex flex-column align-items-center">
          <div style={{ display: "flex" }}></div>
          <div
            // className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 d-flex align-item-center justify-content-center py-3 ${
            //   step.selected
            //     ? "bg-green-600 text-white font-bold border border-green-600"
            //     : ""
            // }`}
            // class="rounded-circle transition duration-500 ease-in-out border border-secondary d-flex align-items-center justify-content-center py-3 px-4"
            // // style="width: 48px; height: 48px;"

            className={`rounded-10 border border-${
              step.selected ? "success" : "light"
            } d-flex align-items-center justify-content-center py-3 ${
              step.selected
                ? "bg-gradient-primary text-back-900 font-weight-bold"
                : ""
            }`}
          >
            {step.completed ? (
              <span class="text-white font-weight-bold h1">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`position-absolute top-0 text-center mt-16 w-32 text-uppercase ${
              step.highlighted ? "text-dark" : "text-secondary"
            }`}
          >
            {step.description}
          </div>
        </div>
        <div
          className={`flex-grow-1 border-top-2 transition border-${
            step.completed ? "success" : "light"
          }`}
        ></div>
      </div>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "4px",
      }}
    >
      {displaySteps}
    </div>
  );
}

export default Stepper;
