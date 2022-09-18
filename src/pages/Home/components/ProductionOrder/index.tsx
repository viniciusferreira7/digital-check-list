import { ReadBarcode } from '../../../../components/ReadBarcode'
import { CardContainer } from '../../styles'

export function ProductionOrder() {
  return (
    <CardContainer>
      <h2>
        Order de produção / <strong>Production order</strong>
      </h2>
      <ReadBarcode />
    </CardContainer>
  )
}
