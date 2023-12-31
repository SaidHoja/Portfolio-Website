"use client"
import '../styles/globals.css'
import Navbar from "../components/navbar"
import Home from "../components/hero"
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from 'next-themes'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {

      }
      <head/>
        <body>
          <ThemeProvider enableSystem = {true} defaultTheme = "dark" attribute='class' >
            <Navbar/>
            {children}
            <Analytics />
          </ThemeProvider>

        </body>
    </html>
  )
}