import { ChangeEvent, FormEvent, useState, useEffect, useContext } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillCamera } from 'react-icons/ai'

import {
  ArticleContainer,
  CheckListContainer,
  InputContainer,
  SectionContainer,
} from './styles'
import { CheckListContext } from '../../../../contexts/CheckListContext'
import ProgressBar from '@ramonak/react-progress-bar'

interface CheckListProps {
  photo: string
  control: {
    pt_br: string
    eng: string
  }
}

export function CheckList({ photo, control }: CheckListProps) {
  const { currentCheckList, indexItem } = useContext(CheckListContext)
  const { nextSlideItem } = useContext(CheckListContext)
  const [checkedButton, setCheckedButton] = useState(false)
  const [checkedFile, setCheckedFile] = useState(false)
  const [nameFile, setNameFile] = useState('')

  function handleCheckedButtonClick(event: FormEvent<HTMLButtonElement>) {
    event?.preventDefault()
    setCheckedButton((checkedButton) => !checkedButton)
  }

  function handleFileName(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setCheckedFile((checkedFile) => !checkedFile)
      setNameFile(event.target.files[0].name)
    }
  }

  useEffect(() => {
    if (checkedButton) {
      nextSlideItem()
    }

    return () => {
      setCheckedButton(false)
    }
  }, [checkedButton, nextSlideItem])

  return (
    <CheckListContainer>
      <header>
        <img src={photo} alt="image de redutor" />
      </header>
      <main>
        <SectionContainer>
          <h4>
            {currentCheckList ? (
              <ProgressBar
                completed={indexItem}
                maxCompleted={currentCheckList.quantityItems}
                bgColor={'#00345C'}
                baseBgColor={'transparent'}
              />
            ) : null}
            Controle/ <strong>Control</strong>
          </h4>
          <div>
            <p>
              {control.pt_br} / <strong>{control.eng}</strong>
            </p>
          </div>
        </SectionContainer>
        <ArticleContainer>
          <SectionContainer>
            <h4>
              Frequência/ <strong>Frequency</strong>
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
          <InputContainer
            checkedButton={checkedButton}
            checkedFile={checkedFile}
          >
            <button onClick={handleCheckedButtonClick}>
              {checkedButton ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}{' '}
              OK
            </button>
            <div>
              <label htmlFor="image">
                <AiFillCamera size={22} />
              </label>
              <input
                type="file"
                id="image"
                accept=".png,.jpeg,.jpg"
                capture="user"
                onChange={handleFileName}
              />
              {nameFile ? <span>{nameFile}</span> : null}
            </div>
          </InputContainer>
        </SectionContainer>
      </main>
    </CheckListContainer>
  )
}
