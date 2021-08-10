import React, {useState} from 'react';
import {ActorsComponent} from "../../components/ActorsComponent/ActorsComponent";
import {getArtists, IArtist} from "../../services/api/SpotifyApi";

export const ActorsContainer = () => {
    const [artists, setArtists] = useState<IArtist[]>([])

    const onSearchHandler = (value: string) => {
        getArtists(value).then((res) => {
            setArtists(res.data.artists.items);
        })
    }

    return (
        <ActorsComponent
            artists={artists}
            onSearch={onSearchHandler}
        />
    );
}
