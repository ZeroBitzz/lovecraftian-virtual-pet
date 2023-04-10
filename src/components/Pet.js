import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function getPet() {
    return {
        petType: 2,
        evoPoints: 2,
        hunger: 3,
        happiness: 3,
        sleep: 2,
        health: 4,
    }
}

function Pet() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log(JSON.stringify(getPet())) //getPet
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
                    <container className="pet-container">
                        <Link to="/">
                            <button className="logout-button">logout</button>
                        </Link>
                        <img
                            src={
                                getPet().petType === 1
                                    ? `/pet-models/cthulhu/cthulhu-evo-3.svg`
                                    : `/pet-models/azathoth/azathoth-evo-3.svg`
                            }
                            alt="virtual pet"
                            className="pet-model"
                        />
                        <img
                            src={
                                getPet().petType === 1
                                    ? `/pet-models/cthulhu/cthulhu-background.svg`
                                    : `/pet-models/azathoth/azathoth-background.svg`
                            }
                            alt="cthulhu background"
                            className="pet-background"
                        />
                        <container className="pet-statuses-container">
                            <span className="pet-status-span health-span">
                                HEALTH: {getPet().health}
                            </span>
                            <span className="pet-status-span happiness-span">
                                HAPPINESS: {getPet().happiness}
                            </span>
                            <span className="pet-status-span hunger-span">
                                HUNGER: {getPet().hunger}
                            </span>
                            <span className="pet-status-span sleep-span">
                                SLEEP: {getPet().sleep}
                            </span>
                        </container>
                    </container>
                </div>
            )}
        </div>
    )
}

export default Pet