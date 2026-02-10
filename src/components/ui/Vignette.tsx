export function Vignette() {
    return (
        <div
            className="vignette fixed inset-0 z-50 pointer-events-none"
            style={{
                background: 'radial-gradient(circle at center, transparent 60%, rgba(0, 10, 30, 0.4) 100%)',
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
            }}
        />
    );
}
