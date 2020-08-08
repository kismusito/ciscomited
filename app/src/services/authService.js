import cookie from 'react-cookies'

export const authService = {
    userLogin,
    validateToken,
    profileUpdate
}

async function userLogin(credentials) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(credentials)
    }

    const sendRequest = await fetch("http://localhost:4000/login" , configuration)
    const responseJson = sendRequest.json()
    return responseJson
}

async function validateToken(token) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": token
        }
    }

    const sendRequest = await fetch("http://localhost:4000/validateToken" , configuration)
    const responseJson = sendRequest.json()
    return responseJson
}

async function profileUpdate() {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        }
    }

    const sendRequest = await fetch("http://localhost:4000/profileUpdated" , configuration)
    const responseJson = sendRequest.json()
    return responseJson
}
