import { ReadBarcode } from '../../../../components/ReadBarcode'
import { CardContainer } from '../../styles'

export function OperatorID() {
  return (
    <CardContainer>
      <h2>
        ID do Operador / <strong>Operator ID</strong>
      </h2>
      <ReadBarcode />
    </CardContainer>
  )
}
