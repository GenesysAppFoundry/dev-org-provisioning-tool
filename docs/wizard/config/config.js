import cheatChat from '../../listing-management/partner-side/scripts/cheat-chat.js';

export default {
    clientIDs: {        
        'mypurecloud.com': 'e4163c90-2168-400a-9441-cb2c8ae7ccc2',
        'mypurecloud.ie': '377bf436-7787-4ed0-83d7-7ade528ff4ed',
        'mypurecloud.com.au': 'ae206cd0-a70e-481d-86f4-b1bfb61498de',
        'mypurecloud.jp': '265993a4-931a-44e5-a0b1-80519c3edb25',
        'mypurecloud.de':  '5f25a1d0-7b42-416b-beb3-fa708e7b2e65',
        'usw2.pure.cloud': '0d09a06e-f09a-47ed-8556-080479596414'  
    },
    //'wizardUriBase': 'http://localhost:3000/wizard/',
    'wizardUriBase': 'https://genesysappfoundry.github.io/dev-org-provisioning-tool/wizard/',

    // The actual URL of the landing page of your web app.
    //'premiumAppURL': 'http://localhost:3000/',
    'premiumAppURL': 'https://genesysappfoundry.github.io/dev-org-provisioning-tool/',

    // PureCloud assigned name for the premium app
    // This should match the integration type name of the Premium App
    'appName': 'premium-app-example',

    // Default Values for fail-safe/testing. Shouldn't have to be changed since the app
    // must be able to determine the environment from the query parameter 
    // of the integration's URL
    'defaultPcEnvironment': 'mypurecloud.com',
    'defaultLanguage': 'en-us',

    // The names of the query parameters to check in 
    // determining language and environment
    // Ex: www.electric-sheep-app.com?language=en-us&environment=mypurecloud.com
    'languageQueryParam': 'language',
    'pureCloudEnvironmentQueryParam': 'environment',

    // Permissions required for running the Wizard App
    'setupPermissionsRequired': ['admin'],

    // To be added to names of PureCloud objects created by the wizard
    'prefix': 'T_DEV_ORG_PROVISIONING_TOOL_',

    // These are the PureCloud items that will be added and provisioned by the wizard
    'provisioningInfo': {
        'role': [
            {
                'name': 'Role',
                'description': 'Generated role for access to the app.',
                'permissionPolicies': [
                    {
                        'domain': 'integration',
                        'entityName': 'examplePremiumApp',
                        'actionSet': ['*'],
                        'allowConditions': false
                    },
                    {
                        "domain": "architect",
                        "entityName": "datatable",
                        "actionSet": ["*"]
                    }
                ]
            }
        ],
        'group': [
            {
                'name': 'Agents',
                'description': 'Agents have access to a widget that gives US state information based on caller\'s number.',
            },
            {
                'name': 'Supervisors',
                'description': 'Supervisors have the ability to watch a queue for ACD conversations.',
            },
            {
                "name": "Listing Manager",
                "description": "People that will have acess to the Listing Info Workspce.",
            }
        ],
        'oauth-client': [
            {
                'name': 'OAuth Client',
                'description': 'Generated Client that\'s passed to the App Backend',
                'roles': ['Listing Manager'],
                'authorizedGrantType': 'CLIENT_CREDENTIALS',

                /**
                 * This function is for other processing that needs
                 * to be done after creating an object.
                 * 'finally' is available for all the other
                 * resources configured in this file.
                 * For Client Credentials, normally it means
                 * passing the details to the backend.
                 * @param {Object} installedData the PureCloud resource created
                 * @returns {Promise}    
                 */
                'finally': function(installedData){
                    return cheatChat.submitClientCredentials(installedData);
                }
            }
        ],
        'data-table': {
            "name": "Listings",
            "description": "Contains the details of your app listings.",
            "referenceKey": "id",
            "customFields": [
                {
                    "name": "status",
                    "type": "string",
                    "default": "IN_PROGRESS"
                },
                {
                    "name": "businessInformation",
                    "type": "string",
                    "default": "{}"
                },
                {
                    "name": "listingDetails",
                    "type": "string",
                    "default": "{}"
                },
                {
                    "name": "premiumAppDetails",
                    "type": "string",
                    "default": "{}"
                },
                {
                    "name": "workspaceId",
                    "type": "string"
                },
                {
                    "name": "attachments",
                    "type": "string",
                    "default": "{}"
                },
                {
                    "name": "devFoundryNotes",
                    "type": "string",
                    "default": "[]"
                },
                {
                    "name": "placeholder1",
                    "type": "string"
                },
                {
                    "name": "placeholder2",
                    "type": "string"
                },
                {
                    "name": "placeholder3",
                    "type": "string"
                },
            ]
        }
    }
};
