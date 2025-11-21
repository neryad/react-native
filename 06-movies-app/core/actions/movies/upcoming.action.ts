import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infrastucture/interfaces/moviesDB-response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

export const upComingAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/upcoming");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
