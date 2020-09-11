import cookie from 'react-cookies'

export const generatorService = {
    generateCitation,
    generateMinute
}

async function generateCitation(dataCitation) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(dataCitation)
    }

    const requestResponse = await fetch("http://localhost:4000/generateCitation" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}

async function generateMinute(data) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(data)
    }

    const requestResponse = await fetch("http://localhost:4000/generateMinute" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}

