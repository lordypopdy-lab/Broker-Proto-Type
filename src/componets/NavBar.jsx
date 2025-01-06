import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-light sticky-top" data-navbar-darken-on-scroll="900">
    <div className="container pt-2"><a className="navbar-brand" href="index.php"> <img src="img/logo_2.png" style={{height: "60px", width: "60px", objectFit: "fill"}} alt="logo" /></a>
        <div className="navbar-nav ms-auto">
            <a href="/login" className="btn btn-secondary">Login</a>
        </div>
    </div>
</nav>
  )
}

export default NavBar
