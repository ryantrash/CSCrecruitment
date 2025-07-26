export default function Subheader({ children, level = 2 }) {
    const style = {
        fontSize: level === 1 ? '2em' : '1.2em',
        color: '#39ff14',
        textShadow: '0 0 4px #39ff14',
        marginTop: '1.5rem',
        marginBottom: '1rem',
    }
    return (
        <h2 style={style}>
            {children}
        </h2>
    );
}