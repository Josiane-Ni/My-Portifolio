import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Briefcase,
  Send,
  Mail,
  Phone,
  Download,
  Menu,
  X,
  ChevronRight,
  Database,
  Layout,
  Cpu,
  ShieldCheck,
  Zap,
  CodeXml,
  ArrowRight,
  GitBranch,
  Settings,
  Monitor
} from 'lucide-react';
import { navLinks, expertise, projects, socialLinks } from './data/portfolioData';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="bg-shape shape-1" />
      <div className="bg-shape shape-2" />

      {/* Technical Brief Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Technical Documentation</h3>
                <button className="close-modal" onClick={() => setIsModalOpen(false)}><X size={20} /></button>
              </div>
              <div className="modal-body">
                <div className="profile-preview">
                  <img src="/profile.png" alt="Josiane Nikuze" />
                  <div>
                    <h4>Josiane Nikuze</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <div className="preview-scroll-area">
                  <div className="doc-page">
                    <div className="doc-header">
                      <h2>ExploreRwanda Ecosystem</h2>
                      <p>Full-Stack Architectural Overview & Implementation</p>
                    </div>

                    <div className="doc-section">
                      <h4>Executive Summary</h4>
                      <p>ExploreRwanda is an enterprise-grade digital ecosystem designed to modernize tourism infrastructure in Rwanda. The platform synchronizes Tour Operators, Hotels, and Travelers through a high-performance logistics engine.</p>
                    </div>

                    <div className="doc-section">
                      <h4>Technical Stack</h4>
                      <ul>
                        <li><strong>Engine:</strong> Node.js, Spring Boot, PostgreSQL</li>
                        <li><strong>Real-Time:</strong> Socket.io for instant entity synchronization</li>
                        <li><strong>Interface:</strong> React.js & Next.js for high-fidelity UX</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                  <a href="/ExploreRwanda_Documentation.md" download className="btn btn-primary">
                    <Download size={18} /> Download Brief
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="modal-overlay" onClick={() => setIsResumeOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              className="resume-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="resume-modal-header">
                <div className="resume-modal-title">
                  <div className="logo-icon" style={{ width: 28, height: 28, fontSize: '0.75rem' }}>JN</div>
                  <div>
                    <h3>Josiane Nikuze</h3>
                    <span className="bento-badge">// Resume Preview</span>
                  </div>
                </div>
                <button className="close-modal" onClick={() => setIsResumeOpen(false)}><X size={20} /></button>
              </div>

              {/* Scrollable Document Preview */}
              <div className="resume-scroll-area">
                <div className="resume-doc">

                  {/* Doc Header */}
                  <div className="resume-doc-header">
                    <div>
                      <h1>Josiane Nikuze</h1>
                      <p className="resume-doc-role">Software Developer · Frontend Engineer</p>
                    </div>
                    <div className="resume-doc-contacts">
                      <span>josianenikuze45@gmail.com</span>
                      <span>+250 798 271 462</span>
                      <span>Rwanda</span>
                    </div>
                  </div>

                  <div className="resume-doc-divider" />

                  {/* Summary */}
                  <div className="resume-doc-section">
                    <h2>Professional Summary</h2>
                    <p>Dedicated software developer specializing in building responsive and interactive web applications. Experienced in React.js, modern UI design, data visualization, and database-driven systems. Passionate about delivering high-quality, user-centric digital solutions.</p>
                  </div>

                  {/* Skills */}
                  <div className="resume-doc-section">
                    <h2>Technical Skills</h2>
                    <div className="resume-skills-grid">
                      <div><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Material UI, React Router</div>
                      <div><strong>Data & Visualization:</strong> Recharts, SQL, PostgreSQL</div>
                      <div><strong>Backend & Tools:</strong> Node.js, Git / GitHub, Responsive Design, Agile</div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="resume-doc-section">
                    <h2>Experience</h2>
                    <div className="resume-exp-item">
                      <div className="resume-exp-header">
                        <div>
                          <strong>Software Developer</strong> — Personal & Academic Projects
                          <p style={{ color: '#666', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>IPRC Karongi</p>
                        </div>
                        <span className="resume-exp-date">2024 – Present</span>
                      </div>
                      <ul className="resume-exp-list">
                        <li>Developed responsive web applications using HTML, CSS, JavaScript, and React.js.</li>
                        <li>Built modern UIs focused on usability, performance, and responsive design.</li>
                        <li>Designed management systems and dashboard interfaces for academic projects.</li>
                        <li>Utilized React Router for navigation and Material UI for frontend design.</li>
                        <li>Created data visualization dashboards using Recharts.</li>
                        <li>Collaborated on projects involving frontend design and database integration.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="resume-doc-section">
                    <h2>Key Projects</h2>
                    {[
                      { title: 'Employees Payroll Management System', desc: 'Payroll app with employee management, salary calculation, and analytics dashboard.', tech: 'React.js, Material UI, Recharts, SQL' },
                      { title: 'Rwanda Tourism Management System', desc: 'Tourism database system with booking, accommodation, and destination management.', tech: 'React.js, Node.js, PostgreSQL, React Router' },
                      { title: 'RP Karongi College Website', desc: 'Responsive institutional website with dark/light mode, live clocks, and image gallery.', tech: 'HTML5, CSS3, JavaScript' },
                      { title: 'ExploreRwanda Ecosystem', desc: 'High-concurrency tourism management platform with real-time synchronization.', tech: 'React.js, Node.js, PostgreSQL, Socket.io' },
                    ].map(p => (
                      <div key={p.title} className="resume-project-item">
                        <strong>{p.title}</strong>
                        <p>{p.desc}</p>
                        <span className="resume-tech-tag">{p.tech}</span>
                      </div>
                    ))}
                  </div>

                  {/* Education */}
                  <div className="resume-doc-section">
                    <h2>Education</h2>
                    <div className="resume-exp-item">
                      <div className="resume-exp-header">
                        <div>
                          <strong>Information & Communication Technology</strong>
                          <p style={{ color: '#666', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>IPRC Karongi — Rwanda Polytechnic</p>
                        </div>
                        <span className="resume-exp-date">2022 – Present</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Actions */}
              <div className="resume-modal-actions">
                <button className="btn btn-secondary" onClick={() => setIsResumeOpen(false)}>
                  <X size={16} /> Cancel
                </button>
                <a href="/ExploreRwanda_Documentation.md" download className="btn btn-primary">
                  <Download size={16} /> Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <div className="logo-icon">JN</div>
            Josiane Nikuze
          </a>

          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href}>{link.name}</a>
            ))}
            <button onClick={() => setIsResumeOpen(true)} className="nav-resume-btn">
              <Download size={14} /> Resume
            </button>
            <a href="#contact" className="nav-btn">Connect</a>
          </nav>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="mobile-nav"
          >
            <button className="mobile-menu-btn" style={{ position: 'absolute', top: '2rem', right: '2rem' }} onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} style={{ fontSize: '2rem', color: 'white', textDecoration: 'none', fontWeight: 800 }} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="hero" id="home">
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="hero-subtitle">Software Engineer // Full Stack</span>
          <h1 className="hero-title">Engineering Digital <span className="highlight">Solutions</span>.</h1>
          <p className="hero-description">
            Specializing in building scalable management systems and high-fidelity user interfaces with a focus on performance and technical excellence.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary">
              <Download size={18} /> Technical Brief
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="hero-image-wrapper"
        >
          <img src="/profile.png" alt="Josiane Nikuze" className="hero-profile-img" />
          <div className="hero-badge">
            <ShieldCheck size={14} color="#3b82f6" />
            <span>Status: Production Ready</span>
          </div>
        </motion.div>
      </section>

      {/* Technical Profile Section (Combined Stats and About) */}
      <section className="profile-section" id="about">
        <div className="profile-grid">
          <div className="profile-main">
            <div className="section-header-compact">
              <span className="bento-badge">// Professional Summary</span>
              <h2>Architecting Scalable Systems</h2>
              <p>Dedicated to engineering efficient software that bridges the gap between technical complexity and user-centric design.</p>
            </div>
            <div className="profile-narrative">
              <p>
                As a <strong>Software Engineer</strong>, I specialize in building robust digital ecosystems. My methodology prioritizes stability, performance, and seamless integration.
              </p>
              <div className="profile-social-row">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} className="social-tag">
                    <social.icon size={14} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-sidebar">
            <div className="stat-card">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">12+</div>
              <div className="stat-label">Solutions Shipped</div>
            </div>
            <div className="profile-focus-card">
              <span className="bento-badge">Specialized Focus</span>
              <div className="focus-list">
                <span><Layout size={12} /> UX Architecture</span>
                <span><Database size={12} /> Data Persistence</span>
                <span><Settings size={12} /> System Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="section-header">
          <h2>Technical <span className="highlight">Experience</span></h2>
          <p>Building, shipping, and iterating on real-world engineering solutions.</p>
        </div>

        {/* Main Split Card */}
        <div className="xp-card">
          <div className="xp-card-accent-line" />

          {/* LEFT: Role Info */}
          <div className="xp-left">
            <div className="xp-status">
              <span className="xp-status-dot" />
              <span>Active</span>
            </div>
            <div className="xp-role-block">
              <span className="bento-badge">// Personal &amp; Academic</span>
              <h3 className="xp-role-title">Software<br />Developer</h3>
              <div className="xp-role-org"><Cpu size={12} /> IPRC Karongi</div>
            </div>
            <div className="xp-date-range">
              <div className="xp-date-col">
                <span className="xp-year">2024</span>
                <span className="xp-year-label">From</span>
              </div>
              <div className="xp-date-bar" />
              <div className="xp-date-col">
                <span className="xp-year" style={{ color: 'var(--accent)' }}>Now</span>
                <span className="xp-year-label">To</span>
              </div>
            </div>
            <div className="xp-mini-stats">
              <div className="xp-mini-stat">
                <span className="xp-mini-val">7</span>
                <span className="xp-mini-key">Skills</span>
              </div>
              <div className="xp-mini-stat">
                <span className="xp-mini-val">3</span>
                <span className="xp-mini-key">Projects</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Responsibilities */}
          <div className="xp-right">
            <span className="bento-badge" style={{ marginBottom: '1.5rem', display: 'block' }}>//  Responsibilities &amp; Contributions</span>
            <ul className="xp-list">
              {[
                <>Developed responsive and interactive web applications using HTML, CSS, JavaScript, and React.js.</>,
                <>Built modern user interfaces with a strong focus on usability, performance, and responsive design.</>,
                <>Designed and implemented management systems and dashboard interfaces for academic and personal projects.</>,
                <>Utilized React Router for seamless navigation and Material UI for professional frontend design.</>,
                <>Created data visualization dashboards using Recharts to improve data presentation and analysis.</>,
                <>Applied frontend development best practices, debugging techniques, and problem-solving skills in real-world environments.</>,
                <>Collaborated on projects involving frontend design, database integration, and system functionality.</>,
              ].map((item, i) => (
                <li key={i} className="xp-list-item">
                  <span className="xp-item-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="xp-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div className="xp-kp-divider">
          <div className="xp-kp-line" />
          <span className="xp-kp-label"><CodeXml size={13} /> KEY PROJECTS</span>
          <div className="xp-kp-line" />
        </div>

        <div className="xp-kp-grid">
          {[
            {
              num: '01', title: 'Employees Payroll Management System',
              desc: 'A payroll management application with employee management, salary calculation, and an analytics dashboard.',
              tech: ['React.js', 'Material UI', 'Recharts', 'SQL']
            },
            {
              num: '02', title: 'Rwanda Tourism Management System',
              desc: 'A tourism management database system with booking, accommodation, and destination management functionalities.',
              tech: ['React.js', 'Node.js', 'PostgreSQL', 'React Router']
            },
            {
              num: '03', title: 'RP Karongi College Website',
              desc: 'A responsive institutional website featuring dark/light mode, live clocks, image gallery, and interactive UX.',
              tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
            }
          ].map((p) => (
            <div key={p.num} className="xp-kp-card">
              <div className="xp-kp-bg-num">{p.num}</div>
              <div className="xp-kp-inner">
                <span className="xp-kp-index">Project {p.num}</span>
                <h4 className="xp-kp-title">{p.title}</h4>
                <p className="xp-kp-desc">{p.desc}</p>
                <div className="xp-kp-pills">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="section-header">
          <span className="bento-badge">// Core Capabilities</span>
          <h2>Technical <span className="highlight">Expertise</span></h2>
          <p>A comprehensive toolkit of technologies and professional methodologies.</p>
        </div>

        <div className="skills-grid-premium">
          {expertise.map((group) => {
            const Icon = {
              "Frontend Development": Layout,
              "Backend & Database": Database,
              "Programming & Technical": Cpu,
              "Tools & Platforms": Settings,
              "Professional Skills": Briefcase,
              "Currently Learning": Zap
            }[group.category] || CodeXml;

            return (
              <div key={group.category} className="skills-card-premium">
                <div className="skills-card-header">
                  <div className="skills-icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <h4>{group.category}</h4>
                </div>
                <div className="skills-list-premium">
                  {group.skills.map(skill => (
                    <div key={skill} className="skill-item-premium">
                      <div className="skill-dot" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2>Case <span className="highlight">Studies</span></h2>
        </div>

        <div className="projects-grid">
          {(showAllProjects ? projects : projects.slice(0, 3)).map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-header" style={{ backgroundImage: `url(${project.image})` }}>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="impact-points">
                  {project.impact.slice(0, 3).map(point => (
                    <div key={point} className="impact-point"><ChevronRight size={12} color="var(--accent)" /> {point}</div>
                  ))}
                </div>
                <div className="tech-pills">
                  {project.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div className="project-actions">
                  <a href={project.link} className="action-link">View Live <Monitor size={14} /></a>
                  <a href="#" className="action-link" style={{ color: 'var(--text-muted)' }}>Source Code <CodeXml size={14} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAllProjects && projects.length > 3 && (
          <div className="view-more-container">
            <button className="btn btn-secondary" onClick={() => setShowAllProjects(true)}>
              View More Projects <ArrowRight size={18} />
            </button>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="section-header">
          <h2>Professional <span className="highlight">Inquiry</span></h2>
          <p>Available for strategic collaborations and high-impact software engineering roles.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon"><Mail size={18} /></div>
              <div>
                <span className="bento-badge" style={{ marginBottom: '0.2rem' }}>Communication</span>
                <p>josianenikuze45@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Phone size={18} /></div>
              <div>
                <span className="bento-badge" style={{ marginBottom: '0.2rem' }}>Direct Line</span>
                <p>+250798271462</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-grid">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <textarea placeholder="Technical Brief / Project Inquiry..." rows="5" />
              <button type="submit" className="submit-btn">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <span className="bento-badge">// Collaboration</span>
            <h2>Have a project in mind?</h2>
            <p>I am currently open to new opportunities and strategic collaborations. Let's build something exceptional.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Get In Touch <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '1.5rem' }}>
              <div className="logo-icon">JN</div>
              Josiane Nikuze
            </div>
            <p>Architecting stable digital solutions with technical precision and a focus on performance.</p>
            <div className="footer-contact-info">
              <div className="contact-item"><Mail size={14} /> josianenikuze45@gmail.com</div>
              <div className="contact-item"><Phone size={14} /> +250 798 271 462</div>
            </div>
          </div>
          <div className="footer-nav-groups">
            <div className="footer-group">
              <h4>Sitemap</h4>
              <div className="link-grid">
                {navLinks.map(l => <a key={l.name} href={l.href}>{l.name}</a>)}
              </div>
            </div>
            <div className="footer-group">
              <h4>Network</h4>
              <div className="link-grid">
                <a href="#"><Globe size={14} /> GitHub</a>
                <a href="#"><Briefcase size={14} /> LinkedIn</a>
                <a href="#"><Send size={14} /> Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-line" />
          <div className="footer-bottom-content">
            <span>&copy; 2026 JOSIANE NIKUZE</span>
            <span className="footer-tag">ENGINEERED FOR EXCELLENCE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
