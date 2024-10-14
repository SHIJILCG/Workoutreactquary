import React from "react";
import { useDataFetching } from "../api/useDataFetching";
import { ObjectType } from "./RQSuperHerosPage";

export const SuperHeroPage = () => {
  const onSuccess = (data: ObjectType[]) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = () => {
    console.log("Perform side effect after ecountering error");
  };
  const {
    data: item,
    isFetching,
    refetch,
  } = useDataFetching(onSuccess, onError);
  console.log(isFetching);
  return (
    <>
      <h2>Traditional Super Heroes</h2>
      <button onClick={() => refetch()}>CLik me for a Refetch</button>
      <div>
        {item?.map((item: ObjectType) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};
