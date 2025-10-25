interface FeatureCardsProps {
  isSearchActive: boolean;
}

export function FeatureCards({ isSearchActive }: FeatureCardsProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto transition-all duration-500 ${
      isSearchActive ? 'hidden' : ''
    }`}>
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
  );
}