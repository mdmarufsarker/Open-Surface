import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click Here</button>
    </div>
  );
};

export default Button;
