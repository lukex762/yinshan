import { useState } from 'react'
import { motion } from 'framer-motion'

// 所有图标用内联 SVG —— 避免 lucide-react 导出问题
const Menu = (p) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)
const XIcon = (p) => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const NAV_ITEMS = [
  { key: 'home', label: '首页' },
  { key: 'about', label: '关于' },
  { key: 'skills', label: '技能' },
  { key: 'projects', label: '项目' },
  { key: 'contact', label: '联系' },
]

export default function Navbar({ currentView, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (key) => {
    onNavigate(key)
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-14 py-4 flex justify-between items-center"
      style={{
        background: 'rgba(10, 10, 10, 0.75)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <button
        onClick={() => handleClick('home')}
        className="flex items-center gap-3 text-white font-extrabold text-[17px] tracking-[0.08em]"
      >
        <span
          className="w-2.5 h-2.5 rounded-full animate-pulse-red"
          style={{ background: '#DA020E', boxShadow: '0 0 12px rgba(218,2,14,0.8)' }}
        />
        DENG XIAOJUN
      </button>

      <div className="hidden md:flex items-center gap-9">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => handleClick(item.key)}
            className={`relative text-[14px] font-medium pb-1 transition-colors ${
              currentView === item.key ? 'text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {item.label}
            {currentView === item.key && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full"
                style={{ background: '#DA020E' }}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <button
        onClick={() => handleClick('contact')}
        className="hidden md:inline-flex btn-red px-5 py-2.5 rounded-lg text-sm font-semibold"
      >
        下载完整简历 (PDF)
      </button>

      <button className="md:hidden p-2 text-white/80" onClick={() => setOpen((o) => !o)} aria-label="menu">
        {open ? <XIcon /> : <Menu />}
      </button>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden absolute top-full left-0 right-0 overflow-hidden"
          style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-col p-5 gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`text-left text-[15px] py-1 transition-colors ${
                  currentView === item.key ? 'text-manchester-red' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => handleClick('contact')} className="btn-red px-5 py-2.5 rounded-lg text-sm font-semibold mt-2">
              下载完整简历 (PDF)
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
