import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  text-align: center;
`;

export const ListItem = styled.li`
  font-weight: bold;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
