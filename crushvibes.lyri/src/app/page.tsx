'use client'
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import axios, { AxiosError } from "axios";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [songName, setSongName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit() {
    setIsSubmitting(true)
    try {
      if (!songName.trim()) {
        return;
      }

      console.log(`Searching for: ${songName}`);
      //TODO: Add API call later
      const response = await axios.get(`api/searchsong?songname=${songName}`)
      console.log(response);
    } catch (error) {
      console.log(`E: ${error} ::::: ${AxiosError}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSongName(e.target.value);
  }

  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
      {/* Floating Music Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-spin-slow">💿</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce">🎵</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-pulse">🎧</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-bounce">🎶</div>
        <div className="absolute top-60 left-1/4 text-4xl animate-pulse">🎹</div>
        <div className="absolute top-80 right-1/3 text-3xl animate-spin-slow">🎸</div>
        <div className="absolute bottom-60 right-1/4 text-5xl animate-bounce">🎺</div>
        <div className="absolute bottom-80 left-1/3 text-4xl animate-pulse">🎻</div>
        <div className="absolute top-1/2 left-16 text-3xl animate-bounce">🎼</div>
        <div className="absolute top-1/3 right-16 text-4xl animate-spin-slow">🎭</div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ModeToggle />
      </div>

      {/* Main Content */}
      <div className="hero min-h-screen flex flex-col justify-center items-center px-4 md:px-6 py-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 md:mb-6 drop-shadow-lg animate-fade-in">
            CrushVibes.Lyri
          </h1>
          <div className="bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border border-primary/20">
            <h3 className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 md:mb-4">
              Where Chemistry Meets Melody - Experience Lyrics Like Never Before
            </h3>
            <div className="flex items-center justify-center gap-2 sm:gap-3 text-primary font-bold text-xl sm:text-2xl md:text-3xl">
              <span>Songs</span>
              <span className="text-2xl sm:text-3xl md:text-4xl">×</span>
              <span>Science</span>
              <span className="text-2xl sm:text-3xl md:text-4xl">×</span>
              <span>Style</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 md:mt-4">
              Your lyrics, reimagined through elements. Because music is just beautiful chemistry. 🧬🎶
            </p>
          </div>
        </div>

        {/* Search Section */}
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="bg-card/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-2xl border border-primary/30">
            <div className="flex flex-col gap-3 md:gap-4">
              <input
                type="text"
                onChange={(e) => { handleChange(e) }}
                placeholder="Search for a song and unlock its elemental formula....."
                className="w-full px-4 md:px-6 py-3 md:py-4 rounded-lg md:rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground text-sm md:text-base"
              />
              <Button
                disabled={isSubmitting || !songName.trim()}
                onClick={() => {
                  setIsSubmitting(true);
                  handleSubmit();
                }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary/80 hover:bg-primary text-primary-foreground rounded-lg md:rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary/80 disabled:hover:scale-100"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="bg-card/70 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-200">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">🧪</div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Chemical Analysis</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Break down lyrics into elemental components</p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-200">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎼</div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Musical Elements</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Discover the periodic table of music</p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-200 sm:col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl mb-2 md:mb-3">✨</div>
            <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Unique Experience</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Where science meets your favorite songs</p>
          </div>
        </div>
      </div>
    </div>
  );
}