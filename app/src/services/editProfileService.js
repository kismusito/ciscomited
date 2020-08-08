import cookie from 'react-cookies'

export const editProfileService = {
    editProfile
}

async function editProfile(form) {
    const configuration = {
        method: "POST",
        headers: {
            "x-access-token": cookie.load("userToken")
        },
        body: form
    }

    const requestJson = await fetch("http://localhost:4000/editProfile" , configuration)
    const convertJson = await requestJson.json()
    return convertJson
}