import { motion } from 'framer-motion'

const PROJECTS = [
  {
    tag: 'DG',
    label: '黑暗地牢',
    tech: ['Unity', 'C#', '2D像素'],
    title: '类空洞骑士 黑暗地牢游戏',
    desc: '基于 Unity 开发的 2D 横版动作游戏，实现流畅的战斗判定、复杂的地图探索与独特的暗黑美术风格。',
  },
  {
    tag: 'DT',
    label: '数字孪生',
    tech: ['UE5', '数字孪生', 'IoT'],
    title: '校园数字孪生可视化管理平台',
    desc: '结合 CAD 图纸与 UE5 引擎，构建校园三维模型并实时接入数据，实现沉浸式的数字孪生管理原型。',
  },
  {
    tag: 'MG',
    label: '微信小游戏',
    tech: ['微信开发者工具', 'JavaScript', 'Canvas'],
    title: '微信小游戏开发实战',
    desc: '独立开发并上线的微信小游戏，优化了渲染性能与操作手感，包含完整的关卡与得分系统。',
  },
  {
    tag: '3D',
    label: '3D建模',
    tech: ['3ds Max', 'Blender', 'Three.js'],
    title: '高精度 3D 模型与 Web 展示',
    desc: '使用 3ds Max 与 Blender 进行高精度建模与材质渲染，结合 Three.js 实现浏览器端的在线交互展示。',
  },
]

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-14 py-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="code-label">
        // 项目实战
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.02em] mb-12"
      >
        用代码铸造的虚拟赛场
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.tag}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="glow-card cursor-pointer group"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
              e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
            }}
          >
            {/* 缩略图区 */}
            <div
              className="relative aspect-[16/9] flex items-center justify-center overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(21,21,21,1) 0%, rgba(10,10,10,1) 100%)',
              }}
            >
              {/* 红色对角光 */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    'linear-gradient(45deg, transparent 40%, rgba(218,2,14,0.14) 50%, transparent 60%)',
                }}
              />
              {/* 大字 tag */}
              <span
                className="relative font-mono font-extrabold select-none transition-all duration-500"
                style={{
                  fontSize: 80,
                  color: 'rgba(218,2,14,0.3)',
                  textShadow: '0 0 30px rgba(218,2,14,0.2)',
                }}
              >
                {p.tag}
              </span>
              {/* label 标签 */}
              <div className="absolute top-4 right-4 font-mono text-[11px] px-2.5 py-1 rounded bg-black/50 border border-manchester-red/30 text-manchester-red">
                {p.label}
              </div>
            </div>

            {/* 内容区 */}
            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-manchester-red/10 border border-manchester-red/20 text-manchester-red"
                  >
                    {`[${t}]`}
                  </span>
                ))}
              </div>
              <h3 className="text-[19px] font-bold mb-2 text-white group-hover:text-manchester-red transition-colors">
                {p.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-white/55">{p.desc}</p>
              <div className="mt-4 font-mono text-[12px] text-manchester-red opacity-0 group-hover:opacity-100 transition-opacity">
                查看详情 →
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
