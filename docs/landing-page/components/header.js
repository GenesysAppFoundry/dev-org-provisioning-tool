export default {
    new(text){
        let t = document.createElement('template');

        t.innerHTML =
        `
            <div class="jumbotron pet-header">
                <h1 class="display-4">` + text + `
        `;


        // Crete element
        const element = document.importNode(t.content, true);

        return element;
    }
};