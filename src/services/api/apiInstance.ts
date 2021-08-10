import axios from "axios";

console.log(process.env.REACT_APP_SPOTIFY_API);
export const spotifyApi = axios.create({
    baseURL: process.env.REACT_APP_SPOTIFY_API,
    timeout: 1000,
    headers: {'Accept': 'application/json'}
});