export const linkBuilder = (link) => {
    if (link.slice(0, 7) === 'https://') {
        return link;
    }

    const formattedLink = 'https://' + link;
    return formattedLink;
}