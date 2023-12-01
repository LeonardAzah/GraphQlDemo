import React from "react";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function ButtonInput({ type, id, value, onChange, placeholder }) {
  return (
    <div
      className="mb-3"
      style={{
        display: "flex",
        flex: 1,
        gap: "20px",
      }}
    >
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
      <Button
        variant="contained"
        size="small"
        color="secondary"
        sx={{
          minWidth: "auto",
          fontSize: "24px",
        }}
      >
        {" "}
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

export default ButtonInput;
