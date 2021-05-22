import React,{ useState, useContext, useEffect} from "react"
import { useHistory } from "react-router";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";


const useForm = () => {
    const [form, setForm] = useState({});
    const history = useHistory()
    const {authDispatch, authState:{
        auth: {
            loading,
            error, 
            data
        }
    } }  = useContext(GlobalContext)


useEffect(() => {
        if(data?.user) {
            history.push("/");
        }
    },[data])

    
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log("error",error)
    const loginFromValid =
    !form.username?.length || 
    !form.password?.length;

    const onSubmit = () => {
        login(form)(authDispatch);
    }
    return {
        form,
        onChange,
      loginFromValid,
        onSubmit,
        loading,
        error,
        data
    };
}

export default useForm;