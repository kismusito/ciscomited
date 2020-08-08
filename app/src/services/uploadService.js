import cookie from 'react-cookies'

export const uploadService = {
    uploadAppretices
}

async function uploadAppretices(form) {
    const configuration = {
        method: "POST",
        headers: {
            "x-access-token": cookie.load("userToken")
        },
        body: form
    }

    const sendRequest = await fetch("http://localhost:4000/uploadAppretices" , configuration)
    const convertRequest = await sendRequest.json()
    return convertRequest
}