import React, {useState} from 'react';
import { MoviePosterPropsType } from '../../types/types';

import './movie-poster.scss';


const MoviePoster: React.FC<MoviePosterPropsType> = ({src, className, clickHandler}): React.ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className={`poster ${className}`}>
      {loaded ? null :
        <div
          className='poster__placeholder'
          onClick={clickHandler}
        />
      }
      <img
        className='poster__image'
        style={loaded ? {} : {display: 'none'}}
        src={src}
        alt={''}
        onLoad={() => setLoaded(true)}
        onClick={clickHandler}
      />
    </div>
  );
}

export default MoviePoster;