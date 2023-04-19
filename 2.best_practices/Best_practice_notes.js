  // -----------------------------------------------------------------------------------
  // S- Single responsibility - A class should have a single responsibility
  // -----------------------------------------------------------------------------------
  // Components purpose is to serve a single goal
  // this fetches product and returns products
  // this custom hooks uses useState() & useEffect hooks to fetch the data


  // -----------------------------------------------------------------------------------
  // O- Open Closed principle - open for extension but closed for modification
  // -----------------------------------------------------------------------------------
  // avoid adding logics in component to display different UI
  // you are passing icon rather than role
  // so no need to code change in child component


//------------------------------------------------------------------------------------
// L- Liskov Substitution principle - If S is a subtype of T, 
// then objects of type T in a program may be replaced with objects of type S 
// without altering any of the desirable properties of that program
// -----------------------------------------------------------------------------------
// your component should be able to accept all the props of root element
// searchInput is a subtype of super-component input
// so it should br able to accept the props of input



// -----------------------------------------------------------------------------------
// I — Interface Segregation - Clients should not be forced to depend on methods that they do not use
// -----------------------------------------------------------------------------------
// only pass required props in a component
// thumbnail doesn't need all products attributes but the image


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

// pass abstract fucntion to make the component reusable 
// Making a component reusable by passing function as param , 
// rather than defining the function inside that component