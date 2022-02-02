import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      {props.go ? (
        <p className="go"> GO !</p>
      ) : (
        <p className="no-way"> NO WAY !</p>
      )}
    </div>
  );
};

export default Message;
