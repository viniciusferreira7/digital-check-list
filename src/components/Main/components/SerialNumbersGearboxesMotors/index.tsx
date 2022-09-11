import { useContext } from 'react'
import { CheckListContext } from '../../../../contexts/CheckListContext'
import { ReadBarcode } from '../../../ReadBarcode'
import { SerialNumbersGearboxesMotorsContainer } from './styles'

export function SerialNumbersGearboxesMotors() {
  const { currentCheckList } = useContext(CheckListContext)

  return (
    <SerialNumbersGearboxesMotorsContainer>
      {currentCheckList ? (
        <table>
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
            {currentCheckList.boxes.map((boxes) => (
              <tr key={boxes}>
                <td>{currentCheckList ? currentCheckList.id : 'empty'}</td>
                <td>{boxes}</td>
                <td>
                  {currentCheckList.QuantityPerBox.map((item) => (
                    <p key={item}>xxxxx</p>
                  ))}
                </td>
                <td>
                  {currentCheckList.QuantityPerBox.map((item) => (
                    <p key={item}>xxxxx</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      <ReadBarcode />
    </SerialNumbersGearboxesMotorsContainer>
  )
}
