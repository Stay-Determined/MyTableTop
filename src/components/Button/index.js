import React from "react";

import style from "./index.module.css";

const Index = (props) => {
  return (
    <div className={style.button}>
      <button type={props.type} className={props.classes}>
        {props.children}
      </button>
    </div>
  );
};

export default Index;
