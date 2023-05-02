export const showHeaderLinks = () => {
    return window.location.href !== `${window.origin}/`
        && window.location.href !== `${window.origin}/account/login`
        && window.location.href !== `${window.origin}/account/create`;
};