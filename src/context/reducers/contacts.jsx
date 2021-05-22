import { ADD_CONTACT_CLEAR, ADD_CONTACT_ERROR, ADD_CONTACT_LOADING, ADD_CONTACT_SUCCESS, CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";
import contactsInitialState from "../intialStates/contactsInitialState";

const contacts = (state, action) => {
    switch (action.type) {
        case CONTACT_SUCCESS: {
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: false,
                    contactList: action.payload
                }
            }
        }
        case CONTACT_ERROR: {
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: action.payload,
                }
            }
        }
        case CONTACT_LOADING:
            return {
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true,
                    error: action.payload
                }
            }
        case LOGOUT_USER: {
            return {
                ...state,
                contactsInitialState
            }
        }

        case ADD_CONTACT_LOADING: {
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: true,
                    error: null,
                }
            }
        }
        case ADD_CONTACT_SUCCESS: {
            return {
                ...state,
                addContact: {
                    ...state.addcontact,
                    error: false,
                    loading: false,
                    data: action.payload

                },
                contacts: {
                    ...state.contacts,
                    loading: true,
                    contactList: [action.payload, ...state.contacts.contactList]
                }
            }
        }
        case ADD_CONTACT_ERROR: {
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    loading: false,
                }
            }
        }
        case ADD_CONTACT_CLEAR: {
            return {
                ...state,
                addContact: {
                    ...state.addContact,
                    error: null,
                    data: null
                }
            }
        }
        default:
            return state;
    }
}
export default contacts;