import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function saveToDatabase() {
    localStorage.setItem("username",document.getElementById("username"))
    localStorage.setItem("email",document.getElementById("email"))
    localStorage.setItem("password",document.getElementById("password"))

    document.getElementById("username").innerHTML = ''
    document.getElementById("password").innerHTML = ''
    document.getElementById("email").innerHTML = ''
}

function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="signup-container">
            <Link to="/">
                <button>go back to login</button>
            </Link>
            <form
                onSubmit={(e) => {
                    navigate("/")
                    e.preventDefault()
                }}
                className="signup-form"
            >
                <input type="text" placeholder="username" id="username"/>
                <input type="email" placeholder="email" id="email"/>
                <input type="password" placeholder="password" id="password"/>
                <input type="password" placeholder="repeat password" />
                <button className="submit-signup-button">sign up</button>
            </form>
        </div>
    )
}

export default SignUp
