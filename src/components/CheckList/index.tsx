import { FormEvent, useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

import {
  ArticleContainer,
  CheckListContainer,
  InputContainer,
  SectionContainer,
} from './styles'

export default function CheckList() {
  const [checked, setChecked] = useState(false)

  function handleCheckedButtonClick(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    setChecked((checked) => !checked)
  }

  return (
    <CheckListContainer>
      <header>
        <img src="https://source.unsplash.com/500x500" alt="image de redutor" />
      </header>
      <main>
        <SectionContainer>
          <h4>
            Controle/ <strong>Control</strong>
          </h4>
          <div>
            <p>
              Conferir a plaqueta de identificação. Check the nameplate Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ad similique
              iste magni accusamus ducimus consequuntur ab nemo asperiores
              tempore facilis nobis sit unde aut, delectus repellat quo eius
              reiciendis? Aut! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quos rerum explicabo blanditiis suscipit
              expedita eligendi! Eaque expedita nihil quia reiciendis mollitia
              quas accusantium consequuntur! Error inventore perspiciatis enim
              quasi veniam.
            </p>
          </div>
        </SectionContainer>
        <ArticleContainer>
          <SectionContainer>
            <h4>
              Visual/ <strong>Visual</strong>
            </h4>
            <strong>100%</strong>
          </SectionContainer>
          <SectionContainer>
            <h4>
              Método/ <strong>Method</strong>
            </h4>
            <p>
              Visual/ <strong>Visual</strong>
            </p>
          </SectionContainer>
        </ArticleContainer>
        <SectionContainer>
          <h4>
            Verificado/ <strong>Checked</strong>
          </h4>
          <InputContainer>
            <button onClick={handleCheckedButtonClick}>
              {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />} OK
            </button>
          </InputContainer>
        </SectionContainer>
      </main>
    </CheckListContainer>
  )
}
