import { useReveal } from '../useReveal'

const photos = [
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', span: 'col-span-2', label: 'Telugu Wedding' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80', span: '',          label: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=400&q=80',    span: '',          label: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80', span: '',          label: 'Traditions' },
  { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80', span: '',          label: 'Bride' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', span: 'col-span-2', label: 'Portrait' },
]

export default function Gallery() {
  const headRef = useReveal()

  return (
    <section className="py-10 sm:py-14" style={{ background: '#ffffff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center mb-6 sm:mb-8">
          <span className="section-tag" style={{ color: '#2338B0' }}>Captured Moments</span>
          <h2 className="section-title">A Celebration of Telugu Love</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 auto-rows-[120px] sm:auto-rows-[160px] lg:auto-rows-[180px]">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl group cursor-pointer ${p.span}`}>
              <img src={p.src} alt={p.label}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(35,56,176,0.55)' }}>
                <span className="font-body text-white font-semibold text-xs tracking-wide uppercase">{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
