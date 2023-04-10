import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Pet() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    
    return (
        <div>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
              ) : (
                <div>
                    <container className="pet-container" >
                        <Link to="/">
                          <button>logout</button>
                      </Link>
                        <img src="/pet-models/cthulhu/cthulhu-evo-3.svg" alt="cthulhu" className="pet-model"/>
                        <img src="/pet-models/cthulhu/cthulhu-background.svg" alt="cthulhu background" className="pet-background"/>
                    </container>
                </div>
              )}
        </div>
    )
}

export default Pet