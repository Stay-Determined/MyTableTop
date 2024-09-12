import React from "react";

const index = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ margin: "5px" }}>
      {text}
    </button>
  );
};

export default index;
