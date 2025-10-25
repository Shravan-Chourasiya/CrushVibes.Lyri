import { searchYouTubeVideos } from "@/src/lib/youtube";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const songName = searchParams.get('songname')
    
    if (!songName) {
        return new Response('Song name is required', { status: 400 })
    }
    
    console.log(songName);  
    try {
        const results = await searchYouTubeVideos(songName);
        console.log('YouTube Results:', results);
        return new Response(JSON.stringify(results), {
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        console.error('Search failed:', error);
        return new Response('Search failed', { status: 500 })
    }
}