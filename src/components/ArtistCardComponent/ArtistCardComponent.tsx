import React from 'react';
import {Card, Rate} from "antd";
import {IArtist} from "../../services/api/SpotifyApi";
import noImage from "../../images/no-image.png";

const {Meta} = Card;

interface IActorsComponent {
    artist: IArtist
}

export const ArtistCardComponent = (props: IActorsComponent) => {
    const {artist} = props;

    return (
        <>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img src={artist.images[0] ? artist.images[0].url : noImage}/>}
            >
                <Meta title={artist.name} description={`Followers: ${artist.followers.total}`}/>
                <Rate allowHalf defaultValue={artist.popularity / 20} />
            </Card>
        </>
    )
}
