import React from "react"
import { Link } from "react-router-dom"

function SignUp() {
    return (
        <div className="signup-container">
            <Link to="/">
                <button>go back to login</button>
            </Link>
            <form
                onSubmit={(e) => {
                    alert("you have signed up")
                    e.preventDefault()
                }}
                className="signup-form"
            >
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="repeat password" />
                <button className="submit-signup-button">sign up</button>
            </form>
        </div>
    )
}

export default SignUp
