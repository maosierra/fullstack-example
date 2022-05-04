import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/auth-services";

function Navbar() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {currentUser ?
                            <>
                                <li className="nav-item">
                                    <Link to={"/task"} className="nav-link" aria-current="page">Tasks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/logout"} className="nav-link">Logout</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <Link to={"/"} className="nav-link">Login</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav >
    );
}
export default Navbar;