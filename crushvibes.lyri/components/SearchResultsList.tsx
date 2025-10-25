import { SongListItem } from "./SongListItem";

interface Song {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
}

interface SearchResultsListProps {
  searchResults: Song[];
  decodeHtmlEntities: (text: string) => string;
}

export function SearchResultsList({ searchResults, decodeHtmlEntities }: SearchResultsListProps) {
  return (
    <div className="w-full max-w-full flex-1 min-h-0">
      <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-primary/20 h-full">
        <h3 className="text-lg font-semibold text-foreground mb-4">Search Results</h3>
        <ul className="space-y-3 overflow-y-auto h-[calc(100%-3rem)]">
          {searchResults.map((song, index) => (
            <SongListItem 
              key={index} 
              song={song} 
              decodeHtmlEntities={decodeHtmlEntities} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}