import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastucture/interfaces/movie.interface";
import { MovieDBMovieResponse } from "@/infrastucture/interfaces/moviedb-movie.interface";
import { MovieMapper } from "@/infrastucture/mappers/movie.mapper";

export const getMovieByIdAction = async (
  id: number
): Promise<CompleteMovie> => {
  try {
    const data = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    console.log("pelicula httpcargada");

    return MovieMapper.fromTheMovieDBToCompleteMovie(data.data);
  } catch (error) {
    console.log("Error fetching movie by ID:", error);
    throw error;
  }
};
