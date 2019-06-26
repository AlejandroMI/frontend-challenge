import axios from "axios";

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

//Getting popular movies
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=eae120b2b421dd7480174a3dbda3bb89"
    );
    console.log("Success in: " + getPopularMovies.name);
    return response.data.results;
  } catch (error) {
    console.log("Error in:" + getPopularMovies.name + "\n" + error);
  }
};
