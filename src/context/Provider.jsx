import React,{ createContext, useReducer} from "react";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";
import authInitialState from "./intialStates/authInitialState"
import contactsInitialState from "./intialStates/contactsInitialState"


export const GlobalContext = createContext({});

export const GlobalProvider = ({ children}) => {
    const [ authState, authDispatch] = useReducer(auth, authInitialState)
    const [ contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState)

return(
    <GlobalContext.Provider value={
        {
            authState,
            authDispatch,
            contactsState,
            contactsDispatch
        }
    }>
        {children}
    </GlobalContext.Provider>
)

} 