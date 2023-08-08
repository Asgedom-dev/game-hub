import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';


export interface Platform{
    id:number;
    name:string;
    slug:string;
}
interface FetchGamesResponse{
    count:number;
    results:Game[]
}
export interface Game{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];//array of object
    metacritic:number;
}


const useGames = () => {
    const [games,setGames] = useState<Game[]>([]);
    const [error,setError]=useState('')

    useEffect(()=>{
        const controller = new AbortController()
        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
            .then(res=>setGames(res.data.results))
            .catch((err)=>{
                if(err instanceof CanceledError) return
                setError(err.message)
            })
        },[])
  return {games,error}
}


export default useGames