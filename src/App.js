import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import SignUpPage from "./components/SignUpPage"
import Pet from "./components/Pet"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/pet" element={<Pet />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
