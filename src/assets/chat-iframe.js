// Assuming postData is defined and contains necessary data for the POST request
var projectId = 'Project101';
var tenantId = 'T002';
var enaikoChatId = localStorage.getItem('Enaiko_chatID');

var chatIconSVG = `
    <svg width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
        <circle cx="16" cy="16" r="16" fill="#007bff"/>
        <path fill="#FFF" d="M16.28 23.325a11.45 11.45 0 002.084-.34 5.696 5.696 0 002.602.17.627.627 0 01.104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 01.311-.531c.258-.146.498-.314.717-.499.864-.732 1.352-1.708 1.352-2.742 0-.347-.055-.684-.159-1.006.261-.487.472-.999.627-1.53A4.59 4.59 0 0126 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 01-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 00-1.2-.81 2.986 2.986 0 00-.368-.187c-.34.051-.688.077-1.039.077-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12 5.2 0 9.458 3.607 9.458 8.12 0 4.514-4.259 8.121-9.458 8.121-.584 0-1.162-.045-1.728-.135-.245.058-1.224.64-2.635 1.67-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 01-1.044-.765zm4.949.666c.043 0 .087.003.13.01.51.086 1.034.13 1.564.13 4.392 0 7.907-2.978 7.907-6.589 0-3.61-3.515-6.588-7.907-6.588-4.39 0-7.907 2.978-7.907 6.588 0 1.746.821 3.39 2.273 4.62.365.308.766.588 1.196.832.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104zm-2.337-4.916c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226z"/>
        </g>
        fill="#FFF"
    </svg>`;
// Define global variables for the chat container and minimized logo to manage their visibility
var chatContainer;
var minimizedLogo;

// Function to initialize the chat UI elements
function initChatUI() {
    // Create or select the chat container
    chatContainer = document.createElement('div');
    chatContainer.id = 'chatContainer';
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '10px';
    chatContainer.style.right = '20px';
    chatContainer.style.width = '380px';
    chatContainer.style.display = 'none'; // Initially hidden
    document.body.appendChild(chatContainer);

    // Create the header with a minimize button
    var header = document.createElement('div');
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.backgroundImage = 'linear-gradient(to right, #ffcc00,#ffff99 )';
    header.style.color = 'white';
    chatContainer.appendChild(header);

    var logo = document.createElement('img');
    logo.src = '../assets/3.png';
    logo.style.width = '30px';
    logo.style.height = '30px';
    header.appendChild(logo);

    var botName = document.createElement('span');
    botName.textContent = 'ChatBot';
    botName.style.marginLeft = '10px';
    header.appendChild(botName);

    var minimizeButton = document.createElement('button');
    minimizeButton.innerHTML = '&#x2716;';
    minimizeButton.style.backgroundColor = 'transparent';
    minimizeButton.style.border = 'none';
    minimizeButton.style.cursor = 'pointer';
    minimizeButton.style.color = 'white';
    header.appendChild(minimizeButton);

    // Retrieve the sessionID from local storage
    var sessionID = localStorage.getItem('sessionID');
    var TenantId = localStorage.getItem('tenantId');
    console.log('sessionID',sessionID)
    console.log('TenantId',TenantId)
    console.log('projectId',projectId)
    var iframe = document.createElement('iframe');
    //iframe.src = `http://localhost:4800/apps/chat/${sessionID}`; // Concatenate sessionID with the base URL 
    iframe.src = `http://localhost:4800/apps/chat/${sessionID}/${TenantId}/${projectId}`;

    
    //iframe.src = 'http://localhost:4800/apps/chat/ff6bc7f1-449a-4419-af62-b89ce6cae0aa';
    // after post to create the set up .. use ttp://localhost:4200/apps/chat/enaikoChatId //
    iframe.width = '380';
    iframe.height = '600';
    iframe.style.border = 'none';
    chatContainer.appendChild(iframe);

    // Minimize button click event to hide the chat container
    minimizeButton.onclick = function() {
        chatContainer.style.display = 'none';
        minimizedLogo.style.display = 'block'; // Show minimized logo when chat is hidden
    };

    // Placeholder for iframe or chat content
    // In a real application, you would append the chat interface or an iframe here
}

// Function to display the minimized logo
function displayMinimizedLogo() {
    minimizedLogo = document.createElement('div');
    minimizedLogo.innerHTML = chatIconSVG; // Simplify SVG content for brevity
    minimizedLogo.style.position = 'fixed';
    minimizedLogo.style.bottom = '50px';
    minimizedLogo.style.right = '60px';
    minimizedLogo.style.cursor = 'pointer';
    document.body.appendChild(minimizedLogo);

    // Click event to toggle chat container visibility
    minimizedLogo.onclick = function() {
        if (chatContainer.style.display === 'none') {
            chatContainer.style.display = 'block';
            minimizedLogo.style.display = 'none'; // Hide minimized logo when chat is shown
        } else {
            chatContainer.style.display = 'none';
        }
    };
}

// Create or fetch enaikoChatId and make POST request
if (!enaikoChatId) {
    enaikoChatId = 'UUID-' + Date.now();
    localStorage.setItem('Enaiko_chatID', enaikoChatId);
}

var postData = {
    projectId: projectId,
    tenantId: tenantId,
    enaikoChatId: enaikoChatId,
    msgType: 'W',
    src:'web'
};

// Fetch sessionID, then initialize UI components
fetch('https://2sdr7cfqdf.execute-api.us-east-1.amazonaws.com/default/enaikoHomeChat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
})
.then(data => {
    if (data.sessionID) {
        localStorage.setItem('sessionID', data.sessionID);
        localStorage.setItem('tenantId', tenantId);
        localStorage.setItem('projectId', projectId);
        
        initChatUI(); // Initialize chat UI components
        displayMinimizedLogo(); // Display the minimized logo
    } else {
        throw new Error('Session ID not received');
    }
})
.catch(error => console.error('Error:', error));
