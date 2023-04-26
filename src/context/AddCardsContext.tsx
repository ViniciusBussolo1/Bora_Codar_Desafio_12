import { createContext, ReactNode, useState } from 'react'

interface AddcardsContextDataProps {
  handleAddCard: (data: Object) => void
  dataCard: Object
}

interface AddCardsContextProvidersProps {
  children: ReactNode
}

export const AddCardsContext = createContext({} as AddcardsContextDataProps)

export function AddCardscontextPovider({
  children,
}: AddCardsContextProvidersProps) {
  const [dataCard, setDataCard] = useState({})

  function handleAddCard(data: Object) {
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
