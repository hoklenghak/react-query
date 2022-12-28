import { useParams } from "react-router-dom";
import { useFetchCategory } from "../hooks/useFetchCategory";

const Category = () => {
  const { category } = useParams();

  const { data, status } = useFetchCategory();

  console.log(data);

  return <div>{category}</div>;
};

export default Category;
