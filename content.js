// console.log("Email Writer Extension - Content Script Loaded");



// function createAIButton() {
//     const button = document.createElement('div');
//     button.style.marginRight = '8px';
//     button.innerHTML = 'AI Reply';
//     button.setAttribute('role', 'button');
//     button.setAttribute('data-tooltip', 'Generate AI Reply');
//     return button;


// }

// function getEmailContent() {
//     const selectors = [
//         '.h7',
//         '.a3s.ail',
//         '.gmail_quote',
//         '[role="presentation"]'
//     ];
//     for (const selector of selectors) {
//         const content = document.querySelector(selector);
//         if (content) {
//             return content.innerText, trim();
//         }
//         return '';
//     }
// }


// function findComposeToolbar() {
//     const selectors = [
//         '.btC',
//         'aDh',
//         '[role="toolbar"]',
//         '.gU.Up'
//     ];
//     for (const selector of selectors) {
//         const toolbar = document.querySelector(selector);
//         if (toolbar) {
//             return toolbar;
//         }
//         return null;
//     }
// }


// function injectButton() {
//     const existingButton = document.querySelector('.ai-reply-button');
//     if (existingButton) existingButton.remove();

//     const toolbar = findComposedToolbar();
//     if (!toolbar) {
//         console.log("Toolbar not found");
//         return;
//     }
//     console.log("Toolbar found, creating AI Button");
//     const Button = createAIButton();

//     button.classList.add('ai-reply-button');
//     button.addEventListner('click', async () => {
//         try {
//             button.innerHTML = 'Generating...';
//             button.disabled = true;

//             const emailContent = getEmailContent();
//             const response = await fetch('http://localhost:8081/api/email/generate', {
//                 method: 'post',
//                 headers: {
//                     'content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     emailContent: emailContent,
//                     tone: "professional"
//                 })
//             });

//             if (!response.ok) {
//                 throw new Error('API request Failed')
//             }
//             const generatedReply = await response.text();
//             const composeBox = document.querySelector('[role="toolBox"][g.editable="true]');
//             if (composeBox) {
//                 composeBox.focus();
//                 document.execCommand('inserText', false, generatedReply);
//             } else {
//                 console.error('Compose box not found');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('Failed to generate Reply');
//         } finally {
//             button.innerHTML('AI Reply');
//             button.disabled = false;
//         }
//     });

//     toolbar.insertBefore(button, toolbar.firstChild);

// }

// const { JSDOM } = require('jsdom');

// // Create a fake DOM with a body element
// const dom = new JSDOM(`<!DOCTYPE html><body></body>`, {
//     pretendToBeVisual: true, // allows MutationObserver
// });

// // Get window, document, and MutationObserver from the DOM
// const { window } = dom;
// const { document, MutationObserver, Node } = window;

// // Example function to inject a button
// // function injectButton() {
// //     const btn = document.createElement('button');
// //     btn.textContent = 'Injected Button';
// //     document.body.appendChild(btn);
// //     console.log('Button Injected!');
// // }

// const observer = new MutationObserver((mutations) => {
//     for (const mutation of mutations) {
//         const addedNodes = Array.from(mutation.addedNodes);
//         const hasComposedElements = addedNodes.some(node =>
//             node.nodeType == node.ELEMENT_NODE &&
//             (node.matches('.aDh,.btC,[role="dialog"]') || node.querySelector('.aDh,.btC,[role="dialog"]'))
//             //querySelector is used for checking any children matches selector
//         );
//         if (hasComposedElements) {
//             console.log("Composed element Found");
//             setTimeout(injectButton, 500);

//         }
//     }
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });

// // Simulate adding a dialog element to the body after 1 second
// setTimeout(() => {
//     const dialog = document.createElement('div');
//     dialog.setAttribute('role', 'dialog');
//     document.body.appendChild(dialog);
//     console.log('Dialog added');
// }, 1000);


// console.log("Email Writer Extension - Content Script Loaded");

// function createAIButton() {
//     const button = document.createElement('button');
//     button.innerText = 'AI Reply';
//     button.setAttribute('type', 'button');
//     button.classList.add('ai-reply-button');
//     button.style.marginLeft = '8px';
//     button.style.padding = '6px 12px';
//     button.style.background = '#1a73e8';
//     button.style.color = 'white';
//     button.style.border = 'none';
//     button.style.borderRadius = '4px';
//     button.style.cursor = 'pointer';
//     return button;
// }

// function getEmailContent() {
//     const contentElement = document.querySelector('.Am.Al.editable.LW-avf.tS-tW');
//     return contentElement ? contentElement.innerText.trim() : '';
// }

// function findSendButtonContainer() {
//     // Look for send button area inside compose window
//     return document.querySelector('.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3')?.parentElement;
// }

// function injectButton() {
//     const existingButton = document.querySelector('.ai-reply-button');
//     if (existingButton) return; // Avoid duplicates

//     const container = findSendButtonContainer();
//     if (!container) {
//         console.log("Send button container not found.");
//         return;
//     }

//     const button = createAIButton();
//     button.addEventListener('click', async () => {
//         try {
//             button.innerText = 'Generating...';
//             button.disabled = true;

//             const emailContent = getEmailContent();
//             if (!emailContent) {
//                 alert('No email content found.');
//                 return;
//             }

//             const response = await fetch('http://localhost:8081/api/email/generate', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     emailContent: emailContent,
//                     tone: 'professional'
//                 })
//             });

//             if (!response.ok) throw new Error('API request failed');

//             const generatedReply = await response.text();
//             const composeBox = document.querySelector('.Am.Al.editable.LW-avf.tS-tW');
//             if (composeBox) {
//                 composeBox.focus();
//                 document.execCommand('insertText', false, generatedReply);
//             } else {
//                 console.error('Compose box not found');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('Failed to generate reply.');
//         } finally {
//             button.innerText = 'AI Reply';
//             button.disabled = false;
//         }
//     });

//     container.appendChild(button);
// }

// // Observer to detect compose dialog open
// const observer = new MutationObserver(() => {
//     const composeWindows = document.querySelectorAll('.nH.Hd'); // Compose windows
//     composeWindows.forEach(() => injectButton());
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });


function createAIButton() {
    const button = document.createElement('button');
    button.innerText = 'AI Reply';
    button.setAttribute('type', 'button');
    button.classList.add('ai-reply-button');
    button.style.marginLeft = '8px';
    button.style.padding = '6px 12px';
    button.style.background = '#1a73e8';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    return button;
}

// function getEmailContent(textArea) {
//     return textArea ? textArea.innerText.trim() : '';
// }

function getEmailContent(container) {
    // Try to find the editable email input area (works for both reply and compose)
    const textArea = container.closest('.adn')?.querySelector('.Am.Al.editable') ||
                     container.closest('.nH')?.querySelector('.Am.Al.editable');

    if (!textArea) {
        console.warn('Editable area not found');
        return '';
    }

    return textArea.innerText.trim();
}


function injectButtonIntoBox(container) {
    if (!container || container.querySelector('.ai-reply-button')) return;

    const button = createAIButton();

   button.addEventListener('click', async () => {
    try {
        button.innerText = 'Generating...';
        button.disabled = true;

        const emailContent = getEmailContent(container);

        if (!emailContent) {
            alert('No email content found.');
            return;
        }

        const response = await fetch('http://localhost:8081/api/email/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailContent,
                tone: 'professional'
            })
        });

        if (!response.ok) throw new Error('API request failed');

        const generatedReply = await response.text();

        const editableBox = container.closest('.adn')?.querySelector('.Am.Al.editable') ||
                            container.closest('.nH')?.querySelector('.Am.Al.editable');

        if (editableBox) {
            editableBox.focus();
            document.execCommand('insertText', false, generatedReply);
        } else {
            console.error('Editable reply/compose box not found');
        }

    } catch (err) {
        console.error(err);
        alert('Failed to generate reply.');
    } finally {
        button.innerText = 'AI Reply';
        button.disabled = false;
    }
});


    container.appendChild(button);
}

function injectButtons() {
    const sendButtonSelectors = [
        '.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3', // Compose window
        '.T-I.J-J5-Ji.aoO.T-I-atl.L3'     // Reply box
    ];

    sendButtonSelectors.forEach(selector => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(btn => {
            const container = btn.parentElement;
            injectButtonIntoBox(container);
        });
    });
}

// Mutation observer to handle new compose/reply boxes
const observer = new MutationObserver(() => {
    injectButtons();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

