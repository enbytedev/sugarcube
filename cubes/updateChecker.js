const axios = require('axios');

const updateChecker = {
    github: async (githubApiUrl, localVersion, isQuiet) => {
        if (githubApiUrl == null || localVersion == null) { console.warn("Invalid input"); return null; }
        if (typeof isQuiet != Boolean) { isQuiet = false; }
        if (isQuiet == false) {console.log(`Checking for updates...`);}

        return (await axiosCheck(githubApiUrl, "name", "html_url", localVersion, isQuiet));
    },
    custom: async (remoteJsonUrl, localVersion, remoteJsonVersionKey, remoteJsonDownloadKey, isQuiet) => {
        if (remoteJsonUrl == null, localVersion == null, remoteJsonVersionKey == null, remoteJsonDownloadKey == null) { console.warn("Invalid input"); return null; }
        if (typeof isQuiet != Boolean) { isQuiet = false; }
        if (isQuiet == false) {console.log(`Checking for updates...`);}

        return (await axiosCheck(remoteJsonUrl, remoteJsonVersionKey, remoteJsonDownloadKey, localVersion, isQuiet));
    },
}

function processResponse(latestVersion, latestUrl, localVersion, isQuiet) {
    if (latestVersion == undefined || latestUrl == undefined || typeof latestVersion != "string" || typeof latestUrl != "string") {
        console.error(`Unable to check for updates. Please check your internet connection and try again.`);
        return null;
    } else if (latestVersion > localVersion) {
        console.warn(`Update available! ${localVersion} (local) -> ${latestVersion} (latest)\nDownload ${latestVersion} here: ${latestUrl}`);
        return true;
    } else {
        if (isQuiet == false) {
            console.log(`No updates available.`);
        }
        return false;
    }
}

function axiosCheck(url, remoteJsonVersionKey, remoteJsonDownloadKey, localVersion, isQuiet) {
    return axios.get(url)
    .then(async (response) => {
        const latestVersion = response.data[remoteJsonVersionKey];
        const latestUrl = response.data[remoteJsonDownloadKey];
        return await processResponse(latestVersion, latestUrl, localVersion, isQuiet);
    }).catch((error) => {
        console.error(`Error checking for updates: ${error}`);
        return null;
    });
}

module.exports = updateChecker;