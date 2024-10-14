import React from "react";
import { useParams } from "react-router-dom";
import { useGetSuperDetails } from "../api/useSuperHeroData";

export const RQsuperPageHero = () => {
  const { userId } = useParams();
const value = userId && typeof +userId === "number" ?  useGetSuperDetails(+userId) : null
if(!value){
   return <div>No item found</div>
}
  return (
    <div>
      <span>{value.data.name}</span>
    </div>
  );
};
