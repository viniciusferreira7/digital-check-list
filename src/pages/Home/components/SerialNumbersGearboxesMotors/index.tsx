import { useContext } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { CheckListContext } from '../../../../contexts/CheckListContext'
import { ReadBarcode } from '../../../../components/ReadBarcode'
import { CheckList } from '../CheckItems'
import { SerialNumbersGearboxesMotorsContainer } from './styles'

export function SerialNumbersGearboxesMotors() {
  const { currentCheckList, indexItem } = useContext(CheckListContext)

  return (
    <SerialNumbersGearboxesMotorsContainer>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        selectedItem={0}
        swipeable={false}
      >
        {currentCheckList?.boxes.map((boxes) => (
          <table key={boxes}>
            <thead>
              <tr>
                <th>
                  Códigos / <strong>Codes</strong>
                </th>
                <th>
                  CX / <strong>BOX</strong>
                </th>
                <th>
                  Números de série dos redutores /
                  <strong>Gearbox serial number</strong>
                </th>
                <th>
                  Número de série dos motores /{' '}
                  <strong>Motor serial number</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{currentCheckList ? currentCheckList?.id : 'empty'}</td>
                <td>{boxes}</td>
                <td>
                  {currentCheckList?.QuantityPerBox.map((item) => (
                    <p key={item}>xxxxx</p>
                  ))}
                </td>
                <td>
                  {currentCheckList?.QuantityPerBox.map((item) => (
                    <p key={item}>xxxxx</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      </Carousel>
      <ReadBarcode />
    </SerialNumbersGearboxesMotorsContainer>
  )
}
