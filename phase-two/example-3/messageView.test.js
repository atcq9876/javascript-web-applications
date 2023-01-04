/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the "click me" button and displays a message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEL = document.querySelector('#message-input');
    inputEL.value = 'Test input value';

    const showMessagebuttonEl = document.querySelector('#show-message-button');
    showMessagebuttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toBe('Test input value');
  });

  it('clicks the "hide message" button and removes the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const showMessageButtonEl = document.querySelector('#show-message-button');
    showMessageButtonEl.click();

    const hideMessageButtonEl = document.querySelector('#hide-message-button');
    hideMessageButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});