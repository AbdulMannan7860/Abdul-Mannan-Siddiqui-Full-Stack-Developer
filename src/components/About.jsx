import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Briefcase, 
  Award,
  Calendar,
  MapPin
} from "lucide-react"

export default function About() {
  const education = [
    {
      institution: "Emaan Institute (EIMS)",
      degree: "Bachelor's in Computer Science",
      period: "2022-Present",
      location: "Pakistan",
      description: "Pursuing comprehensive computer science education with focus on modern development practices."
    },
    {
      institution: "Superior Science College",
      degree: "Intermediate in Computer Science",
      period: "2019-2021",
      location: "Pakistan",
      description: "Completed intermediate studies with specialization in computer science fundamentals."
    }
  ]

  const experience = [
    {
      company: "Emaan Institute (EIMS)",
      position: "Application Developer",
      period: "2025 - Present",
      location: "Pakistan",
      description: "As an Application Developer, I design, develop, and maintain software applications to meet institutional needs. I ensure optimal performance by resolving technical issues, supporting users through troubleshooting, and implementing feature updates. I also collaborate on improving application functionality to enhance overall user experience and software efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      company: "SASKA Solutions",
      position: "MERN Stack Developer",
      period: "2024 - Present",
      location: "Pakistan",
      description: "As a MERN Stack Developer, my duties are to design, develop, and maintain dynamic web applications using React.js, Node.js, Express.js, and MongoDB. I troubleshoot and resolve technical issues, optimize performance, and ensure responsive designs for a smooth user experience.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
      company: "GIBCE",
      position: "Junior Lab Instructor",
      period: "2022",
      location: "Pakistan",
      description: "As a Junior Lab Instructor for the NAVTTC Full Stack Developer course, my responsibilities include guiding students through practical coding exercises and ensuring they gain hands-on experience with both frontend and backend technologies.",
      technologies: ["Full Stack Development", "Teaching", "Mentoring"]
    }
  ]

  const certifications = [
    {
      title: "Course Project Evaluation",
      issuer: "Developing the best project",
      date: "May 2024",
      description: "Recognition for developing the best project in the course."
    },
    {
      title: "Front End Development Course",
      issuer: "Saylani (Jawan Pakistan)",
      date: "Nov 2020 - Feb 2021",
      description: "Comprehensive frontend development training program."
    },
    {
      title: "CIT Web & Mobile Application Developer",
      issuer: "NAVTTС",
      date: "June 2021 - Dec 2021",
      description: "Certified IT professional in web and mobile application development."
    },
    {
      title: "Software Development",
      issuer: "BBSHRRDB",
      date: "June 2022 - Dec 2022",
      description: "Advanced software development certification program."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate MERN-Stack developer with expertise in modern web technologies, 
            dedicated to creating innovative digital solutions and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900">{edu.institution}</CardTitle>
                        <p className="text-purple-600 font-medium">{edu.degree}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <p className="text-gray-700">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900">{exp.company}</CardTitle>
                        <p className="text-blue-600 font-medium">{exp.position}</p>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{cert.title}</CardTitle>
                  <p className="text-green-600 font-medium">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                  <p className="text-gray-700 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
