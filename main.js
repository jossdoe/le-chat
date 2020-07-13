// # FUNCTION DEFINITIONS
// Factory function for messages
const createMessage = (content, type) => ({
  content,
  type
});

// Appending a message to DOM
const appendMessage = (message) => {
  const chatWindow = document.querySelector('div.output-area');

  const newMessage = document.createElement('article');
  newMessage.classList.add(`${message.type}-message`);
  newMessage.innerHTML = message.content;

  chatWindow.append(newMessage);
  scrollToBottom();
};

// Scroll to bottom
const scrollToBottom = () => {
  var chatWindow = document.querySelector('div.output-area');
  chatWindow.scrollTop = chatWindow.scrollHeight;
};

// Submit Handler for user messages
const handleSubmit = (e) => {
  if (e) e.preventDefault;

  const inputElement = document.querySelector('input');
  const content = inputElement.value;
  const newMessage = createMessage(content, 'user');
  appendMessage(newMessage);

  sendCatMessage();
  inputElement.value = '';
};

// Cat messages
const sendCatMessage = () => {
  const catReplies = ['*purring*', 'Meow.', ':3'];
  const randomReply = catReplies[Math.floor(Math.random() * catReplies.length)];
  const message = createMessage(randomReply, 'cat');

  setTimeout(() => appendMessage(message), 1500);
};

// Toggle layover
const toggleLayover = () => {
  const layoverElement = document.querySelector('div.layover');
  layoverElement.classList.toggle('hide');
};

// Trigger layover action
const triggerAction = (action) => {
  const feedMessages = [
    'You put out some cheap supermarket food. The cat just sits there. Looking at you. Judging.',
    'You give some fish to the cat. The feline gods approve.'
  ];
  const petMessages = [
    "You pet the cat's head. Purring intensifies.",
    "You try to pet the cat's belly. The cat scratches your hand."
  ];
  const playMessages = [
    "You throw a ball. The cat doesn't react. It's not a dog, you know?",
    'You get a piece of string and the cat goes nuts. In its excessive battle, it throws down a coffee cup.'
  ];

  let randomItem;
  switch (action) {
    case 'feed':
      randomItem =
        feedMessages[Math.floor(Math.random() * feedMessages.length)];
      break;
    case 'pet':
      randomItem = petMessages[Math.floor(Math.random() * petMessages.length)];
      break;
    case 'play':
      randomItem =
        playMessages[Math.floor(Math.random() * playMessages.length)];
      break;
    default:
      randomItem = 'Internal error. Cat died.';
  }

  const newMessage = createMessage(randomItem, 'action');
  appendMessage(newMessage);
  sendCatMessage();
};

// # DOM OPERATIONS
// Initial scroll to bottom
scrollToBottom();
sendCatMessage();

// Event for button
const submitButton = document.querySelector('button');
submitButton.addEventListener('click', handleSubmit);

// Event for field
const inputField = document.querySelector('input');
inputField.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') handleSubmit();
});

// Event for layover button
const menuIcon = document.querySelector('div#menu-toggle');
menuIcon.addEventListener('click', toggleLayover);

// Events for layover options
const feedButton = document.querySelector('#feed-button');
const petButton = document.querySelector('#pet-button');
const playButton = document.querySelector('#play-button');

feedButton.addEventListener('click', () => {
  triggerAction('feed');
  toggleLayover();
});

petButton.addEventListener('click', () => {
  triggerAction('pet');
  toggleLayover();
});

playButton.addEventListener('click', () => {
  triggerAction('play');
  toggleLayover();
});
