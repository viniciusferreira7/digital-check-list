import { CheckList } from './components/CheckList'
import { OperatorID } from './components/OperatorID'
import { ProductionOrder } from './components/ProductionOrder'
import { SerialNumbersGearboxesMotors } from './components/SerialNumbersGearboxesMotors'
import { MainContainer } from './styles'

export function Main() {
  return (
    <MainContainer>
      <ProductionOrder />
      <OperatorID />
      <SerialNumbersGearboxesMotors />
      <CheckList />
    </MainContainer>
  )
}
