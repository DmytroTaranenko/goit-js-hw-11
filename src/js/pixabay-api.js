export function getImages(userInput) {
    const BASE_URL = 'https://pixabay.com/api/'


    const params = new URLSearchParams({
        key: '44483341-a81d0a92f1c16412fe8933c44',
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    })

    const url = `${BASE_URL}${END_POINT}?${params}`

    return fetch(url).then(result => result.json()).catch(err => console.log(err))
}