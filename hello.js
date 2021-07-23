const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1194976667:AAGrxoVyWVWjvVJL4EA2bvjxdglaVwTmytM';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;

  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
 
  const resp = match[1]; // the captured "whatever"
  console.log(match)
  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/commands/, (mensagem) => {
  const chatId = mensagem.chat.id;

  texto = "Não tenho comandos ainda fi"

  bot.sendMessage(chatId, texto);
});

bot.onText(/\/up (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const nome = msg.from.first_name;

  const resp = match[1]
  const texto = `A reputação de ${resp} foi aumentada`

  console.log(msg, texto)

  bot.sendMessage(chatId, texto);
});

bot.onText(/\/ban (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const nome = msg.from.first_name;

  const resp = match[1]
  const texto = `A reputação de ${resp} foi reduzida, seu lixo`

  bot.sendMessage(chatId, texto);
});

bot.onText(/\/comandos/, (msg)=> {
  const chatId = msg.chat.id;

  const texto = "Meus comandos são: \n \
  /ban (para reduzir a reputação de um mau usuário) \n \
  /up  (para aumentar a reputação de um bom usuário \n \
  /Cadastrar (para cadastrar algum usuário) \n \
  /rep (para verificar a reputação de alguém)"

  bot.sendMessage(chatId, texto);
})

bot.on('command', (msg) =>{
  console.log(msg)
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Olá');
});