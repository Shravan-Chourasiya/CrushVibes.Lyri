'use client'
import { ModeToggle } from "@/components/theme-toggler";
import { Button } from "@/components/ui/button";
import { FloatingMusicElements } from "@/components/FloatingMusicElements";
import { HeaderSection } from "@/components/HeaderSection";
import { SearchResultsList } from "@/components/SearchResultsList";
import { FeatureCards } from "@/components/FeatureCards";
import axios, { AxiosError } from "axios";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [songName, setSongName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isSearchActive, setIsSearchActive] = useState(false)

  async function handleSubmit() {
    setIsSubmitting(true)
    try {
      if (!songName.trim()) {
        return;
      }
      console.log(`Searching for: ${songName}`);
      const response = await axios.get(`api/searchsong?songname=${songName}`)
      
      setSearchResults(response.data);
      setIsSearchActive(true);
      console.log(response.data);
    } catch (error) {
      console.log(`E: ${error} :: ${AxiosError}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSongName(e.target.value);
  }

  function decodeHtmlEntities(text: string) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
      {/* Floating Music Elements */}
      <FloatingMusicElements />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ModeToggle />
      </div>

      {/* Main Content */}
      <div className={`hero flex flex-col px-4 md:px-6 py-8 relative z-10 transition-all duration-500 ${
        isSearchActive 
          ? 'justify-start items-start w-[28vw] h-screen overflow-y-auto' 
          : 'justify-center items-center min-h-screen'
      }`}>
        {/* Header Section */}
        <HeaderSection isSearchActive={isSearchActive} />

        {/* Search Section */}
        <div className={`w-full mx-auto ${
          isSearchActive ? 'max-w-full mb-4' : 'max-w-4xl mb-8 md:mb-16'
        }`}>
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
        
        {/* Search Results */}
        {isSearchActive && searchResults.length > 0 && (
          <SearchResultsList 
            searchResults={searchResults} 
            decodeHtmlEntities={decodeHtmlEntities} 
          />
        )}

        {/* Features Section */}
        <FeatureCards isSearchActive={isSearchActive} />
      </div>
    </div>
  );
}