import React, {useState} from 'react';
import {SearchArtistsComponent} from "../../components/SearchArtistsComponent/SearchArtistsComponent";
import {getArtists, IArtist} from "../../services/api/SpotifyApi";

export const SearchArtistsContainer = () => {
    const [artists, setArtists] = useState<IArtist[]>([])

    const onSearchHandler = (value: string) => {
        getArtists(value).then((res) => {
            setArtists(res.data.artists.items);
        })
    }

    return (
        <SearchArtistsComponent
            artists={artists}
            onSearch={onSearchHandler}
        />
    );
}
