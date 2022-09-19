import { useState, useEffect } from 'react'
import { useDisclosure, Collapse } from '@chakra-ui/react'
import { Html5QrcodeScanner } from 'html5-qrcode'

import { ButtonContainer, ReadBarcodeContainer } from './styles'
import { Html5QrcodeError, Html5QrcodeResult } from 'html5-qrcode/esm/core'

export function ReadBarcode() {
  const { isOpen, onToggle } = useDisclosure()
  const [result, setReuslt] = useState('reader')
  const [closeCollapse, setCloseCollapse] = useState(isOpen)

  function onScanSuccess(
    decodedText: string,
    decodedResult: Html5QrcodeResult,
  ) {
    setReuslt(decodedText)

    console.log(`Code matched = ${decodedText}`, decodedResult)
  }

  function onScanFailure(errorMessage: string, error: Html5QrcodeError) {
    console.warn(`Code scan error = ${error}`)
  }

  useEffect(() => {
    if (isOpen) setCloseCollapse(true)
    if (!isOpen) setCloseCollapse(false)

    return () => {
      setCloseCollapse(false)
    }
  }, [closeCollapse, setCloseCollapse, isOpen])

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        supportedScanTypes: [0],
        formatsToSupport: [3, 4, 5],
      },
      true,
    )
    html5QrcodeScanner.render(onScanSuccess, onScanFailure)
  }, [])

  function handleStartCamera() {}

  function handleStopCamera() {}

  return (
    <ReadBarcodeContainer>
      <ButtonContainer onClick={onToggle}>SCAN</ButtonContainer>
      <Collapse in={closeCollapse} animateOpacity>
        <div id="reader" />
      </Collapse>
      {result}
      <button onClick={handleStartCamera}>Start</button>
      <button onClick={handleStopCamera}>Stop</button>
      <Collapse in={closeCollapse} animateOpacity></Collapse>
    </ReadBarcodeContainer>
  )
}
