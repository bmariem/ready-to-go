import React from "react";

const Switch = ({ switchOn, setSwitch }) => {
  return (
    <div className="switch">
      <button
        className={switchOn ? "clicked" : null}
        onClick={() => {
          setSwitch(true);
        }}
      >
        On
      </button>
      <button
        className={!switchOn ? "clicked" : null}
        onClick={() => {
          setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
