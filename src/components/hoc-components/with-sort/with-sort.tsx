import React, {useState, useEffect} from 'react';

import MoviesService from '../../../services/movies-service';
import { IMovieCardData, IWithDataHOCProps } from '../../../interfaces/interfaces';

const {getSortBy} = new MoviesService();

const withSort = (Wrapped: React.ComponentType<any>) => {
  const Component: React.FC<IWithDataHOCProps> = (props) => {
    const [data, setData] = useState<Array<IMovieCardData> | null>(props.data);
    const [sortData, setSortData] = useState<Array<IMovieCardData> | null>(null);
    const [sortStatus, setSortStatus] = useState<string>(props.sortStatus);

    const doSort = (): void => {
      const sortData: Array<IMovieCardData> | null = getSortBy(data, sortStatus);

      setSortData(sortData);
    };

    useEffect(() => {doSort()}, [data, sortStatus]);

    useEffect(() => {setData(props.data)}, [props.data]);

    useEffect(() => {setSortStatus(props.sortStatus)}, [props.sortStatus]);

    return <Wrapped {...props} data={sortData}/>;
  };

  return Component;
};

export default withSort;