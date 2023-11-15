class Router {
    constructor(home) {
        this.validRoutes                    =   ['home', 'game'];
        this.homeRelativePath               =   home;
    }

    forceRouteTo(relativePath) {
        window.history.pushState({}, '', relativePath);
    }

    goHome() {
        this.forceRouteTo(this.homeRelativePath);
    }

    addValidPath(relativePath) {
        this.validRoutes.push(relativePath);
    }

    getRouterToHome() {
        return this.routeToHome.bind(this);
    }

    getRouterToGame() {
        return this.routeToGame.bind(this);
    }

    routeToHome() {
        this.routeTo('/home');
    }

    routeToGame() {
        this.routeTo('/game');
    }

    routeTo(relativePath) {
        window.history.pushState({}, '', relativePath);
        this.validRoutes.forEach(route => relativePath === `/${route}`    ?   this.activateSection(route)  :  this.deactivateSection(route));
    }

    activateSection(route) {document.getElementById(route).classList.replace("inactivesection", "activesection");}

    deactivateSection(route) {document.getElementById(route).classList.replace("activesection", "inactivesection");}
}

export {Router};