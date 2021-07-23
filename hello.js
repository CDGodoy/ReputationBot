const TelegramBot = require('node-telegram-bot-api');
const Database = require('better-sqlite3')

const db = new Database('meubanco.sqlite', { verbose: console.log });
// console.log(db)

// const insertInto = db.prepare('INSERT INTO users VALUES (?, ?, ?)').run(null, 'ericao', 1231)

const selectAll = db.prepare('SELECT * FROM users').all()

console.log()
setTimeout(() => {
	const updateOne = db.prepare('UPDATE users SET reputation  = ? WHERE nome = ?').run(50, 'ericao')
}, 500)

const selectAll = db.prepare('SELECT * FROM users').all()

// const selectOne = db.prepare('SELECT * FROM users WHERE users.nome = ?').get('godoy')

// console.log(selectRep.sort((a, b) => b.reputation - a.reputation)[0])
// console.log(selectRep.find(item => item.reputation > 5 && item.nome === 'ericao'))


// const updateRep = db.prepare('UPDATE users SET reputation  = ? WHERE userId = ?', [2, '@CDGODOY'])


// // replace the value below with the Telegram token you receive from @BotFather
// const token = '1194976667:AAGrxoVyWVWjvVJL4EA2bvjxdglaVwTmytM';

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {
// 	polling: true
// });

// /** 
//  * 
//  */
// bot.onText(/\/up (.+)/, (msg, match) => {
// 	const chatId = msg.chat.id;

// 	const resp = match[1]

// 	const texto = `A reputação de ${resp} foi aumentada`

// 	bot.sendMessage(chatId, texto);
// });

// /**
//  * 
//  */
// bot.onText(/\/ban (.+)/, (msg, match) => {
// 	const chatId = msg.chat.id;

// 	const resp = match[1]
// 	const texto = `A reputação de ${resp} foi reduzida`

// 	bot.sendMessage(chatId, texto);
// });

// /**
//  * 
//  */
// bot.onText(/\/comandos/, (msg) => {
// 	const chatId = msg.chat.id;

// 	const texto = "Meus comandos são: \n \
//   /ban (para reduzir a reputação de um mau usuário) \n \
//   /up  (para aumentar a reputação de um bom usuário) \n \
//   /rep (para verificar a reputação de alguém)"

// 	bot.sendMessage(chatId, texto);
// });

// /**
//  * 
//  */
// bot.onText(/\/rep (.+)/, (msg, match) => {
//   const chatId = msg.chat.id
//   const userName = match[1]

//   let rep = 0 //Vamos ler a reputação de um user no banco

//   bot.sendMessage(chatId, rep)
// })