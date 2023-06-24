export const SPOTIFY_USER_ENDPOINT = "https://api.spotify.com/v1/me";
export const SPOTIFY_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/tracks?limit=25";
export const SPOTIFY_ARTISTS_ENDPOINT =
  "https://api.spotify.com/v1/me/top/artists?limit=25";
export const SPOTIFY_CLIENT_ID = import.meta.env.SPOTIFY_CLIENT_ID ?? "";
export const SPOTIFY_CLIENT_SECRET =
  import.meta.env.SPOTIFY_CLIENT_SECRET ?? "";

export const REDIRECT_URI = "https://mixtify.netlify.app/callback";
export const APP_URL = "https://mixtify.netlify.app/";
