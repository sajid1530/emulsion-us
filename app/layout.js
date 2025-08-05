import './globals.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

