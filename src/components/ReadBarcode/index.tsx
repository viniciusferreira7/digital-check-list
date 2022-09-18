import { useState, useEffect } from 'react'
import { useDisclosure, Collapse } from '@chakra-ui/react'
import { Html5Qrcode } from 'html5-qrcode'

import {
  ButtonContainer,
  CameraContainer,
  ReadBarcodeContainer,
} from './styles'
import { Html5QrcodeError, Html5QrcodeResult } from 'html5-qrcode/esm/core'

export function ReadBarcode() {
  const { isOpen, onToggle } = useDisclosure()
  const [result, setReuslt] = useState('reader')
  const [buttonAction, setButtonAction] = useState('')
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
    const html5QrCode = new Html5Qrcode('reader')
    if (buttonAction === 'start') {
      html5QrCode.start(
        { facingMode: 'environment' },
        { fps: 60 },
        onScanSuccess,
        onScanFailure,
      )
    }
    if (result !== 'reader') {
      html5QrCode.clear()
      html5QrCode.stop()
    }
  }, [buttonAction, result])

  function handleStartCamera() {
    setButtonAction('start')
  }

  function handleStopCamera() {
    setButtonAction('stop')
  }

  return (
    <ReadBarcodeContainer>
      <ButtonContainer onClick={onToggle}>SCAN</ButtonContainer>
      <Collapse in={closeCollapse} animateOpacity>
        <CameraContainer id="reader" />
      </Collapse>
      {result}
      <button onClick={handleStartCamera}>Start</button>
      <button onClick={handleStopCamera}>Stop</button>
      <Collapse in={closeCollapse} animateOpacity></Collapse>
    </ReadBarcodeContainer>
  )
}
