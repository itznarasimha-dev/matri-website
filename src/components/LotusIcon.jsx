export default function LotusIcon({ size = 40, className = '', animate = false, color = '#D4A017' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Center circle */}
      <circle cx="30" cy="32" r="5" fill={color} opacity="0.9" />
      {/* 5 petals */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <ellipse
          key={i}
          cx="30"
          cy="32"
          rx="5"
          ry="12"
          fill={color}
          opacity={animate ? undefined : '0.75'}
          transform={`rotate(${deg} 30 32) translate(0 -10)`}
          style={
            animate
              ? {
                  opacity: 0,
                  animation: `fadeIn 0.4s ease ${i * 0.1}s forwards`,
                }
              : {}
          }
        />
      ))}
    </svg>
  )
}
