import React, { useContext, useEffect } from 'react'
import Header from "../../components/Header";
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider';
import ContactsListUI from '../../layout/Contacts/List';

const ContactsContainer = () => {
    const { contactsDispatch, contactsState } = useContext(GlobalContext);
    console.log("contactsState: ", contactsState)

    useEffect(() => {
        getContacts(contactsDispatch);
    }, []);
    return (
        <div>
            <Header />
            <ContactsListUI contactsInfo={contactsState} />
        </div>
    )
}

export default ContactsContainer
