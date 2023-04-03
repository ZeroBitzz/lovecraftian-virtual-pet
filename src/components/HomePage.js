import React from "react"
import { Link } from "react-router-dom"

// todo: make breakpoint to split horizontally for mobile

function HomePage() {
    return (

      <div>

          <container className="homepage-container" >

          {/* first half of page containing logo and title */}
            <container className="title-logo-container">
                <img src="/logo.svg" alt="tentacle logo"/>
                <container className="h1-container">
                    <h1>LOVECRAFT</h1>
                    <h1>VIRTUAL</h1>
                    <h1>PET</h1>
                </container>
            </container>

            <div className="page-separator"></div>

            {/* second half of page containing login and sign up form */}
            <container className="login-signup-container" >
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                </form>
                <Link to="/pet">
                    <button className="login-button">LOGIN</button>
                </Link>
              
              <span className="no-acc-span">No Account?</span>
              <Link to="/signup">
                  <button className="signup-button">SIGN UP</button>
              </Link>
            </container>

          </container>

        </div>
    )
}

export default HomePage
