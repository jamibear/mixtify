import {
  SPOTIFY_TRACKS_ENDPOINT,
  SPOTIFY_ARTISTS_ENDPOINT,
  SPOTIFY_USER_ENDPOINT,
} from "../util/constants.ts";

export const getTrackList = async (token: string) => {
  try {
    const response = await fetch(SPOTIFY_TRACKS_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }

  /*  if (!response.ok) {
                                          return res;
                                        }
                                        */
};

export const getTopArtists = async (token: string) => {
  try {
    const response = await fetch(SPOTIFY_ARTISTS_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (token: string) => {
  try {
    const response = await fetch(SPOTIFY_USER_ENDPOINT, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
