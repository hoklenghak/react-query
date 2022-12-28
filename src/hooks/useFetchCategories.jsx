import { useQueries } from "@tanstack/react-query";
import getCompetition from "./../Api/getCompetition";

export const useFetchCategories = () => {
  const array = [2, 1].map((element) => {
    return {
      queryKey: ["categories"],
      queryFn: () => getCompetition.get("categories"),
      refetchOnWindowFocus: false,
    };
  });

  return useQueries({
    queries: [...array],
  });
};
