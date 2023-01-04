class MessageView {
  constructor() {
    this.showMessageButtonEl = document.querySelector('#show-message-button');
    this.hideMessageButtonEl = document.querySelector('#hide-message-button');

    this.showMessageButtonEl.addEventListener('click', () => {
      this.displayMessage();
    });

    this.hideMessageButtonEl.addEventListener('click', () => {
      this.removeMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    let messageEl = document.createElement('div');
    messageEl.id = 'message';
    messageEl.textContent = 'This message displayed by JavaScript';

    document.querySelector('#main-container').append(messageEl);
  }

  removeMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;