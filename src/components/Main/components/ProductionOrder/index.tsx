import { ReadBarcode } from '../../../ReadBarcode'
import { ProductionOrderContainer } from './styles'

export function ProductionOrder() {
  return (
    <ProductionOrderContainer>
      <h2>
        Order de produção / <strong>Production order</strong>
      </h2>
      <ReadBarcode />
    </ProductionOrderContainer>
  )
}
