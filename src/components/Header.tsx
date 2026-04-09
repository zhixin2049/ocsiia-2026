import { useState, useRef, useEffect } from 'react'
import { Share2, ChevronDown, X, Facebook, Linkedin, MessageCircle } from 'lucide-react'

const socialLinks = [
  { name: 'X (Twitter)', icon: X, url: 'https://twitter.com/intent/tweet?url=https://www.ogdcn.com/&text=OCSIIA 2026 Oriental Creative Star International Innovation Design Award' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/sharer/sharer.php?u=https://www.ogdcn.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://www.ogdcn.com/' },
  { name: 'Reddit', icon: MessageCircle, url: 'https://reddit.com/submit?url=https://www.ogdcn.com/&title=OCSIIA 2026' },
  { name: 'Telegram', icon: MessageCircle, url: 'https://t.me/share/url?url=https://www.ogdcn.com/&text=OCSIIA 2026' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/?text=OCSIIA 2026 https://www.ogdcn.com/' },
]

export default function Header() {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShareOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header 
      className="w-full py-4 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(to bottom, #1a0533 0%, #2d1b69 50%, #1e3a8a 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/logo.jpg" 
            alt="OCSIIA Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Competition Name */}
        <div className="flex-1 text-center px-4">
          <h1 className="text-white text-sm sm:text-base lg:text-lg font-semibold tracking-wide">
            The OCSIIA 2026 Oriental Creative Star International Innovation Design Award
          </h1>
        </div>

        {/* Share Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsShareOpen(!isShareOpen)}
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors px-3 py-2 rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">Share</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isShareOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Share Dropdown */}
          {isShareOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition-colors text-gray-700"
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
