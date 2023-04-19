import axios from "axios";
import { Form } from "./form";

export function ConnectedForm() {
  
// -----------------------------------------------------------------------------------
//   D — Dependency Inversion
// - High-level modules should not depend on low-level modules. Both should depend on the abstraction.
// - Abstractions should not depend on details. Details should depend on abstractions.

// High-level Module(or Class): Class that executes an action with a tool.
// Low-level Module (or Class): The tool that is needed to execute the action
// Abstraction: Represents an interface that connects the two Classes.
// Details: How the tool works

// This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.
// -----------------------------------------------------------------------------------

// Making a component reusable by passing function as param , 
    // rather than defining the function inside that component


  const handleSubmit = async (email: string, password: string) => {
    await axios.post("https://localhost:3000/login", {
      email,
      password,
    });
  };
  return <Form onSubmit={handleSubmit} />;
}
