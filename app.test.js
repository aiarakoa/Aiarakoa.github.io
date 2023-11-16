/**
 * @jest-environment jsdom
 */

import { Home } from "/js/home/home.js";
import { Game } from "/js/game/game.js";
import { Provider } from "/js/provider/provider.js";

const provider                      =   new Provider();
let home                            =   new Home({data: {homeID: 'home', homeClass: 'activesection'}, provider: provider});
let game                            =   new Game({data: {gameID: 'game', gameClass: 'inactivesection'}, provider: provider});

test('Check if home render produces a DOM subtree with a div root IDed as home', () => expect(home.render().id).toBe('home'));
test('Check if game render produces a DOM subtree with a div root IDed as game', () => expect(game.render().id).toBe('game'));