/*CMD
  command: /todosplanos
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var plan = User.getProperty("plan")
var amount = User.getProperty("amount")
  

if ((message == "🇺🇲 𝗕𝗮‌𝘀𝗶𝗰𝗼 - R$4.00 / Vinculação de Código")){
User.setProperty("plan", "🇺🇲 𝗕𝗮‌𝘀𝗶𝗰𝗼" , "string")
User.setProperty("amount", "R$4,00" , "string")
Bot.runCommand("/detalhes")
}

if((message == "🇧🇷 𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝘁𝗲 - R$6.50 / Vinculação de Código+Login (G-mail)"))
{
User.setProperty("plan", "🇧🇷 𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝘁𝗲" , "string")
User.setProperty("amount", "R$6,50" , "string")
Bot.runCommand("/detalhes")
}

if((message == "🇲🇫 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮‌𝗿𝗶𝗼 - R$7.00 / Vinculação de Código+Login (Telefone)"))
{
User.setProperty("plan", "🇲🇫 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮‌𝗿𝗶𝗼" , "string")
User.setProperty("amount", "R$7,00" , "string")
Bot.runCommand("/detalhes")
}

if((message == "🇬🇧 𝗔𝘃𝗮𝗻𝗰‌𝗮𝗱𝗼 - R$10.50 / 2 Vinculações de Código+Login (G-mail)")){
User.setProperty("plan", "🇬🇧 𝗔𝘃𝗮𝗻𝗰‌𝗮𝗱𝗼" , "string")
User.setProperty("amount", "R$10,50" , "string")
Bot.runCommand("/detailhes")
}

if((message == "🇯🇵 𝗘𝗺𝗽𝗿𝗲𝘀𝗮𝗿𝗶𝗮𝗹 - R$14.00 / 2 Vinculações de Código+Login (Telefone)")) {
User.setProperty("plan", "🇯🇵 𝗘𝗺𝗽𝗿𝗲𝘀𝗮𝗿𝗶𝗮𝗹" , "string")
User.setProperty("amount", "R$14,00" , "string")
Bot.runCommand("/detalhes")
}

if((message == "🏠 𝐓𝐞𝐥𝐚 𝐈𝐧𝐢𝐜𝐢𝐚𝐥")) 
{
Bot.runCommand("menu")
}
