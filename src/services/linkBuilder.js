export const linkBuilder = (link) => {
    if (link.slice(0, 8) === '') {
        return 'https://google.com';
    }

    if (link.slice(0, 8) === 'https://') {
        return link;
    }

    const formattedLink = 'https://' + link;
    return formattedLink;
}