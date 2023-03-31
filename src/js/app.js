// TODO: write code here

import { CardWidget } from "./widget.js";

const container = document.querySelector('.container');

const form = new CardWidget(container);

form.bindToDom();