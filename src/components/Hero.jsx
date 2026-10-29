import { motion } from 'framer-motion'

// 悬浮粒子字符集
const PARTICLE_CHARS = ['void', 'class', 'using', 'return', 'new', 'null', '{}', '[]', '//']

function FloatingParticles() {
  const items = Array.from({ length: 18 })
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const left = Math.random() * 100
        const top = Math.random() * 100
        const delay = Math.random() * 5
        const dur = 6 + Math.random() * 6
        const char = PARTICLE_CHARS[i % PARTICLE_CHARS.length]
        const size = 10 + Math.random() * 10
        return (
          <motion.span
            key={i}
            className="absolute font-mono text-manchester-red/30 select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: size,
              textShadow: '0 0 6px rgba(218,2,14,0.4)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.5, 0], y: [-20, 0, 20] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            {char}
          </motion.span>
        )
      })}
    </div>
  )
}

// 全息扫描线
function ScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[28px] pointer-events-none">
      <div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(218,2,14,0.7), transparent)',
          boxShadow: '0 0 14px rgba(218,2,14,0.5)',
          animation: 'scanMove 3.5s linear infinite',
        }}
      />
    </div>
  )
}

// ===== 发光线框版 曼联红魔队徽 =====
function RedDevilCrest() {
  return (
    <svg
      viewBox="0 0 400 480"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      style={{ animation: 'breathGlow 3.5s ease-in-out infinite' }}
    >
      <defs>
        <filter id="glowR" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* 盾形外轮廓 */}
      <g filter="url(#glowR)" stroke="#DA020E" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* 主盾 */}
        <path d="M72 28 Q76 16 200 14 Q324 16 328 28 L328 280 Q328 360 260 430 Q200 466 140 430 Q72 360 72 280 Z" />
        {/* 盾内小盾 */}
        <path d="M160 200 L240 200 L240 260 Q240 300 200 324 Q160 300 160 260 Z" strokeWidth="1.4" opacity="0.85" />
        {/* 内部装饰十字 */}
        <line x1="200" y1="14" x2="200" y2="466" strokeWidth="0.5" opacity="0.35" />
        <line x1="72" y1="240" x2="328" y2="240" strokeWidth="0.5" opacity="0.35" />
      </g>

      {/* ===== 红魔 Heraldic Lion （纯线框版） ===== */}
      <g filter="url(#glowR)" stroke="#DA020E" fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* 后左腿 */}
        <path d="M182 310 L172 355 L190 355 L194 315" />
        {/* 后右腿 */}
        <path d="M202 310 L196 355 L212 355 L214 315" />
        {/* 躯干 */}
        <path d="M170 270 Q158 245 160 220 Q165 195 180 185 L220 185 Q235 195 240 220 Q242 245 230 270 Q225 295 214 310 L186 310 Q175 295 170 270 Z" />
        {/* 尾巴 */}
        <path d="M170 270 Q140 255 130 235 Q120 210 135 200 Q115 190 120 170 Q125 150 145 160 Q140 180 155 195 Q165 210 160 230 Q158 250 170 270 Z" />
        {/* 脖子 */}
        <path d="M220 220 Q235 190 245 180 Q252 172 250 158 L238 170 Q225 195 220 220" />
        {/* 头部圆形 */}
        <circle cx="252" cy="168" r="20" />
        {/* 鬃毛尖刺 */}
        <path d="M252 142 L248 135 L256 138 M232 150 L225 145 L234 152 M272 150 L279 145 L270 152 M230 170 L222 170 L230 175 M274 170 L282 170 L274 175 M240 186 L238 194 L246 190 M264 186 L266 194 L258 190" />
        {/* 双角 */}
        <path d="M242 150 L235 130 L248 150 Z" />
        <path d="M262 150 L269 130 L256 150 Z" />
        {/* 红眼 */}
        <line x1="246" y1="166" x2="250" y2="166" stroke="#DA020E" strokeWidth="2" />
        <line x1="256" y1="166" x2="260" y2="166" stroke="#DA020E" strokeWidth="2" />
        {/* 嘴部 */}
        <path d="M248 176 L256 176 M250 180 L254 180" />
        {/* 前左腿（抬起持三叉戟） */}
        <path d="M230 240 Q250 215 270 195 L278 188 L262 205 Q250 225 240 240 Z" />

        {/* ===== 三叉戟 ===== */}
        <g stroke="#DA020E" strokeWidth="1.4">
          <path d="M278 188 L285 130" />
          <path d="M270 132 L285 118 L300 132" />
          <path d="M285 118 L285 108" />
          <path d="M268 132 L302 132" />
        </g>
      </g>

      {/* ===== 盾上方小帆船 ===== */}
      <g stroke="#DA020E" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M190 140 L210 140 L206 152 L194 152 Z" />
        <path d="M199 108 L199 140" />
        <path d="M199 110 Q216 120 199 138" />
        <path d="M199 113 Q184 125 199 138" />
      </g>

      {/* ===== 顶部 "MANCHESTER" 弧线上字 ===== */}
      <defs>
        <path id="topArc" d="M100 100 Q200 20 300 100" fill="none" />
        <path id="botArc" d="M120 400 Q200 460 280 400" fill="none" />
      </defs>
      <g filter="url(#glowR)" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="22">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle" fill="#DA020E">MANCHESTER</textPath>
      </g>

      {/* ===== 底部 "UNITED" 弧线下字 ===== */}
      <g fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="20">
        <textPath href="#botArc" startOffset="50%" textAnchor="middle" fill="#DA020E">UNITED</textPath>
      </g>

      {/* ===== 足球（左） ===== */}
      <g filter="url(#glowR)" stroke="#DA020E" strokeWidth="1" fill="none" opacity="0.85">
        <circle cx="110" cy="255" r="22" />
        <polygon points="110,243 117,249 115,258 105,258 103,249" />
        <line x1="110" y1="243" x2="110" y2="233" />
        <line x1="117" y1="249" x2="126" y2="247" />
        <line x1="115" y1="258" x2="120" y2="267" />
        <line x1="105" y1="258" x2="100" y2="267" />
        <line x1="103" y1="249" x2="94" y2="247" />
        {/* 足球（右） */}
        <circle cx="290" cy="255" r="22" />
        <polygon points="290,243 297,249 295,258 285,258 283,249" />
        <line x1="290" y1="243" x2="290" y2="233" />
        <line x1="297" y1="249" x2="306" y2="247" />
        <line x1="295" y1="258" x2="300" y2="267" />
        <line x1="285" y1="258" x2="280" y2="267" />
        <line x1="283" y1="249" x2="274" y2="247" />
      </g>

      {/* 外围装饰同心圆 */}
      <g stroke="#DA020E" strokeWidth="0.4" fill="none" opacity="0.12">
        <circle cx="200" cy="240" r="200" />
        <circle cx="200" cy="240" r="160" />
        <circle cx="200" cy="240" r="120" />
      </g>
    </svg>
  )
}

export default function Hero({ onNavigate }) {
  return (
    <section className="min-h-screen flex items-center gap-16 max-w-[1400px] mx-auto px-6 md:px-14 py-28">
      {/* 左侧文案 */}
      <div className="flex-1 min-w-0">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="code-label">
          // 虚拟现实技术应用 | 曼联铁粉
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18 }}
          className="text-[clamp(36px,5.5vw,68px)] font-black leading-[1.08] tracking-[-0.035em] mb-8"
          style={{ color: '#fff' }}
        >
          一起创造下一个
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #DA020E, #ffffff 60%, #DA020E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            沉浸式体验
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.26 }}
          className="text-[15px] md:text-[16px] leading-[1.8] text-white/55 max-w-[560px] mb-10"
        >
          我是邓晓军。将红魔的团队协作精神融入代码。
          专注 <span className="font-mono text-white/85">3D建模</span>、
          <span className="font-mono text-white/85">引擎开发</span>、
          <span className="font-mono text-white/85">数字孪生</span> 与
          <span className="font-mono text-white/85">互动小程序</span> 开发。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => onNavigate?.('contact')}
            className="btn-red inline-flex items-center gap-2 px-7 py-[14px] rounded-lg font-semibold"
          >
            联系我 →
          </button>
          <a
            href="https://github.com/lukex762"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-7 py-[14px] rounded-lg font-semibold"
          >
            GitHub 主页
          </a>
        </motion.div>
      </div>

      {/* 右侧 红魔队徽 视觉 */}
      <div className="flex-1 min-w-0 hidden lg:block relative h-[580px]">
        {/* 外围光晕 */}
        <div
          className="absolute inset-[8%] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(218,2,14,0.15) 0%, rgba(218,2,14,0) 70%)',
            animation: 'haloBreath 4s ease-in-out infinite',
          }}
        />
        {/* 内部容器：浮动 */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="relative w-[480px] h-[480px] max-w-full max-h-full">
            <ScanLine />
            <FloatingParticles />
            <RedDevilCrest />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
