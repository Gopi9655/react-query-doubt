import {useQuery} from "@tanstack/react-query";
import { Axios } from "axios"; 


export const Home = () => {
    const { data } = useQuery(["catfact"],() => {
       return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })
    return( 
    

    <h1>
        {""}
         this is the homepage<p>{data.fact}</p>
    </h1>

)}