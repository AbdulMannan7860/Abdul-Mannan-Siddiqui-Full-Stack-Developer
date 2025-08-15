"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Globe,
  Shield,
  Zap,
  Facebook
} from "lucide-react"
import { onDownload } from "@/lib/download"
import { scrollToSection } from "@/lib/scrollToSection"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            <Code className="w-4 h-4 mr-2" />
            MERN Stack Developer
          </Badge>

          {/* Main heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abdul Mannan Siddiqui
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern web technologies.
            Specialized in React, Node.js, and cloud solutions.
          </p>

          {/* Tech stack highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">React JS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Database className="w-4 h-4 text-green-400" />
              <span className="text-white text-sm">MongoDB</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-white text-sm">Node.js</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">JWT</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-white text-sm">Firebase</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("#contact")} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button onClick={onDownload} size="lg" variant="outline" className="border-white/20 text-purple-600 hover:text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/AbdulMannan7860" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abdul-mannan-8b1260279" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100013942695820" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute md:bottom-4 bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce pt-5">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
