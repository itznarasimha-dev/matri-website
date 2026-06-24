import { useReveal } from '../useReveal'

const photos = [
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=85', span: 'col-span-2 row-span-2', label: 'Telugu Wedding' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&q=85', span: '', label: 'Wedding Rings' },
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=85', span: '', label: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&q=85', span: '', label: 'Bride' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&q=85', span: '', label: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=700&q=85', span: 'col-span-2', label: 'Wedding Day' },
  { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=500&q=85', span: '', label: 'Roses' },
  { src: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=500&q=85', span: '', label: 'Ornaments' },
]

export default function Gallery() {
  const headRef = useReveal()

  return (
    <section className="py-10 sm:py-14" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal text-center mb-6 sm:mb-8">
          <span className="section-tag" style={{ color: '#000080' }}>Captured Moments</span>
          <h2 className="section-title">A Celebration of Telugu Love</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[185px]">
          {photos.map((p, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl group cursor-pointer ${p.span}`}>
              <img src={p.src} alt={p.label}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
