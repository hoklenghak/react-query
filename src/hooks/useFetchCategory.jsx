import { useQuery } from "@tanstack/react-query";
import getCompetition from "./../Api/getCompetition";

export const useFetchCategory = (name) => {
  return useQuery({
    queryKey: ["categories", name],
    queryFn: () => getCompetition.get(`categories/${name}`),
    refetchOnWindowFocus: false,
  });
};
