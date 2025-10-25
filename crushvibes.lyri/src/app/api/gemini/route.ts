import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const songtitle = searchParams.get('songtitle');
    
    if (!songtitle) {
        return new Response(JSON.stringify({ error: 'Song title is required' }), { status: 400 });
    }

    const extractArtistPrompt = `give me the actual songname not the albumname or moviename and artist name (only the name of the main artist incase of multiple artist) of the song ${decodeURIComponent(songtitle)} in json format i.e. 
    {
        songname: "songname",
        artistname: "artistname"
    }`;

    try {
        const result = await generateText({
            model: google('gemini-2.0-flash-exp'),
            prompt: extractArtistPrompt,
        });
        
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error('Error generating text:', error);
        return new Response(JSON.stringify({ error: 'Failed to generate text' }), { status: 500 });
    }
}
