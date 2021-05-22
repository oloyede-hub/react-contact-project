import { ADD_CONTACT_ERROR, ADD_CONTACT_LOADING, ADD_CONTACT_SUCCESS } from "../../../constants/actionTypes";
import { CONNECTION_ERROR } from "../../../constants/api";
import axiosInstance from "../../../helpers/axiosInstance"


const createContact = ({ firstName: first_name, lastName: last_name, PhoneNumber: phone_number, countryCode: country_code, isFavourite: is_favorite }) => (dispatch) => {

    dispatch({
        type: ADD_CONTACT_LOADING,
    })
    axiosInstance().post("/contacts/", {
        country_code,
        first_name,
        last_name,
        phone_number,
        is_favorite
    }).then((res) => {
        console.log("Responds:", res)
        dispatch({
            type: ADD_CONTACT_SUCCESS,
            payload: res.data
        })
    })
        .catch((err) => {
            console.log("Erro :", err)
            dispatch({
                type: ADD_CONTACT_ERROR,
                payload: err.response ? err.response.data : CONNECTION_ERROR
            });
        });
}

export default createContact;