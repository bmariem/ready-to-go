import React from "react";

const Message = ({ switch1, switch2, switch3 }) => {
  return (
    <div className="message">
      {switch1 && switch2 && switch3 ? (
        <p className="go"> GO !</p>
      ) : (
        <p className="no-way"> NO WAY !</p>
      )}
    </div>
  );
};

export default Message;
