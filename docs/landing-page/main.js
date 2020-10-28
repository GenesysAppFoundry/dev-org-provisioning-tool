import header from './components/welcome-header.js';
import mainmenu from './components/main-menu.js';
import globalConfig from '../config/global-config.js';

const redirectUri = window.location.href;
const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance;

let environment;

//Authenticate
const urlParams = new URLSearchParams(window.location.search);
let tempPcEnv = urlParams.get(globalConfig.genesysCloudEnvironmentQueryParam); 

if(tempPcEnv){
    environment = tempPcEnv;
} else {
    environment = localStorage.getItem(globalConfig.appName + ':environment');
    if(!environment){
        environment = 'mypurecloud.com';
    }
}

localStorage.setItem(globalConfig.appName + ':environment', environment);

let clientID = globalConfig.clientID; 
client.setEnvironment(environment);
client.setPersistSettings(true, globalConfig.appName);

$(document).ready(() => {  
    client.loginImplicitGrant(clientID, window.location.href.split('?')[0])
    .then(() => {
        console.log('Logged in');
    let token = client.authData.accessToken;

    // Display elements
    const newHeaderEl = header.new();
    const newMainMenuEl = mainmenu.new();

    document.body.appendChild(newHeaderEl);
    document.body.appendChild(newMainMenuEl);

    document.getElementById('btnUninstall')
            .addEventListener('click', () => {
        window.location.href = globalConfig.uninstallURL;
    })
    })
    .catch((err) => console.error(err));
})



