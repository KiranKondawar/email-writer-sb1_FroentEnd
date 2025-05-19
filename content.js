console.log("Email Writer Extension - Content Script Loaded");

function findToolbar(){

}
function createAIButton(){

}

function injectButton(){
    const existingButton = document.querySelector('.ai-reply-generator');
    if(existingButton) existingButton.remove();

    const toolbar= findComposedToolbar();
    if(!toolbar){
        console.log("Toolbar not found");
        return;
    }
 console.log("Toolbar found, creating AI Button");
 const Button=createAIButton();
 
 button.classList.add('ai-reply-button');
button.addEventListner('click',async()=>{

});

toolbar.insertBefore(button,toolbar.firstChild);

}

const observer = new MutationObserver((mutations) => {
    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposedElements= addedNodes.some(node => 
            node.nodeType == node.ELEMENT_NODE &&
            (node.matches('.adh,.btC,[role="dialog"]') || node.querySelector('.adh,.btC,[role="dialog"]'))
        );
        if(hasComposedElements){
            console.log("Composed element Found");
            setTimeout(injectButton,500);

        }
    }
});

observer.observe(document.body,{childList:true,subtree:true});