'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

export interface dataProps {
  id: string
  title: string
  description: string
  techs: {
    name: string
  }[]
}

interface AddCardsContextDataProps {
  handleAddCard: (data: dataProps) => void
  dataCard: Array<dataProps>
  setDataCard: Dispatch<SetStateAction<dataProps[]>>
}

interface AddCardsContextProvidersProps {
  children: ReactNode
}

export const AddCardsContext = createContext({} as AddCardsContextDataProps)

export function AddCardsContextProvider({
  children,
}: AddCardsContextProvidersProps) {
  const [dataCard, setDataCard] = useState<Array<dataProps>>([])

  const handleAddCard = (data: any) => {
    const idRandom = Math.floor(Math.random() * 10)
    data.id = idRandom.toString()

    setDataCard([...dataCard, data])

    console.log(idRandom)
  }

  return (
    <AddCardsContext.Provider
      value={{
        handleAddCard,
        dataCard,
        setDataCard,
      }}
    >
      {children}
    </AddCardsContext.Provider>
  )
}
