import React from 'react';
import {Col, Row, Input} from "antd";
import {IArtist} from "../../services/api/SpotifyApi";
import './ActionsComponent.css';
import {ArtistsComponent} from "../ArtistsComponent/ArtistsComponent";

const {Search} = Input;

interface IActorsComponent {
    artists: IArtist[]
    onSearch: (value: string) => void
}

export const ActorsComponent = (props: IActorsComponent) => {
    const {artists, onSearch} = props;

    return (
        <>
            <Row justify="center" align='middle'>
                <Col className={'col_wrapper'}>
                    <Search placeholder="input search text" onSearch={onSearch} style={{width: 200}}/>
                </Col>
            </Row>
            <ArtistsComponent artists={artists} />
        </>
    )
}
