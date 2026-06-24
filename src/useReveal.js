import { useEffect, useRef } from 'react'

export function useReveal(direction = 'up') {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])
  return ref
}

export function useRevealStagger(count = 6) {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx || 0)
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, idx * 120)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
    refs.current.forEach(r => { if (r) observer.observe(r) })
    return () => refs.current.forEach(r => { if (r) observer.unobserve(r) })
  }, [count])

  return refs
}

export function useCountUp(target, duration = 1500) {
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const el = ref.current
          if (!el) return
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.floor(eased * target).toLocaleString('en-IN')
            if (progress < 1) requestAnimationFrame(step)
            else el.textContent = target.toLocaleString('en-IN')
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [target, duration])

  return ref
}
