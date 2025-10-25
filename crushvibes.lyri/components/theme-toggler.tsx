"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState(true) // Default to dark

  React.useEffect(() => {
    // Check saved theme or default to dark
    const savedTheme = localStorage.getItem('theme')
    const shouldBeDark = savedTheme === 'light' ? false : true
    
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative z-50 pointer-events-auto"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}