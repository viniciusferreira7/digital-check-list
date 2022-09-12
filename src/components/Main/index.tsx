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
import ProgressBar from '@ramonak/react-progress-bar'

export function Main() {
  const { currentCheckList, indexSlide, indexItem } =
    useContext(CheckListContext)

  return (
    <MainContainer>
      <h1>
        {currentCheckList?.name} {currentCheckList?.id}
        {currentCheckList ? (
          <ProgressBar
            completed={(indexSlide / 4) * 100}
            maxCompleted={100}
            bgColor={'#009EE0'}
            baseBgColor={'transparent'}
          />
        ) : null}
      </h1>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={indexSlide}
        swipeable={false}
      >
        <ProductionOrder />
        <OperatorID />
        <SerialNumbersGearboxesMotors />
        <Carousel
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          selectedItem={indexItem}
          swipeable={false}
        >
          {currentCheckList?.itens.map((item) => (
            <CheckList
              key={item.id}
              photo={item.photo}
              control={item.control}
            />
          ))}
        </Carousel>
        <Finish />
      </Carousel>
    </MainContainer>
  )
}
