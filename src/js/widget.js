import Moon from './Moon';

import validateCardType from './validators';

export default class CardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `    
        <form data-widget="cards-form-widget">
        <label for="cards-input"></label>
        <input id="cards-input" data-id="cards-input" type="text" placeholder="credit card number">
            <button class="submit">Click to Validate</button>
    </form>
    `;
  }

  static get selector() {
    return 'form';
  }

  static get inputSelector() {
    return 'input';
  }

  static get submitSelector() {
    return '.submit';
  }

  bindToDom() {
    this.parentEl.innerHTML = CardWidget.markup;

    this.element = this.parentEl.querySelector(CardWidget.selector);

    this.submit = this.parentEl.querySelector(CardWidget.submitSelector);

    this.input = this.parentEl.querySelector(CardWidget.inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const moonValue = Moon(this.input.value);

    if (moonValue === true) {
      validateCardType(this.input.value);
    } else {
      throw new Error('Неправильно указан номер карты');
    }
  }
}
