import {spotifyApi} from "./apiInstance";
import {AxiosPromise} from "axios";
import {getToken} from "../utils/common";

// external_urls: {spotify: "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"}
// followers: {href: null, total: 6554092}
// genres: (3) ["modern rock", "permanent wave", "rock"]
// href: "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI"
// id: "12Chz98pHFMPJEknJQMWvI"
// images: (3) [{…}, {…}, {…}]
// name: "Muse"
// popularity: 80
// type: "artist"
// uri: "spotify:artist:12Chz98pHFMPJEknJQMWvI"

interface IArtistImage {
    height: number
    url: string
    width: number
}

export interface IArtist {
    id: string
    name: string
    popularity: number
    images: IArtistImage[]
    followers: {
        total: number
    }
}


type IArtists = IArtist[];


interface IArtistsResponse {
    artists: {
        items: IArtists
    }
}

export const getArtists = (searchQ: string): AxiosPromise<IArtistsResponse> => {
    return spotifyApi.get(`search?q=${searchQ}&type=artist`, {headers: {Authorization: `Bearer ${getToken()}`}});
};