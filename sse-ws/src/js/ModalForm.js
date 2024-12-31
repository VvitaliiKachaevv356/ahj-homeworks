export default class ModalForm {
  constructor(root) {
    this.root = root;
  }

  createmodalNickname() {
    const modalNickname = document.createElement("div");
    modalNickname.setAttribute("data-widget", "modalNickname");
    modalNickname.className = "container";

    const header = document.createElement("h2");
    header.className = "modal__header";
    header.textContent = "Выберите псевдоним:";

    const form = document.createElement("form");
    form.id = "nicknameForm"; 
    form.setAttribute("data-id", "addTicket-form");

    const input = document.createElement("input");
    input.setAttribute("data-id", "name");
    input.name = "name";
    input.required = true;
    input.className = "form__input";

    const button = document.createElement("button");
    button.type = "submit";
    button.setAttribute("data-id", "ok");
    button.className = "form__btn";
    button.textContent = "Продолжить";

    form.appendChild(input);
    form.appendChild(button);
    modalNickname.appendChild(header);
    modalNickname.appendChild(form);

    this.root.appendChild(modalNickname);
  }

  createmodalChat() {
    const modalChat = document.createElement("div");
    modalChat.setAttribute("data-widget", "modalChat");
    modalChat.className = "container";

    const body = document.createElement("div");
    body.className = "modalChat__body";

    const userDiv = document.createElement("div");
    userDiv.className = "modalChat__user";

    const userHeader = document.createElement("div");
    userHeader.className = "modal__header";
    userHeader.textContent = "Пользователи";

    userDiv.appendChild(userHeader);

    const chatDiv = document.createElement("div");
    chatDiv.className = "modalChat__chat";

    const chatHeader = document.createElement("div");
    chatHeader.className = "modal__header";
    chatHeader.textContent = "Окно чата";

    chatDiv.appendChild(chatHeader);

    body.appendChild(userDiv);
    body.appendChild(chatDiv);

    const form = document.createElement("form");
    form.id = "messageForm";
    form.setAttribute("data-id", "addMessage");

    const messageInput = document.createElement("input");
    messageInput.setAttribute("data-id", "message");
    messageInput.name = "message";
    messageInput.className = "form__input";
    messageInput.placeholder = "Type your message here";

    const sendButton = document.createElement("button");
    sendButton.type = "submit";
    sendButton.setAttribute("data-id", "ok");
    sendButton.className = "form__btn";
    sendButton.textContent = "Отправить";

    form.appendChild(messageInput);
    form.appendChild(sendButton);

    modalChat.appendChild(body);
    modalChat.appendChild(form);

    this.root.appendChild(modalChat);
  }
}
