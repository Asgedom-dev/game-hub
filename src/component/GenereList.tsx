import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useData from '../hooks/useData'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'

const GenereList = () => {
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
            <Text fontSize='lg'>
              {genre.name}
            </Text>
            {genre.name}
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenereList
