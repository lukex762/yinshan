import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMAIL = '355346@qq.com'
const EMAIL_URL = `https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=${EMAIL}`
const GITHUB_URL = 'https://github.com/lukex762'
const WECHAT_ID = 'casaimiro0223'

// 内联 SVG 图标
const MailIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" />
  </svg>
)
const GithubIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)
const WechatIcon = () => (
  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <circle cx="9" cy="10" r="1" fill="currentColor" /><circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
)
const CopyIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)
const CheckIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

function IconBox({ children }) {
  return (
    <div
      className="w-11 h-11 rounded-[10px] flex items-center justify-center flex-shrink-0"
      style={{ background: 'rgba(218,2,14,0.12)', border: '1px solid rgba(218,2,14,0.25)', color: '#DA020E' }}
    >
      {children}
    </div>
  )
}

// 微信 Modal
function WechatModal({ open, onClose }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => { if (!open) setCopied(false) }, [open])

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = WECHAT_ID
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const h = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-[min(92vw,420px)] p-8 rounded-2xl text-center"
            style={{ background: '#151515', border: '1px solid rgba(218,2,14,0.4)', boxShadow: '0 0 60px rgba(218,2,14,0.25)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-3 right-4 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors rounded-full" onClick={onClose} aria-label="关闭">
              <XIcon />
            </button>
            <div
              className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(218,2,14,0.12)', border: '1px solid rgba(218,2,14,0.35)', color: '#DA020E' }}
            >
              <WechatIcon />
            </div>
            <h3 className="text-[18px] font-bold text-white mb-2">我的微信号</h3>
            <p
              className="font-mono text-[22px] font-bold mb-6"
              style={{ background: 'linear-gradient(90deg, #DA020E, #ffffff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              {WECHAT_ID}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={copy}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[14px] transition-all duration-300 hover:-translate-y-[2px] ${
                  copied ? 'bg-green-500/90 text-white' : 'btn-red'
                }`}
              >
                {copied ? <><CheckIcon /> 已复制</> : <><CopyIcon /> 复制微信号</>}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-lg font-semibold text-[14px] text-white transition-all duration-300 hover:-translate-y-[2px]"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                关闭
              </button>
            </div>
            <p className="mt-5 text-[11.5px] font-mono text-white/35">// 红魔出征，代码不停</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact({ onNavigate }) {
  const [wechatOpen, setWechatOpen] = useState(false)

  const cardStyle = { cursor: 'pointer' }

  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-14 py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="code-label">// 联系我</motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.02em] mb-12"
      >
        一起创造下一个沉浸式体验
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 左侧 */}
        <div className="flex flex-col gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glow-card p-5 flex items-center gap-4" style={cardStyle}>
                <IconBox><MailIcon /></IconBox>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-white mb-1">Email</div>
                  <div className="font-mono text-[13px] text-white/55">{EMAIL}</div>
                </div>
                <span className="ml-auto text-white/30 text-sm">↗</span>
              </div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="block">
              <div className="glow-card p-5 flex items-center gap-4" style={cardStyle}>
                <IconBox><GithubIcon /></IconBox>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-white mb-1">GitHub</div>
                  <div className="font-mono text-[13px] text-white/55">github.com/lukex762</div>
                </div>
                <span className="ml-auto text-white/30 text-sm">↗</span>
              </div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.29 }}>
            <button
              className="glow-card p-5 flex items-center gap-4 w-full text-left"
              onClick={() => setWechatOpen(true)}
              style={cardStyle}
            >
              <IconBox><WechatIcon /></IconBox>
              <div className="min-w-0">
                <div className="text-[15px] font-semibold text-white mb-1">微信</div>
                <div className="font-mono text-[13px] text-white/55">点击查看微信号</div>
              </div>
              <span className="ml-auto text-white/40 text-sm">查看 →</span>
            </button>
          </motion.div>
        </div>

        {/* 右侧 CTA */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}>
          <div
            className="glow-card p-8 md:p-10 h-full relative overflow-hidden"
            style={{ borderTop: '2px solid transparent', borderImage: 'linear-gradient(90deg, #DA020E, transparent) 1' }}
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(218,2,14,0.22), transparent 65%)' }} />
            <div className="flex items-center gap-3 mb-5 relative">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#DA020E', boxShadow: '0 0 10px rgba(218,2,14,0.7)' }} />
              <h3 className="text-[22px] font-extrabold text-white">下一个项目，红魔出征</h3>
            </div>
            <p className="text-[15px] leading-[1.8] text-white/55 mb-9 relative">
              如果你有 3D建模、VR/AR、数字孪生或小游戏开发相关的项目想法，或者只是想聊聊引擎开发与红魔往事，随时联系我。
            </p>
            <div className="flex flex-wrap gap-4 relative">
              <a href={EMAIL_URL} target="_blank" rel="noopener noreferrer" className="btn-red inline-flex items-center gap-2 px-7 py-[14px] rounded-lg font-semibold">
                发邮件 →
              </a>
              <button onClick={() => onNavigate?.('projects')} className="btn-outline inline-flex items-center gap-2 px-7 py-[14px] rounded-lg font-semibold">
                看我项目
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <WechatModal open={wechatOpen} onClose={() => setWechatOpen(false)} />
    </section>
  )
}
