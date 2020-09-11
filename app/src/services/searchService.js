import cookie from 'react-cookies'

export const searchService = {
    searchAppretices,
    searchAppretice
}

async function searchAppretices(search) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(search)
    }

    const requestResponse = await fetch("http://localhost:4000/searchAppretices" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}

async function searchAppretice(appreticeID) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify({
            appretice: appreticeID
        })
    }

    const requestResponse = await fetch("http://localhost:4000/searchAppretice" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}
