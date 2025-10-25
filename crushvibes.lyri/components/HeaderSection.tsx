interface HeaderSectionProps {
  isSearchActive: boolean;
}

export function HeaderSection({ isSearchActive }: HeaderSectionProps) {
  return (
    <div className={`max-w-4xl mx-auto transition-all duration-500 ${
      isSearchActive ? 'text-left max-w-full mb-4' : 'text-center mb-8 md:mb-12'
    }`}>
      <h1 className={`font-bold text-primary drop-shadow-lg transition-all duration-700 ${
        isSearchActive 
          ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full mb-4' 
          : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in mb-3 md:mb-5'
      }`}>
        CrushVibes.Lyri
      </h1>
      <div className={`bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-xl border border-primary/20 transition-all duration-500 ${
        isSearchActive ? 'hidden' : ''
      }`}>
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
  );
}