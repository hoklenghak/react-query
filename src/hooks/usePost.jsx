import { PostApi } from "./../Api/Competition.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newCompetition) => PostApi.post("competition", newCompetition),
    mutationKey: "new competition",
    onMutate: async (newData) => {
      await queryClient.cancelQueries(["competition"]);
      const prevData = queryClient.getQueryData(["competition"]);
      queryClient.setQueryData(["competition"], (prevData) => ({
        ...prevData,
        data: [...prevData.data, newData.data],
      }));

      return { prevData };
    },

    onError: (_error, _hero, context) => {
      queryClient.setQueryData(["competition"], context.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["competition"]);
    },

    // onSuccess: (newData) => {
    //   queryClient.setQueryData(["competition"], (prev) => ({
    //     ...prev,
    //     data: [...prev.data, newData.data],
    //   }));
    // },
  });
};
