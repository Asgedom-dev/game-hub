import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './component/GameGrid'
import GenereList from './component/GenereList'
import NavBar from './component/NavBar'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenereList/>
        </GridItem>
      </Show>

      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
