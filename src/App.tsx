import React, { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import { Box } from "@material-ui/core";

const style = {
  width: "100%",
  ".inputContainer": {
    margin: "0 auto",
    width: "200px",
  },
  input: {
    borderRadius: "8px",
    height: "45px",
    width: "250px",
    fontSize: "20px",
    margin: "0 25px",
    boxSizing: "border-box",
  },
  button: {
    width: "250px",
    borderRadius: "8px",
    height: "45px",
    margin: "10px 25px",
    boxSizing: "border-box",
    ":hover": {
      cursor: "pointer",
    },
  },
  label: { margin: "0 5px", position: "relative", top: "35px", left: "-30px" },
  ".cards": {
    display: "flex",
    flexDirection: "row",
  },
};

interface User {
  name: string;
  age: number;
  hobby: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [hobby, setHobby] = useState<string>("");
  const handleClick = (name: string, age: number, hobby: string) => {
    const newPerson = { name, age, hobby };
    setUsers([...users, newPerson]);
    setName("");
    setAge(0);
    setHobby("");
  };
  return (
    <Box sx={style}>
      <Box className="inputContainer">
        <Input
          placeholder="Name"
          label="Name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        ></Input>
        <Input
          placeholder="Age"
          label="Age"
          type="number"
          value={age}
          onChange={(evt) => setAge(evt.target.valueAsNumber)}
        ></Input>
        <Input
          placeholder="Hobby"
          label="Hobby"
          value={hobby}
          onChange={(evt) => setHobby(evt.target.value)}
        ></Input>
        <button onClick={() => handleClick(name, age, hobby)}>Enviar</button>
      </Box>
      <Box className="cards">
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            hobby={user.hobby}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;
