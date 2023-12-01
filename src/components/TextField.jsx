import React from "react";

function TextField({ type, value, onChange, id, label, placeholder }) {
  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <div className="form-label">{label}</div>
      <input
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default TextField;
