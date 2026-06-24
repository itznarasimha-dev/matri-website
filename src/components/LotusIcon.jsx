export default function LotusIcon({ size = 40, className = '', animate = false, color = '#E8836A' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer petals */}
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3"/>
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3" transform="rotate(60 32 32)"/>
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3" transform="rotate(120 32 32)"/>
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3" transform="rotate(180 32 32)"/>
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3" transform="rotate(240 32 32)"/>
      <path d="M32 6 C29 14 22 18 22 26 C22 33 26 37 32 37 C38 37 42 33 42 26 C42 18 35 14 32 6Z" fill={color} opacity="0.3" transform="rotate(300 32 32)"/>

      {/* Inner petals */}
      <path d="M32 12 C30 18 25 21 25 27 C25 32 28 35 32 35 C36 35 39 32 39 27 C39 21 34 18 32 12Z" fill={color} opacity="0.7"/>
      <path d="M32 12 C30 18 25 21 25 27 C25 32 28 35 32 35 C36 35 39 32 39 27 C39 21 34 18 32 12Z" fill={color} opacity="0.7" transform="rotate(72 32 32)"/>
      <path d="M32 12 C30 18 25 21 25 27 C25 32 28 35 32 35 C36 35 39 32 39 27 C39 21 34 18 32 12Z" fill={color} opacity="0.7" transform="rotate(144 32 32)"/>
      <path d="M32 12 C30 18 25 21 25 27 C25 32 28 35 32 35 C36 35 39 32 39 27 C39 21 34 18 32 12Z" fill={color} opacity="0.7" transform="rotate(216 32 32)"/>
      <path d="M32 12 C30 18 25 21 25 27 C25 32 28 35 32 35 C36 35 39 32 39 27 C39 21 34 18 32 12Z" fill={color} opacity="0.7" transform="rotate(288 32 32)"/>

      {/* Center */}
      <circle cx="32" cy="32" r="6" fill={color}/>
      <circle cx="32" cy="32" r="3.5" fill="white" opacity="0.9"/>
    </svg>
  )
}
