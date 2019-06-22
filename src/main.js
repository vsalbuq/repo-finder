class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.querySelector('#repo-form');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Um texto diferentoso bagarai',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url:'http://github.com/rocketseat'
        });

        console.log(this.repositories);
    }
}

new App();