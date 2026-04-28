// Portfolio Logic - Carlos Henrique
// Vanilla JavaScript implementation

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

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderSocials();
    setupScrollEffects();
    
    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

// --- Functions ---
window.switchTab = (tabId) => {
    // Update Content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });
    const target = document.getElementById(`tab-${tabId}`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('block');
    }

    // Update Nav Buttons
    document.querySelectorAll('[data-tab]').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset Lucide icons for new content
    setTimeout(() => {
        if (window.lucide) window.lucide.createIcons();
        setupRevealOnScroll(); // Re-trigger reveal check
    }, 100);
};

window.handleDownloadCV = () => {
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

function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = SKILLS.map((skill, idx) => `
        <div class="glass-card p-10 flex flex-col gap-8 group reveal-on-scroll" style="transition-delay: ${idx * 0.05}s">
            <div class="flex justify-between items-center">
                <div class="p-5 rounded-2xl transition-all group-hover:scale-110 ${skill.color === 'secondary' ? 'bg-secondary/20 text-secondary shadow-lg shadow-secondary/10' : 'bg-primary/20 text-primary shadow-lg shadow-primary/10'}">
                    <i data-lucide="${skill.icon}" class="w-8 h-8"></i>
                </div>
                <span class="font-mono text-4xl text-white/5 font-black italic select-none">0${idx + 1}</span>
            </div>
            
            <div class="space-y-4">
                <h4 class="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    ${skill.name}
                </h4>
                <p class="text-on-surface-variant leading-relaxed font-medium">
                    ${skill.description}
                </p>
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    container.innerHTML = PROJECTS.map((project, idx) => `
        <div class="glass-card p-1.5 bg-gradient-to-br from-primary/30 via-white/5 to-secondary/30 group overflow-hidden reveal-on-scroll">
            <div class="bg-surface-container-low rounded-[22px] p-10 h-full flex flex-col">
                <div class="flex justify-between items-start mb-12">
                <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 transition-all">
                    <i data-lucide="${project.icon === 'code' ? 'code' : project.icon === 'database' ? 'database' : 'cpu'}" class="${project.icon === 'code' || project.icon === 'cpu' ? 'text-secondary' : 'text-primary'} w-9 h-9"></i>
                </div>
                <span class="font-mono text-xs text-primary bg-primary/10 px-4 py-2 rounded-full font-black tracking-widest border border-primary/20">
                    ${project.systemId}
                </span>
                </div>
                
                <h4 class="font-display text-4xl font-black text-white mb-6 group-hover:text-primary transition-colors tracking-tight">${project.title}</h4>
                <p class="text-on-surface-variant mb-14 flex-grow leading-relaxed text-lg font-medium">
                ${project.description}
                </p>
                
                <div class="grid grid-cols-2 gap-6">
                ${project.metrics.map(metric => `
                    <div class="p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-all">
                    <p class="text-[11px] uppercase tracking-[0.3em] font-black text-on-surface-variant/60 mb-2">
                        ${metric.label}
                    </p>
                    <p class="font-display text-2xl font-black ${metric.color === 'secondary' ? 'text-secondary' : 'text-primary'}">
                        ${metric.value}
                    </p>
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

    container.innerHTML = SOCIALS.map((social) => `
        <a 
            href="${social.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="glass-card p-10 flex flex-col items-center gap-8 transition-all group border-white/5 ${social.border}"
        >
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

function setupScrollEffects() {
    const progressBar = document.getElementById('progress-bar');
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
        if (progressBar) {
            progressBar.style.transform = `scaleX(${scrolled})`;
        }
        setupRevealOnScroll();
    });

    setupRevealOnScroll();
}

function setupRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('visible');
        }
    });
}
