import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

const VIEWS = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
}

function App() {
  const [currentView, setCurrentView] = useState('home')

  const ViewComponent = VIEWS[currentView]

  return (
    <div className="min-h-screen w-full relative" style={{ background: 'var(--color-bg-deep)' }}>
      {/* 极客代码 + 网格背景 */}
      <div className="geek-bg" aria-hidden="true" />

      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {ViewComponent && <ViewComponent onNavigate={setCurrentView} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 px-8 mt-10">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="font-mono text-xs text-white/50">
            © 2025 邓晓军 · Made with <span className="text-manchester-red animate-pulse-red inline-block">♥</span> and lots of C#
          </div>
          <div className="flex gap-5 text-xs text-white/40 font-mono">
            <button onClick={() => setCurrentView('home')} className="hover:text-manchester-red transition-colors">首页</button>
            <button onClick={() => setCurrentView('about')} className="hover:text-manchester-red transition-colors">关于</button>
            <button onClick={() => setCurrentView('skills')} className="hover:text-manchester-red transition-colors">技能</button>
            <button onClick={() => setCurrentView('projects')} className="hover:text-manchester-red transition-colors">项目</button>
            <button onClick={() => setCurrentView('contact')} className="hover:text-manchester-red transition-colors">联系</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
