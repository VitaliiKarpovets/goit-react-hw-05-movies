import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const PosterThumb = styled.div`
  margin-right: 15px;
`;

export const Poster = styled.img`
  display: block;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Descr = styled.div`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const GenresList = styled.ul`
  display: flex;
  margin-top: 0;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const GenresListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
