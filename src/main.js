// Portfolio Logic - Carlos Henrique
// Vanilla JavaScript implementation for Static Hosting

// --- Data ---
const PROJECTS = [
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
  { name: 'Algoritmos & Lógica', id: 'terminal', description: 'Fundamentos de programação, estruturas de dados e complexidade.', icon: 'terminal', color: 'secondary' },
  { name: 'Programação (POO)', id: 'box', description: 'Desenvolvimento orientado a objetos com foco em Java e C#.', icon: 'box', color: 'primary' },
  { name: 'Banco de Dados', id: 'database', description: 'Modelagem relacional (SQL Server/Postgres) e NoSQL (MongoDB).', icon: 'database', color: 'secondary' },
  { name: 'Eng. de Requisitos', id: 'fileSearch', description: 'Levantamento, análise e documentação de necessidades do usuário.', icon: 'file-search', color: 'primary' },
  { name: 'Web & Mobile', id: 'monitor', description: 'Criação de interfaces modernas e integração com back-end.', icon: 'monitor', color: 'secondary' },
  { name: 'Infra & Redes', id: 'server', description: 'Arquitetura de sistemas e fundamentos de redes de computadores.', icon: 'server', color: 'primary' }
];

const SOCIALS = [
  { 
    label: 'LinkedIn', 
    icon: 'linkedin', 
    url: 'https://www.linkedin.com/in/carlos-henrique-da-silva-frança-1563423b4', 
    handle: 'Carlos Henrique',
    color: 'hover:bg-blue-600',
    border: 'hover:border-blue-500/50'
  },
  { 
    label: 'GitHub', 
    icon: 'github', 
    url: 'https://github.com/ra196648-source', 
    handle: 'ra196648-source',
    color: 'hover:bg-neutral-800',
    border: 'hover:border-white/20'
  },
  { 
    label: 'Instagram', 
    icon: 'instagram', 
    url: 'https://instagram.com/eucarlos.yx', 
    handle: '@eucarlos.yx',
    color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-fuchsia-600',
    border: 'hover:border-pink-500/50'
  }
];

// --- Rendering Functions ---
function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;
    container.innerHTML = SKILLS.map((skill, idx) => `
        <div class="glass-card p-10 flex flex-col gap-8 group reveal-on-scroll" style="transition-delay: ${idx * 0.05}s">
            <div class="flex justify-between items-center">
                <div class="p-5 rounded-2xl transition-all group-hover:scale-110 ${skill.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}">
                    <i data-lucide="${skill.icon}" class="w-8 h-8"></i>
                </div>
                <span class="font-mono text-4xl text-white/5 font-black italic select-none">0${idx + 1}</span>
            </div>
            <div class="space-y-4">
                <h4 class="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">${skill.name}</h4>
                <p class="text-on-surface-variant leading-relaxed font-medium">${skill.description}</p>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    container.innerHTML = PROJECTS.map((project, idx) => `
        <div class="glass-card p-1.5 bg-gradient-to-br from-primary/30 via-white/5 to-secondary/30 group overflow-hidden reveal-on-scroll" style="transition-delay: ${idx * 0.1}s">
            <div class="bg-gray-900/60 rounded-[22px] p-10 h-full flex flex-col">
                <div class="flex justify-between items-start mb-12">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 transition-all">
                        <i data-lucide="${project.icon}" class="text-primary w-9 h-9"></i>
                    </div>
                    <span class="font-mono text-xs text-primary bg-primary/10 px-4 py-2 rounded-full font-black tracking-widest border border-primary/20">${project.systemId}</span>
                </div>
                <h4 class="font-display text-4xl font-black text-white mb-6 group-hover:text-primary transition-colors tracking-tight">${project.title}</h4>
                <p class="text-on-surface-variant mb-14 flex-grow leading-relaxed text-lg font-medium">${project.description}</p>
                <div class="grid grid-cols-2 gap-6">
                    ${project.metrics.map(metric => `
                        <div class="p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                            <p class="text-[11px] uppercase tracking-[0.3em] font-black text-on-surface-variant/60 mb-2">${metric.label}</p>
                            <p class="font-display text-2xl font-black ${metric.color === 'secondary' ? 'text-secondary' : 'text-primary'}">${metric.value}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSocials() {
    const container = document.getElementById('socials-grid');
    if (!container) return;
    container.innerHTML = SOCIALS.map((social, idx) => `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="glass-card p-10 flex flex-col items-center gap-8 transition-all group border-white/5 ${social.border} reveal-on-scroll" style="transition-delay: ${idx * 0.1}s">
            <div class="p-6 rounded-3xl bg-white/5 group-hover:scale-110 group-hover:rotate-12 transition-all ${social.color} group-hover:text-white shadow-xl">
                <i data-lucide="${social.icon}" class="w-12 h-12"></i>
            </div>
            <div class="text-center space-y-2">
                <span class="block font-display font-black text-white text-2xl uppercase tracking-tighter">${social.label}</span>
                <span class="text-xs text-on-surface-variant font-mono uppercase tracking-[0.3em] bg-white/5 px-4 py-1 rounded-full">${social.handle}</span>
            </div>
        </a>
    `).join('');
}

// --- Global Utilities ---
function setupRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveal.classList.add('visible');
        }
    });
}

// Global functions for HTML access
window.switchTab = (tabId) => {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none'; // Ensure it's hidden
    });
    
    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block'; // Use block for visible tabs
    }

    document.querySelectorAll('[data-tab]').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        if (window.lucide) window.lucide.createIcons();
        setupRevealOnScroll();
    }, 50);
};

window.handleDownloadCV = () => {
    const cvContent = `CARLOS HENRIQUE\n5º Semestre TADS\n\nContato: CarlosTayzer@gmail.com`;
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

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    try {
        renderSkills();
        renderProjects();
        renderSocials();
        
        const progressBar = document.getElementById('progress-bar');
        window.addEventListener('scroll', () => {
            const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScrollHeight > 0) {
                const scrolled = (window.scrollY / totalScrollHeight);
                if (progressBar) progressBar.style.transform = `scaleX(${scrolled})`;
            }
            setupRevealOnScroll();
        });

        if (window.lucide) window.lucide.createIcons();
        setupRevealOnScroll();

        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }
        
        // Ensure "inicio" is active by default
        window.switchTab('inicio');
        
    } catch (error) {
        console.error('Erro na inicialização:', error);
    }
});
