import React, {useState, useEffect} from "react" 

const Context = React.createContext()

function ContextProvider({children}) {
    console.log("ContextProvider")
   
    

    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}