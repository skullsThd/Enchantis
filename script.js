// Selezione dell'elemento del campo di input del messaggio e dell'elenco dei messaggi
const messageInput = document.querySelector("#message-input");
const messagesList = document.querySelector("#messages-list");

// Aggiunta di un ascoltatore di eventi per il pulsante di invio
document.querySelector("#send-button").addEventListener("click", () => {
  // Creazione di un nuovo elemento "li" per il messaggio
  const message = document.createElement("li");
  message.classList.add("message");
  // Creazione di un nuovo elemento "span" per l'autore del messaggio
  const author = document.createElement("span");
  author.classList.add("author");
  author.textContent = "Tu:";
  // Aggiunta dell'autore al messaggio
  message.appendChild(author);
  // Creazione di un nuovo elemento "span" per il testo del messaggio
  const text = document.createElement("span");
  text.classList.add("text");
  text.textContent = messageInput.value;
  // Aggiunta del testo al messaggio
  message.appendChild(text);
  // Creazione di un nuovo elemento "span" per il timestamp del messaggio
  const time = document.createElement("span");
  time.classList.add("time");
  const now = new Date();
  time.textContent = now.toLocaleTimeString();
  // Aggiunta del timestamp al messaggio
  message.appendChild(time);
  // Aggiunta del messaggio alla lista dei messaggi
  messagesList.appendChild(message);
  // Pulizia del campo di input del messaggio
  messageInput.value = "";
  // Simulazione di una risposta del bot
  setTimeout(() => {
    // Creazione di un nuovo elemento "li" per il messaggio del bot
    const botMessage = document.createElement("li");
    botMessage.classList.add("message");
    // Creazione di un nuovo elemento "span" per l'autore del messaggio del bot
    const botAuthor = document.createElement("span");
    botAuthor.classList.add("author");
    botAuthor.textContent = "BOT:";
    // Aggiunta dell'autore al messaggio del bot
    botMessage.appendChild(botAuthor);
    // Creazione di un nuovo elemento "span" per il testo del messaggio del bot
    const botText = document.createElement("span");
    botText.classList.add("text");
    botText.textContent ='Ciao sono Syp come posso aiutarti?!';
    // Aggiunta del testo al messaggio del bot
    botMessage.appendChild(botText);
    // Creazione di un nuovo elemento "span" per il timestamp del messaggio del bot
    const botTime = document.createElement("span");
    botTime.classList.add("time");
    const botNow = new Date();
    botTime.textContent = botNow.toLocaleTimeString();
    // Aggiunta del timestamp al messaggio del bot
    botMessage.appendChild(botTime);
    // Aggiunta del messaggio del bot alla lista dei messaggi
    messagesList.appendChild(botMessage);
  }, 1000);
});

// risposte alternative
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Previeni il comportamento predefinito dell'input di inviare il messaggio
    document.querySelector("#send-button").click(); // Simula il click del pulsante "Invia"
  }
});

