import React from 'react';
import queryString, {ParsedQuery} from 'query-string'
import { useHistory } from "react-router-dom";

export const Redirect = () => {
    const history = useHistory();

    React.useEffect(() => {
        const parsed: ParsedQuery<any> = queryString.parse(window.location.hash);
        sessionStorage.setItem('access_token', parsed.access_token);
        sessionStorage.setItem('expires_in', String(Date.now() + parsed.expires_in * 1000));

        history.push("/");
    })

    return (
        <span>Redirecting</span>
    );
}
