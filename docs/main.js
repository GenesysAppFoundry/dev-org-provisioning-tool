$(document).ready(() => {    
    // Trigger uninstall button to uninstall app.
    document.getElementById("btnUninstall").addEventListener('click', () => window.location='./wizard/uninstall.html')

    // Load provisioning tool in iframe on page load
    document.getElementById('tool-iframe').src = '/org-provisioning/index.html';

    // Click event to load provisioning tool in iframe
    document.getElementById("btnProvisioning").addEventListener('click', function() {
        document.getElementById('tool-iframe').src = '/org-provisioning/index.html';
        document.documentElement.scrollTop = 450;
    })

    // Click evet to load listing management in iframe
    document.getElementById("btnListing").addEventListener('click', function() {
        document.getElementById('tool-iframe').src = '/listing-management/partner-side/index.html'
        document.documentElement.scrollTop = 450;
    })
})



