import styled from "styled-components";

export const SearchForm = styled.form`
  padding: 5px;
`;

export const SearchInput = styled.input`
  padding: 10px 10px;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 10px;
  border-radius: 10px;
  color: inherit;
  font-weight: 700;

  &:hover,
  &:focus {
    cursor: pointer;
    color: blue;
    background-color: white;
  }
`;
