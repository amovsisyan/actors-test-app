import React, {ChangeEvent, useState} from 'react';
import {SearchArtistsComponent} from "../../components/SearchArtistsComponent/SearchArtistsComponent";
import {getArtists, IArtist} from "../../services/api/SpotifyApi";
import useDebounce from "../../hooks/useDebounce";

const DEBOUNCE_DELAY = 500;

export const SearchArtistsContainer = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [artists, setArtists] = useState<IArtist[]>([])

    const setArtistsRequest = (value: string) => {
        getArtists(value).then((res) => {
            setArtists(res.data.artists.items);
        })
    }

    const onSearchHandler = (value: string) => {
        setArtistsRequest(value)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const debouncedSearchTerm = useDebounce<string>(searchValue, DEBOUNCE_DELAY);

    React.useEffect(
        () => {
            if (debouncedSearchTerm) {
                setArtistsRequest(debouncedSearchTerm)
            } else {
                setArtists([]);
            }
        },
        [debouncedSearchTerm]
    );

    return (
        <SearchArtistsComponent
            artists={artists}
            searchValue={searchValue}
            onSearch={onSearchHandler}
            onChange={onChangeHandler}
        />
    );
}
