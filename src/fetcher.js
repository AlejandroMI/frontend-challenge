import axios from "axios";

const keyAPI = "eae120b2b421dd7480174a3dbda3bb89";

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

//Get popular movies
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${keyAPI}`
    );
    console.log("Success in: " + getPopularMovies.name);
    return response.data;
  } catch (error) {
    console.log("Error in:" + getPopularMovies.name + "\n" + error);
  }
};

//Get movies by keyword
export const getMoviesByKeyword = async (keyword, year) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&query=${keyword}&year=${year}`
    );
    console.log("Success in: " + getMoviesByKeyword.name);
    return response.data;
  } catch (error) {
    console.log("Error in:" + getMoviesByKeyword.name + "\n" + error);
  }
};

//Get genres and ids:
export const getGenresList = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${keyAPI}`
    );
    console.log("Success in: " + getGenresList.name);
    return response.data.genres;
  } catch (error) {
    console.log("Error in:" + getGenresList.name + "\n" + error);
  }
};
