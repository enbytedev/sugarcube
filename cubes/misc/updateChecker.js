const axios = require('axios');

const updateChecker = {
    github: (githubApiUrl, localVersion, isQuiet) => {
        if (isQuiet == false) {
            console.log(`Checking for updates...`);
        }
        axios.get(githubApiUrl)
        .then((response) => {
            const latestVersion = response.data.name;
            const latestUrl = response.data.html_url;
            if (latestVersion > localVersion) {
                console.warn(`Update available! ${localVersion} (local) -> ${latestVersion} (latest)\nDownload ${latestVersion} here: ${latestUrl}`);
            } else {
                if (isQuiet == false) {
                    console.log(`No updates available.`);
                }
            }
        }).catch((error) => {
            console.error(`Error checking for updates: ${error}`);
        });
    },
    custom: (remoteJsonUrl, localVersion, isQuiet, remoteJsonVersionKey, remoteJsonDownloadKey) => {
        if (isQuiet == false) {
            console.log(`Checking for updates...`);
        }
        axios.get(remoteJsonUrl)
        .then((response) => {
            const latestVersion = response.data[remoteJsonVersionKey];
            const latestUrl = response.data[remoteJsonDownloadKey];
            if (latestVersion > localVersion) {
                console.warn(`Update available! ${localVersion} (local) -> ${latestVersion} (latest)\nDownload ${latestVersion} here: ${latestUrl}`);
            } else {
                if (isQuiet == false) {
                    console.log(`No updates available.`);
                }
            }
        }).catch((error) => {
            console.error(`Error checking for updates: ${error}`);
        });
    },
}

module.exports = updateChecker;