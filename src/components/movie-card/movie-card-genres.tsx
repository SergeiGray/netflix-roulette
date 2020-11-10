import React from 'react';
import styled from 'styled-components';

const StyledMovieCardGenres = styled.span`
  margin-right: 1.5rem;
`;

const MovieCardGenres: React.FC<{genres: string | Array<string>}>  = ({genres}): React.ReactElement | null  => {
  const labels = Array.isArray(genres) ? genres.join(' ') : genres;

  return (
    labels ?
    <StyledMovieCardGenres>
      {labels}
    </StyledMovieCardGenres> :
    null
  );
};

export default MovieCardGenres;