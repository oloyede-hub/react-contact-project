import React,{ useState, useContext, useEffect} from "react"
import { useHistory } from "react-router";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";


const useForm = () => {
    const [form, setForm] = useState({});
    const [fieldErrors , setFieldErrors] = useState({})
    const history = useHistory()
    const {authDispatch, authState:{
        auth: {
            loading,
            error,
            data
        }
    } }  = useContext(GlobalContext)


    useEffect(() => {
        if(error) {
            for (const item in error) {
                setFieldErrors({
                    ...fieldErrors,
                    [item]: error[item][0]
                })
            }
        }
    }, [error])

    useEffect(() => {
        if(data) {
            history.push("/auth/login");
        }
    },[data])

// console.log("error", error);
console.log("data", data);
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    // console.log("loading",loading)
    const registerFromValid =
    !form.username?.length || 
    !form.firstName?.length || 
    !form.lastName?.length || 
    !form.email?.length || 
    !form.password?.length;

    const onSubmit = () => {
        setFieldErrors({});
        register(form)(authDispatch);
    }
    return {
        form,
        onChange,
        registerFromValid,
        onSubmit,
        loading,
        fieldErrors,
        data
    };
}

export default useForm;