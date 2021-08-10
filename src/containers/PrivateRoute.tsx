import {
    Route,
    Redirect
} from "react-router-dom";
import {getToken} from "../services/utils/common";

interface IPrivateRoute {
    component: React.ReactNode
    path: string
}

export const PrivateRoute = (props: IPrivateRoute) => {
    const { component: Component, ...rest } = props;

    const isAuthenticated = (): boolean => {
        const expiresIn = sessionStorage.getItem('expires_in')
        const accessToken = getToken();
        if (!expiresIn || +expiresIn < Date.now() || !accessToken) {
            return false
        }
        return  true
    }

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    // @ts-ignore
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}