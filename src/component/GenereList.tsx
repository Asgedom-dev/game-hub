import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

interface Props{
  onSelectGenre: (genre:Genre)=>void;
  selectedGenre:Genre | null;
}
const GenereList = ({onSelectGenre,selectedGenre}:Props) => {
  // const {data}=useData<Genre>('/genres')
  const { data,isLoading,error } = useGenres()
  if(isLoading) return <Spinner/>
  if(error) return null
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id===selectedGenre?.id ? 'bold':''} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>
              {genre.name}
            </Button>
            {genre.name}
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenereList
