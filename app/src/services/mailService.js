import cookie from "react-cookies";
import { config } from "../config";

export const mailService = {
    getMail,
    getMails,
    getMailType,
    getMailTypes,
    createMail,
    createMailType,
    updateMail,
    updateMailType,
    deleteMail,
    deleteMailType,
};

async function getMail(mailID) {
    const configuration = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
    };

    const requestResponse = await fetch(
        config.serverRoute + "getMail" + mailID,
        configuration
    );
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function getMails() {
    const configuration = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
    };

    const requestResponse = await fetch(config.serverRoute + "getAllMails", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function getMailType(mailTypeID) {
    const configuration = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
    };

    const requestResponse = await fetch(
        config.serverRoute + "getMailType" + mailTypeID,
        configuration
    );
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function createMail(data) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "createMail", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function createMailType(data) {
    const configuration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "createMailType", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function getMailTypes() {
    const configuration = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
    };

    const requestResponse = await fetch(config.serverRoute + "getAllMailTypes", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function updateMail(data) {
    const configuration = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "updateMail", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function updateMailType(data) {
    const configuration = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "updateMailType", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function deleteMail(data) {
    const configuration = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "deleteMail", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}

async function deleteMailType(data) {
    const configuration = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": cookie.load("userToken"),
        },
        body: JSON.stringify(data),
    };

    const requestResponse = await fetch(config.serverRoute + "deleteMailType", configuration);
    const responseJson = await requestResponse.json();
    return responseJson;
}
