import React from 'react'

const Navbar = () => {
  return (
    <nav style={{
      height: 76,
      backgroundColor: "white",
      display: "flex"
    }}>
      <div style={{
        margin: "auto"
      }} className="container">
        <div className="row">
          <div className="col-12">
            <a href="/"><img src="/static/images/go.png" alt=""/></a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar