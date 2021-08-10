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
                artists.length ? <Row justify="center" align='middle' gutter={[16, 16]}>

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
