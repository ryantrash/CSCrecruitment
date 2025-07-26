 import { useLocation, Link } from 'react-router-dom';

export default function Title() {
    const location = useLocation();
    let locationName; 

    if (location.pathname === '/') {
        locationName = 'Home';
    } else if (location.pathname === '/handsOn') {
        locationName = 'handsOn';
    }

    return (
        <div className="jumbotron">
            <h1>O'Connor Computer Science Club</h1>
            <h2>OC_CSC/{locationName}</h2>
        </div>
    );
}