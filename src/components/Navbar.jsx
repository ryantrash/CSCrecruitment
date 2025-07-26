export default function Navbar() {
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
}
