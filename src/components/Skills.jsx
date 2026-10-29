import { motion } from 'framer-motion'

const skills = [
  {
    // Box 3D 立方体
    path: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12',
    title: '三维建模与制图',
    tech: '3ds Max / Blender / CAD',
    desc: '高精度模型搭建、工业图纸制作与材质渲染',
    level: 92,
  },
  {
    // Gamepad 游戏手柄
    path: 'M6 12h4 M8 10v4 M15 11h.01 M18 13h.01 M4 8h16a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4h-1a4 4 0 0 1-3-1.33 2 2 0 0 0-2 0A4 4 0 0 1 9 18H8a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2z',
    title: '游戏引擎与 XR',
    tech: 'Unity / Unreal Engine',
    desc: '跨平台交互逻辑开发、VR/AR 场景搭建与实时渲染',
    level: 95,
  },
  {
    // Smartphone
    path: 'M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z M12 18h.01',
    title: '微信小游戏开发',
    tech: '微信开发者工具 / JS',
    desc: '轻量级游戏玩法开发、Canvas 渲染优化与上线发布',
    level: 85,
  },
  {
    // GitBranch
    path: 'M6 3v12 M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M9 18h6a3 3 0 0 0 3-3 M6 9a3 3 0 0 1 3-3',
    title: '项目管理与协作',
    tech: 'GitHub / Git',
    desc: '版本控制、代码托管、Issue 跟踪与团队协同开发',
    level: 88,
  },
  {
    // Palette
    path: 'M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2v-1a2 2 0 0 1 2-2h1.5a3.5 3.5 0 0 0 3.5-3.5c0-1.4-.6-2.6-1.6-3.5A8 8 0 0 0 12 2z M7.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M12 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M16.5 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
    title: 'UI/UX 与设计',
    tech: 'Figma / PS',
    desc: '原型图设计、交互逻辑推演与视觉元素处理',
    level: 78,
  },
]

function Icon({ d, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

export default function Skills() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-14 py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="code-label">
        // 技术栈
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.02em] mb-12"
      >
        我用什么构建虚拟世界
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="glow-card p-7 cursor-default"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
              e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
            }}
          >
            <div
              className="w-12 h-12 rounded-[10px] flex items-center justify-center mb-5"
              style={{
                background: 'rgba(218,2,14,0.12)',
                border: '1px solid rgba(218,2,14,0.25)',
                color: '#DA020E',
              }}
            >
              <Icon d={s.path} />
            </div>

            <h3 className="text-[18px] font-bold mb-1.5 text-white">{s.title}</h3>
            <div className="font-mono text-[11px] text-manchester-red/80 mb-3">{s.tech}</div>
            <p className="text-[13.5px] leading-[1.7] text-white/55 mb-5">{s.desc}</p>

            <div className="relative h-1.5 rounded-full overflow-hidden bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ delay: 0.3 + i * 0.08, duration: 1, ease: 'easeOut' }}
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #DA020E, #ff3b47)',
                  boxShadow: '0 0 8px rgba(218,2,14,0.6)',
                }}
              />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[11px] text-white/40">
              <span>Proficiency</span>
              <span className="text-manchester-red">{s.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
