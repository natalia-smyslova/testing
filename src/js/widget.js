import Moon from './Moon';

import validateCardType from './validators';

export class CardWidget {
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
        // console.log(this.element);

        this.submit = this.parentEl.querySelector(CardWidget.submitSelector);
        // console.log(this.submit);

        this.input = this.parentEl.querySelector(CardWidget.inputSelector);
        // this.input.value = '4539247490400651';
        // console.log(this.input.value);

        this.element.addEventListener('submit', this.onSubmit);

        console.log(this.onSubmit);

    }

    onSubmit(e) {
        e.preventDefault();
        console.log('submit');

        const moonValue = Moon(this.input.value);
        console.log(moonValue);

        if (moonValue === true) {
            validateCardType(this.input.value);
        }
        else {
            throw new Error("Неправильно указан номер карты")
        }
    }
};