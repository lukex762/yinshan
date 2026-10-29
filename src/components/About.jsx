import { motion } from 'framer-motion'

const TIMELINE = [
  { year: '2027', title: '成都职业技术学院', desc: '虚拟现实技术应用专业（即将毕业）' },
  { year: '2024', title: '入校成都职业技术学院', desc: '学习虚拟现实技术应用专业 / Unity 官方认证开发者' },
  { year: '2021', title: '开启曼联死忠生涯', desc: '🔴⚪ 红魔精神，代码人生' },
]

const STATS = [
  { num: '6+', label: '核心软件精通' },
  { num: '20+', label: '独立 Demo 项目' },
  { num: '4', label: '年曼联死忠' },
]

export default function About() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-14 py-28">
      <div className="code-label">// 关于我</div>
      <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold tracking-[-0.02em] mb-12">
        红魔精神，代码人生
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* 左侧 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-5 text-[15px] leading-[1.85] text-white/60">
            <p>
              我是 <span className="text-white font-semibold">邓晓军</span>，一名虚拟现实技术应用专业的学生。
            </p>
            <p>
              熟练掌握 <span className="font-mono text-white/85">3ds Max</span>、
              <span className="font-mono text-white/85">Blender</span> 等建模软件，
              精通 <span className="font-mono text-white/85">Unity</span> 与
              <span className="font-mono text-white/85">虚幻引擎</span> 开发，
              热衷于用技术构建沉浸式的数字世界。
            </p>
          </div>

          {/* 数据统计 */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-7 pb-7 border-y border-white/5">
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  className="font-mono font-extrabold"
                  style={{
                    fontSize: 36,
                    background: 'linear-gradient(90deg, #DA020E, #ffffff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.num}
                </div>
                <div className="text-[12.5px] text-white/45 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 右侧：时间线卡片 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glow-card p-8"
          style={{ borderTop: '2px solid transparent', borderImage: 'linear-gradient(90deg, #DA020E, transparent) 1' }}
        >
          <h3 className="text-[18px] font-bold mb-6 text-white">📋 经历时间线</h3>
          <div className="space-y-0">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className="relative pl-6 py-5 border-b border-white/5 last:border-b-0"
              >
                {/* 红点 */}
                <span
                  className="absolute left-0 top-[26px] w-2 h-2 rounded-full"
                  style={{
                    background: '#DA020E',
                    boxShadow: '0 0 0 3px rgba(218,2,14,0.15)',
                  }}
                />
                <div className="font-mono text-[12.5px] font-bold text-manchester-red mb-1">{t.year}</div>
                <div className="text-[15px] font-semibold text-white mb-1">{t.title}</div>
                <div className="text-[13px] text-white/50 leading-[1.6]">{t.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
