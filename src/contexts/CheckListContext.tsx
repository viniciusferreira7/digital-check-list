import { ChangeEvent, createContext, ReactNode, useState } from 'react'

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
}
interface CheckListContextType {
  currentCheckList: CheckListData | undefined
  handleFindCheckList: (event: ChangeEvent<HTMLInputElement>) => void
}

interface CheckListProviderProps {
  children: ReactNode
}

export const CheckListContext = createContext({} as CheckListContextType)

export function CheckListProvider({ children }: CheckListProviderProps) {
  const [currentCheckList, setCurrentCheckList] = useState<CheckListData>()

  function handleFindCheckList(event: ChangeEvent<HTMLInputElement>) {
    setCurrentCheckList(
      checkListData.find((checkList) => checkList.id === event.target.value),
    )
  }

  return (
    <CheckListContext.Provider
      value={{ currentCheckList, handleFindCheckList }}
    >
      {children}
    </CheckListContext.Provider>
  )
}
