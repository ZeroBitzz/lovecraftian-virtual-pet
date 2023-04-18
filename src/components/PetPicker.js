import React from "react"

// mock function for the backend call to get the users chosen pet with its stats
function userPet(petType) {
    return {
        petType: petType,
        evoPoints: 0,
        hunger: 10,
        happiness: 10,
        sleep: 10,
        health: 100
    }
}

// PetPicker.js component that logs the chosen pet to the local storage and when server is setup it will also log it to the backend
function PetPicker() {
    return (
        <div className="pet-catalog-page">
            <h1 className="pet-catalog-title-h1">Pick a Pet</h1>
            <form className="pet-catalog">
                <button
                    className="pet-display-button"
                    onClick={(e) => {
                        localStorage.setItem(
                            "userPet",
                            JSON.stringify(userPet(1))
                        )
                    }}
                >
                    <span className="catalog-title-span">Cthulhu</span>
                    <div>
                        <img
                            src="/pet-models/cthulhu/cthulhu-evo-1.svg"
                            alt="cthulhu"
                            className="cthulhu-catalog"
                        />
                    </div>
                </button>

                <button
                    className="pet-display-button"
                    onClick={(e) => {
                        localStorage.setItem(
                            "userPet",
                            JSON.stringify(userPet(2))
                        )
                    }}
                >
                    <span className="catalog-title-span">Azathoth</span>
                    <div>
                        <img
                            src="/pet-models/azathoth/azathoth-evo-1.svg"
                            alt="azathoth"
                            className="azathoth-catalog"
                        />
                    </div>
                </button>
            </form>
        </div>
    )
}

export default PetPicker
