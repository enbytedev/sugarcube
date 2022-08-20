const log = require('./log');
const axios = require('axios');

const updateChecker = {
    github: (githubApiUrl, localVersion, isQuiet) => {
        if (isQuiet == false) {
            log.info(`Checking for updates...`);
        }
        axios.get(githubApiUrl)
        .then((response) => {
            const latestVersion = response.data.name;
            const latestUrl = response.data.html_url;
            if (latestVersion > localVersion) {
                log.warn(`Update available! ${localVersion} (local) -> ${latestVersion} (latest)\nDownload ${latestVersion} here: ${latestUrl}`);
            } else {
                if (isQuiet == false) {
                    log.info(`No updates available.`);
                }
            }
        }).catch((error) => {
            log.error(`Error checking for updates: ${error}`);
        });
    },
    custom: (remoteJsonUrl, localVersion, isQuiet, remoteJsonVersionKey, remoteJsonDownloadKey) => {
        if (isQuiet == false) {
            log.info(`Checking for updates...`);
        }
        axios.get(remoteJsonUrl)
        .then((response) => {
            const latestVersion = response.data[remoteJsonVersionKey];
            const latestUrl = response.data[remoteJsonDownloadKey];
            if (latestVersion > localVersion) {
                log.warn(`Update available! ${localVersion} (local) -> ${latestVersion} (latest)\nDownload ${latestVersion} here: ${latestUrl}`);
            } else {
                if (isQuiet == false) {
                    log.info(`No updates available.`);
                }
            }
        }).catch((error) => {
            log.error(`Error checking for updates: ${error}`);
        });
    },
}

module.exports = updateChecker;