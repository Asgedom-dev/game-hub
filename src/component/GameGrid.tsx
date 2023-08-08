import { propNames, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
const GameGrid = () => {
    const {games,error,isLoading} = useGames()
    const skeletons = [1,2,3,4,5,6]
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid  spacing={10} columns={{sm:1,md:2,lg:4,xl:5}}>
      {isLoading && skeletons.map((skeleton)=><GameCardSkeleton key={skeleton}/>)}
        {games.map((game)=><GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid