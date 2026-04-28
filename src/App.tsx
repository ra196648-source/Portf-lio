import { 
  Terminal, 
  Cpu, 
  Database, 
  Cloud, 
  Home, 
  Code, 
  Mail, 
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Box,
  Monitor,
  Server,
  FileSearch,
  Instagram
} from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Project, Skill } from './types';

const PROJECTS: Project[] = [
  {
    id: '1',
    systemId: 'TADS_WEB',
    title: 'Desenvolvimento Web Full-stack',
    description: 'Arquitetura de aplicações modernas utilizando React, Next.js e Node.js. Foco em interfaces responsivas e APIs RESTful.',
    icon: 'code',
    metrics: [
      { label: 'Prototipagem', value: 'UI/UX', color: 'secondary' },
      { label: 'Frameworks', value: 'React/Node', color: 'primary' }
    ]
  },
  {
    id: '2',
    systemId: 'TADS_DB',
    title: 'Modelagem de Dados',
    description: 'Administração e otimização de bancos de dados relacionais e NoSQL. Implementação de consultas complexas e integridade de dados.',
    icon: 'database',
    metrics: [
      { label: 'Relacional', value: 'PostgreSQL', color: 'secondary' },
      { label: 'NoSQL', value: 'MongoDB', color: 'primary' }
    ]
  },
  {
    id: '3',
    systemId: 'TADS_ENG',
    title: 'Engenharia de Software',
    description: 'Aplicação de metodologias ágeis (Scrum/Kanban), padrões de projeto (Design Patterns) e garantia de qualidade de software.',
    icon: 'cpu',
    metrics: [
      { label: 'Gestão', value: 'Ágil', color: 'secondary' },
      { label: 'Qualidade', value: 'Clean Code', color: 'primary' }
    ]
  }
];

const SKILLS = [
  { name: 'Algoritmos & Lógica', description: 'Fundamentos de programação, estruturas de dados e complexidade.', icon: 'terminal', color: 'secondary' },
  { name: 'Programação (POO)', description: 'Desenvolvimento orientado a objetos com foco em Java e C#.', icon: 'box', color: 'primary' },
  { name: 'Banco de Dados', description: 'Modelagem relacional (SQL Server/Postgres) e NoSQL (MongoDB).', icon: 'database', color: 'secondary' },
  { name: 'Eng. de Requisitos', description: 'Levantamento, análise e documentação de necessidades do usuário.', icon: 'fileSearch', color: 'primary' },
  { name: 'Web & Mobile', description: 'Criação de interfaces modernas e integração com back-end.', icon: 'monitor', color: 'secondary' },
  { name: 'Infra & Redes', description: 'Arquitetura de sistemas e fundamentos de redes de computadores.', icon: 'server', color: 'primary' }
];

const RainReveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: [0.21, 0.47, 0.32, 0.98] 
    }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleDownloadCV = () => {
    // Conteúdo simulado do currículo
    const cvContent = `
CARLOS HENRIQUE
Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) - 5º Semestre

CONTATO:
Email: CarlosTayzer@gmail.com
LinkedIn: linkedin.com/in/carlos-henrique-da-silva-frança-1563423b4
GitHub: github.com/ra196648-source
Instagram: @eucarlos.yx

RESUMO:
Focado em arquitetura de sistemas e performance. Atualmente desenvolvendo competências 
complexas em análise e projeto de sistemas, focado em robustez e eficiência.

COMPETÊNCIAS:
- Algoritmos & Lógica
- Programação Orientada a Objetos (Java/C#)
- Banco de Dados (SQL Server/Postgres/NoSQL)
- Engenharia de Requisitos
- Desenvolvimento Web & Mobile
- Infraestrutura & Redes
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Curriculo_Carlos_Henrique.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/30 selection:text-white pb-20 md:pb-0 scroll-smooth">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 vivid-gradient z-[60] origin-left" style={{ scaleX }} />

      {/* Modern Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => changeTab('inicio')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display tracking-[0.1em] uppercase text-lg font-black text-white leading-none">Carlos Henrique</h1>
              <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.2em]">TADS // Estudante</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center bg-white/5 px-2 py-1 rounded-full border border-white/10">
            {[
              { name: 'Início', id: 'inicio' },
              { name: 'Tech', id: 'tech' },
              { name: 'Código', id: 'código' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => changeTab(item.id)}
                className={`font-display tracking-tight uppercase text-xs font-bold transition-all duration-300 relative px-6 py-2 rounded-full
                  ${activeTab === item.id ? 'text-white bg-primary shadow-lg shadow-primary/30' : 'text-on-surface-variant hover:text-white'}
                `}
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          <button 
            onClick={handleDownloadCV}
            className="hidden lg:flex items-center gap-2 group bg-white text-surface px-5 py-2.5 rounded-full font-display font-bold text-xs tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            BAIXAR CV
          </button>
        </div>
      </header>

      <main className="pt-32 pb-40 max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'inicio' && (
            <motion.div 
              key="inicio"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-24"
            >
              {/* Hero Showcase */}
              <section className="relative min-h-[600px] h-[80vh] rounded-[2.5rem] overflow-hidden group">
                <div className="absolute inset-0 bg-surface">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                    alt="Study Session"
                    className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-8 md:p-16 lg:p-24 space-y-8">
                  <RainReveal>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display text-[11px] bg-primary/30 text-white border border-primary/40 px-4 py-2 rounded-full tracking-widest font-black uppercase shadow-lg shadow-primary/20">
                        SISTEMA_ATIVO // TADS-05
                      </span>
                    </div>
                  </RainReveal>
                  
                  <RainReveal delay={0.2}>
                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                      CARLOS<br />
                      <span className="text-secondary text-gradient">
                        HENRIQUE
                      </span>
                    </h2>
                  </RainReveal>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-end">
                    <RainReveal delay={0.4}>
                      <div className="glass-card p-8 border-white/10 max-w-lg">
                        <p className="text-base text-on-surface-variant leading-relaxed font-medium">
                          Arquitetando soluções escaláveis e performáticas. Atualmente no <span className="text-white font-black italic">5º Semestre em Análise e Desenvolvimento de Sistemas</span>.
                        </p>
                      </div>
                    </RainReveal>
                    
                    <button 
                      onClick={() => changeTab('tech')}
                      className="vivid-gradient text-white px-8 py-5 rounded-2xl font-display font-black text-sm tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/40 animate-float"
                    >
                      EXPLORAR_STACK
                    </button>
                  </div>
                </div>
              </section>

              {/* Quick Status Bento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-8 flex flex-col justify-between h-56 group">
                  <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl">Hardware & Soft</h3>
                    <p className="text-xs text-on-surface-variant mt-1">Otimização de sistemas críticos</p>
                  </div>
                </div>

                <div className="glass-card p-8 flex flex-col justify-between h-56 bg-gradient-to-br from-primary/10 to-transparent group">
                  <div className="bg-secondary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 group-hover:-rotate-6 transition-all">
                    <Database className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl">Data Flow</h3>
                    <p className="text-xs text-on-surface-variant mt-1">Gestão e modelagem de TBs</p>
                  </div>
                </div>

                <div className="glass-card p-8 flex flex-col justify-between h-56 group border-primary/20">
                  <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all">
                    <Code className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-2xl">Clean Code</h3>
                    <p className="text-xs text-on-surface-variant mt-1">Padrões SOLID e Escalabilidade</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'tech' && (
            <motion.section 
              key="tech"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12">
                <div>
                  <h3 className="font-display text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase italic">
                    TECH<br />
                    <span className="text-primary text-gradient">STACK</span>
                  </h3>
                  <p className="text-on-surface-variant mt-6 max-w-xl text-lg font-medium">Competências técnicas adquiridas ao longo do curso de TADS, focadas em robustez e eficiência para o mundo real.</p>
                </div>
                <div className="flex gap-4">
                  <div className="glass-card px-10 py-6 text-center border-primary/30">
                    <span className="block text-4xl font-black text-white ring-text-primary">05º</span>
                    <span className="text-[12px] text-on-surface-variant uppercase font-bold tracking-[0.2em]">Semestre</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.map((skill, idx) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass-card p-10 flex flex-col gap-8 group"
                  >
                    <div className="flex justify-between items-center">
                      <div className={`p-5 rounded-2xl transition-all group-hover:scale-110 ${skill.color === 'secondary' ? 'bg-secondary/20 text-secondary shadow-lg shadow-secondary/10' : 'bg-primary/20 text-primary shadow-lg shadow-primary/10'}`}>
                        {skill.icon === 'terminal' && <Terminal className="w-8 h-8" />}
                        {skill.icon === 'box' && <Box className="w-8 h-8" />}
                        {skill.icon === 'database' && <Database className="w-8 h-8" />}
                        {skill.icon === 'fileSearch' && <FileSearch className="w-8 h-8" />}
                        {skill.icon === 'monitor' && <Monitor className="w-8 h-8" />}
                        {skill.icon === 'server' && <Server className="w-8 h-8" />}
                      </div>
                      <span className="font-mono text-4xl text-white/5 font-black italic select-none">0{idx + 1}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-on-surface-variant leading-relaxed font-medium">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'código' && (
            <motion.section 
              key="codigo"
              initial={{ opacity: 0, filter: 'blur(30px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(30px)' }}
              className="space-y-16"
            >
              <div className="text-center space-y-6">
                <div className="vivid-gradient w-20 h-2 mx-auto rounded-full mb-8" />
                <h3 className="font-display text-6xl md:text-9xl font-black text-white tracking-widest uppercase italic">
                  ARQUIVO
                </h3>
                <p className="text-on-surface-variant text-xl max-w-2xl mx-auto font-medium">Soluções desenvolvidas com rigor técnico, aplicando conceitos avançados de TADS.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                  <motion.div 
                    key={project.id}
                    className="glass-card p-1.5 bg-gradient-to-br from-primary/30 via-white/5 to-secondary/30 group overflow-hidden"
                  >
                    <div className="bg-surface-container-low rounded-[22px] p-10 h-full flex flex-col">
                      <div className="flex justify-between items-start mb-12">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 transition-all">
                          {project.icon === 'code' && <Code className="text-secondary w-9 h-9" />}
                          {project.icon === 'database' && <Database className="text-primary w-9 h-9" />}
                          {project.icon === 'cpu' && <Cpu className="text-secondary w-9 h-9" />}
                        </div>
                        <span className="font-mono text-xs text-primary bg-primary/10 px-4 py-2 rounded-full font-black tracking-widest border border-primary/20">
                          {project.systemId}
                        </span>
                      </div>
                      
                      <h4 className="font-display text-4xl font-black text-white mb-6 group-hover:text-primary transition-colors tracking-tight">{project.title}</h4>
                      <p className="text-on-surface-variant mb-14 flex-grow leading-relaxed text-lg font-medium">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                            <p className="text-[11px] uppercase tracking-[0.3em] font-black text-on-surface-variant/60 mb-2">
                              {metric.label}
                            </p>
                            <p className={`font-display text-2xl font-black ${metric.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'contato' && (
            <motion.section 
              key="contato"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-6xl mx-auto space-y-20"
            >
              <div className="glass-card p-16 relative overflow-hidden vivid-gradient shadow-[0_0_100px_rgba(139,92,246,0.3)]">
                <div className="relative z-10 flex flex-col items-center text-center space-y-10">
                  <div className="w-28 h-28 rounded-[2rem] bg-white/10 backdrop-blur-3xl flex items-center justify-center p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[1.8rem] flex items-center justify-center shadow-inner">
                      <Mail className="text-primary w-12 h-12" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter leading-none italic uppercase">CONEXÃO<br />TERMINAL</h3>
                    <p className="text-white/90 max-w-2xl mx-auto text-xl font-medium">Estou disponível para novos desafios, parcerias acadêmicas ou networking no setor de TI.</p>
                  </div>
                  <a href="mailto:CarlosTayzer@gmail.com" className="bg-white text-surface px-12 py-6 rounded-2xl font-display font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 hover:bg-secondary hover:text-white">
                    CarlosTayzer@gmail.com
                  </a>
                </div>
                {/* Visual Artifacts */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/40 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/40 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    label: 'LinkedIn', 
                    icon: Linkedin, 
                    url: 'https://www.linkedin.com/in/carlos-henrique-da-silva-frança-1563423b4', 
                    handle: 'Carlos Henrique',
                    color: 'hover:bg-blue-600',
                    border: 'hover:border-blue-500/50'
                  },
                  { 
                    label: 'GitHub', 
                    icon: Github, 
                    url: 'https://github.com/ra196648-source', 
                    handle: 'ra196648-source',
                    color: 'hover:bg-neutral-800',
                    border: 'hover:border-white/20'
                  },
                  { 
                    label: 'Instagram', 
                    icon: Instagram, 
                    url: 'https://instagram.com/eucarlos.yx', 
                    handle: '@eucarlos.yx',
                    color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-fuchsia-600',
                    border: 'hover:border-pink-500/50'
                  }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-10 flex flex-col items-center gap-8 transition-all group border-white/5 ${social.border}`}
                  >
                    <div className={`p-6 rounded-3xl bg-white/5 group-hover:scale-110 group-hover:rotate-12 transition-all ${social.color} group-hover:text-white shadow-xl`}>
                      <social.icon className="w-12 h-12" />
                    </div>
                    <div className="text-center space-y-2">
                      <span className="block font-display font-black text-white text-2xl uppercase tracking-tighter">{social.label}</span>
                      <span className="text-xs text-on-surface-variant font-mono uppercase tracking-[0.3em] bg-white/5 px-4 py-1 rounded-full">{social.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_#06b6d4]" />
             <p className="font-mono text-xs tracking-[0.3em] uppercase text-on-surface-variant font-black">
               ESTÁGIO_SISTEMAS // TADS_05 // 2024
             </p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ra196648-source" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white hover:text-surface transition-all hover:scale-110"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/carlos-henrique-da-silva-frança-1563423b4" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white hover:text-surface transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
            <a href="https://instagram.com/eucarlos.yx" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-white hover:text-surface transition-all hover:scale-110"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>

      {/* Mobile Nav Bar */}
      <AnimatePresence>
        <nav className="fixed bottom-0 left-0 w-full md:hidden z-50 bg-surface/60 backdrop-blur-3xl border-t border-white/10 px-8 py-5">
          <div className="flex justify-around items-center">
            {[
              { label: 'Início', icon: Home, id: 'inicio' },
              { label: 'Tech', icon: Cpu, id: 'tech' },
              { label: 'Código', icon: Code, id: 'código' },
              { label: 'Contato', icon: Mail, id: 'contato' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => changeTab(item.id)}
                className={`flex flex-col items-center gap-1.5 transition-all relative
                  ${activeTab === item.id ? 'text-primary scale-110' : 'text-on-surface-variant/50'}
                `}
              >
                <item.icon className={`w-6 h-6 ${activeTab === item.id ? 'animate-pulse' : ''}`} />
                <span className="font-display text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                {activeTab === item.id && (
                  <motion.div 
                    layoutId="activeMobileNav"
                    className="absolute -top-2 w-14 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                  />
                )}
              </button>
            ))}
          </div>
        </nav>
      </AnimatePresence>
    </div>
  );
}
