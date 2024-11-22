const TelegramApi = require('node-telegram-bot-api')

const token = "7816092625:AAHKq7tpZIOuUTbCk7Km4p8RBzpEfMdWPSo"

const bot = new TelegramApi(token, {polling: true})

bot.on("message", message => {
    const chatId = message.chat.id
    const text = message.text
    if (text === '/start') {
        bot.sendMessage(chatId, text, {
            reply_markup: JSON.stringify({
                inline_keyboard: [[
                    {text: 'кнопка', callback_data: 1}
                ]]
            })
        })
    }
})

bot.on("callback_query", async message => {
    return console.log(message.data)
})
