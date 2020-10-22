export const saveToStorage = async (type, link) => {
    const object = {
        type: type, 
        link: link
    }

    let oldObject = JSON.parse(localStorage.getItem('links'));

    if (oldObject !== null) {
        oldObject.push(object)
        const parsed = JSON.stringify(oldObject);
        localStorage.setItem('links', parsed)
        return oldObject;
    } else {
        let array = [];
        array.push(object)
        const parsed = JSON.stringify(array);
        localStorage.setItem('links', parsed)
        return array;
    }
}

export const getFromStorage = () => {
    const object = JSON.parse(localStorage.getItem('links'));

    if (object !== null) {
        return object;
    } else {
        return null;
    }
}