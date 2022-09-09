import { ReadBarcode } from '../../../ReadBarcode'
import { SerialNumbersGearboxesMotorsContainer } from './styles'

export function SerialNumbersGearboxesMotors() {
  return (
    <SerialNumbersGearboxesMotorsContainer>
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
              Número de série dos motores / <strong>Motor serial number</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JB00016926</td>
            <td>1</td>
            <td>xxxxx</td>
            <td>xxxxx</td>
          </tr>
        </tbody>
      </table>
      <ReadBarcode />
    </SerialNumbersGearboxesMotorsContainer>
  )
}
