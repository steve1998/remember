export const linkBuilder = (link) => {
    if (link === '') {
        console.log('yes')
        return 'https://google.com';
    }

    if (link.slice(0, 8) === 'https://') {
        return link;
    }

    const formattedLink = 'https://' + link;
    return formattedLink;
}