let t = document.createElement('template');

t.innerHTML =
`
    <div class="jumbotron jumbotron-fluid ">
      <div class="container">

        <h1 class="display-4">Welcome to Partner Enablement Tools!</h1>

        <p>
          <p><button type="submit" id="btnUninstall" class="btn btn-primary btn-lg">Uninstall Apps</button></p>
        </p>
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