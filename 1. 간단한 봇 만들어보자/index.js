const Discord = require('discord.js') //discord.js를 가져와 Discord로 정한다.
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]}) //Discord.CLient(...)을 client로 정한다.

client.once('ready', async () => {
    console.log('I am ready!')
})
// 봇이 준비될경우 'I am ready!'가 터미널에 표시됨

client.on('messageCreate', async message => {
    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong!')
    }
})
//사용자가 메시지를 작성했을 때, 만약 메시지가 !ping이면 Pong!이라고 답변한다.

client.login('토큰_입력') //토큰으로 로그인한다.