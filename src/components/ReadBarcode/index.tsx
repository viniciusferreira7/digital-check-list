import { useContext, useState, useEffect } from 'react'
import { CheckListContext } from '../../contexts/CheckListContext'
import { useDisclosure, Collapse } from '@chakra-ui/react'

import {
  ButtonContainer,
  CameraContainer,
  ReadBarcodeContainer,
} from './styles'

export function ReadBarcode() {
  const { handleFindCheckList } = useContext(CheckListContext)

  const { isOpen, onToggle } = useDisclosure()
  const [closeCollapse, setCloseCollapse] = useState(isOpen)

  useEffect(() => {
    if (isOpen) setCloseCollapse(true)
    if (!isOpen) setCloseCollapse(false)

    return () => {
      setCloseCollapse(false)
    }
  }, [closeCollapse, setCloseCollapse, isOpen])

  return (
    <ReadBarcodeContainer>
      <ButtonContainer onClick={onToggle}>SCAN</ButtonContainer>
      <Collapse in={closeCollapse} animateOpacity>
        <CameraContainer></CameraContainer>
      </Collapse>

      <Collapse in={closeCollapse} animateOpacity>
        <input type="text" onChange={handleFindCheckList} />
      </Collapse>
    </ReadBarcodeContainer>
  )
}
