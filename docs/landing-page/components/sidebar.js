let t = document.createElement('template');

t.innerHTML =
`
    <div class="row">
      <div class="bar-block col-md-3">
        <ul class="sidebar-list">
          <li><a href="/index.html"><img src="../../landing-page/assets/home.png" width="30px" height="30px">Home</a></li>
          <li><a href="/org-provisioning/index.html"><img src="../../landing-page/assets/process.png" width="30px" height="30px">Dev Org Provisioning</a></li>
          <li><a href="/listing-management/partner-side/index.html"><img src="../../landing-page/assets/rocket.png" width="30px" height="30px">Listing Management</a></li>
        </ul>    
      </div>
      <div id="tool-contents" class="col-md-9">
      </div>
    </div>
`;

export default {
    new(){
        // Crete element
        const element = document.importNode(t.content, true);

        return element;
    }
};