import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import PetPicker from "./PetPicker"

function getPet(pet = null) {
    return pet
}

let userPetType
if (!localStorage.getItem("userPet")) {
    localStorage.setItem("userPet", getPet())
}

function Pet() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log(userPetType + " localstorage pet type") //getPet
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    {/* this part sees if the user has a pet, if it does, display it, otherwise let user pick a pet */}
                    {localStorage.getItem("userPet").toString() === "null" ? (
                        <div>
                            {console.log(`no pet`)}
                            <PetPicker />
                        </div>
                    ) : (
                        <container className="pet-container">
                            {console.log(`loaded pet`)}
                            <Link to="/">
                                <button
                                    className="logout-button"
                                    onClick={(e) => {
                                        localStorage.setItem("userPet", null)
                                    }}
                                >
                                    logout
                                </button>
                            </Link>
                            <img
                                src={
                                    JSON.parse(localStorage.getItem("userPet")).petType ===
                                    1
                                        ? `/pet-models/cthulhu/cthulhu-evo-3.svg`
                                        : `/pet-models/azathoth/azathoth-evo-3.svg`
                                }
                                alt="virtual pet"
                                className="pet-model"
                            />
                            <img
                                src={
                                    JSON.parse(localStorage.getItem("userPet")).petType ===
                                    1
                                        ? `/pet-models/cthulhu/cthulhu-background.svg`
                                        : `/pet-models/azathoth/azathoth-background.svg`
                                }
                                alt="cthulhu background"
                                className="pet-background"
                            />
                            <container className="pet-statuses-container">
                                <span className="pet-status-span health-span">
                                    HEALTH:{" "}
                                    {JSON.parse(localStorage.getItem("userPet")).health}
                                </span>
                                <span className="pet-status-span happiness-span">
                                    HAPPINESS:{" "}
                                    {JSON.parse(localStorage.getItem("userPet")).happiness}
                                </span>
                                <span className="pet-status-span hunger-span">
                                    HUNGER:{" "}
                                    {JSON.parse(localStorage.getItem("userPet")).hunger}
                                </span>
                                <span className="pet-status-span sleep-span">
                                    SLEEP:{" "}
                                    {JSON.parse(localStorage.getItem("userPet")).sleep}
                                </span>
                            </container>
                        </container>
                    )}
                </div>
            )}
        </div>
    )
}

export default Pet
