import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Kisans - Lær AI med guider og verktøy';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0a0a0a',
                    gap: '24px',
                }}
            >
                <div
                    style={{
                        fontSize: 120,
                        fontWeight: 900,
                        color: 'white',
                        letterSpacing: '-0.05em',
                        fontFamily: 'serif',
                        textTransform: 'uppercase',
                    }}
                >
                    KISANS
                </div>
                <div
                    style={{
                        fontSize: 24,
                        color: 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.2em',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                    }}
                >
                    Der menneske m&#248;ter kunstig intelligens
                </div>
            </div>
        ),
        { ...size }
    );
}
