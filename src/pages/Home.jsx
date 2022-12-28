import { useFetchCompetition } from "../hooks/useFetchCompetition";
import { usePost } from "../hooks/usePost";

const Home = () => {
  const { mutate, mutateAsync, isError, isLoading, error, isSuccess, data } =
    usePost();

  const { data: competitionData, isSuccess: fetchSucess } =
    useFetchCompetition();

  const handlePost = () => {
    mutate({
      activity: "Stop doing something and procrastinate",
      type: "recreational",
      participants: 1,
      price: 0.3,
      link: "https://en.wikipedia.org/wiki/Procrastination",
      key: "4522845",
      accessibility: 0.3,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    return <div>{error.message}</div>;
  }

  if (isSuccess) {
    console.log(data);
  }

  console.log(competitionData);

  return (
    <div className="flex flex-col gap-6 items-center align-middle">
      <div className="columns-3 gap-7">
        {fetchSucess &&
          competitionData.data.map((category, index) => {
            return (
              <div className="py-7" key={index}>
                {category?.activity}
              </div>
            );
          })}
      </div>
      <div>
        <button
          onClick={handlePost}
          className="py-3 px-6 rounded-lg bg-cyan-600"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Home;
