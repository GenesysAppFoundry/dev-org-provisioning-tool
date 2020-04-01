// let t = document.createElement('template');

// t.innerHTML =
// `
//     <div class="jumbotron pet-header">
//         <h1 class="display-3">Partner Enablement Tools</h1>
//     </div>
// `;

export default {
    new(text){
        let t = document.createElement('template');

        t.innerHTML =
        `
            <div class="jumbotron pet-header">
                <h1 class="display-3">` + text + `
        `;


        // Crete element
        const element = document.importNode(t.content, true);

        return element;
    }
};