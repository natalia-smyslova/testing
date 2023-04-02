/**
 * @jest-environment jsdom
 */

import CardWidget from '../widget';

// Отрисовка контейнера в DOM

test('should render self', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const form = new CardWidget(container);

  form.bindToDom();
  expect(container.innerHTML).toEqual(CardWidget.markup);
});
