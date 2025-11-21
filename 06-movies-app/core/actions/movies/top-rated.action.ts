import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infrastucture/interfaces/moviesDB-response";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/top_rated", {
      params: {
        page: page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
