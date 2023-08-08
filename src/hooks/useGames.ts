import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
const useGames = () => {

    const [games,setGames] = useState<Game[]>([]);
    const [error,setError]=useState('')

    interface Game{
        id:number;
        name:string;
    }
    interface FetchGamesResponse{
        count:number;
        results:Game[]
    }

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