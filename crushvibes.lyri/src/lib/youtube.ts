// lib/youtube.ts
export interface YouTubeVideo {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration?: string;
}

interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface YouTubeVideoDetails {
  id: string;
  contentDetails: {
    duration: string;
  };
}

export async function searchYouTubeVideos(query: string): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;
  
  const searchResponse = await fetch(searchUrl);
  const searchData = await searchResponse.json();
  
  // Get video IDs for duration fetch
  const videoIds = searchData.items.map((item: YouTubeSearchItem) => item.id.videoId).join(',');
  
  // Get video details including duration
  const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`;
  const detailsResponse = await fetch(detailsUrl);
  const detailsData = await detailsResponse.json();
  
  // Combine search results with duration
  return searchData.items.map((item: YouTubeSearchItem, index: number) => ({
    id: item.id.videoId,
    title: item.snippet.title,
    channelTitle: item.snippet.channelTitle,
    thumbnail: item.snippet.thumbnails.medium.url,
    duration: formatDuration((detailsData.items[index] as YouTubeVideoDetails)?.contentDetails.duration || 'PT0S')
  }));
}

// Helper function to format PT4M13S -> 4:13
function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match?.[1] || '').replace('H', '');
  const minutes = (match?.[2] || '').replace('M', '');
  const seconds = (match?.[3] || '').replace('S', '');
  
  if (hours) {
    return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
  return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
}



