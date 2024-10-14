import React from "react";
import { useDataFetching } from "../api/useDataFetching";
import { ObjectType } from "./RQSuperHerosPage";
import { Link } from "react-router-dom";
export const ShowSuperHeros = () => {
  const onSubmit = (data: ObjectType[]) => {
      console.log(data);
    },
    onError = () => {
      console.log("error is occured");
    };
  const {
    data: SuperHeros,
    isLoading,
  } = useDataFetching(onSubmit, onError);
  if(isLoading){
    return <div>Data is fetching</div>
  }
  return (
    <>
      {/* <button onClick={() => refetch()}>Clik Here</button> */}
      <div className="Container">
        {SuperHeros?.map((items) => (
          <span key={items.id} className="">
            <Link to={`/rq-super-heroes/${items.id}`}>{items.name}</Link>
          </span>
        ))}
      </div>
    </>
  );
};
