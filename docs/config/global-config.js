// Toggle if running in localhost or GH pages
let isTestEnvironment = false;

console.log(`Running in ${isTestEnvironment ? 'TEST' : 'PROD'} environment`);

// PureCloud Integration type name for this app 
let appName = 'premium-app-example';

// PREFIX for provisioned PureCloud objects. Used by wizard and other app that
// test the existence of these objects
let prefix = 'DEV_ORG_PROVISIONING_TOOL_';

// Client IDs when testing the app in localhost
let testClientID = 'e7de8a75-62bb-43eb-9063-38509f8c21af';


// Client IDs for production
let prodClientID =  '8ab9ce91-98a5-4285-92c3-5aa249c66e30';

// Determine URL for different environments
const root = isTestEnvironment ? 'http://localhost:8080' : 'https://genesysappfoundry.github.io/partner-enablement-tools';
const uninstallURL = 'https://mypurecloud.github.io/purecloud-premium-app/wizard/uninstall.html'

export default {
    clientID: isTestEnvironment ? testClientID : prodClientID,
    isTestEnvironment: isTestEnvironment,
    appName: appName,
    prefix: prefix,
    root: root,
    landingAssetURL: `${root}/landing-page/assets`,
    uninstallURL: uninstallURL,
    genesysCloudEnvironmentQueryParam: 'environment'
}