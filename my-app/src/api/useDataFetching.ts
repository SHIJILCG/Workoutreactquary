import axios from "axios";
import { useQuery } from "react-query";
import { ObjectType } from "../Componetns/RQSuperHerosPage";
export const useDataFetching = (
  onSuccess: (data: ObjectType[]) => void,
  onError: () => void
) => {
  return useQuery(
    ["super-heroes"],
    async () => {
      const response = axios.get("http://localhost:4000/superheroes");
      return (await response).data;
    },
    {
      onError,
      onSuccess,
      //   cacheTime: 5000,
      //   staleTime: 30000,
      //  refetchOnMount:true
      // refetchOnWindowFocus:true
      // refetchInterval:false,
      // refetchIntervalInBackground:true
    //   enabled: false,
    }
  );
};
