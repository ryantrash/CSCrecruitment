export default function Paragraph({ children }) {
    return (
        <p className="p" style={{ fontSize: "20px", lineHeight: "1.5" }}>
            {children}
        </p>
    );
}