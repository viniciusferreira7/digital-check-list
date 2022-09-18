import { useState, useEffect } from 'react'
import { useDisclosure, Collapse } from '@chakra-ui/react'
import { Html5QrcodeScanner } from 'html5-qrcode'

import {
  ButtonContainer,
  CameraContainer,
  ReadBarcodeContainer,
} from './styles'
import { Html5QrcodeError, Html5QrcodeResult } from 'html5-qrcode/esm/core'

export function ReadBarcode() {
  const { isOpen, onToggle } = useDisclosure()
  const [result, setReuslt] = useState('dd')
  const [closeCollapse, setCloseCollapse] = useState(isOpen)

  function onScanSuccess(
    decodedText: string,
    decodedResult: Html5QrcodeResult,
  ) {
    setReuslt(decodedText)
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult)
  }

  function onScanFailure(errorMessage: string, error: Html5QrcodeError) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`)
  }

  useEffect(() => {
    const html5BarcodeScanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 }, supportedScanTypes: [0] },
      false,
    )

    html5BarcodeScanner.render(onScanSuccess, onScanFailure)
  })

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
        <CameraContainer id="reader"></CameraContainer>
      </Collapse>
      {result}
      <Collapse in={closeCollapse} animateOpacity></Collapse>
    </ReadBarcodeContainer>
  )
}
