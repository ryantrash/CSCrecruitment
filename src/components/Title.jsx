 import { useLocation, Link } from 'react-router-dom';

export default function Title() {
    const location = useLocation();
    let locationName; 

    if (location.pathname === '/') {
        locationName = 'Home';
    } else if (location.pathname === '/about') {
        locationName = 'About Us';
    }

    return (
        <Link to="/" className="title">
            &gt; OC_COMPUTER_SCIENCE_CLUB ~ {locationName}
        </Link>
    );
}