import { CameraContainer, ReadBarcodeContainer } from './styles'

export function ReadBarcode() {
  return (
    <ReadBarcodeContainer>
      <CameraContainer></CameraContainer>
      <p>Valor</p>
    </ReadBarcodeContainer>
  )
}
