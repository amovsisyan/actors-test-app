import React, {ChangeEventHandler} from 'react';
import {Col, Row, Input} from "antd";
import {IArtist} from "../../services/api/SpotifyApi";
import './SearchArtistsComponent.css';
import {ArtistsComponent} from "../ArtistsComponent/ArtistsComponent";

const {Search} = Input;

interface IActorsComponent {
    artists: IArtist[]
    searchValue: string
    onSearch: (value: string) => void
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchArtistsComponent = (props: IActorsComponent) => {
    const {artists, searchValue, onSearch, onChange} = props;

    return (
        <>
            <Row justify="center" align='middle'>
                <Col className={'col_wrapper'}>
                    <Search placeholder="Search for an artist..." onSearch={onSearch} onChange={onChange} value={searchValue} style={{width: 200}}/>
                </Col>
            </Row>
            <ArtistsComponent artists={artists} />
        </>
    )
}
