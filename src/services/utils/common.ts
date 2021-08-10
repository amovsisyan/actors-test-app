export const getToken = (): string | null => {
    return sessionStorage.getItem('access_token')
};