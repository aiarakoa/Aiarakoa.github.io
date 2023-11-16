import { Locale } from "/js/locale/locale.js";
import { Game } from "/js/game/game.js";
import { Home } from "/js/home/home.js";
import { Audio } from "/js/audio/audio.js";
import { Provider } from "/js/provider/provider.js";
import { Router } from "/js/router/router.js";

const provider              =   new Provider();
const router                =   new Router('/home');

function render() {
  router.goHome();
  provider.routeToHome      =   router.getRouterToHome();
  provider.routeToGame      =   router.getRouterToGame();
  provider.userInteraction  =   false;
  let locale                =   new Locale({data: {selectID: 'localeselect', selectAnchorID: 'locale', selectContainerID: 'localeselectcontainer', selectAnchorClassname: 'activesection'}, provider: provider});
  let home                  =   new Home({data: {homeID: provider.homeViewID, homeClass: 'activesection'}, provider: provider});
  let game                  =   new Game({data: {gameID: provider.gameViewID, gameClass: 'inactivesection'}, provider: provider});
  let audio                 =   new Audio({data: {gameID: 'myAudio'}, provider: provider});
  document.body.appendChild(home.render());
  document.body.appendChild(game.render());
  document.body.appendChild(audio.render());
  document.body.appendChild(locale.render());
}

render();

export {provider, router, render};