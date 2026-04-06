"use client";
import React, { useState, useEffect, useMemo, RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";
import { useFollowPointerDebug } from "@/use-folow-pointer";
import { FaReact } from "react-icons/fa";
import {
  SiFigma,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const typingTexts = useMemo(
    () => ["Hi, I'm Mubarak Olalekan", "I'm a Software Engineer"],
    []
  );

  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointerDebug(cursorRef as RefObject<HTMLElement>);

  const frontendTech = [
    {
      name: "React",
      icon: <FaReact className="text-blue-600" />,
      proficiency: 5,
      level: "Expert",
      experience: "3+ years",
      description: "Building complex SPAs with hooks, context, and modern patterns",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      proficiency: 4,
      level: "Advanced",
      experience: "2+ years",
      description: "SSR, SSG, API routes, and full-stack React applications",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      proficiency: 4,
      level: "Advanced",
      experience: "2+ years",
      description: "Type-safe development with strong typing practices",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      proficiency: 5,
      level: "Expert",
      experience: "2+ years",
      description: "Utility-first CSS framework for rapid UI development",
    },
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      proficiency: 4,
      level: "Advanced",
      experience: "2+ years",
      description: "Server-side JavaScript with Express and RESTful APIs",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" />,
      proficiency: 5,
      level: "Expert",
      experience: "4+ years",
      description: "ES6+, async/await, modern JavaScript patterns",
    },
  ];

  const toolsTech = [
    {
      name: "Git",
      icon: <SiGit className="text-orange-500" />,
      proficiency: 4,
      level: "Advanced",
      experience: "3+ years",
      description: "Version control, branching strategies, and collaboration",
    },
    {
      name: "VS Code",
      icon: <SiJavascript className="text-blue-600" />,
      proficiency: 5,
      level: "Expert",
      experience: "4+ years",
      description: "Primary development environment with extensions",
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-blue-600" />,
      proficiency: 3,
      level: "Intermediate",
      experience: "2+ years",
      description: "UI/UX design and prototyping for web applications",
    },
    {
      name: "API Integration",
      icon: <SiJavascript className="text-blue-600" />,
      proficiency: 4,
      level: "Advanced",
      experience: "2+ years",
      description: "RESTful APIs, GraphQL, and third-party integrations",
    },
  ];

  type Tech = {
    name: string;
    icon: React.ReactNode;
    proficiency: number;
    level: string;
    experience: string;
    description: string;
  };

  interface TechCardProps {
    tech: Tech;
    index: number;
  }

  const TechCard: React.FC<TechCardProps> = ({ tech, index }) => (
    <div
      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-blue-200"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300 shrink-0">
          <div className="text-xl group-hover:scale-110 transition-transform duration-300">
            {tech.icon}
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition-colors truncate">
            {tech.name}
          </h4>
          <span className="text-xs text-gray-400">{tech.experience}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-gray-500 font-medium">{tech.level}</span>
          <span className="text-xs text-blue-500 font-semibold">
            {Math.round((tech.proficiency / 5) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(tech.proficiency / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );

  const projects = [
    {
      title: "WorkLink — Skilled Labour Marketplace",
      description:
        "A full-stack Nigerian marketplace connecting customers with verified artisans. Features multi-step onboarding, job posting, worker discovery, and Interswitch payment integration for customer payments and artisan payouts.",
      tech: ["React", "Node.js", "Firebase", "Interswitch"],
      link: "https://work-link-three.vercel.app",
    },
    {
      title: "Voice Assisted AI Fitness planner",
      description:
        "A web app that helps users plan their fitness routines using voice commands.",
      tech: ["Next.js", "TypeScript", "TailwindCSS"],
      link: "https://spitch-hackathon-8w49-6nlhxqwih-mubee316s-projects.vercel.app",
    },
    {
      title: "E-commerce Storefront",
      description:
        "Responsive e-commerce app with product rendering and cart system.",
      tech: ["React", "Chakra UI", "API Integration"],
      link: "https://ecommerce-webapp-sand.vercel.app",
    },
    {
      title: "LinkBites",
      description:
        "A web app that shortens URLs, generates QR codes, and tracks analytics.",
      tech: ["TypeScript", "API", "TailwindCSS"],
      link: "https://mubarak-pro.vercel.app/",
    },
    {
      title: "Notion Test",
      description:
        "A project that integrates with Notion API to manage images and search output.",
      tech: ["Vue.js", "Notion API", "Splash API", "TailwindCSS"],
      link: "https://notion-test-alpha.vercel.app/",
    },
  ];

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "tech", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.slice(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentCharIndex > 0) {
            setDisplayText(currentText.slice(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, typingTexts]);

  interface ScrollToSectionFn {
    (sectionId: string): void;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgoprzlg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const scrollToSection: ScrollToSectionFn = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-50
             opacity-60 blur-3xl mix-blend-exclusion
             bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.8),rgba(236,72,153,0.6),rgba(59,130,246,0.4))]"
        style={{ x, y }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">
              <span className="text-blue-600">Mubarak</span>
              <span className="text-teal-500">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`relative pb-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`block w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 opacity-10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rotate-45 animate-float opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-purple-500 rotate-45 animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-teal-500 rounded-full animate-float-slow opacity-50"></div>
          <div className="absolute top-16 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Floating code snippets */}
        <div className="absolute top-1/4 left-10 opacity-10 text-sm font-mono text-blue-600 animate-float hidden lg:block">
          const developer = () =&gt; {"{"}
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 text-sm font-mono text-purple-600 animate-float-delayed hidden lg:block">
          return &lt;Innovation /&gt;
        </div>
        <div className="absolute bottom-1/3 left-12 opacity-10 text-sm font-mono text-teal-600 animate-float-slow hidden lg:block">
          {"}"};
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8 shadow-sm animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for hire
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent animate-fade-in min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-blue-500">|</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 animate-fade-in delay-300 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-800">
              Frontend / Full-Stack Developer
            </span>{" "}
            — building interactive, user-friendly web experiences and
            production-grade applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in delay-500">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-medium"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all transform hover:scale-105 shadow-sm font-medium"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium px-2"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <span className="text-xs text-gray-400 font-medium">Scroll</span>
            <ChevronDown size={20} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
                About Me
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                A bit about me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m a Frontend/Full-Stack Developer skilled in building
                responsive, modern web applications. I have experience building
                production marketplaces, social platforms, and fintech payment
                integrations. I enjoy working with React, Next.js, TypeScript,
                and Tailwind CSS, and I&apos;m currently building WorkLink — a
                full-stack Nigerian artisan marketplace.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-gray-100">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "10+", label: "Projects Built" },
                  { value: "5+", label: "Tech Integrations" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  {
                    icon: Code,
                    label: "Clean Code",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: Palette,
                    label: "Great Design",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: Zap,
                    label: "Fast Performance",
                    color: "text-teal-600",
                    bg: "bg-teal-50",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`p-4 ${item.bg} rounded-xl`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <item.icon
                      className={`w-6 h-6 ${item.color} mx-auto mb-2`}
                    />
                    <p className="text-xs font-medium text-gray-700">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-400 via-teal-400 to-purple-400 rounded-full blur-3xl opacity-40"
                animate={{ y: [0, -20, 0, 20, 0], x: [0, 15, 0, -15, 0] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-200">
                  <Image
                    src="/mubee.jpg"
                    alt="Mubarak Olalekan"
                    width={256}
                    height={256}
                    className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-700">
                      Open to work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
              Skills
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Tech Stack
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Technologies I work with to build modern, scalable, and
              user-friendly applications
            </p>
          </div>

          <div className="space-y-10">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">⚡</span>
                <h3 className="text-base font-semibold text-gray-800">
                  Frontend Development
                </h3>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {frontendTech.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">🔧</span>
                <h3 className="text-base font-semibold text-gray-800">
                  Backend &amp; Database
                </h3>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {backendTech.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">🛠️</span>
                <h3 className="text-base font-semibold text-gray-800">
                  Tools &amp; Technologies
                </h3>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {toolsTech.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
              Portfolio
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2.5 rounded-lg transition-colors font-medium"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block text-xs font-semibold text-blue-400 bg-blue-900/40 px-3 py-1 rounded-full mb-3 tracking-wide uppercase">
              Contact
            </div>
            <h2 className="text-4xl font-bold mb-3">Get In Touch</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Left info panel */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors group">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">
                      Email me at
                    </div>
                    <a
                      href="mailto:mubarakolalekan316@gmail.com"
                      className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors"
                    >
                      mubarakolalekan316@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-green-400 text-lg leading-none">
                      ●
                    </span>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">
                      Availability
                    </div>
                    <div className="text-sm font-medium text-white">
                      Open to full-time &amp; freelance
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">
                  Find me on
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/mubee316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/mubarak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/mubarak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 text-sm transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 text-sm transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500 text-sm transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? "Sending..." : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                </button>
                {formStatus === "success" && (
                  <p className="text-green-400 text-sm text-center">
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Email me directly instead.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-white font-bold text-lg">Mubarak</span>
              <span className="text-teal-500 font-bold text-lg">.</span>
              <p className="text-xs text-gray-600 mt-1">
                © 2026 Mubarak Olalekan. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 1s;
        }
        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
        .bg-gradient-radial {
          background: radial-gradient(
            circle,
            var(--tw-gradient-from),
            var(--tw-gradient-to)
          );
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
