import {useQuery} from "@tanstack/react-query";
import { readuser } from "../api/createUser";


export const Getalltask= ()=>{
    const {data, isLoading}=useQuery ({
        queryKey :["task"],
        queryFn: readuser
    })

   return {data, isLoading}

}

