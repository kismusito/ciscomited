import cookie from 'react-cookies'

export const userService = {
    registerUser,
    getUserRole,
    searchUsers,
    searchedUser,
    editUser,
    getMyCitations,
    getSelectedCitation,
    uploadNewCitationStatus
}

async function registerUser(user){
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(user)
    }

    const sendRequest = await fetch("http://localhost:4000/register" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function getUserRole(roleID){
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify({
            rol: roleID
        })
    }

    const sendRequest = await fetch("http://localhost:4000/getRoleInfo" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function searchUsers(search){
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(search)
    }

    const sendRequest = await fetch("http://localhost:4000/searchUsers" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function searchedUser(userID){
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify({
            userSearchID: userID
        })
    }

    const sendRequest = await fetch("http://localhost:4000/searchUser" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function editUser(user){
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(user)
    }

    const sendRequest = await fetch("http://localhost:4000/editUser" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function getMyCitations() {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        }
    }

    const sendRequest = await fetch("http://localhost:4000/getCitations" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function getSelectedCitation(citationID) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify({
            citation: citationID
        })
    }

    const sendRequest = await fetch("http://localhost:4000/getSelectedCitation" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}

async function uploadNewCitationStatus(citationID , formData) {
    console.log(citationID)
    const configuration = {
        method: "POST",
        headers: {
            "x-access-token": cookie.load("userToken"),
            "citationID": citationID
        },
        body: formData
    }

    const sendRequest = await fetch("http://localhost:4000/uploadNewCitationStatus" , configuration)
    const converJson = await sendRequest.json()
    return converJson
}