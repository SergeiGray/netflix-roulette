import React from 'react';
import styled from 'styled-components';

const StyledMovieCardRating = styled.span`
  white-space: nowrap;
`;

const MovieCardRating: React.FC<{rating: number}>  = ({rating}): React.ReactElement | null  => {
  return (
    rating ?
    <StyledMovieCardRating>
      Rating: {rating}
    </StyledMovieCardRating> :
    null
  );
};

export default MovieCardRating;