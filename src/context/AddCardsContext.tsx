import { createContext, ReactNode, useState } from 'react'

export interface dataProps {
  title: string
  description: string
  techs: {
    name: string
  }[]
}

interface AddCardsContextDataProps {
  handleAddCard: (data: dataProps) => void
  dataCard: Object
}

interface AddCardsContextProvidersProps {
  children: ReactNode
}

export const AddCardsContext = createContext({} as AddCardsContextDataProps)

export function AddCardsContextProvider({
  children,
}: AddCardsContextProvidersProps) {
  const [dataCard, setDataCard] = useState({})

  const handleAddCard = (data: dataProps) => {
    setDataCard(data)
  }

  return (
    <AddCardsContext.Provider
      value={{
        handleAddCard,
        dataCard,
      }}
    >
      {children}
    </AddCardsContext.Provider>
  )
}
