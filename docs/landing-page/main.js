import header from './components/welcome-header.js';
import mainmenu from './components/main-menu.js';
import config from '../config/global-config.js';

$(document).ready(() => {  
    // Display elements
    const newHeaderEl = header.new();
    const newMainMenuEl = mainmenu.new();

    document.body.appendChild(newHeaderEl);
    document.body.appendChild(newMainMenuEl);

    document.getElementById('btnUninstall')
            .addEventListener('click', () => {
        window.location.href = config.uninstallURL;
    })
})



