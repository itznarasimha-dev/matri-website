import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <div className="toast" style={{ background: isSuccess ? '#1A2A8F' : '#DC2626' }}>
      <div className="flex items-center gap-3 px-5 py-4">
        {isSuccess
          ? <CheckCircle className="w-5 h-5 text-gold shrink-0" />
          : <XCircle className="w-5 h-5 text-primary-light shrink-0" />
        }
        <span className="font-body text-sm text-white flex-1">{message}</span>
        <button onClick={onClose} className="text-white/40 hover:text-white transition-colors ml-2">
          <X className="w-4 h-4" />
        </button>
      </div>
      <div
        className="toast__progress"
        style={{ background: isSuccess ? 'var(--color-gold)' : 'var(--color-primary-light)' }}
      />
    </div>
  )
}
