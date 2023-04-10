import React from "react"

function PetPicker() {
    return (
        <div className="pet-catalog-page">
            <h1 className="pet-catalog-title-h1">Pick a Pet</h1>
            <container className="pet-catalog">
                <container className="pet-display-container">
                    <span className="catalog-title-span">Cthulhu</span>
                    <div>
                        <img
                            src="/pet-models/cthulhu/cthulhu-evo-1.svg"
                            alt="cthulhu"
                            className="cthulhu-catalog"
                        />
                    </div>
                </container>

                <container className="pet-display-container">
                    <span className="catalog-title-span">Azathoth</span>
                    <div>
                        <img
                            src="/pet-models/azathoth/azathoth-evo-1.svg"
                            alt="azathoth"
                            className="azathoth-catalog"
                        />
                    </div>
                </container>

                {/* <container className="pet-display-container">
                    <span>Hastur</span>
                    <div>
                        <img src="/pet-models/cthulhu/cthulhu-evo-1.svg" alt="cthulhu" className="catalog-pet"/>
                    </div>
                </container> */}
            </container>
        </div>
    )
}

export default PetPicker
