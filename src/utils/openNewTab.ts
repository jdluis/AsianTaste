export const openNewTab = (route:string) => {
    const routePath = route;
    const url = window.location.origin + routePath;
    window.open(url, '_blank');
};