import React from "react";

import "./Header.css";

function Header({title, description}) {
  return(
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}

export default Header