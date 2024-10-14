import axios from "axios";
import { useQuery } from "react-query";

export const useGetSuperDetails = (heroId: number) => {
  return useQuery(["superHeroDetails", heroId], async () => {
    const response = axios.get(`http://localhost:4000/superheroes/${heroId}`);
    return (await response).data;
  });
};
