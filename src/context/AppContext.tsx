import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { AppState } from '../interfaces'

interface AppContextType {
  state: AppState
  setState: Dispatch<SetStateAction<AppState>>
}

const initialAppState: AppState = {
  order: "",
    selected: {
      Name: "",
      Description: ""
    }
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppContextProviderProps {
  children: React.ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>(initialAppState)

  const contextValue: AppContextType = {
    state,
    setState,
  }

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}