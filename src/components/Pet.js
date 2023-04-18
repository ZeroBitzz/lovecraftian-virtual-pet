import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import PetPicker from "./PetPicker"

// TODO add animation for leveling up
// TODO add animation for eating
// TODO add animation for sleeping
// TODO add animation for activity

// function that emulates a fetch to the backend that returns an empty object
function getPet(pet = null) {
    return pet
}

// conditional that checks if there is already a pet in local storage
if (!localStorage.getItem("userPet")) {
    localStorage.setItem("userPet", getPet())
}

// variable used for manipulating the users pet object
let newPetObj

// sets the interval for aging the pet
const time = setInterval(agePet, 1000)

// function that evolves the pet
async function levelCheck(pet) {
    if (pet.petType === 1) {
        if (pet.evoPoints > 10) {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/cthulhu/cthulhu-evo-3.svg`
            document.getElementById('pet-model').style.width = "53%"
            document.getElementById('pet-model').style.marginLeft = "30%"
        } else if (pet.evoPoints <= 10 && pet.evoPoints > 5) {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/cthulhu/cthulhu-evo-2.svg`
            document.getElementById('pet-model').style.width = "30%"
            document.getElementById('pet-model').style.marginLeft = "40%"
        } else {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/cthulhu/cthulhu-evo-1.svg`
            document.getElementById('pet-model').style.width = "10%"
            document.getElementById('pet-model').style.marginLeft = "50%"
        }
    } else if (pet.petType === 2) {
        if (pet.evoPoints > 10) {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/azathoth/azathoth-evo-3.svg`
            document.getElementById('pet-model').style.width = "53%"
            document.getElementById('pet-model').style.marginLeft = "30%"
        } else if (pet.evoPoints <= 10 && pet.evoPoints > 5) {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/azathoth/azathoth-evo-2.svg`
            document.getElementById('pet-model').style.width = "30%"
            document.getElementById('pet-model').style.marginLeft = "40%"
        } else {
            document.getElementById(
                "pet-model"
            ).src = `/pet-models/azathoth/azathoth-evo-1.svg`
            document.getElementById('pet-model').style.width = "10%"
            document.getElementById('pet-model').style.marginLeft = "50%"
        }
    }
}

// age pet function that decreases the statuses of the pet and adds evo points
function agePet() {
    if (localStorage.getItem("userPet").toString() !== "null") {
        console.log("decrementing pet")
        newPetObj = JSON.parse(localStorage.getItem("userPet"))
        if(document.getElementById("pet-model")){
            if(newPetObj.health === 0){
                // death
            }else {
                if(newPetObj.hunger === 0 && newPetObj.sleep === 0 && newPetObj.happiness === 0){
                    newPetObj.health--
                    document.getElementById(
                        "pet-health"
                    ).innerHTML = `HEALTH: ${newPetObj.health}%`
                }else {
                    if(newPetObj.health < 100){
                        newPetObj.health++
                        document.getElementById(
                            "pet-health"
                        ).innerHTML = `HEALTH: ${newPetObj.health}%`
                    }
                }
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
                    levelCheck(newPetObj)
                }
                localStorage.setItem("userPet", JSON.stringify(newPetObj))
        }
        }
    }
}

// function that increases pet happiness
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

// function that increases pet hunger
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

function displayAsleep() {
    document.getElementById("asleep-page").style.display = "flex"
}

// function that increases pet sleep
async function sleepPet() {
    const sleepsleep = await setInterval(displayAsleep, 3000)
    clearInterval(sleepsleep)
    document.getElementById("asleep-page").style.display = "none"
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


// main pet function
function Pet() {
    // loading screen for fetching to the backend
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>
            {/* if the data has not loaded, display the loading screen */}
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                // when the data loads it displays the chosen pet
                <div>
                    {/* this part sees if the user has a pet, if it does, display it, otherwise let user pick a pet with the PetPicker.js component */}
                    {localStorage.getItem("userPet").toString() === "null" ? (
                        <div>
                            <PetPicker />
                        </div>
                    ) : (
                        
                        <container className="pet-container">
                            <div id="asleep-page"></div>
                            <Link to="/">
                                {/* logout button that brings you back to the HomePage.js */}
                                <button
                                    className="logout-button"
                                    onClick={(e) => {
                                        localStorage.setItem("userPet", null)
                                    }}
                                >
                                    logout
                                </button>
                            </Link>
                            {/* background and pet model image that displays dynamically to whichever pet was chosen in PetPicker.js using a ternary */}
                            <img
                                src={
                                    JSON.parse(localStorage.getItem("userPet"))
                                        .petType === 1
                                        ? `/pet-models/cthulhu/cthulhu-evo-1.svg`
                                        : `/pet-models/azathoth/azathoth-evo-1.svg`
                                }
                                alt="virtual pet"
                                id="pet-model"
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
                            {/* pet statuses */}
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
                                <span
                                    className="pet-status-span health-span"
                                    id="pet-health"
                                >
                                    HEALTH:{" "}
                                    {
                                        JSON.parse(
                                            localStorage.getItem("userPet")
                                        ).health
                                    }
                                    %
                                </span>
                            </container>

                            {/* pet options for statuses(will animate next) */}
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
