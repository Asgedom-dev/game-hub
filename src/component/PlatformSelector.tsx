import { Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'
import SortSelector from './SortSelector';

interface Props{
  onSelectPlatform:(platform:Platform)=>void;
  selectedPlatform:Platform|null
}
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
  
  const { data, error } = usePlatforms();
  if (error) return null
  return (
    <Menu>
      <HStack spacing={5}  marginBottom={5}>
      
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              {selectedPlatform?.name||'Platforms'}
            </MenuButton>
            <SortSelector/>
      </HStack>
      
      
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
