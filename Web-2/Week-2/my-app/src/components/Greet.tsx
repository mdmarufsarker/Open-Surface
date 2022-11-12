import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : `Hello Guest`}
      </h2>
    </div>
  );
};

export default Greet;
