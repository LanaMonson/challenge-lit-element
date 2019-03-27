import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

class Person {
    static get properties() {
        return {
          name: { type: String },
          numBooks: { type: Number },
          isFilled: { type: Boolean }
        };
      }
      
constructor(name, numBooks, isFilled) {
    this.name = name;
    this.numBooks = numBooks;
    this.isFilled = isFilled;
  }
}

class PersonElement extends LitElement {
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean }
    };
  }
  constructor() {
    super();
    this.myString = 'Hello World';
    this.myArray = [
        new Person("Bryan Cranston", 3, true), 
        new Person("Aaron Paul", 62, false), 
        new Person("Bob Odenkirk", 0, true),
    ];
    this.myBool = true;
  }

  clickHandler(event) {
    var newArray = [];
    for (var i = 0; i < this.myArray.length; i++) { 
        newArray.push(this.myArray[i]);
      }

    newArray.push(new Person("John Doe", 0, true));
    this.myArray = newArray;
  }

  render() {
    return html`
    <body>
    <div class="container">
        <ul class="demo-list-two mdl-list">
            ${this.myArray.map(person => html`
            <li class="mdl-list__item mdl-list__item--two-line">
            <span class="mdl-list__item-primary-content">
              <i class="material-icons mdl-list__item-avatar"></i>
              <span>${person.name}</span>
              <span class="mdl-list__item-sub-title">${person.numBooks} Books</span>
            </span>
            <span class="mdl-list__item-secondary-content">
              <a class="mdl-list__item-secondary-action" href="#">
                <i class="material-icons">star_border</i>
              </a>
            </span>
          </li>
            `)}
        </ul>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="sample3">
        <label class="mdl-textfield__label" for="sample3">Name</label>
      </div>
      <button @click=${this.clickHandler} class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i class="material-icons">add</i>
      </button>
    </div>
    `;
  }
}

customElements.define('person-element', PersonElement);
