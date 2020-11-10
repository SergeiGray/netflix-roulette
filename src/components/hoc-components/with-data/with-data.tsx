import React, {useState, useEffect} from 'react';
import {IMovieCardData, IWithDataHOCProps} from '../../../interfaces/interfaces';
import {TResponseReturnedByAPI} from '../../../types/types';

const withData = (getData: () => TResponseReturnedByAPI, getProperty?: string) => (Wrapped: React.ComponentType<any>) => {
  const Component: React.FC<IWithDataHOCProps> = (props): React.ReactElement => {
    const [data, setData] = useState<Array<IMovieCardData> | IMovieCardData | null>(null);
    const [updateDataStatus, setUpdateDataStatus] = useState<number | null>(null);
    const [error, setError] = useState<boolean>(false);

    const checksData =
      (data: Array<IMovieCardData> | null, oldData: Array<IMovieCardData> | IMovieCardData | null): boolean => {
      const checkingForAbsence: boolean = Boolean(data);
      const checkingForEmptiness: boolean = data ? Boolean((Object.keys(data).length)) : false;
      const checkingForChanges: boolean = Boolean(oldData !== data);
      const verdict: boolean= checkingForAbsence && checkingForChanges && checkingForEmptiness;

      return verdict;
    };

    const getNewData = (): void => {
      getData()
        .then( (data) => {
          let property = getProperty ? data[getProperty] : data;

          setData(property);
        })
        .catch( () => {
          setError(true);
        });
    };

    const addNewData = (): void => {
      const checkingData = checksData(props.data, data);

      if (props.data && checkingData) {
        Array.isArray(data) ?
          setData([...data, ...props.data]) :
          setData(props.data)
      }
    };

    const updateData = (): void => {
      if (props.updateDataStatus && updateDataStatus !== props.updateDataStatus) {
        setData(null);
        setError(false);
        setUpdateDataStatus(props.updateDataStatus);
        getNewData();
      }
    };

    useEffect(() => {getNewData()}, []);

    useEffect(() => {addNewData()}, [props.data]);

    useEffect(() => {updateData()}, [props.updateDataStatus]);

    return <Wrapped {...props} data={data} error={error}/>;
  };

  return Component;
};

export default withData;