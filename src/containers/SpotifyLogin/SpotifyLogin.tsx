import React from 'react';

export const SpotifyLogin = () => {
    var url = process.env.REACT_APP_AUTHORIZE_URL;
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(process.env.REACT_APP_CLIENT_ID || '');
    url += '&redirect_uri=' + encodeURIComponent(process.env.REACT_APP_REDIRECT_URL || '');

    React.useEffect(() => {
        // @ts-ignore
        window.location = url;
    })

    return (
        <div>
        </div>
    )
}