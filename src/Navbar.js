import React from 'react'
import './Navbar.css'
import logo from './assets/make-logo.png'
// import logo from './assets/mal'

const Navbar = () => {
    return (
        <>
            <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-4 d-md-flex  align-items-center justify-content-center">

                                    <li className="nav-item">
                                            <a className="nav-link" href="">Menu item</a>
                                     </li>
                                    <li className="nav-item">
                                            <a className="nav-link " href="">Menu item</a>
                                    </li>
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <img src={logo} alt=""  />
                            </div>
                            <div className="col-4 d-md-flex align-items-center justify-content-center">
                                    <li className="nav-item">
                                            <a className="nav-link" href="">Menu item</a>
                                     </li>
                                    <li className="nav-item">
                                            <a className="nav-link " href="">Menu item</a>
                                    </li>

                            </div>
                        </div>


                            {/* <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand d-lg-none" href="">
                                <img src={logo} alt=""  />
                            </a>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Menu item</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="">Menu item</a>
                                </li>
                                </ul>
                                
                                
                                <a className="navbar-brand d-none d-lg-block" href="">
                                    <img src={logo} alt=""  />
                                </a>
                                
                                
                                
                                <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="">Menu item</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Menu item</a>
                                </li>
                                </ul>
                            </div>
                            </nav> */}
            </div>
        </>
    )
}

export default Navbar
