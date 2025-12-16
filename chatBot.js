let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

sendMsgBtn.onclick = function() {
    let userInputValue = userInput.value;

    let userInputContainer = document.createElement("div");
    userInputContainer.classList.add("msg-to-chatbot-container");

    let userInputElement = document.createElement("span");
    userInputElement.classList.add("msg-to-chatbot");
    userInputElement.textContent = userInputValue;

    userInputContainer.appendChild(userInputElement);
    chatContainer.appendChild(userInputContainer);

    userInput.value = "";

    let chatbotReply = chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];
    let botMsgContainer = document.createElement("div");
    botMsgContainer.classList.add("msg-from-chatbot-container");

    let botMsgElement = document.createElement("span");
    botMsgElement.classList.add("msg-from-chatbot");
    botMsgElement.textContent = chatbotReply;

    botMsgContainer.appendChild(botMsgElement);
    chatContainer.appendChild(botMsgContainer);

}