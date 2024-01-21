// Define projectId and enaikoChatId
var projectId = 'Project101';
var enaikoChatId = localStorage.getItem('Enaiko_chatID');

// Function to create chat UI
function createChatUI() {
    var chatContainer = document.createElement('div');
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '0';
    chatContainer.style.right = '0';
    chatContainer.style.width = '350px';
    document.body.appendChild(chatContainer);

    var header = document.createElement('div');
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.backgroundColor = '#007bff';
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

    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:4200/apps/chat/ff6bc7f1-449a-4419-af62-b89ce6cae0aa';
    // after post to create the set up .. use ttp://localhost:4200/apps/chat/enaikoChatId //
    iframe.width = '350';
    iframe.height = '600';
    iframe.style.border = 'none';
    chatContainer.appendChild(iframe);

    var minimizedLogo = document.createElement('img');
    minimizedLogo.src = '../assets/MinLogo.png';
    minimizedLogo.style.width = '50px';
    minimizedLogo.style.height = '50px';
    minimizedLogo.style.position = 'fixed';
    minimizedLogo.style.bottom = '10px';
    minimizedLogo.style.right = '10px';
    minimizedLogo.style.display = 'none';
    minimizedLogo.style.cursor = 'pointer';
    document.body.appendChild(minimizedLogo);

    minimizeButton.onclick = function() {
        var isIframeVisible = iframe.style.display !== 'none';
        iframe.style.display = isIframeVisible ? 'none' : 'block';
        header.style.display = isIframeVisible ? 'none' : 'flex';
        minimizedLogo.style.display = isIframeVisible ? 'block' : 'none';
    };

    minimizedLogo.onclick = function() {
        iframe.style.display = 'block';
        header.style.display = 'flex';
        minimizedLogo.style.display = 'none';
    };
}

// Create or fetch enaikoChatId and make POST request
if (!enaikoChatId) {
    enaikoChatId = 'UUID-' + Date.now();
    localStorage.setItem('Enaiko_chatID', enaikoChatId);
}

var postData = {
    projectId: projectId,
    enaikoChatId: enaikoChatId,
    msgType: 'W'
};

fetch('https://gmb5mklxy1.execute-api.us-east-1.amazonaws.com/default/enaikoHomeChat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    createChatUI();
})
.catch((error) => console.error('Error:', error));
