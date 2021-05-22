import { ADD_CONTACT_CLEAR } from "../../../constants/actionTypes"

const clearContactData = () => (dispatch) => {
    dispatch({
        type: ADD_CONTACT_CLEAR
    })
}

export default clearContactData;