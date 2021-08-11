import React from 'react';
import {Col, Row} from "antd";
import {IArtist} from "../../services/api/SpotifyApi";
import {ArtistCardComponent} from "../ArtistCardComponent/ArtistCardComponent";

interface IActorsComponent {
    artists: IArtist[]
}

export const ArtistsComponent = (props: IActorsComponent) => {
    const {artists} = props;

    return (
        <>
            {
                // inline style is specific to the ant design, need to remove -8px margins that makes scrolling in body
                artists.length ? <Row justify="center" align='middle' gutter={[16, 16]} style={{marginRight: 0, marginLeft: 0}}>

                        {
                            artists.map((artist) => <Col
                                    key={artist.id}
                                >
                                <ArtistCardComponent artist={artist}/>
                                </Col>
                            )
                        }
                    </Row>
                    : null
            }
        </>
    )
}
