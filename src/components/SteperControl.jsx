import { Button } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SteperControl({ handleClick, currentStep, steps }) {
  return (
    <div
      style={{
        width: "65%",
        margin: "0 auto",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => handleClick()}
          startIcon={<ArrowBackIosNewIcon />}
          variant="text"
          href="/login"
        >
          Back to Login
        </Button>
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            className={`${
              currentStep == 1 ? "d-none" : "d-flex justify-content-flex-end"
            }`}
          >
            <Button
              onClick={() => handleClick()}
              startIcon={<ArrowBackIosNewIcon />}
              variant="outlined"
            >
              Previous Step
            </Button>
          </div>

          <Button
            onClick={() => handleClick("next")}
            endIcon={<ArrowForwardIosIcon />}
            variant="contained"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SteperControl;
