import { ReadBarcode } from '../../../ReadBarcode'
import { OperatorIDContainer } from './styles'

export function OperatorID() {
  return (
    <OperatorIDContainer>
      <h2>
        ID do Operador / <strong>Operator ID</strong>
      </h2>
      <ReadBarcode />
    </OperatorIDContainer>
  )
}
