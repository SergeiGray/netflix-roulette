import React from 'react';
import styled from 'styled-components';

const StyledMovieCardReleaseDate = styled.span`
  box-sizing: border-box;
  padding: 0.2rem 0.8rem;
  text-align: center;
  border: 1px solid #555555;
  border-radius: 5px;
`;

const MovieCardReleaseDate: React.FC<{date: string}>  = ({date}): React.ReactElement | null  => {
  const label = date ? date.slice(0, 4) : null;

  return (
    label ?
    <StyledMovieCardReleaseDate>
      {label}
    </StyledMovieCardReleaseDate> :
    null
  );
};

export default MovieCardReleaseDate;