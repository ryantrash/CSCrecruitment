import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container"> 
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">O'Connor Computer Science Club</Link>
                </div>

                <div className="navbar-right">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
