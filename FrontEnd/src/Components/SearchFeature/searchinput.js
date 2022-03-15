import React, { useEffect } from "react";
import { SearchContainer } from "./searchinput.style";

const SearchInput = ({ value, onChangeText }) => {
  useEffect(() => {
    const input = document.querySelector("input");
    input.addEventListener("input", onChangeText);

    return input.removeEventListener("input", onChangeText);
    // eslint-disable-next-line
  }, []);

  return (
    <SearchContainer>
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search user by name"
      />
    </SearchContainer>
  );
};

export default SearchInput;
