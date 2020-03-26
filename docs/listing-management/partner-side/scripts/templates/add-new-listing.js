let t = document.createElement('template');
t.innerHTML =
`
<div class="box">
    <article class="media">
    <div class="media-content has-text-centered">
        <div>
            <a class="btn is-dark btn-assign" onclick="showCreationModal()">
                Add New Listing
            </a>
        </div>
    </div>
    </article>
</div>
`;

t.innerHTML = 
`
<div class="card text-center">
  <div class="card-body">
    <a class="btn is-dark btn-assign" onclick="showCreationModal()">
        Add New Listing
    </a>
  </div>
</div>
`;

export default {
    new(){
        return document.importNode(t.content, true);
    }
};