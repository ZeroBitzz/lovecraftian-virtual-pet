import React from "react"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <h1>LOVECRAFT VIRTUAL PET</h1>
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
            </form>
            <Link to="/login">
                <button>LOGIN</button>
            </Link>
            <Link to="/signup">
                <button>SIGN UP</button>
            </Link>
        </div>
    )
}

export default HomePage
