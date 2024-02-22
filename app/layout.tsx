import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import Navbar from "@/components/Navbar";
import './globals.css';

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Education All Solutions',
  description: 'Education All Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${epilogue.className} ${process.env.NODE_ENV == 'development' ? 'debug-screens' : ''}`}>
        <div className="relative w-full flex items-center justify-center ">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
