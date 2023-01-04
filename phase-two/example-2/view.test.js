/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  // We can use the beforeEach() hook 
  // to set the jest `document` HTML before each test
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays 2 paragraphs before adding any paragraphs', () => {
    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('displays 3 paragraphs after adding 1', () => {
    const view = new View();
    view.addParagraph();
    
    expect(document.querySelectorAll('p').length).toBe(3);
  });

  it('displays 3rd paragraph text', () => {
    const view = new View();
    view.addParagraph();
    const paragraphs = document.querySelectorAll('p');
    
    expect(paragraphs[2].textContent).toBe('This paragraph has been dynamically added by JavaScript!');
  });

  it('clears all paragraphs', () => {
    const view = new View();
    view.clearParagraphs();
    
    expect(document.querySelectorAll('p').length).toBe(0);
  });
});