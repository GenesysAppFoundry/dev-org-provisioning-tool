import provisionTelephonyViews from './views/provisiontelephony.js'
import architectFlowViews from './views/architectflow.js'
import loadModalView from './components/modals.js'
import developerRoleFlowViews from './views/developerRole.js'
import globalConfig from '../../config/global-config.js'
import header from '../../landing-page/components/header.js';
import sidebar from '../../landing-page/components/sidebar.js';
import content from './components/main.js';

const redirectUri = window.location.href;
const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance;

let environment;

//Authenticate
environment = localStorage.getItem(globalConfig.appName + ':environment');
if(!environment){
    const urlParams = new URLSearchParams(window.location.search);
    let tempPcEnv = urlParams.get(globalConfig.environment); 

    if(tempPcEnv){
        environment = tempPcEnv;
    } else {
        environment = 'mypurecloud.com';
    }

    localStorage.setItem(globalConfig.appName + ':environment', environment);
}
let clientID = globalConfig.clientID; 
client.setEnvironment(environment);

// Display elements
const newHeaderEl = header.new("Dev Org Provisioning");
const newSidebarEl = sidebar.new();
const newContentEl = content.new();

document.body.appendChild(newHeaderEl);
document.body.appendChild(newSidebarEl);

let toolContent = document.getElementById("tool-contents");
toolContent.appendChild(newContentEl);

$(document).ready(() => {
    client.loginImplicitGrant(clientID, window.location.href.split('?')[0])
         .then(() => {
             console.log('Logged in');
            let token = client.authData.accessToken;

            // Eventlisteners for main buttons
            provisionTelephonyViews.btnEventListeners('btnProvisionTelephony');
            architectFlowViews.btnInitiateArchitectDownloadEventListener();
            developerRoleFlowViews.btnEventListener();
            loadModalView.setupLoadingEl();
         })
         .catch((err) => console.error(err));
})



