import { useFetchCategories } from "../hooks/useFetchCategories";
import { Link, Outlet, useParams } from "react-router-dom";

const Competition = () => {
  const param = useParams();
  const [{ data: page0 }, { data: page1 }] = useFetchCategories({
    loop: [1, 2],
  });

  const dataSet = [page0, page1];

  return (
    <>
      {Object.keys(param).length === 0 && param.constructor === Object ? (
        <div>
          <div className="columns-3 gap-6">
            {dataSet.map((page) => {
              return page?.data.categories.map((element) => (
                <div key={element} className={"p-2"}>
                  <Link to={`/competition/${element}`}>{element}</Link>
                </div>
              ));
            })}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Competition;
