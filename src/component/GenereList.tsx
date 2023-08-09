import useData from "../hooks/useData"
import  useGenres, { Genre } from "../hooks/useGenres"

const GenereList = () => {
    // const {data}=useData<Genre>('/genres')
    const {data}= useGenres()
  return (
    <ul>
        {data.map((genre)=><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenereList