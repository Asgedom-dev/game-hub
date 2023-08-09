import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './component/GameGrid'
import GenereList from './component/GenereList'
import NavBar from './component/NavBar'
import PlatformSelector from './component/PlatformSelector'
import SortSelector from './component/SortSelector'
import { Platform } from './hooks/useGames'
import { Genre } from './hooks/useGenres'

export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
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
        <HStack>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <SortSelector sortOrder={gameQuery.sortOrder}onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}/>
      </HStack>
        
        <GameGrid  gameQuery={gameQuery} /> 
      </GridItem>
    </Grid>
  )
}

export default App
