let t = document.createElement('template');

// t.innerHTML =
// `
//     <div class="row">
//       <div class="sidebar bar-block col-md-4">
//         <button id="btnProvisioning" class="bar-item bar-button">Dev Org Provisioning</button>
//         <hr>
//         <button id="btnListing" class="bar-item bar-button">Listing Management</button>
//       </div>

//       <div class="col-md-10" style="margin-left:15%">
//         <iframe id="tool-iframe" class="tool-iframe" src="about:blank" frameborder="0"></iframe>
//       </div>      
//     </div>
// `;

t.innerHTML =
`
    <div class="row">
      <div class="sidebar bar-block col-md-2">
        <ul class="sidebar-list">
        <li><a href="/index.html">Home</a></li>
          <li><a href="/org-provisioning/index.html">Dev Org Provisioning</a></li>
          <li><a href="/listing-management/partner-side/index.html">Listing Management</a></li>
        </ul>    
      </div>
      <div id="tool-contents" class="col-md-10">
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