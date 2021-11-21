const Discord = require('discord.js') //discord.js를 가져와 Discord로 정한다.
const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]}) //Discord.CLient(...)을 client로 정한다.

client.once('ready', async () => {
    console.log('I am ready!')
})
// 봇이 준비될경우 'I am ready!'가 터미널에 표시됨

client.on('messageCreate', async message => {
    if (message.content.toLowerCase() === '!deploy') {
        const data = [
            {
                name: 'ping',
                description: 'Ping!',
                options: [
                    {
                        name: 'input', // 이름
                        description: '글을 쓸 수 있어요!', // 옵션 설명
                        type: 'STRING', // 종류
                    },
                    {
                        name: 'int', 
                        description: '소수점을 제외한 숫자를 쓸 수 있어요!',
                        type: 'INTEGER',
                    },
                    {
                        name: 'num',
                        description: '소수점을 쓸 수 있어요!',
                        type: 'NUMBER',
                    },
                    {
                        name: 'choice',
                        description: '참 거짓을 선택할 수 있어요!',
                        type: 'BOOLEAN',
                    },
                    {
                        name: 'target',
                        description: '유저를 선택할 수 있어요!',
                        type: 'USER',
                    },
                    {
                        name: 'destination',
                        description: '채널과 카테고리를 고를 수 있어요!',
                        type: 'CHANNEL',
                    },
                    {
                        name: 'role',
                        description: '역할 선택이 가능해요!',
                        type: 'ROLE',
                    },
                    {
                        name: 'mentionable',
                        description: '맨션 선택이 가능해요!',
                        type: 'MENTIONABLE',
                    },
                ]
            }
        ]

        const commands = await client.guilds.cache.get('894179409752375306').commands.set(data)
        console.log(commands)
    }
})
//사용자가 !deploy를 적으면 빗금 명령어 추가

client.on('interactionCreate', async interaction => {
    if (interaction.commandName === 'ping') {
        const string = interaction.options.getString('input') // 첫번째 옵션 이름 (input)의 값을 가져옴. 출력 : 문자열
        const integer = interaction.options.getInteger('int') // 두번째 옵션 이름 (int)의 값을 가져옴, 출력 : 정수
        const number = interaction.options.getNumber('num') // 세번째 옵션 이름 (num)의 값을 가져옴, 출력 : 아무 숫자
        const boolean = interaction.options.getBoolean('choice') // 네번째 옵션 이름 (choice)의 값을 가져옴, 출력 : true, false
        const user = interaction.options.getUser('target') // 다섯번째 옵션 이름 (target)의 값을 가져옴, 출력 : 유저 내용
        const member = interaction.options.getMember('target') // 다섯번째 옵션 이름 (target)의 값을 가져옴, 출력 : 유저 내용 
        const channel = interaction.options.getChannel('destination') // 여섯번째 옵션 이름 (destination)의 값을 가져옴, 출력 : 채널 내용
        const role = interaction.options.getRole('role') // 일곱번째 옵션 이름 (role)의 값을 가져옴, 출력 : 역할 내용
        const mentionable = interaction.options.getMentionable('mentionable') // 여덟번째 옵션 이름 (mentionable)의 값을 가져옴, 출력 : 맨션 내용

        console.log([string, integer, number, boolean, user, member, channel, role, mentionable])
        interaction.reply({content: 'Pong!'})
    }
})

client.login('토큰_입력') //토큰으로 로그인한다.