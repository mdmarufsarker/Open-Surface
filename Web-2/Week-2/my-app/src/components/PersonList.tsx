import React from "react";

type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h1>Person List</h1>
      <div>
        {props.names.map((name, index) => {
          return (
            <li key={index}>
              {name.firstName}
              {name.lastName}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PersonList;
