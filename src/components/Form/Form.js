import { useState } from "react";
import { SearchButton, SearchForm, SearchInput } from "./Form.styled";

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "")
      return alert("There is nothing to render. Please, input something");

    onSubmit(query);
    setQuery("");
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="search"
        value={query}
        placeholder="Enter a movie name"
        onChange={handleInput}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}
