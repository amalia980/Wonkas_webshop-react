import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {

    const {firstname, lastname} = useParams();

    const [loginUser, setLoginUSer] = useState({
        firstname: "",
        password: ""
    })

    const {setLoggedIn, setUser} = useContext(UserContext);

    const handleLoginUser = (e) => {
        e.preventDefault();
        setLoggedIn(true);
        firstname && lastname 
        ? setUser({
            ...loginUser,
            firstname, 
            lastname, 
            password: "",
        }) 
            : setUser({
                ...loginUser, 
                firstname: "Amy", 
                lastname: "Lizar", 
                password: ""})
    }

    const handleInput = (e) => {
        e.preventDefault();
        setLoginUSer({...loginUser, [e.target.name]: e.target.value});
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLoginUser}>
                <input name="username" placeholder="Username" onChange={handleInput} required />
                <input name="password" placeholder="Password" onChange={handleInput} required/>
                <button type="submit"><Link to="/">Login</Link></button>
            </form>
        </>
    )
}

export default Login;