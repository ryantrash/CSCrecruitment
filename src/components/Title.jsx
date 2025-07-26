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
        <>
        <h1>O'Connor Computer Science Club</h1>
        <h2>OC_CSC/{locationName}</h2>
        </>
    );
}