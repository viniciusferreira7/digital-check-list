import { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CheckListContext } from '../../contexts/CheckListContext'
import { CheckList } from './components/CheckList'
import { Finish } from './components/Finish'
import { OperatorID } from './components/OperatorID'
import { ProductionOrder } from './components/ProductionOrder'
import { SerialNumbersGearboxesMotors } from './components/SerialNumbersGearboxesMotors'
import { MainContainer } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export function Main() {
  const { currentCheckList } = useContext(CheckListContext)
  return (
    <MainContainer>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={0}
        swipeable={false}
      >
        <ProductionOrder />
        <OperatorID />
        <SerialNumbersGearboxesMotors />
        <div>
          {currentCheckList ? (
            currentCheckList.itens.map((item) => (
              <CheckList
                key={item.id}
                photo={item.photo}
                control={item.control}
              />
            ))
          ) : (
            <p>Teste</p>
          )}
        </div>
        <Finish />
      </Carousel>
    </MainContainer>
  )
}
