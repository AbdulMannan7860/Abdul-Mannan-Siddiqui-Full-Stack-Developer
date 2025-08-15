import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import {
  Code,
  Database,
  Shield,
  Server,
  Settings,
  Palette,
} from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: [
        { name: "React JS", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "Context API", level: 80, icon: "🔄" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      skills: [
        { name: "Node JS", level: 88, icon: "🟢" },
        { name: "Express JS", level: 85, icon: "🚀" },
        { name: "RESTful APIs", level: 90, icon: "🌐" },
        { name: "JWT", level: 82, icon: "🔐" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: [
        { name: "Mongo DB", level: 85, icon: "🍃" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "VPS", level: 75, icon: "🖥️" },
        { name: "cPanel", level: 70, icon: "⚙️" }
      ]
    },
    {
      title: "Development Tools",
      icon: <Settings className="w-6 h-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: [
        { name: "Github", level: 90, icon: "📚" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Thunder Client", level: 80, icon: "⚡" }
      ]
    },
    {
      title: "Communication & Security",
      icon: <Shield className="w-6 h-6" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      skills: [
        { name: "Email JS", level: 75, icon: "📧" },
        { name: "Nodemailer JS", level: 80, icon: "📨" },
        { name: "Socketing", level: 70, icon: "🔌" },
        { name: "Encryption", level: 75, icon: "🔒" }
      ]
    },
    {
      title: "Additional Skills",
      icon: <Palette className="w-6 h-6" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      skills: [
        { name: "Cookies", level: 85, icon: "🍪" },
        { name: "Responsive Design", level: 90, icon: "📱" },
        { name: "Performance Optimization", level: 80, icon: "⚡" },
        { name: "SEO", level: 75, icon: "🔍" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in modern web development technologies,
            from frontend frameworks to backend services and deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className={`${category.bgColor} rounded-t-lg`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${getGradientColor(category.color)} 0%, ${getGradientColor(category.color, 0.7)} 100%)`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React JS", "JavaScript", "Tailwind CSS", "Node JS", "Express JS", "MongoDB",
              "JWT", "Firebase", "Github", "Vercel", "VS Code", "RESTful APIs",
              "Context API", "Socketing", "Encryption", "Cookies", "Email JS", "Nodemailer JS"
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                  {getSkillIcon(skill)}
                </div>
                <p className="text-sm font-medium text-gray-700">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function getGradientColor(colorClass, opacity = 1) {
  const colorMap = {
    'text-blue-600': `rgba(37, 99, 235, ${opacity})`,
    'text-green-600': `rgba(22, 163, 74, ${opacity})`,
    'text-purple-600': `rgba(147, 51, 234, ${opacity})`,
    'text-orange-600': `rgba(234, 88, 12, ${opacity})`,
    'text-red-600': `rgba(220, 38, 38, ${opacity})`,
    'text-indigo-600': `rgba(79, 70, 229, ${opacity})`
  }
  return colorMap[colorClass] || `rgba(59, 130, 246, ${opacity})`
}

function getSkillIcon(skill) {
  const iconMap = {
    'React JS': '⚛️',
    'JavaScript': '🟨',
    'Tailwind CSS': '🎨',
    'Node JS': '🟢',
    'Express JS': '🚀',
    'MongoDB': '🍃',
    'JWT': '🔐',
    'Firebase': '🔥',
    'Github': '📚',
    'Vercel': '▲',
    'VS Code': '💻',
    'RESTful APIs': '🌐',
    'Context API': '🔄',
    'Socketing': '🔌',
    'Encryption': '🔒',
    'Cookies': '🍪',
    'Email JS': '📧',
    'Nodemailer JS': '📨'
  }
  return iconMap[skill] || '⚡'
}
