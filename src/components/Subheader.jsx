export default function Subheader({ children, level = 2 }) {
    return (
        <h2 classname={level === 1 ? "h2" : "h3"}>
            {children}
        </h2>
    );
}