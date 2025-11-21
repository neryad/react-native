import MainSlideShow from "@/presentation/components/movies/mainSlideShow";
import MovieHorizontalList from "@/presentation/components/movies/movieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery } =
    useMovies();

  const safeArea = useSafeAreaInsets();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">MoviesApp </Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MovieHorizontalList
          className="mb-5"
          movies={popularQuery.data ?? []}
          title="Populares"
        />

        <MovieHorizontalList
          className="mb-5"
          movies={topRatedQuery.data?.pages?.flat() ?? []}
          title="Top Rating"
          loadNextPage={topRatedQuery.fetchNextPage}
        />

        <MovieHorizontalList
          className="mb-5"
          movies={upComingQuery.data ?? []}
          title="Próximamente"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
