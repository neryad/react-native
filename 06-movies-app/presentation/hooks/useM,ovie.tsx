import { getMovieCastAction } from "@/core/actions/movie/get-mive-cast-by-id.action";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const castQuery = useQuery({
    queryKey: ["movie", , "cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return { movieQuery, castQuery };
};
