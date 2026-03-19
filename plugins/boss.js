const { cmd } = require('../command');

cmd({
    pattern: "boss",
    alias: ["owner", "info", "developer", "team", "about"],
    react: "👑",
    desc: "Get TEAM information",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        const infoMessage = `
╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╮
┇     𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 🔥      ┇
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╯

┏•✧✦✧•┃ 👑 OWNER ┃•✧✦✧•┓
┇  ▸ 𝗡𝗮𝗺𝗲    : 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯       ┇
┇  ▸ 𝗣𝗵𝗼𝗻𝗲  : 923213509846 ┇
┇  ▸ 𝗘𝗺𝗮𝗶𝗹  : proxabdullah302@gmail.com ┇
┗•✧✦✧•━━━━━━━━━━•✧✦✧•┛


╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╮
┇   𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫⚡    ┇
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╯`;

        await reply(infoMessage);
        
        await conn.sendMessage(from, {
            react: { text: "👑", key: mek.key }
        });

    } catch (error) {
        console.error("PROxABDULLAH-MD command error:", error);
        reply(`╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╮
┇      ❌ ERROR ❌      ┇
╰┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅╯`);
    }
});