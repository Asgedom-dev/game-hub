import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './component/GameGrid'
import GenereList from './component/GenereList'
import NavBar from './component/NavBar'
import { Genre } from './hooks/useGenres'

function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre|null>(null)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base:'1rf',
        lg:'200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenereList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>
        </GridItem>
      </Show>

      <GridItem area='main'>
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
