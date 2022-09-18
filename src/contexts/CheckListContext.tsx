import {
  ChangeEvent,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'

import { checkListData } from './checkListData'

interface item {
  id: number
  photo: string
  control: {
    pt_br: string
    eng: string
  }
}

interface CheckListData {
  id: string
  name: string
  boxes: number[]
  QuantityPerBox: number[]
  itens: item[]
  quantityItems: number
}
interface CheckListContextType {
  currentCheckList: CheckListData | undefined
  indexSlide: number
  indexCheckItem: number
  handleFindCheckList: (event: ChangeEvent<HTMLInputElement>) => void
  nextSlideItem: () => void
}

interface CheckListProviderProps {
  children: ReactNode
}

export const CheckListContext = createContext({} as CheckListContextType)

export function CheckListProvider({ children }: CheckListProviderProps) {
  const [indexSlide, setIndexSlide] = useState(0)
  const [indexCheckItem, setIndexCheckItem] = useState(0)
  const [currentCheckList, setCurrentCheckList] = useState<CheckListData>()

  function handleFindCheckList(event: ChangeEvent<HTMLInputElement>) {
    setCurrentCheckList(
      checkListData.find((checkList) => checkList.id === event.target.value),
    )
  }

  function nextSlideItem() {
    if (currentCheckList && indexCheckItem < currentCheckList.quantityItems) {
      setIndexCheckItem((state) => state + 1)
    } else if (
      currentCheckList &&
      indexCheckItem === currentCheckList.quantityItems
    ) {
      setIndexCheckItem(0)
      setIndexSlide((state) => state + 1)
    }
  }

  useEffect(() => {
    if (currentCheckList) {
      if (indexSlide < 5) {
        setIndexSlide((state) => state + 1)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCheckList, setIndexSlide])

  return (
    <CheckListContext.Provider
      value={{
        currentCheckList,
        indexSlide,
        indexCheckItem,
        handleFindCheckList,
        nextSlideItem,
      }}
    >
      {children}
    </CheckListContext.Provider>
  )
}
