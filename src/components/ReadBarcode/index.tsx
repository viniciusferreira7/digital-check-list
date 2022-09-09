import { useDisclosure, Collapse } from '@chakra-ui/react'

import {
  ButtonContainer,
  CameraContainer,
  ReadBarcodeContainer,
} from './styles'

export function ReadBarcode() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <ReadBarcodeContainer>
      <ButtonContainer onClick={onToggle}>SCAN</ButtonContainer>
      <Collapse in={isOpen} animateOpacity>
        <CameraContainer></CameraContainer>
      </Collapse>

      <Collapse in={isOpen} animateOpacity>
        <p>Valor</p>
      </Collapse>
    </ReadBarcodeContainer>
  )
}
