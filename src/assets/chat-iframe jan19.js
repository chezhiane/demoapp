// Create the chat container
var chatContainer = document.createElement('div');
chatContainer.style.position = 'fixed';
chatContainer.style.bottom = '0';
chatContainer.style.right = '0';
chatContainer.style.width = '350px';
document.body.appendChild(chatContainer);

// Create the header section
var header = document.createElement('div');
header.style.padding = '20px';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'space-between';
header.style.backgroundColor = '#007bff';
header.style.color = 'white';
chatContainer.appendChild(header);

// Add a logo
var logo = document.createElement('img');
logo.src = '../assets/3.png'; // Replace with your logo's path
//logo.style.height = '30px';
logo.style.width = '30px';
logo.style.height = '30px';
header.appendChild(logo);

// Add bot name
var botName = document.createElement('span');
botName.textContent = 'ChatBot';
botName.style.marginLeft = '10px';
header.appendChild(botName);

// Add minimize button
/*
var minimizeButton = document.createElement('button');
minimizeButton.textContent = 'Minimize';
header.appendChild(minimizeButton);
*/
/*
var minimizeButton = document.createElement('button');
minimizeButton.innerHTML = '&#x2212;'; // Unicode for a cross symbol
// For a minus symbol, you can use '−' or its HTML entity '&#x2212;'
header.appendChild(minimizeButton);
*/
// Add minimize button
var minimizeButton = document.createElement('button');
minimizeButton.innerHTML = '&#x2716;'; // Unicode for a cross symbol
minimizeButton.style.backgroundColor = 'transparent'; // Make background transparent
minimizeButton.style.border = 'none'; // Remove border
minimizeButton.style.cursor = 'pointer'; // Change cursor on hover
minimizeButton.style.color = 'white'; // Set symbol color (change if needed)
header.appendChild(minimizeButton);

// Create the iframe
var iframe = document.createElement('iframe');
iframe.src = 'http://localhost:4200/apps/chat/ff6bc7f1-449a-4419-af62-b89ce6cae0aa';
iframe.width = '350';
iframe.height = '600';
iframe.style.border = 'none';
chatContainer.appendChild(iframe);

// Create a minimized logo image
var minimizedLogo = document.createElement('img');
minimizedLogo.src = '../assets/MinLogo.png'; // Replace with minimized logo's path
minimizedLogo.style.width = '50px';
minimizedLogo.style.height = '50px';
minimizedLogo.style.position = 'fixed';
minimizedLogo.style.bottom = '10px';
minimizedLogo.style.right = '10px';
minimizedLogo.style.display = 'none';
minimizedLogo.style.cursor = 'pointer';
document.body.appendChild(minimizedLogo);

// Minimize button click functionality
minimizeButton.onclick = function() {
    var isIframeVisible = iframe.style.display !== 'none';
    iframe.style.display = isIframeVisible ? 'none' : 'block';
    header.style.display = isIframeVisible ? 'none' : 'flex';
  //  customTextInput.style.display = isIframeVisible ? 'none' : 'block'; // Toggle custom text input
    minimizedLogo.style.display = isIframeVisible ? 'block' : 'none';
};

// Click event for minimized logo
minimizedLogo.onclick = function() {
    iframe.style.display = 'block';
    header.style.display = 'flex';
 //   customTextInput.style.display = 'block';
    minimizedLogo.style.display = 'none';
};

// Create a custom text input
/*
var customTextInput = document.createElement('input');
customTextInput.type = 'text';
customTextInput.style.position = 'absolute';
customTextInput.style.bottom = '40px'; // Positioning at the bottom of the iframe
customTextInput.style.width = '320px'; // Adjust width as needed
customTextInput.style.left = '15px'; // Adjust to align with the iframe's position
customTextInput.style.height = '100px'; // Adjust to align with the iframe's position
customTextInput.style.zIndex = '1001'; // Ensure it's above the iframe
chatContainer.appendChild(customTextInput);

// Functionality to send message (example)
customTextInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && customTextInput.value.trim()) {
        console.log('Message:', customTextInput.value); // Handle the message sending
        customTextInput.value = ''; // Clear the text input
    }
});
*/
// Create a message input area container
