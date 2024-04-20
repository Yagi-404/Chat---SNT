const sendButton    = document.getElementById('sendButton');
const textBar       = document.getElementById('textBar');
const chatContainer = document.getElementById('chatContainer');
const userNameInput = document.getElementById('userNameInput');
const userNameBtn   = document.getElementById('submitUsernameButton');

let userName;

function clearTextBar() {
    textBar.value = null;
}

function scrollDivToBottom(element) {
    element.scroll({ top: element.scrollHeight, behavior: 'smooth'});
}

function isScrollableY(element) {
    return element.scrollHeight > element.clientHeight;
}

sendButton.addEventListener('click', () => {
    // contrôle les messages vides pour éviter la création inutile de div
    if(textBar.value === "") {
        return;
    }

    let messageObject = document.createElement('div');
    messageObject.setAttribute('id', 'messageObject');
    let messageNode = document.createTextNode(textBar.value);

    let messageMetaObject = document.createElement('span');
    messageMetaObject.setAttribute('class', 'msg-date');
    const messageMetaDate = new Date();
    let messageMetaNode = document.createTextNode(`De ${userName} le ${messageMetaDate.getUTCDate()}/${messageMetaDate.getMonth()}/${messageMetaDate.getFullYear()} à ${messageMetaDate.getHours()}:${messageMetaDate.getMinutes()}`);
    
    messageObject.appendChild(messageNode);   // attribue le texte du message au div
    chatContainer.appendChild(messageObject); // ajoute le div à l'objet parent
    messageMetaObject.appendChild(messageMetaNode); // idem
    chatContainer.appendChild(messageMetaObject);
    
    
    clearTextBar();

    if(isScrollableY(chatContainer)) {
        scrollDivToBottom(chatContainer);
    }
});

// TODO: faire en sorte que le bouton entrée envoie également un message (keypress event, e.code)
// ?     remettre la saisie de texte sur le textBar après l'envoi

document.addEventListener('keypress', (e) => {
    if(e.code === 'Enter') {
        // contrôle les messages vides pour éviter la création inutile de div
        if(textBar.value === "") {
            return;
        }

        let messageObject = document.createElement('div');
        messageObject.setAttribute('id', 'messageObject');
        let messageNode = document.createTextNode(textBar.value);

        let messageMetaObject = document.createElement('span');
        messageMetaObject.setAttribute('class', 'msg-date');
        const messageMetaDate = new Date();
        let messageMetaNode = document.createTextNode(`De ${userName} le ${messageMetaDate.getUTCDate()}/${messageMetaDate.getMonth()}/${messageMetaDate.getFullYear()} à ${messageMetaDate.getHours()}:${messageMetaDate.getMinutes()}`);
        
        messageObject.appendChild(messageNode);   // attribue le texte du message au div
        chatContainer.appendChild(messageObject); // ajoute le div à l'objet parent
        messageMetaObject.appendChild(messageMetaNode); // idem
        chatContainer.appendChild(messageMetaObject);
        
        
        clearTextBar();

        if(isScrollableY(chatContainer)) {
            scrollDivToBottom(chatContainer);
        }
    }
});

userNameBtn.addEventListener('click', () => {
    if(userNameInput.value === "") {
        return;
    }
    
    userName = userNameInput.value;

    // TODO : taille max userName

    document.getElementById('connexionFrame').style.display = "none";
    document.getElementById('app').style.pointerEvents = "all";
});
