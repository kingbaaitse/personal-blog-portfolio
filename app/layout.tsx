import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Leatile King Baaitse | Portfolio',
  description: 'Personal portfolio of Leatile King Baaitse - Business Intelligence & Data Analytics student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Product+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="bg-brutalist-white font-sans antialiased">
        <Navigation />
        {children}
        <footer className="bg-brutalist-accent text-brutalist-black border-t-4 sm:border-t-8 border-brutalist-black py-8 sm:py-12">
          <div className="responsive-container">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-center leading-none">
              LEATILE KING BAAITSE
            </h2>
          </div>
        </footer>
      </body>
    </html>
  )
}
