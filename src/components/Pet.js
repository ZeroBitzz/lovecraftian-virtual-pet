import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import PetPicker from "./PetPicker"

// function that emulates a fetch to the backend that returns an empty object
function getPet(pet = null) {
    return pet
}

let userPetType
if (!localStorage.getItem("userPet")) {
    localStorage.setItem("userPet", getPet())
}
const t = setInterval(agePet, 3000)
let newPetObj
function agePet() {
    if (localStorage.getItem("userPet").toString() !== "null") {
        console.log("decrementing pet")
        newPetObj = JSON.parse(localStorage.getItem("userPet"))
        if (newPetObj.hunger > 0) {
            newPetObj.hunger--
            document.getElementById(
                "pet-hunger"
            ).innerHTML = `HUNGER: ${newPetObj.hunger}%`
        }
        if (newPetObj.happiness > 0) {
            newPetObj.happiness--
            document.getElementById(
                "pet-happiness"
            ).innerHTML = `HAPPINESS: ${newPetObj.happiness}%`
        }
        if (newPetObj.sleep > 0) {
            newPetObj.sleep--
            document.getElementById(
                "pet-sleep"
            ).innerHTML = `SLEEP: ${newPetObj.sleep}%`
        }
        if (
            newPetObj.sleep > 0 &&
            newPetObj.hunger > 0 &&
            newPetObj.happiness > 0
        ) {
            newPetObj.evoPoints++
            document.getElementById(
                "evo-points-span"
            ).innerHTML = `EVOLUTION POINTS: ${newPetObj.evoPoints}`
        }
        localStorage.setItem("userPet", JSON.stringify(newPetObj))
    }
}

function petActivity() {
    if (localStorage.getItem("userPet").toString() !== "null") {
        newPetObj = JSON.parse(localStorage.getItem("userPet"))
        console.log("Taking pet to destroy a city")
        if (newPetObj.happiness + 25 >= 100) {
            newPetObj.happiness = 100
        } else {
            newPetObj.happiness += 25
        }
        document.getElementById(
            "pet-happiness"
        ).innerHTML = `HAPPINESS: ${newPetObj.happiness}%`

        localStorage.setItem("userPet", JSON.stringify(newPetObj))
    }
}

function feedPet() {
    if (localStorage.getItem("userPet").toString() !== "null") {
        newPetObj = JSON.parse(localStorage.getItem("userPet"))
        console.log("feeding pet")
        if (newPetObj.hunger + 25 >= 100) {
            newPetObj.hunger = 100
        } else {
            newPetObj.hunger += 25
        }
        document.getElementById(
            "pet-hunger"
        ).innerHTML = `HUNGER: ${newPetObj.hunger}%`

        localStorage.setItem("userPet", JSON.stringify(newPetObj))
    }
}

function sleepPet() {
    if (localStorage.getItem("userPet").toString() !== "null") {
        newPetObj = JSON.parse(localStorage.getItem("userPet"))
        console.log("putting pet to sleep")
        if (newPetObj.sleep + 25 >= 100) {
            newPetObj.sleep = 100
        } else {
            newPetObj.sleep += 25
        }
        document.getElementById(
            "pet-sleep"
        ).innerHTML = `SLEEP: ${newPetObj.sleep}%`

        localStorage.setItem("userPet", JSON.stringify(newPetObj))
    }
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
                                    JSON.parse(localStorage.getItem("userPet"))
                                        .petType === 1
                                        ? `/pet-models/cthulhu/cthulhu-evo-3.svg`
                                        : `/pet-models/azathoth/azathoth-evo-3.svg`
                                }
                                alt="virtual pet"
                                className="pet-model"
                            />
                            <img
                                src={
                                    JSON.parse(localStorage.getItem("userPet"))
                                        .petType === 1
                                        ? `/pet-models/cthulhu/cthulhu-background.svg`
                                        : `/pet-models/azathoth/azathoth-background.svg`
                                }
                                alt="cthulhu background"
                                className="pet-background"
                            />
                            <container className="pet-statuses-container">
                                <span
                                    className="pet-status-span happiness-span"
                                    id="pet-happiness"
                                >
                                    HAPPINESS:{" "}
                                    {
                                        JSON.parse(
                                            localStorage.getItem("userPet")
                                        ).happiness
                                    }
                                    %
                                </span>
                                <span
                                    className="pet-status-span hunger-span"
                                    id="pet-hunger"
                                >
                                    HUNGER:{" "}
                                    {
                                        JSON.parse(
                                            localStorage.getItem("userPet")
                                        ).hunger
                                    }
                                    %
                                </span>
                                <span
                                    className="pet-status-span sleep-span"
                                    id="pet-sleep"
                                >
                                    SLEEP:{" "}
                                    {
                                        JSON.parse(
                                            localStorage.getItem("userPet")
                                        ).sleep
                                    }
                                    %
                                </span>
                            </container>
                            <container className="pet-options">
                                <button
                                    onClick={(e) => {
                                        petActivity()
                                    }}
                                >
                                    PET ACTIVITY
                                </button>
                                <button
                                    onClick={(e) => {
                                        feedPet()
                                    }}
                                >
                                    FEED PET
                                </button>
                                <button
                                    onClick={(e) => {
                                        sleepPet()
                                    }}
                                >
                                    PUT PET TO SLEEP
                                </button>
                            </container>
                            <span id="evo-points-span">
                                EVOLUTION POINTS:{" "}
                                {
                                    JSON.parse(localStorage.getItem("userPet"))
                                        .evoPoints
                                }
                            </span>
                        </container>
                    )}
                </div>
            )}
        </div>
    )
}

export default Pet
