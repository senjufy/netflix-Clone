import React, { useEffect, useState } from 'react'
import "./Navbar.css"

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="data:image/png;base64,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"
                alt="Netflix"
            />

            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix"
            />

        </div>
    )
}

export default Navbar
