import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './component/GameGrid'
import GenereList from './component/GenereList'
import NavBar from './component/NavBar'
import PlatformSelector from './component/PlatformSelector'
import { Platform } from './hooks/useGames'
import { Genre } from './hooks/useGenres'

export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null
}
function App() {
  const [gameQuery,setGameQuery]=useState<GameQuery>({} as GameQuery)
  
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1rf',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenereList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
          />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <GameGrid  gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
