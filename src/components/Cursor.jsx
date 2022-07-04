export default function Cursor({mousePosition}) {
    return (
        <ellipse
            style={{
                fill: 'rgba(0, 0, 0, 0)',
                stroke: '#444',
                strokeWidth: '2px',
                pointerEvents: 'none',
                overflow: 'hidden',
                position: 'fixed',
            }}
            cx={mousePosition.x}
            cy={mousePosition.y}
            rx="8"
            ry="8"
        />
    )
}