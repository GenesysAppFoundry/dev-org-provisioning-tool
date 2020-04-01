let t = document.createElement('template');

t.innerHTML =
`
    <div class="row menu-container">
        <ul class="sidebar-list">
            <li id="provisioning-url">
                <a href="/org-provisioning/index.html">
                    <div class="provisioning-url" style="width:90px; height:80px"></div>
                    <span>Dev Org Provisioning</span>
                </a>
            </li>
            <li id="listing-url">
                <a href="/listing-management/partner-side/index.html">
                    <div class="listing-url" style="width:90px; height:80px"></div>
                    <span>Listing Management</span>
                </a>
            </li>
            <li id="uninstall-url">
                <a href="/wizard/uninstall.html">
                    <div class="uninstall-url" style="width:90px; height:80px"></div>
                    <span>Uninstall</span>
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