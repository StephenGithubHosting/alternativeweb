import React from 'react'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="upperHeader">
            <h2>Index of:</h2>
        </div>
        <div className="lowerHeader">
            <h1>{window.location.href.split("http://")}</h1>
            </div>
      </div>
    </>
  )
}

export default Navbar