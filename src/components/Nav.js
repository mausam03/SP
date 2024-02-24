import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')

    }

    return (
        <div className="nav">
            {/* <img alt="Logo" className="logo" src="../../public/logo.png"/>*/}
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /> 

            {auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">update Products</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link onClick={logout} to="/signup"> Log Out ({JSON.parse(auth).name})</Link></li>
                {/* <li></li>
            <li> {auth ? <Link onClick={logout} to="/signup"> Log Out</Link>: <Link to="/signup">sign Up</Link>}</li>
            <li><Link to="/login">Login</Link></li>
        */}


            </ul>
                :
                <ul className="nav-ul nav-right">
                    :
                    <li><Link to="/signup">sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }


        </div>

    )
}

export default Nav