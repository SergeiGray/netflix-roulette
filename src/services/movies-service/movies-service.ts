import { IMovieCardData, IMovieFormAddingPropsValue } from '../../interfaces/interfaces';

export default class MoviesService {

  getSearchBy = (label: string, category: string, data: Array<IMovieCardData> | null): Array<IMovieCardData> | null => {
    if (data) {
      return data.filter((item: {[key: string]: any}) => {
        let movieData: string = this._getFormattedString(item[category]);
        const searchedSubstring: string = this._getFormattedString(label);
        return movieData.indexOf(searchedSubstring) > -1 ? true : false
      });
    }

    return data;
  };

  getSortBy =  (data: Array<IMovieCardData> | null, parameter: string): Array<IMovieCardData> | null => {
    if (data) {
      return [...data].sort((a: {[key: string]: any}, b: {[key: string]: any}) => {
          const firstParameter: number = a[parameter] ? this._getFormattedNumber(a, parameter) : 0;
          const secondParameter: number = b[parameter] ? this._getFormattedNumber(b, parameter) : 0;
          return secondParameter - firstParameter;
      });
    };

    return data;
  };

  saveInLocalStorage = (data: IMovieFormAddingPropsValue, key: string = 'data'): {status: boolean} => {
    const currentData: {[key: string]: any} = {...data};
    const oldData: Array<object> | null = localStorage[key] ? JSON.parse(localStorage[key]) : null;

    if ( !('id' in currentData) ) {
      currentData.id = Date.now();
    }

    const newData: Array<object> = oldData ? [...oldData, currentData] : [currentData];

    localStorage[key] = JSON.stringify(newData);

    return {status: true}
  };

  getFromLocalStorage = async (key: string = 'data'): Promise<Array<any>> => {
    const result: Array<any> = localStorage[key] ? JSON.parse(localStorage[key]) : [];

    return await result;
  };

  getSpecificMovieFromLocalStorage = async (id: string): Promise<any> => {
    const currentId: number = Number.parseInt(id)
    const data: Array<object> = await this.getFromLocalStorage().then(result => result);

    return await data.find( (item: {[key: string]: any}) => item.id === currentId);
  };

  private _getFormattedString(value: Array<string> | string): string {
    return value instanceof Array ?
      value.join(' ').toLowerCase().trim() :
      value.toLowerCase().trim();
  };

  private _getFormattedNumber = (data: {[key: string]: any}, sortingParameter: string): number => {
    return  typeof data[sortingParameter] === 'number' ?
      data[sortingParameter] :
      data[sortingParameter].match(/\d/g).join('');
  };
};