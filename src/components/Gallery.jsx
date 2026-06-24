import { useReveal } from '../useReveal'
import g1 from '../assets/gallery.jpg'
import g2 from '../assets/gallery 2.jpg'
import g3 from '../assets/gallery 3.jpg'
import g4 from '../assets/gallary 4.jpg'
import g5 from '../assets/gallery 5.jpg'
import g6 from '../assets/gallery  6.jpg'
import g7 from '../assets/family photos 1.jpg'
import g8 from '../assets/wedding aesthitics.jpg'

const row1 = [
  { src: g1, label: 'Wedding' },
  { src: g2, label: 'Gallery 2' },
  { src: g3, label: 'Gallery 3' },
  { src: g4, label: 'Gallery 4' },
]

const row2 = [
  { src: g5, label: 'Gallery 5' },
  { src: g6, label: 'Gallery 6' },
  { src: g7, label: 'Family' },
  { src: g8, label: 'Wedding Aesthetics' },
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

        <div className="flex flex-col gap-2 sm:gap-3">
          {[row1, row2].map((row, ri) => (
            <div key={ri} className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {row.map((p, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl group cursor-pointer h-[160px] sm:h-[200px] lg:h-[240px]">
                  <img src={p.src} alt={p.label}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
