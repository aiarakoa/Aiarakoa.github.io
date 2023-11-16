/**
 * @jest-environment jsdom
 */

import { provider } from "/js/index.js";

// jsDOM is lacking implementation of HTMLMediaElement and it interferes in the simulation of audio interactions
// hence, some stubs are added according to https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement specs to prevent exceptions
window.HTMLMediaElement.prototype.load = () => { return new Promise(() => {}) };
window.HTMLMediaElement.prototype.play = () => { return new Promise(() => {}) };
window.HTMLMediaElement.prototype.pause = () => { return undefined;};

// functions to simulate a click on a gameboard cell when the game is on
function timedClick() {myClick();}

function doClick(a) {
    a.click();
}

function myClick() {
    let a = document.querySelector('div[data-mole="on"]');
    a ? doClick(a) : setTimeout(() => timedClick);
}

test('Check if home is the first active view', () => expect(document.body.querySelector('#home').classList.contains('activesection')).toBe(true));
test('Check if game is not the first active view', () => expect(document.body.querySelector('#game').classList.contains('inactivesection')).toBe(true));
test('Check if relative path is /home', () => expect(window.location.pathname).toBe('/home'));
test('Check if there is a newgamebutton', () => expect(document.body.querySelector('#newgamebutton')).not.toBeNull());
test('Check if relative path is /game once newgamebutton is clicked', () => {
    document.body.querySelector('#newgamebutton').click();
    expect(window.location.pathname).toBe('/game');
})
test('Check if relative path is /home if newgamebutton is clicked and then finishgamebutton is clicked', () => {
    document.body.querySelector('#newgamebutton').click();
    document.body.querySelector('#finishgamebutton').click();
    expect(window.location.pathname).toBe('/home');
})
test('Check if audio element source is bluelow on start', () => expect(document.body.querySelector('audio').getAttribute('src')).toBe('/audio/bluelow.ogg'));
test('Check if audio element source is bluehigh once high difficulty is selected', () => {
    document.querySelector('#difficult').value = 'high';
    document.querySelector('#difficult').dispatchEvent(new Event('change'));
    expect(document.body.querySelector('audio').getAttribute('src')).toBe('/audio/bluehigh.ogg')
});
test('Check if provider.startMusic enables audio loop', () => {
    provider.startMusic();
    expect(document.body.querySelector('audio').loop).toBe(true);
});
test('Check if provider.stopMusic disables audio loop', () => {
    provider.stopMusic();
    expect(document.body.querySelector('audio').loop).toBe(false);
});
test('After a game is finished, if a new game is on and a cell with a mole is hit, the score increments in 10 points', () => {
    document.body.querySelector('#finishgamebutton').click();
    document.body.querySelector('#finishgamebutton').dispatchEvent(new Event('click'));
    let initialScore = parseInt(document.body.querySelector('#score').textContent, 10);
    provider.startStop();
    myClick();
    let newScore = parseInt(document.body.querySelector('#score').textContent, 10);
    expect(newScore - initialScore).toBe(10);
});
test('With the previously started game on, if difficulty is set as high and a cell with a mole is hit, the score increments in 30 points', () => {
    document.querySelector('#difficult').value = 'high';
    document.querySelector('#difficult').dispatchEvent(new Event('change'));
    let initialScore = parseInt(document.body.querySelector('#score').textContent, 10);
    myClick();
    let newScore = parseInt(document.body.querySelector('#score').textContent, 10);
    expect(newScore - initialScore).toBe(30);
});