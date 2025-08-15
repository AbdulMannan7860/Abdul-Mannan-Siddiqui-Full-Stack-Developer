import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  BookOpen,
  Link as LinkIcon
} from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Emaan LMS",
      description: "A comprehensive Learning Management System designed for educational institutions to manage courses, students, and learning materials efficiently.",
      image: "/api/placeholder/600/400",
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Course Dashboard</h3>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Active</Badge>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-blue-50 p-3 border">
              <div className="text-sm font-medium text-gray-600">Total Courses</div>
              <div className="text-2xl font-bold text-purple-600">124</div>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-3 border">
              <div className="text-sm font-medium text-gray-600">Active Students</div>
              <div className="text-2xl font-bold text-green-600">1,247</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">React</Badge>
            <Badge variant="outline" className="text-xs">Node.js</Badge>
            <Badge variant="outline" className="text-xs">MongoDB</Badge>
          </div>
        </div>
      ),
      liveUrl: "https://smart-portal-xi.vercel.app/",
      githubUrl: "https://github.com/AbdulMannan7860/Smart-Portal",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "VPS"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Emaan Website",
      description: "Modern institutional website with optimized performance, responsive design, and seamless user experience.",
      image: "/api/placeholder/600/400",
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Institutional Website</h3>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">Live</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">98% Performance Score</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-blue-500" />
              <span className="text-gray-700">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-700">Mobile Optimized</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">JavaScript</Badge>
            <Badge variant="outline" className="text-xs">Tailwind CSS</Badge>
            <Badge variant="outline" className="text-xs">cPanel</Badge>
          </div>
        </div>
      ),
      liveUrl: "https://emaan.edu.pk",
      githubUrl: "https://github.com/AbdulMannan7860/Emaan-Vite-App",
      technologies: ["Node.js", "Javascript", "React.js", "Tailwind CSS", "cPanel"],
      category: "Frontend",
      featured: true
    },
    {
      id: 3,
      title: "ListLink",
      description: "A powerful list management application for creating and sharing organized list collections with family and individuals.",
      image: "/api/placeholder/600/400",
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900">List Management</h3>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">Pro</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Total Users</span>
              <span className="font-semibold text-gray-900">156++</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Collections</span>
              <span className="font-semibold text-gray-900">12</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Team Members</span>
              <span className="font-semibold text-gray-900">2</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-xs">React</Badge>
            <Badge variant="outline" className="text-xs">MongoDB</Badge>
            <Badge variant="outline" className="text-xs">AWS</Badge>
          </div>
        </div>
      ),
      liveUrl: "https://listlinkapp.com",
      githubUrl: "https://github.com/AbdulMannan7860/listlink",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "AWS"],
      category: "Full Stack",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my latest work showcasing modern web development practices,
            responsive design, and innovative solutions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Preview */}
                <div className="p-8 bg-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a target="_blank" href={project.liveUrl}>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a target="_blank" href={project.githubUrl}>
                        <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Interactive Preview */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-l">
                  <div className="bg-white rounded-lg p-6 shadow-lg border">
                    {project.preview}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <a target="_blank" href="https://github.com/AbdulMannan7860">
            <Button size="lg" variant="outline" className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
