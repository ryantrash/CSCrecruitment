export default function Subheader({ children, level = 2 }) {
    return (
        <h2 classname={level === 1 ? "sub" : "small"}>
            {children}
        </h2>
    );
}