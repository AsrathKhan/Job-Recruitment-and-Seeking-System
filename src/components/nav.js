import React from "react";
import "bootstrap/js/dist/dropdown"
export default function Navi()
{
    return (
        <nav className="navbar navbar-expand-sm navbar-white bg-transparent px-3">
            <i className="navbar-brand bi bi-justify-left fs-4" ></i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bi
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" id="dropdownId"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Yousof
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                    </ul>
                    </div>
                </nav >
                )
}