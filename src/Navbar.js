import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>

            <div className="container-fluid bg-light position-relative shadow">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                    <a href className="navbar-brand font-weight-bold text-secondary" style={{ "font-size": "50px" }}>
                        <i className="flaticon-043-teddy-bear" />
                        <span className="text-primary">KidKinder</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav font-weight-bold mx-auto py-0">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/class" className="nav-item nav-link">Classes</Link>
                            <Link to="/team" className="nav-item nav-link">Teachers</Link>
                            
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}