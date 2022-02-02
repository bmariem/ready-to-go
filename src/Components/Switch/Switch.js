import React from "react";

const Switch = (props) => {
  return (
    <div className="switch">
      <button
        className={props.switchOn ? "clicked" : null}
        onClick={() => {
          props.setSwitch(true);
        }}
      >
        On
      </button>
      <button
        className={!props.switchOn ? "clicked" : null}
        onClick={() => {
          props.setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
