import axiosInstance from "../../../helpers/axiosInstance"
import { CONTACT_ERROR, CONTACT_LOADING, CONTACT_SUCCESS } from "../../../constants/actionTypes"
import { CONNECTION_ERROR } from "../../../constants/api"

const axiosContact = (dispatch) => {
    dispatch({
        type: CONTACT_LOADING,
    })
    axiosInstance()
        .get('contacts/')
        .then(res => dispatch({
            type: CONTACT_SUCCESS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: CONTACT_ERROR,
            payload: err.response ? err.response.message : CONNECTION_ERROR
        }))
}
export default axiosContact

