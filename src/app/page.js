import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

export default function Home () {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <div id='home'>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            fontSize: '14px',
            borderRadius: '10px',
            padding: '12px 16px'
          },
          success: {
            style: {
              background: '#4caf50',
              color: '#fff',
              fontWeight: '500'
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#4caf50'
            }
          },
          error: {
            style: {
              background: '#f44336',
              color: '#fff',
              fontWeight: '500'
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#f44336'
            }
          }
        }}
      />
    </main>
  )
}
