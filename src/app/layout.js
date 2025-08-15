import './globals.css'

export const metadata = {
  metadataBase: new URL('https://abdulmannan.dev'),
  title: 'Abdul Mannan Siddiqui - Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Node.js, and modern web technologies. Creating innovative digital solutions with expertise in MERN stack, Firebase, and cloud deployment.',
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'MERN Stack',
    'JavaScript Developer',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'MongoDB',
    'Express.js',
    'Firebase',
    'Vercel',
    'Portfolio'
  ],
  authors: [{ name: 'Abdul Mannan Siddiqui' }],
  creator: 'Abdul Mannan Siddiqui',
  publisher: 'Abdul Mannan Siddiqui',
  robots: 'index, follow',
  openGraph: {
    title: 'Abdul Mannan Siddiqui - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    url: 'https://abdulmannan.dev',
    siteName: 'Abdul Mannan Siddiqui Portfolio',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Abdul Mannan Siddiqui - Full Stack Developer'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  facebook: {
    card: 'summary_large_image',
    title: 'Abdul Mannan Siddiqui - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    images: ['/Logo1.png'],
    creator: '@abdulmannan'
  },
  manifest: '/manifest.json'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#8b5cf6'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#8b5cf6' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Abdul Mannan' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='application-name' content='Abdul Mannan Portfolio' />
        <meta name='msapplication-TileImage' content='/favicon.ico' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
      </head>
      <body className='antialiased' suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
