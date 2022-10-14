/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
// burger
const burger = document.getElementsByClassName('header__burger-span')[0];
const burger2 = document.getElementsByClassName('header__span');
const openBurger = document.getElementsByClassName('header__burger-open')[0];
const container = document.getElementsByClassName('container')[0];
// price buttons
const buttonsArea = document.getElementsByClassName('price__selector')[0];
const listArea = document.getElementsByClassName('price__list')[0];
// local variables

function contain() {
  if (
    event.target === burger ||
    event.target === burger2[0] ||
    event.target === burger2[1] ||
    event.target === burger2[2]
  ) {
    openBurger.classList.add('header__burger-animation');
  } else if (event.target === openBurger) {
    openBurger.classList.add('header__burger-animation');
  } else {
    openBurger.classList.remove('header__burger-animation');
  }
  // if clicked burger open menu, if cliked other burger remove
}

export default function eventsMenager() {
  container.addEventListener('click', contain); // event on all file
}

// price buttons
const freePlan = document.getElementsByClassName('price__list-free')[0];
const orgPlan = document.getElementsByClassName('price__list-organization')[0];
const perosnalPlan = document.getElementsByClassName('price__list-personal')[0];
let className = '';

class PriceButtonStrategy {
  constructor() {
    this._strategy = null;
  }

  set strategy(strategy) {
    // po wywołaniu strategy = X włącza się
    this._strategy = strategy;
  }

  doAction() {
    this._strategy.doAction();
  }
}

// functions of buttons
class LeftButton {
  doAction() {
    listArea.classList.remove(`--price__list-move-right${className}`); // classes in css are modificators
    listArea.classList.add(`--price__list-move-left${className}`);
  }
}
class MiddleButton {
  doAction() {
    listArea.classList.remove(`--price__list-move-left${className}`); // remove movements class
    listArea.classList.remove(`--price__list-move-right${className}`);
    listArea.classList.remove(`--price__list-move-right`);
    listArea.classList.remove(`--price__list-move-left`);
  }
}
class RightButton {
  doAction() {
    listArea.classList.remove(`--price__list-move-left${className}`); // classes in css are modificators
    listArea.classList.add(`--price__list-move-right${className}`);
  }
}

const strategymenager = new PriceButtonStrategy(); // new
const leftAnimation = new LeftButton();
const rightAnimation = new RightButton();
const middleAnimation = new MiddleButton();

buttonsArea.addEventListener('click', () => {
  const height = document.body.clientHeight;
  const width = document.body.clientWidth;

  if (height < 980 && width < 450) {
    // if is phone change ovement class
    className = '-ph';
  } else {
    className = '';
  }
  // explaining which button had been clicked
  if (event.target.classList[0].includes('first')) {
    strategymenager.strategy = leftAnimation;
  }
  if (event.target.classList[0].includes('second')) {
    strategymenager.strategy = middleAnimation;
  }
  if (event.target.classList[0].includes('third')) {
    strategymenager.strategy = rightAnimation;
  }
  strategymenager.doAction();
});
