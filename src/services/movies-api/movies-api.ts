export default class MoviesApi {
  _apiBase = 'https://reactjs-cdp.herokuapp.com';

  getMoviesData = async (url: string): Promise<{[key: string]: any}> => {
    const response = await fetch(`${this._apiBase}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`)
    }

    return await response.json();
  };

  getMovies = (limit: number = 21): Promise<{[key: string]: any}> => {
    return this.getMoviesData(`/movies?limit=${limit}`);
  };

  getSpecificMovie = (id: string): Promise<{[key: string]: any}> => {
    return this.getMoviesData(`/movies/${id}`);
  };
};