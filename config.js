const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU8xNnQxYmN3REVOcUxQRTFod3ZnWVlLTVhFNGJkWXNDNXhybHB0YXIzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJNUjRlTnRtVVhqS2lXNFBVWlBQNzZCMXh0QjdOd2puNEUwTlNha0NFUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRWd1UmVBdGs4QnVYZ2ZWVjlnZEphTmlQMDhqKzRaVVUyb2dKK1hpRUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSlZvcHV6WHVSZklraURvajFNRTdWMGluK1JBTThFSUc3STR5bzduSVNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOWHkzblhQalFpblZETHZwYVljVGMvVTJsbDNpR2UxUHJwVm8zMHhqRjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9jOHgzdnZ6aFE5aVlESXEyME1hMllTSmg4dFJoTkc1bXBveDFRVVFZZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0NkaTlFMmpZQkNva1hsWjQxd01KdXgvME9PNEpRYldXakF2QzRNNFYyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlJFTDQvTEZVOWxzY3JyQks2Q05wUjhrWDB3Tk1jcGlucnBtcmFUZ1F6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4xZkhPZmh0WEFQaE1UN1FVL1QzckZpeEgyUjNwZEVxemVOYWhUdVk5M1BVOEltbWVEcWlSKzlvU3JJZjAveEhJaWxLUEdjd3R5SmpDNk5YYVVUckNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjUsImFkdlNlY3JldEtleSI6Im4vTmZySG5uNCtiUTVIS0syYVVEcCthK3liZmdXaWdvTmU4c2x1WEs4WlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWE5XRU4xUkMiLCJtZSI6eyJpZCI6IjkyMzIxMzUwOTg0Njo1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngfCThqlQyoDhtI/Lo0HKmeG0heG0nMqfyp/htIDKnPCThqrqp4IiLCJsaWQiOiIxNTk1MzY5OTY0NzkwMDA6NUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTZWhNc0JFSVdxZzg0R0dBWWdBU2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im40YXZVRE9kdC9pL2FFZXhBYzIxcUs2Zll0SEQxNlJoem9hN1hKVW9PMkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjI5S0c3NWMxZWlYZjNna0gwQllSK3d0ajdYbmVLa1hBNUxEYmhiUHNCS2FUOFZDeHI0YXdrL2Yva3ZjY1JEeS8vZndwQjRPMVE5eUJjSFEwNjk4RkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYbkNUSVBBSVUrQXUwUkRwTTJvRGVicnRWRXJpaFJUd2pSQTREOVF2WkgvY3ZST1lLRWVEWVNGVlJnQVNUTUhGRHh2TVpoSGs1dWxpRm1MbFBGK0VBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE1OTUzNjk5NjQ3OTAwMDo1QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaK0dyMUF6bmJmNHYyaEhzUUhOdGFpdW4yTFJ3OWVrWWM2R3UxeVZLRHRpIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWdnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQyNDUxMzEsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTS9QIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/96ky3s.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923213509846",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/96ky3s.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923213509846",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
