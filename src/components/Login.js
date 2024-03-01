import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate("/")
        }
    }, [])
    const handleLogin = async () => {
        console.log("Email,password", email, password)
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),

            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log("result is", result)
        result = await result.json();
     console.log(result);
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("taken", JSON.stringify(result.auth));
            navigate("/")


        } else {
            alert("Please Enter Correct details")
        }
    }

    return (
        <div className="login">
            <label className="unique" >Uniqu Engineering Center</label>
            <input className="inputBox" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className="inputBox" type="password" placeholder=" Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleLogin} className="appButton" type="button">Log In</button>


        </div>

    )


}

export default Login;
