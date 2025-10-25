export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const songName = searchParams.get('songname')
    console.log(songName);  
return new Response(`Hello, ${songName}!`)
}