import { CheckList } from './components/CheckList'
import { ProductionOrder } from './components/ProductionOrder'
import { MainContainer } from './styles'

export function Main() {
  return (
    <MainContainer>
      <ProductionOrder />
      <CheckList />
    </MainContainer>
  )
}
