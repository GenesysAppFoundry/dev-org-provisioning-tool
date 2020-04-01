let t = document.createElement('template');

t.innerHTML =
`
    <div class="row menu-container">
        <ul class="sidebar-list">
            <li>
                <a href="/org-provisioning/index.html">
                    <img src="/landing-page/assets/process.png" style="width:80px; height:80px" />
                    <span>Dev Org Provisioning</span>
                </a>
            </li>
            <li>
                <a href="/listing-management/partner-side/index.html">
                    <img src="/landing-page/assets/rocket.png" style="width:80px; height:80px"/>
                    <span>Listing Management</span>
                </a>
            </li>
            <li>
                <a href="/wizard/uninstall.html">
                    <img src="/landing-page/assets/caution.png" style="width:80px; height:80px"/>
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