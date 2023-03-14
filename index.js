// Write your code in this file!
// const currentUser = 'Grace Hopper';
const currentUser='Grace Hopper';
// const welcomeMessage = 'Welcome to Flatbook,${currentUser}! ';
// const welcomeMessage = currentUser;
// const welcomeMessage = 'Welcome to Flatbook, currentUser';
// typeof "const currentUser = 'Grace Hopper';";
// "const currentUser = 'Grace Hopper';".length;
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

// const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
// const shortGreeting = 'welcome';

// const shortGreeting = 'Welcome, ';

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

