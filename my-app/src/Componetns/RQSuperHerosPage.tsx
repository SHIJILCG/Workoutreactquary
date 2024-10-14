import axios from "axios";
import React, { useEffect, useState } from "react";
import { shallowEqualObjects } from "react-query/types/core/utils";
export type ObjectType = {
  id: number;
  name: string;
  alterEgo: string;
};
export const RQSuperHerosPage = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [data, setdata] = useState<ObjectType[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setdata(res.data);
        setisLoading(false);
        setisError(false);
      })
      .catch((error) => {
        console.log(error);
        setisError(true);
        setisLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Data is fetching</div>;
  }
  if (isError) {
    return <div>Error while fetching</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
