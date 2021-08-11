import React from 'react';
import {Card, Rate, Image} from "antd";
import {IArtist} from "../../services/api/SpotifyApi";
import noImage from "../../images/no-image.png";
import './ArtistCardComponent.css';

const {Meta} = Card;

interface IActorsComponent {
    artist: IArtist
}

export const ArtistCardComponent = (props: IActorsComponent) => {
    const {artist} = props;
    const [visible, setVisible] = React.useState(false);
    const hasAtLeastOneImage = artist.images[0];

    const onClickHandler = () => {
        if (hasAtLeastOneImage) {
            setVisible(true)
        }
    }

    return (
        <>
            <Card
                className={'img_wrapper'}
                hoverable
                style={{width: 240}}
                cover={<Image
                    src={hasAtLeastOneImage ? artist.images[1].url : noImage}
                    preview={{ visible: false }}
                    onClick={onClickHandler}
                />}
            >
                <Meta title={artist.name} description={`Followers: ${artist.followers.total}`}/>
                <Rate allowHalf defaultValue={artist.popularity / 20} />
            </Card>

            <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                    <Image src={hasAtLeastOneImage ? artist.images[0].url : noImage} />
                </Image.PreviewGroup>
            </div>
        </>
    )
}
