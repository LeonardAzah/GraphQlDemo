import React from "react";
// import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginTop: 5,
    //   }}
    >
      {/* <FaExclamationTriangle size="5rem" /> */}
      <h1>404 Not Found</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}
