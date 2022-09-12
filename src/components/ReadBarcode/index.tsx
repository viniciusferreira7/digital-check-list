import { useContext } from 'react'
import { CheckListContext } from '../../contexts/CheckListContext'
import { useDisclosure, Collapse } from '@chakra-ui/react'

import {
  ButtonContainer,
  CameraContainer,
  ReadBarcodeContainer,
} from './styles'

export function ReadBarcode() {
  const { currentCheckList, handleFindCheckList } = useContext(CheckListContext)

  const { isOpen, onToggle } = useDisclosure()

  return (
    <ReadBarcodeContainer>
      <ButtonContainer onClick={onToggle}>SCAN</ButtonContainer>
      <Collapse in={isOpen} animateOpacity>
        <CameraContainer></CameraContainer>
      </Collapse>

      <Collapse in={isOpen} animateOpacity>
        <input type="text" onChange={handleFindCheckList} />
      </Collapse>
    </ReadBarcodeContainer>
  )
}
