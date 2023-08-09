import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGames, { Platform } from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

interface Props{
  gameQuery:GameQuery;
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={3} columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
