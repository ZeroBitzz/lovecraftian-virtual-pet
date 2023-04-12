import React from "react"

function userPet(petType){
    return {
        petType: petType,
        evoPoints: 2,
        hunger: 3,
        happiness: 3,
        sleep: 2,
        health: 4,
    }
}

function PetPicker() {
    return (
        <div className="pet-catalog-page">
            <h1 className="pet-catalog-title-h1">Pick a Pet</h1>
            <form className="pet-catalog">
                <button
                    onClick={(e) => {
                        localStorage.setItem("userPet", JSON.stringify(userPet(1)))
                    }}
                >
                    <div className="pet-display-container">
                        <span className="catalog-title-span">Cthulhu</span>
                        <div>
                            <img
                                src="/pet-models/cthulhu/cthulhu-evo-1.svg"
                                alt="cthulhu"
                                className="cthulhu-catalog"
                            />
                        </div>
                    </div>
                </button>

                <div className="pet-display-container">
                    <button
                        onClick={(e) => {
                            localStorage.setItem("userPet", JSON.stringify(userPet(2)))
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
                </div>
            </form>
        </div>
    )
}

export default PetPicker
