import React from "react";

type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  return <div>{props.children}</div>;
};

export default Heading;
