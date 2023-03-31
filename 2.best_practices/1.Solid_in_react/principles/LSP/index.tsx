import React, { useState } from "react";
import { SearchInput } from "./searchInput";

export function LSP() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    //------------------------------------------------------------------------------------
    // Liskov Substitution principle - If S is a subtype of T, 
    // then objects of type T in a program may be replaced with objects of type S 
    // without altering any of the desirable properties of that program
    // -----------------------------------------------------------------------------------

    // searchInput is a subtype of super-component input
    // so it should br able to accept the props of input
    <SearchInput value={value} onChange={handleChange} isLarge />
  );
}
