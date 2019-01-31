// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor (domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // set expanding transition
    this.domElement.style.transition = '0.5s';
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.getElementsByClassName('expandButton')[0];
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle () {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.textContent = this.expandButton.textContent === 'expand'
      ? 'collapse' : 'expand';
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article');
let form = document.getElementById('articleform');

articles.forEach(article => new Article(article));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('working');
  submitArticle();
});

function submitArticle () {
  const div = document.createElement('div');
  div.classList.add('article');

  const h2 = document.createElement('h2');
  h2.textContent = document.getElementById('form-title').value;

  const dateP = document.createElement('p');
  dateP.classList.add('date');
  dateP.textContent = new Date();

  const textP = document.createElement('p');
  textP.textContent = document.querySelector('textarea[name="comment"]').value;

  const btn = document.createElement('span');
  btn.classList.add('expandButton');

  div.appendChild(h2);
  div.appendChild(dateP);
  div.appendChild(textP);
  div.appendChild(btn);

  document.getElementsByClassName('articles')[0].appendChild(div);

  new Article(div);
}
