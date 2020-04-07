import config from '../../config/global-config.js';

let t = document.createElement('template');

t.innerHTML =
`
    <div class="row menu-container">
        <ul class="menu-list">
            <li id="menu-provisioning-url">
                <a href="${config.root}/org-provisioning/index.html">
                    <div class="menu-provisioning-url" style="width:90px; height:80px"></div>
                    <span>Dev Org Provisioning</span>
                </a>
            </li>
            <li id="menu-listing-url">
                <a href="${config.root}/listing-management/partner-side/index.html">
                    <div class="menu-listing-url" style="width:90px; height:80px"></div>
                    <span>Listing Management</span>
                </a>
            </li>
        </ul>
    </div>
`;

export default {
    new(){
        // Crete element
        const element = document.importNode(t.content, true);

        return element;
    }
};