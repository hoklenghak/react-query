import { useQuery } from "react-query";
import getCompetition from "./../Api/getCompetition";

const Competition = () => {
  const { isLoading, isError, error, data } = useQuery("competition", () =>
    getCompetition.get("competition")
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>Competition</div>
      {data?.data.map((element, index) => (
        <div key={index}>{element.activity}</div>
      ))}
    </>
  );
};

export default Competition;
