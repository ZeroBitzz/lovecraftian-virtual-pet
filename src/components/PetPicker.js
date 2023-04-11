import React from "react"

function PetPicker() {
    return (
        <div className="pet-catalog-page">
            <h1 className="pet-catalog-title-h1">Pick a Pet</h1>
            <form className="pet-catalog">
                <button
                    onClick={(e) => {
                        localStorage.setItem("userPet", {
                            petType: 1,
                            evoPoints: 2,
                            hunger: 3,
                            happiness: 3,
                            sleep: 2,
                            health: 4,
                        })
                        console.log(`userPet updated to cthulhu`)
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
                    <span className="catalog-title-span">Azathoth</span>
                    <div>
                        <img
                            src="/pet-models/azathoth/azathoth-evo-1.svg"
                            alt="azathoth"
                            className="azathoth-catalog"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PetPicker
