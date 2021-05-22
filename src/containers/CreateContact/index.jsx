import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import createContact from '../../context/actions/contacts/CreateContact';
import clearContactData from '../../context/actions/contacts/CreateContact';
import { GlobalContext } from '../../context/Provider';
import CreateContactUI from "../../layout/Contacts/Create";


const CreateContactContainer = () => {

    const history = useHistory();
    const { contactsState: {
        addContact: {
            loading,
            error,
            data
        }
    }, contactsDispatch: dispatch } = useContext(GlobalContext);


    const [form, setForm] = useState({});
    const onChange = (e, { name, value }) => {
        setForm(
            {
                ...form,

                [name]: value
            }
        );
    };
    console.log("FirstName: ", form)

    useEffect(() => {
        if (data) {
            history.push("/");
        };
        return () => {
            clearContactData()(dispatch);
        };
    }, [data]);



    const onSubmit = () => {
        createContact(form)(dispatch);
    };

    const formValid =
        !form.firstName?.length ||
        !form.lastName?.lenght ||
        !form.countryCode?.length ||
        !form.phoneNumber?.length;

    const formHalfFilled = Object.values(form).filter(item => item && item !== "")?.length > 0 && !data;

    return (
        <CreateContactUI
            formValid={formValid}
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            loading={loading}
            error={error}
            formHalfFilled={formHalfFilled}
        />
    );
};

export default CreateContactContainer;
