// Define projectId and enaikoChatId
var projectId = 'Project101';
var tenantId = 'T002';
var enaikoChatId = localStorage.getItem('Enaiko_chatID');

// Function to create chat UI
function createChatUI() {
    var chatContainer = document.createElement('div');
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '0';
    chatContainer.style.right = '0';
    //chatContainer.style.left = '1230px'; //this will move to left
    chatContainer.style.width = '380px';
    document.body.appendChild(chatContainer);

    var header = document.createElement('div');
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    //header.style.backgroundColor = '#007bff';
    //header.style.backgroundImage = 'linear-gradient(to right, #007bff, #a1cfff)';
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

    var iframe = document.createElement('iframe');
    iframe.src = 'http://localhost:4800/apps/chat/ff6bc7f1-449a-4419-af62-b89ce6cae0aa';
    // after post to create the set up .. use ttp://localhost:4200/apps/chat/enaikoChatId //
    iframe.width = '380';
    iframe.height = '600';
    iframe.style.border = 'none';
    chatContainer.appendChild(iframe);
    
    //Try the color logo concept
    /*
    var chatIconSVG = `
    <svg viewBox="0 0 24 24" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.39 1.41 4.48 3.56 5.74L2 22l5.27-1.39C8.87 21.13 10.34 22 12 22c5.52 0 10-3.58 10-8s-4.48-8-10-8z"/>
    </svg>`;
    */
   //Circle with over lapping 2 square chatboxes
   /*
    var chatIconSVG = `
    <svg width="80px" height="80px" viewBox="-4.5 0 110 110" xmlns="http://www.w3.org/2000/svg">
        <g id="Chat" transform="translate(-376.031 -40.142)">
            <g id="Group_8" data-name="Group 8">
            <path id="Path_9" data-name="Path 9" d="M376.031,85.144a45,45,0,1,1,45,45A45,45,0,0,1,376.031,85.144Z" fill="#007bff"/>
            </g>
            <g id="Group_9" data-name="Group 9">
            <path fill="currentColor" id="Path_10" data-name="Path 10" d="M474.03,80.142H450.992L437.774,70.7a3,3,0,0,0-4.744,2.442v7h-8a3,3,0,0,0-3,3v9.269h-18a3,3,0,0,0-3,3v40.235a3,3,0,0,0,3,3h26.629l15.312,10.937a3,3,0,0,0,4.743-2.441v-8.5H463.03a3,3,0,0,0,3-3v-14.5h8a3,3,0,0,0,3-3v-35A3,3,0,0,0,474.03,80.142Zm-14,52.5H447.714a3,3,0,0,0-3,3v5.666l-11.35-8.106a2.99,2.99,0,0,0-1.744-.56H407.03V98.411h53Zm11-17.5h-5V95.411a3,3,0,0,0-3-3h-35V86.142h8a3,3,0,0,0,3-3V78.971l9.257,6.612a2.993,2.993,0,0,0,1.743.559h21Z" >
            <path id="Path_11" data-name="Path 11" d="M419.03,117.952a3,3,0,0,0,2.12-5.121,3.1,3.1,0,0,0-4.24,0,3,3,0,0,0,2.12,5.121Z" fill="#293a56"/>
            <path id="Path_12" data-name="Path 12" d="M433.97,117.952a3,3,0,0,0,2.12-5.121,3.1,3.1,0,0,0-4.24,0,3.062,3.062,0,0,0-.88,2.121,3.006,3.006,0,0,0,3,3Z" fill="#293a56"/>
            <path id="Path_13" data-name="Path 13" d="M448.92,117.952a3,3,0,0,0,2.12-5.121,3.106,3.106,0,0,0-4.24,0,3,3,0,0,0,2.12,5.121Z" fill="#293a56"/>
            </g>
        </g>
    </svg>`; 
    */
    var chatIconSVG = `
    <svg width="60px" height="60px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
        <circle cx="16" cy="16" r="16" fill="currentColor"/>
        <path fill="#FFF" d="M16.28 23.325a11.45 11.45 0 002.084-.34 5.696 5.696 0 002.602.17.627.627 0 01.104-.008c.31 0 .717.18 1.31.56v-.625a.61.61 0 01.311-.531c.258-.146.498-.314.717-.499.864-.732 1.352-1.708 1.352-2.742 0-.347-.055-.684-.159-1.006.261-.487.472-.999.627-1.53A4.59 4.59 0 0126 19.31c0 1.405-.654 2.715-1.785 3.673a5.843 5.843 0 01-.595.442v1.461c0 .503-.58.792-.989.493a15.032 15.032 0 00-1.2-.81 2.986 2.986 0 00-.368-.187c-.34.051-.688.077-1.039.077-1.412 0-2.716-.423-3.743-1.134zm-7.466-2.922C7.03 18.89 6 16.829 6 14.62c0-4.513 4.258-8.12 9.457-8.12 5.2 0 9.458 3.607 9.458 8.12 0 4.514-4.259 8.121-9.458 8.121-.584 0-1.162-.045-1.728-.135-.245.058-1.224.64-2.635 1.67-.511.374-1.236.013-1.236-.616v-2.492a9.27 9.27 0 01-1.044-.765zm4.949.666c.043 0 .087.003.13.01.51.086 1.034.13 1.564.13 4.392 0 7.907-2.978 7.907-6.589 0-3.61-3.515-6.588-7.907-6.588-4.39 0-7.907 2.978-7.907 6.588 0 1.746.821 3.39 2.273 4.62.365.308.766.588 1.196.832.241.136.39.39.39.664v1.437c1.116-.749 1.85-1.104 2.354-1.104zm-2.337-4.916c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226zm4.031 0c-.685 0-1.24-.55-1.24-1.226 0-.677.555-1.226 1.24-1.226.685 0 1.24.549 1.24 1.226 0 .677-.555 1.226-1.24 1.226z"/>
        </g>
        fill="#FFF"
    </svg>`;
    


    var minimizedLogo = document.createElement('div'); // Use a div to contain the SVG
    minimizedLogo.innerHTML = chatIconSVG; // Set the innerHTML to the SVG markup
    minimizedLogo.style.width = '80px';
    minimizedLogo.style.height = '80px';
    minimizedLogo.style.position = 'fixed';
    minimizedLogo.style.bottom = '50px';
    minimizedLogo.style.right = '50px';
    minimizedLogo.style.display = 'none';
    minimizedLogo.style.cursor = 'pointer';
    document.body.appendChild(minimizedLogo);
    
    // Function to change the color of the chat icon
    function changeChatIconColor(color) {   
        minimizedLogo.querySelector('svg').style.color = color;
    }

    // Example usage
    //changeChatIconColor('#ff0000'); // Changes the chat icon color to red
    //changeChatIconColor('#FFFF00'); //yellow
    changeChatIconColor('#FFA500'); //orange
    //changeChatIconColor('#1C98F7'); //blue
    
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
        console.log('minimized logo clicked')
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

// return this._httpClient.post<any>('https://2sdr7cfqdf.execute-api.us-east-1.amazonaws.com/default/enaikoHomeChat', newItem);
//fetch('https://gmb5mklxy1.execute-api.us-east-1.amazonaws.com/default/enaikoHomeChat', {
fetch('https://2sdr7cfqdf.execute-api.us-east-1.amazonaws.com/default/enaikoHomeChat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
}).then(response => {
    if (!response.ok) {
        // If response status code is not OK, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the response as JSON if the request was successful
    return response.json(); // Corrected to parse the response body as JSON
})//
.then(data => {
    console.log('Success:', data);
    // Check if data contains sessionID and store it in local storage
    if (data && data.sessionID) {
        localStorage.setItem('sessionID', data.sessionID);
        // Now call createChatUI or any other function that needs to be executed next
        createChatUI();
    } else {
        console.log("No sessionID found in response");
    }
})
.catch((error) => console.error('Error:', error));

/*
.then(response => {
    if (!response.ok) {
        // If response status code is not OK, throw an error
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        // Only parse the response as JSON if the request was successful
        //return response.json();
        console.log('response',response)
        if (response && response.sessionID) {
            localStorage.setItem('sessionID', response.sessionID);
            // Now call createChatUI or any other function that needs to be executed next
            createChatUI();
        } else {
            console.log("No sessionID found in response");
        }
    }
})

then(data => {
    console.log('Success:', data);
    // Check if data contains sessionID and store it in local storage
    if (data && data.sessionID) {
        localStorage.setItem('sessionID', data.sessionID);
        // Now call createChatUI or any other function that needs to be executed next
        createChatUI();
    } else {
        console.log("No sessionID found in response");
    }
})
*/
//.catch((error) => console.error('Error:', error));


