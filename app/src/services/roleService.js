import cookie from 'react-cookies'

export const roleService = {
    getAllRoles,
    addNewRol
}

async function getAllRoles() {
    const configuration = {
        method: "POST",
        headers: {
            "x-access-token": cookie.load("userToken")
        }
    }

    const requestResponse = await fetch("http://localhost:4000/getAddRoles" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}

async function addNewRol(rol) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "x-access-token": cookie.load("userToken")
        },
        body: JSON.stringify(rol)
    }

    const requestResponse = await fetch("http://localhost:4000/addRol" , configuration)
    const responseJson = await requestResponse.json()
    return responseJson
}