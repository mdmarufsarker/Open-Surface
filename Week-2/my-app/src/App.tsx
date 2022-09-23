import React from "react";
import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    firstName: "Maruf",
    lastName: "Sarker",
  };

  const nameList = [
    {
      firstName: "Maruf",
      lastName: "Sarker",
    },
    {
      firstName: "Rasel",
      lastName: "Hossain",
    },
    {
      firstName: "Sakib",
      lastName: "Ahmed",
    },
  ];

  return (
    <div className="App">
      <Greet name={"Maruf"} messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Coding is life :D</Heading>
      </Oscar>
      <Greet name="Asif" messageCount={10} />
      <Button handleClick={(event) => console.log("Button clicked", event)} />
    </div>
  );
}

export default App;
