import { Link } from "react-router-dom";

export default function Subheader({ children, level = 2, link = '' }) {
    const text = (
        <h2 classname={level === 1 ? "h2" : "h3"}>
            {children}
        </h2>
    );
    
    return (
        link ? <Link to={link}>{text}</Link> : text
    );
}