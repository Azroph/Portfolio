"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import {
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  ArrowRight,
  Star,
  Download,
  Sparkles,
} from "lucide-react"

const skills = [
  { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
  { name: "Next.js", level: 90, color: "from-gray-800 to-gray-900" },
  { name: "Redux", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
  { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
  { name: "MongoDB", level: 75, color: "from-green-600 to-emerald-600" },
  { name: "Figma", level: 70, color: "from-red-500 to-rose-500" },
]

const projects = [
  {
    title: "Application M6+",
    description: "Projet en entreprise pour la société Bedrock Streaming",
    image: "/M6.png",
    link: "https://www.m6.fr/",
    tags: ["React", "Redux", "Typescript"],
    featured: true,
  },
  {
    title: "Site d'affiliation jeuxplateau.fr",
    description: "Comparateur de produits et blog sur les jeux de plateaux",
    image: "/jeuxplateau.png",
    link: "https://www.jeuxplateau.fr/",
    tags: ["Astro.js", "Tailwind"],
    featured: true,
  },
]

const experiences = [
  {
    company: "Bedrock Streaming",
    title: "Développeur Frontend",
    period: "2023 - 2025",
    description: "Conception et développement d'interfaces utilisateur performantes et réactives, optimisées pour l'expérience sur téléviseurs connectés.\n\nImplémentation de la navigation (clavier/télécommande), gestion des favoris, des pages de catalogues dynamiques, et du moteur de recherche.\n\nCollaboration étroite avec les équipes design, backend et produit.",
    icon: Code,
    color: "from-slate-900 to-slate-400",
    subtitle: "Développement d'applications de streaming sur TV (Core)",
  },
  {
    company: "Agence EVOL",
    title: "Développeur Fullstack",
    period: "2020 - 2023",
    description: "Développement de plus d'une trentaine de sites vitrine sur mesure en autonomie.\n\nDéveloppement de thèmes WordPress personnalisés et de sites e-commerce.\n\nRelation directe avec les clients, gestion des retours en fonction des demandes et du devis, réalisation de tests techniques et mise en production des sites internet.\n\nRedirections et gestion de données via API et modules de Cron Job.\n\nMise en place de solutions automatiques de sauvegarde de données pour les maintenances des sites internet.",
    icon: Palette,
    color: "from-slate-900 to-slate-400",
    subtitle: "Développement Backend et Frontend de sites internet sur mesure",
  },
  {
    company: "Maison de la Danse",
    title: "Régisseur lumière",
    period: "2015 - 2020",
    description: "Programmation de pupitres lumière, installation du matériel électrique scénique, calcul des puissances électriques, accueil des compagnies de danse, restitution d'effets lumière en temps réel pendant les spectacles.",
    icon: Sparkles,
    color: "from-slate-900 to-slate-400",
    subtitle: "Régisseur lumière pour des spectacles en salle",
  },
]

// Données des formations
const educations = [
  {
    title: "Mastère ingénierie du web",
    subtitle: "Sous-titre de la formation",
    description: "Programme: React, Next.js, TypeScript, Node.js, MongoDB, Figma",
    date: "2023 - 2025",
    school: "ESGI - Science U",
    image: "/formation1.png",
  },
  {
    title: "Bachelor ingénierie du web",
    subtitle: "Sous-titre de la formation 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "2022 - 2023",
    school: "ESGI - Science U",
    image: "/formation2.png",
  },
  {
    title: "Titre de la formation 2",
    subtitle: "Sous-titre de la formation 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "2020 - 2022",
    school: "M2i",
    image: "/formation2.png",
  },
  {
    title: "Titre de la formation 2",
    subtitle: "Sous-titre de la formation 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "2015 - 2017",
    school: "Edouard Branly",
    image: "/formation2.png",
  },
  {
    title: "Titre de la formation 2",
    subtitle: "Sous-titre de la formation 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "2013 - 2015",
    school: "Edouard Branly",
    image: "/formation2.png",
  },
]

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  // Suppression des hooks et variables inutilisés

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 overflow-x-hidden"
    >

      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),rgba(255,255,255,0))]" />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-200/40 to-purple-200/40 rounded-full blur-3xl"
          style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)` }}
        />
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-2xl"
          style={{ transform: `translate(${scrollY * 0.15}px, ${-scrollY * 0.1}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-50/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-slate-900 to-slate-400 rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  AF
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-900 to-slate-400 rounded-2xl blur opacity-20" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Antoine Falgiglio
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">Développeur Fullstack</p>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-6 md:space-x-8">
              {["Accueil", "À propos", "Expériences", "Projets", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("à propos", "about").replace("expériences", "experience")}`}
                  className="relative text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 group"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-900 to-slate-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile burger */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 rounded focus:outline-none"
                onClick={() => setActiveSection(activeSection === 'menu' ? '' : 'menu')}
                aria-label="Ouvrir le menu"
              >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              </button>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href="https://github.com/Azroph"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300 group"
              >
                <Github className="w-5 h-5 text-slate-700 group-hover:text-slate-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/antoine-falgiglio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-slate-700" />
              </a>
            </div>
          </div>
          {/* Mobile menu */}
          {activeSection === 'menu' && (
            <div className="md:hidden mt-2 flex flex-col space-y-2 bg-white rounded-xl shadow-lg p-4">
              {["Accueil", "À propos", "Expériences", "Projets", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("à propos", "about").replace("expériences", "experience")}`}
                  className="text-base font-medium text-slate-700 py-2 px-2 rounded hover:bg-slate-100"
                  onClick={() => setActiveSection('')}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 pt-24 sm:pt-20">
        <div className="max-w-3xl sm:max-w-5xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-800 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4" />
              Disponible pour de nouveaux projets
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-400 bg-clip-text text-transparent">
              Créateur
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-light mb-6 sm:mb-8 text-gray-700">d&#39;expériences digitales</h2>
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-3xl mx-auto leading-relaxed">
              Je transforme vos idées en applications web modernes, performantes et élégantes qui marquent les esprits
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
            <a href="#projets" className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-500 text-white rounded-2xl font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <span className="relative z-10 flex items-center gap-2">
                Voir mes projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="/CV%202025.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 hover:border-slate-600 rounded-2xl font-semibold text-base sm:text-lg hover:bg-slate-50 transition-all duration-300 flex items-center gap-2 text-gray-700 hover:text-slate-800"
            >
              <Download className="w-5 h-5" />
              Télécharger CV
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-slate-700" />
              Lyon, France
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-slate-400" />
              Disponible
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="p-2 bg-white/80 rounded-full shadow-lg">
            <ChevronDown className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="py-12 sm:py-20 px-3 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Un développeur passionné par la création d&#39;expériences web modernes et élégantes.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Photo de travail */}
            <div className="relative w-full md:w-[48%] flex justify-center mb-6 md:mb-0">
              <div className="w-full max-w-xs sm:max-w-md aspect-[9/8] rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
                <Image
                  src="/Antoine Falgiglio Developpeur Web.jpg"
                  alt="Antoine Falgiglio Developpeur Web"
                  width={360}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-900 to-slate-400 rounded-3xl blur opacity-20" />
            </div>

            {/* Texte de présentation */}
            <div className="w-full md:w-1/2 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="mb-4 sm:mb-6">
                Passionné par le développement web, j&#39;aime transformer des idées en produits digitaux concrets et
                impactants. Mon parcours m&#39;a permis d&#39;explorer de nombreux domaines : SaaS, e-commerce, design system,
                UI/UX…
              </p>
              <p className="mb-4 sm:mb-6">
                J&#39;accorde une grande importance à la qualité du code, à l&#39;expérience utilisateur et à la collaboration.
                Toujours curieux, je me forme en continu sur les nouvelles technologies et j&#39;aime partager mes
                connaissances avec la communauté.
              </p>
              <p>
                Mon objectif : créer des solutions élégantes, performantes et utiles, tout en gardant l&#39;humain au centre
                de chaque projet.
              </p>
            </div>
          </div>

          {/* Compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-10 sm:mt-16">
            {/* Card compétences techniques */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-slate-900 to-slate-400 rounded-2xl">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
                  Compétences techniques
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Card soft skills */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 sm:p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-slate-900 to-slate-400 rounded-2xl">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
                  Soft skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Travail en équipe",
                  "Communication",
                  "Créativité",
                  "Esprit d'analyse",
                  "Curiosité",
                  "Adaptabilité",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 hover:from-slate-200 hover:to-slate-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              Mon parcours
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Une évolution constante vers l&#39;excellence technique</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-900 via-slate-400 to-slate-200" />

            {experiences.map((exp) => {
              const Icon = exp.icon
              return (
                <div key={exp.company} className="relative flex flex-col sm:flex-row items-start mb-8 sm:mb-12 group">
                  <div
                    className={`absolute left-2 sm:left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300`}
                  />

                  <div className="sm:ml-20 mt-6 sm:mt-0 bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 group-hover:border-slate-200 transition-all duration-300 w-full shadow-lg hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-0">
                        <div className={`p-2 sm:p-3 bg-gradient-to-r from-slate-900 to-slate-400 rounded-xl shadow-lg`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">{exp.title}</h3>
                          <p className="text-slate-800 font-medium text-sm">{exp.company}</p>
                          {exp.subtitle && (
                            <h4 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                              {exp.subtitle}
                            </h4>
                          )}
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 sm:px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">{exp.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Formations */}
      <section id="formations" className="py-4 px-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              Formations
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Un parcours académique et professionnel enrichissant</p>
          </div>
          <div className="flex flex-col gap-4">
            {educations.map((edu, idx) => (
              <div key={edu.title + edu.date + idx} className="flex items-center bg-white/80 rounded-xl border border-gray-200/50 p-4 shadow min-h-[72px]">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                    <img src={edu.image} alt={edu.title} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="flex-1 text-gray-700 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-base font-bold bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent truncate max-w-[200px]">{edu.title}</span>
                    <span className="text-sm text-slate-600 font-medium truncate max-w-[140px]">{edu.subtitle}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-500">{edu.date}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-500">{edu.school}</span>
                  </div>
                  <p className="text-[13px] text-gray-600 truncate max-w-full mt-1">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-12 sm:py-20 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              Mes réalisations
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Une sélection de projets qui reflètent ma passion pour l&#39;innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/50 group-hover:border-slate-400 transition-all duration-500 group-hover:scale-[1.02] shadow-xl hover:shadow-2xl">
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                        <div className="p-2 bg-white/90 rounded-full">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-slate-800 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-2 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 sm:gap-2 text-slate-800 hover:text-slate-400 font-medium group/link text-sm sm:text-base cursor-pointer">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-900/20 to-slate-400/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </a>
              ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <div key={project.title} className="group relative">
                  <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 group-hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-slate-800 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-1 text-slate-800 hover:text-slate-400 text-xs sm:text-sm font-medium"
                        >
                          Voir
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-b from-gray-50/50 to-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-400 bg-clip-text text-transparent">
              Travaillons ensemble
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Discutons de la façon dont je peux vous aider à le concrétiser
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Email */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:border-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              <a
                href="mailto:antoine.falgiglio@gmail.com"
                className="p-2 sm:p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Envoyer un email"
              >
                <Mail className="w-5 h-6 sm:w-6 sm:h-6 text-white" />
              </a>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Email</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">Réponse sous 24h</p>
              <a href="mailto:antoine.falgiglio@email.com" className="text-slate-600 hover:text-slate-700 font-medium text-xs sm:text-base">
                antoine.falgiglio@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:border-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              <a
                href="https://www.linkedin.com/in/antoine-falgiglio/"
                className="p-2 sm:p-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le profil LinkedIn"
              >
                <Linkedin className="w-5 h-6 sm:w-6 sm:h-6 text-white" />
              </a>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">Restons connectés</p>
              <a href="https://www.linkedin.com/in/antoine-falgiglio/" className="text-slate-600 hover:text-slate-700 font-medium text-xs sm:text-base" target="_blank" rel="noopener noreferrer">
                /in/antoine-falgiglio
              </a>
            </div>

            {/* GitHub */}
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-gray-200/50 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <a
                href="https://github.com/Azroph"
                className="p-2 sm:p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 block"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le profil GitHub"
              >
                <Github className="w-5 h-6 sm:w-6 sm:h-6 text-white" />
              </a>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">GitHub</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">Voir mon code</p>
              <a href="https://github.com/Azroph" className="text-gray-700 hover:text-gray-800 font-medium text-xs sm:text-base" target="_blank" rel="noopener noreferrer">
                /Azroph
              </a>
            </div>
          </div>

          <button
            className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-slate-900 to-slate-500 text-white rounded-2xl font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            style={{ cursor: 'pointer' }}
            onClick={() => { window.location.href = 'mailto:antoine.falgiglio@gmail.com'; }}
            // Suppression des effets liés au curseur custom
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Démarrer un projet
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-3 sm:px-6 border-t border-slate-200/50 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-slate-900 to-slate-400 rounded-xl flex items-center justify-center font-bold text-white shadow-lg">
                AF
              </div>
              <div>
                <p className="text-slate-800 font-medium text-sm sm:text-base">Antoine Falgiglio</p>
                <p className="text-slate-500 text-xs sm:text-sm">Développeur Fullstack</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a href="https://github.com/Azroph" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/antoine-falgiglio/" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-slate-700 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-200/50 text-center">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2025 Antoine Falgiglio. Conçu avec passion et Next.js. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
