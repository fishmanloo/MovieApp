import axios from "axios";

const base = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=ef84810bce7de06c309380c0f94717b3";

const getMovieDetails = async () => {
  const response = await axios.get(
    `${base}/movie/popular${API_KEY}&include_adult=false`
  );
  return response.data.results;
};

const getTvShowDetails = async () => {
  const response = await axios.get(
    `${base}/tv/popular${API_KEY}&include_adult=false`
  );
  return response.data.results;
};

const getPersonDetails = async () => {
  const response = await axios.get(
    `${base}/person/popular${API_KEY}&include_adult=false`
  );
  return response.data.results;
};

export { getMovieDetails, getTvShowDetails, getPersonDetails };
