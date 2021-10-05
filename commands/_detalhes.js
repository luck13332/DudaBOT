/*CMD
  command: /detalhes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var plan = User.getProperty("plan")
var amount = User.getProperty("amount")

Bot.sendKeyboard("🚫 Cancelar","*Plano*: "+plan+"\n*Valor*: "+amount+"\n\n_Para aprovar a solicitação do plano escolhido, faça o pagamento à seguinte chave PIX:_\n\npix@wolkteen.com\n\n𝗜𝗳 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗱𝗼𝗻𝗲 𝗽𝗮𝘆𝗺𝗲𝗻𝘁,\n𝗦𝗲𝗻𝗱 𝗮 𝘀𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝘀𝗵𝗼𝘄𝗶𝗻𝗴 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂❜𝘃𝗲 𝗽𝗮𝗶𝗱 𝘂𝘀 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗽𝗹𝗮𝗻 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗰𝗵𝗼𝗼𝘀𝗲𝗻")
Bot.runCommand("/ss")
