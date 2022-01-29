import styled from "styled-components";

export const Text = styled.p`
  font-weight: bold;
`;

export const ListItem = styled.li`
  font-weight: bold;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
