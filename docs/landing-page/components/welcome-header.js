let t = document.createElement('template');

t.innerHTML =
`
    <div class="jumbotron">
      <div class="container">

        <h1 class="display-3">Welcome to Partner Enablement Tools!</h1>

        <p style="color: white;">What would you like to do?</p>
        <p>
          <p><button type="submit" id="btnLearnMore" class="btn btn-primary btn-lg">Learn more »</button></p>
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