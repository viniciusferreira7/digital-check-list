import { createContext, ReactNode } from 'react'

import { data } from './data'

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
  box: number
  QuantityPerBox: number
  itens: item[]
}

interface CheckListProviderProps {
  children: ReactNode
}

const CheckList = createContext({} as CheckListData[])

export function CheckListProvider({ children }: CheckListProviderProps) {
  return <CheckList.Provider value={data}>{children}</CheckList.Provider>
}
