import { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CheckListContext } from '../../contexts/CheckListContext'
import { Finish } from './components/Finish'
import { OperatorID } from './components/OperatorID'
import { ProductionOrder } from './components/ProductionOrder'
import { SerialNumbersGearboxesMotors } from './components/SerialNumbersGearboxesMotors'
import { MainContainer } from './styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import ProgressBar from '@ramonak/react-progress-bar'

export function Main() {
  const { currentCheckList, indexSlide } = useContext(CheckListContext)

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
        selectedItem={0}
        swipeable={false}
      >
        {/* <ProductionOrder /> */}
        {/* <OperatorID /> */}
        <SerialNumbersGearboxesMotors />
        <Finish />
      </Carousel>
    </MainContainer>
  )
}
