import axios from 'axios';

export class ApiAxiosHandler {
  static async searchSong(songName: string) {
    const response = await axios.get(`/api/searchsong?songname=${songName}`);
    return response.data;
  }

  static async extractSongData(songTitle: string) {
    const response = await axios.get(`/api/gemini?songtitle=${encodeURIComponent(songTitle)}`);
    
    // Extract text from Gemini response
    const geminiText = response.data.text || response.data.steps?.[0]?.content?.[0]?.text;
    
    if (!geminiText) {
      throw new Error('No text found in response');
    }
    
    // Remove markdown code block formatting
    const jsonText = geminiText.replace(/```json\n|\n```/g, '');
    return JSON.parse(jsonText);
  }
}