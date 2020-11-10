 import React, {useState, useEffect} from 'react';

import MoviesService from '../../../services/movies-service';
 import { IMovieCardData, IWithDataHOCProps } from '../../../interfaces/interfaces';

const {getSearchBy} = new MoviesService();

const withSearch = (Wrapped: React.ComponentType<any>) => {
  const Component: React.FC<IWithDataHOCProps> = (props) => {
    const [data, setData] = useState<Array<IMovieCardData> | null>(props.data);
    const [searchResultForMoviesData, setSearchResultForMoviesData] = useState<Array<IMovieCardData> | null>(props.data);

    const doSearch = (): void => {
      const {data, searchStatus, searchValue} = props;
      const searchResultForMoviesData: Array<IMovieCardData> | null = getSearchBy(searchValue, searchStatus, data);

      setSearchResultForMoviesData(searchResultForMoviesData);
    };

    useEffect(() => {doSearch()}, [props.searchValue]);

    useEffect(() => {
      if (data !== props.data) {
        setData(props.data);
        setSearchResultForMoviesData(props.data);
      }
    }, [props.data]);

    return <Wrapped {...props} data={searchResultForMoviesData}/>;
  };

  return Component;
};

export default withSearch;