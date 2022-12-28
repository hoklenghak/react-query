import { useQuery } from "@tanstack/react-query";
import { PostApi } from "./../Api/Competition.api";

export const useFetchCompetition = () => {
  return useQuery({
    queryKey: ["competition"],
    queryFn: () => PostApi.get("competition"),
  });
};
