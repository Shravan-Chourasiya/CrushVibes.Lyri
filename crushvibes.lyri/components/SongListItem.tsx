import Image from "next/image";

interface Song {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
}

interface SongListItemProps {
  song: Song;
  decodeHtmlEntities: (text: string) => string;
  onSongSelect?: (song: Song) => void;
}

export function SongListItem({ song, decodeHtmlEntities, onSongSelect }: SongListItemProps) {
  const handlePlayClick = () => {
    if (onSongSelect) {
      onSongSelect(song);
    }
  };

  const handleImageError = () => {
    console.warn(`Failed to load thumbnail for: ${song.title}`);
  };

  return (
    <li className="flex items-center gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
      <Image
        src={song.thumbnail}
        alt={song.title}
        width={30}
        height={30}
        className="rounded object-cover shrink-0 w-[30px] h-[30px]"
        onError={handleImageError}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate leading-tight">
          {decodeHtmlEntities(song.title)}
        </p>
        <p className="text-xs text-muted-foreground mt-1">{song.duration}</p>
      </div>
      <button 
        onClick={handlePlayClick}
        className="w-8 h-8 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shrink-0 transition-colors"
        aria-label={`Play ${song.title}`}
      >
        <span className="text-primary-foreground text-sm">▶</span>
      </button>
    </li>
  );
}