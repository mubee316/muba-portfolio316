"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useRef } from "react";
import { useFollowPointerDebug } from "@/use-folow-pointer";
import { FaReact, FaTypescript } from "react-icons/fa";
import { SiFigma, SiGit, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = ["Hi, I'm Mubarak Olalekan", "I'm a Software Engineer"];

  const cursorRef = useRef(null);
  const { x, y } = useFollowPointerDebug(cursorRef);

  // Remove this stray return, as it breaks the component rendering
  // return <motion.div ref={ref} className="box" style={{ x, y }} />;

  const frontendTech = [
    {
      name: "React",
      icon: <FaReact className="text-blue-600" /> ,
      proficiency: 5,
      level: "Expert",
      experience: "3+ years",
      description:
        "Building complex SPAs with hooks, context, and modern patterns",
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
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      proficiency: 3,
      level: "Intermediate",
      experience: "1+ years",
      description: "NoSQL database design and aggregation pipelines",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
      proficiency: 3,
      level: "Intermediate",
      experience: "1+ years",
      description: "Relational database design and complex queries",
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
  const TechCard = ({ tech, index }) => (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group cursor-pointer border border-gray-100"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon with gradient background */}
      <div className="relative mb-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-300">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
            {tech.icon}
          </div>
        </div>
      </div>

      {/* Technology Name */}
      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {tech.name}
      </h4>

      {/* Proficiency Level */}
      <div className="mb-3">
        <div className="flex justify-center mb-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full mx-0.5 transition-all duration-300 ${
                i < tech.proficiency
                  ? "bg-blue-500 group-hover:bg-blue-600"
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 font-medium">{tech.level}</span>
      </div>

      {/* Years of Experience */}
      <div className="text-xs text-gray-400 font-medium">{tech.experience}</div>

      {/* Hover Effect - Additional Info */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
        <div className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
          {tech.description}
        </div>
      </div>
    </div>
  );
  const projects = [
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
      description: "A web app that shortens URLs, generates QR codes, and tracks analytics.",
      tech: ["typescript", "API", "TailwindCSS"],
      link: "https://mubarak-pro.vercel.app/",
    },
    {
      title: "Fit-Track AI",
      description: "Built a fitness web app that generates personalized workouts and nutrition plans, with an AI-powered chatbot for fitness tips.- Features API integrations for dynamic content and user tracking.",
      tech: ["React.js", "API Integration", "TailwindCSS"],
      link: "https://github.com/mubee316/fitness-padi",
    },
    {
      title: "Notion Test",
      description: "A project that integrates with Notion API to manage images and search output.",
      tech: ["vue.js", "Notion API", "splash API", "TailwindCSS"],
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

  // Typing effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.slice(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            // Wait before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayText(currentText.slice(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            // Move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTextIndex, isDeleting, typingTexts]);

  const scrollToSection = (sectionId) => {
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
      {/* Cursor */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">Mubarak</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`transition-colors hover:text-blue-600 ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
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
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 opacity-10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
          }}
        ></div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

          {/* Additional Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rotate-45 animate-float opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-purple-500 rotate-45 animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-teal-500 rounded-full animate-float-slow opacity-50"></div>
          <div className="absolute top-1/2 right-1/4 w-8 h-8 border-2 border-blue-400 rounded-full animate-float opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/5 w-5 h-5 bg-purple-400 animate-float-delayed opacity-40"></div>

          {/* Particle Effects */}
          <div className="absolute top-16 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Code Snippets Floating Around */}
        <div className="absolute top-1/4 left-10 opacity-10 text-sm font-mono text-blue-600 animate-float">
          const developer = () =&gt; {"{"}
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 text-sm font-mono text-purple-600 animate-float-delayed">
          return &lt;Innovation /&gt;
        </div>
        <div className="absolute bottom-1/3 left-12 opacity-10 text-sm font-mono text-teal-600 animate-float-slow">
          {"}"};
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Spotlight Effect */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-blue-200 via-transparent to-transparent opacity-20 animate-pulse"></div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent animate-fade-in min-h-[1.2em] relative">
            {displayText}
            <span className="animate-pulse text-blue-500">|</span>
            {/* Glowing Text Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent opacity-50 filter blur-sm">
              {displayText}
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-300 relative">
            Frontend Developer | Passionate about building interactive and
            user-friendly web experiences
            {/* Subtle underline animation */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 animate-pulse"></div>
          </p>

          <div className="space-x-4 animate-fade-in delay-500">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="relative">
              <ChevronDown size={32} className="text-gray-400" />
              <div className="absolute inset-0 animate-ping">
                <ChevronDown size={32} className="text-gray-300 opacity-30" />
              </div>
            </div>
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I&apos;m a frontend developer skilled in building responsive,
                modern web applications. I enjoy working with React, Next.js,
                TypeScript, and Tailwind CSS. My goal is to create digital
                solutions that balance functionality and design.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { icon: Code, label: "Clean Code", color: "text-blue-600" },
                  {
                    icon: Palette,
                    label: "Great Design",
                    color: "text-purple-600",
                  },
                  {
                    icon: Zap,
                    label: "Fast Performance",
                    color: "text-teal-600",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <item.icon
                      className={`w-8 h-8 ${item.color} mx-auto mb-2`}
                    />
                    <p className="text-sm font-medium">{item.label}</p>
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
              {/* Floating gradient blob */}
              <motion.div
                className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-400 via-teal-400 to-purple-400 rounded-full blur-3xl opacity-40"
                animate={{
                  y: [0, -20, 0, 20, 0],
                  x: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image card */}
              <div className="w-60 h-60 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center relative z-10">
                <Image
                  src="/mubee.jpg"
                  alt="Mubarak Olalekan"
                  width={240}
                  height={240}
                  className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}

      <section id="tech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Technologies I work with to build modern, scalable, and
            user-friendly applications
          </p>

          {/* Categories */}
          <div className="space-y-12">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-blue-500">⚡</span>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {frontendTech.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-green-500">🔧</span>
                Backend & Database
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {backendTech.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </div>

            {/* Tools & Others */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                <span className="text-purple-500">🛠️</span>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Have a project in mind or want to collaborate? Feel free to
                reach out.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:mubarak@example.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>mubarakolalekan316@gmail.com</span>
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/mubee316"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/mubarak"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/mubarak"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  onClick={() =>
                    alert(
                      "Message functionality would be implemented with a backend service"
                    )
                  }
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Mubarak Olalekan. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
