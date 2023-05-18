import Navbar from './components/Navbar'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer'

export const metadata = {
  title: 'Unik Group',
  description: 'Developed by Nasr Souid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
