import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Virtual Pet Website</h1>
      <Link to="/signup">
        <button>Adopt Me</button>
      </Link>
      <h1>Already have a pet?</h1>
      <Link to="/login">
        <button>Click Me</button>
      </Link>
    </div>
  );
}

export default HomePage;
