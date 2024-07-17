import React, { Children, createContext, useContext } from 'react'

const myContext = createContext()

export const ContextProvider = ({ children }) => {

    const name = "Kamal deep"

    return (
        <myContext.Provider value={{ name }}>
            {children}
        </myContext.Provider>
    )
}

export const contextStore = () => useContext(myContext)


