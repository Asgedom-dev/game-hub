import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import {BsChevronDown} from 'react-icons/bs'

const SortSelector = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
    TEstss
        </MenuButton>
        <MenuList>
            <MenuItem>TEst</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelector