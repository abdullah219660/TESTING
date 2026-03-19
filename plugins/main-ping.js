const axios = require("axios");

async function getVideoBuffer(url) {
    const res = await axios.get(url, { responseType: "arraybuffer" });
    return Buffer.from(res.data);
}
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const fs = require("fs");

// DYNAMIC BOT NAME SYSTEM - Changes every time
const botNameTemplates = [
    // Standard Styles
    { name: "𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗", type: "script" },
{ name: "ᴾᴿᴼˣᴬᴮᴰᵁᴸᴸᴬᴴ", type: "smallcaps" },
{ name: "𝕻𝕽𝕺𝖝𝕬𝕭𝕯𝖀𝕷𝕷𝕬𝕳", type: "boldfraktur" },
{ name: "𝔓𝔯𝔬𝔵𝔄𝔅𝔇𝔘𝔏𝔏𝔄ℌ", type: "fraktur" },
{ name: "✿𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗✿", type: "flowers" },
{ name: "꧁𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯꧂", type: "bamboo" },

    
    // New Unique Styles
    { name: "༺P⃟R⃟O⃟x⃟A⃟B⃟D⃟U⃟L⃟L⃟A⃟H⃟༻", type: "circle" },
{ name: "『𝐏𝐑𝐎𝐱𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇』", type: "bold" },
{ name: "【ＰＲＯｘＡＢＤＵＬＬＡＨ】", type: "fullwidth" },
{ name: "≛PROxABDULLAH≛", type: "star" },
{ name: "『ᴘʀᴏˣᴀʙᴅᴜʟʟᴀʜ』", type: "small" },
{ name: "『ᑭᖇO᙭ᗩᗷᗪᑌᒪᒪᗩᕼ』", type: "box" },
{ name: "⟦𝙿𝚁𝙾𝚡𝙰𝙱𝙳𝚄𝙻𝙻𝙰𝙷⟧", type: "mono" },
{ name: "『𝘗𝘙𝘖𝘹𝘈𝘉𝘋𝘜𝘓𝘓𝘈𝘏』", type: "italic" },
{ name: "『𝙋𝙍𝙊𝙭𝘼𝘽𝘿𝙐𝙇𝙇𝘼𝙃』", type: "boldsans" },
{ name: "『𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗』", type: "scriptbold" },
{ name: "『𝕻𝖗𝖔𝖝𝕬𝕭𝕯𝖀𝕷𝕷𝕬𝕳』", type: "frakturbold" },
{ name: "『🅟🅡🅞🅧🅐🅑🅓🅤🅛🅛🅐🅗』", type: "negative" },
{ name: "『🄿🅁🄾🅇🄰🄱🄳🅄🄻🄻🄰🄷』", type: "squared" },
{ name: "『🅿🆁🅾🆇🅰🅱🅳🆄🅻🅻🅰🅷』", type: "sans" },
{ name: "『🇵 🇷 🇴 🇽 🇦 🇧 🇩 🇺 🇱 🇱 🇦 🇭』", type: "flags" },
{ name: "『P҉R҉O҉x҉A҉B҉D҉U҉L҉L҉A҉H҉』", type: "sparkles" },
{ name: "『P⃣R⃣O⃣x⃣A⃣B⃣D⃣U⃣L⃣L⃣A⃣H⃣』", type: "keycap" },
{ name: "『P⃠R⃠O⃠x⃠A⃠B⃠D⃠U⃠L⃠L⃠A⃠H⃠』", type: "slash" },
{ name: "『P̶r̶o̶x̶A̶b̶d̶u̶l̶l̶a̶h̶』", type: "strike" },
{ name: "『P̾r̾o̾x̾A̾b̾d̾u̾l̾l̾a̾h̾』", type: "zigzag" },
{ name: "『P̲r̲o̲x̲A̲b̲d̲u̲l̲l̲a̲h̲』", type: "underline" },
{ name: "『P̳r̳o̳x̳A̳b̳d̳u̳l̳l̳a̳h̳』", type: "doubleline" },
{ name: "『P͓̽r͓̽o͓̽x͓̽A͓̽b͓̽d͓̽u͓̽l͓̽l͓̽a͓̽h͓̽』", type: "shadow" },
{ name: "『P̆r̆ŏx̆Ăb̆d̆ŭl̆l̆ăh̆』", type: "arc" },
{ name: "『P͜͡r͜͡o͜͡x͜͡A͜͡b͜͡d͜͡u͜͡l͜͡l͜͡a͜͡h͜͡』", type: "ligature" },
{ name: "『P⃤R⃤O⃤x⃤A⃤B⃤D⃤U⃤L⃤L⃤A⃤H⃤』", type: "triangle" },
{ name: "『P̺͆R̺͆O̺͆x̺͆A̺͆B̺͆D̺͆U̺͆L̺͆L̺͆A̺͆H̺͆』", type: "subtext" },
{ name: "『P⃟R⃟O⃟x⃟A⃟B⃟D⃟U⃟L⃟L⃟A⃟H⃟』", type: "circlefill" },
{ name: "『P⃦R⃦O⃦x⃦A⃦B⃦D⃦U⃦L⃦L⃦A⃦H⃦』", type: "dotted" },
{ name: "『P⃧R⃧O⃧x⃧A⃧B⃧D⃧U⃧L⃧L⃧A⃧H⃧』", type: "parentheses" },
{ name: "『P⃨R⃨O⃨x⃨A⃨B⃨D⃨U⃨L⃨L⃨A⃨H⃨』", type: "diamond" },
{ name: "『P⃩R⃩O⃩x⃩A⃩B⃩D⃩U⃩L⃩L⃩A⃩H⃩』", type: "asterisk" },
{ name: "『P⃪R⃪O⃪x⃪A⃪B⃪D⃪U⃪L⃪L⃪A⃪H⃪』", type: "double" },
{ name: "『P⃫R⃫O⃫x⃫A⃫B⃫D⃫U⃫L⃫L⃫A⃫H⃫』", type: "triple" },
{ name: "『P⃬R⃬O⃬x⃬A⃬B⃬D⃬U⃬L⃬L⃬A⃬H⃬』", type: "quadruple" },
{ name: "『P⃭R⃭O⃭x⃭A⃭B⃭D⃭U⃭L⃭L⃭A⃭H⃭』", type: "circleoutline" },
{ name: "『P⃮R⃮O⃮x⃮A⃮B⃮D⃮U⃮L⃮L⃮A⃮H⃮』", type: "square" },
{ name: "『P⃯R⃯O⃯x⃯A⃯B⃯D⃯U⃯L⃯L⃯A⃯H⃯』", type: "diamondsolid" },
{ name: "『P⃰R⃰O⃰x⃰A⃰B⃰D⃰U⃰L⃰L⃰A⃰H⃰』", type: "asteriskfill" }

];

// Get random bot name
function getRandomBotName() {
    return botNameTemplates[Math.floor(Math.random() * botNameTemplates.length)].name;
}

// ORIGINAL PING COMMAND (Your ping2 renamed as ping)
cmd({
    pattern: "pong",
    alias: ["speed", "pong", "test", "ping2"], // ADDED ping2 as alias
    desc: "Check bot's response time with fancy design.",
    category: "main",
    react: "🌡️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply, pushname }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get random fancy bot name
        const fancyBotName = getRandomBotName();

        const text = `> *${fancyBotName} SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363403870276377@newsletter',
                    newsletterName: "𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// UNIQUE PING COMMAND - Completely Different Every Time
cmd({
    pattern: "ping3",
    alias: ["liveping", "fancyping", "uniqueping"], // NEW COMMAND
    desc: "UNIQUE ping design that changes every time!",
    category: "main",
    react: "🌀",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply, isGroup }) => {
    try {
        const startTime = Date.now();
        
        // RANDOM DESIGN SELECTION
        const designs = ["star", "hexagon", "circle", "diamond", "wave", "gear", "flower", "crown"];
        const currentDesign = designs[Math.floor(Math.random() * designs.length)];
        
        // RANDOM BOT NAME (different every time)
        const botName = getRandomBotName();
        
        // RANDOM EMOJI SET
        const emojiSets = [
            ["✨", "🌟", "⭐", "💫", "🌠"],
            ["⚡", "🔥", "💥", "🎇", "🌈"],
            ["🌀", "💠", "🔶", "🔷", "🔸"],
            ["🎮", "🎯", "🎲", "🎪", "🎭"],
            ["🔰", "🛡️", "⚔️", "🏹", "🪄"]
        ];
        const currentEmojis = emojiSets[Math.floor(Math.random() * emojiSets.length)];
        
        // RANDOM COLOR THEME
        const themes = [
            { border: "═", corner: "╔╗╚╝", line: "║" },
            { border: "─", corner: "┌┐└┘", line: "│" },
            { border: "━", corner: "┏┓┗┛", line: "┃" },
            { border: "═", corner: "╔╗╚╝", line: "║" },
            { border: "─", corner: "╭╮╰╯", line: "│" },
            { border: "✧", corner: "✦", line: "✧" },
            { border: "•", corner: "◦", line: "•" },
            { border: "▒", corner: "▓", line: "░" }
        ];
        const theme = themes[Math.floor(Math.random() * themes.length)];
        
        // RANDOM LOADING MESSAGE
        const loadingMessages = [
            `🌀 *Rotating Ping Matrix...*`,
            `✨ *Generating Unique Design...*`,
            `⚡ *Calculating Cosmic Speed...*`,
            `🌟 *Creating Magic Response...*`,
            `🎮 *Loading Game Engine...*`,
            `🔮 *Predicting Ping Future...*`,
            `🌌 *Accessing Multiverse Data...*`,
            `🎨 *Painting Digital Canvas...*`,
            `💎 *Crafting Crystal Response...*`,
            `🪐 *Connecting to Space Network...*`
        ];
        
        const loadingMsg = await reply(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
        
        // CALCULATE PING
        const endTime = Date.now();
        const ping = endTime - startTime;
        
        // RANK SYSTEM
        let rank = "";
        let rankEmoji = "";
        if (ping < 50) {
            rank = "GOD TIER";
            rankEmoji = "👑";
        } else if (ping < 100) {
            rank = "LEGENDARY";
            rankEmoji = "🔥";
        } else if (ping < 200) {
            rank = "ELITE";
            rankEmoji = "⚡";
        } else if (ping < 500) {
            rank = "PRO";
            rankEmoji = "💎";
        } else if (ping < 1000) {
            rank = "AVERAGE";
            rankEmoji = "✅";
        } else {
            rank = "BEGINNER";
            rankEmoji = "🐢";
        }
        
        // BUILD THE UNIQUE MESSAGE
        const uniqueMessage = `
${theme.corner[0]}${theme.border.repeat(30)}${theme.corner[1]}
${theme.line}        ✨ ${botName} ✨        ${theme.line}
${theme.line}     🎯 UNIQUE PING DESIGN     ${theme.line}
${theme.corner[2]}${theme.border.repeat(30)}${theme.corner[3]}

${currentEmojis[0]} 𝗣𝗜𝗡𝗚 » ${ping}ms
${currentEmojis[1]} 𝗥𝗔𝗡𝗞 » ${rank} ${rankEmoji}
${currentEmojis[2]} 𝗗𝗘𝗦𝗜𝗚𝗡 » ${currentDesign.toUpperCase()}

${theme.line}${theme.border.repeat(30)}${theme.line}

👤 𝗨𝗦𝗘𝗥 » ${pushname || "User"}
📱 𝗡𝗨𝗠𝗕𝗘𝗥 » ${sender.split('@')[0]}
🕒 𝗧𝗜𝗠𝗘 » ${new Date().toLocaleTimeString()}

${currentEmojis[3]} 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢
├─ 💾 𝗥𝗔𝗠 » ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB
├─ 🖥️ 𝗢𝗦 » ${os.platform().toUpperCase()}
└─ ⚙️ 𝗖𝗣𝗨 » ${os.cpus().length} Core

${theme.corner[0]}${theme.border.repeat(30)}${theme.corner[1]}
🎲 𝗘𝗩𝗘𝗥𝗬 𝗣𝗜𝗡𝗚 𝗜𝗦 𝗗𝗜𝗙𝗙𝗘𝗥𝗘𝗡𝗧!
✨ Name changes every time
🎨 Design changes every time
🌈 Colors change every time
⚡ Emojis change every time
${theme.corner[2]}${theme.border.repeat(30)}${theme.corner[3]}

⚡ 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬: ${botName}
🌀 𝗨𝗡𝗜𝗤𝗨𝗘𝗡𝗘𝗦𝗦: 100% GUARANTEED`;
        
        // Delete loading message
        if (loadingMsg) {
            await conn.sendMessage(from, { delete: loadingMsg.key });
        }
        
        // Send unique ping
        await conn.sendMessage(from, {
            text: uniqueMessage.trim(),
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    title: `🎨 ${botName} UNIQUE PING`,
                    body: `Different Every Time • ${ping}ms`,
                    thumbnail: { 
                        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80" 
                    },
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });
        
        // Send random reaction
        const reactions = ["🌀", "✨", "⚡", "🌟", "🎯", "💎", "🔥", "🎮"];
        await conn.sendMessage(from, {
            react: { 
                text: reactions[Math.floor(Math.random() * reactions.length)], 
                key: mek.key 
            }
        });
        
    } catch (error) {
        console.error("Unique ping error:", error);
        await reply(`🌀 *Unique Ping Error*\n${error.message}\n\nTry .ping for normal ping!`);
    }
});

// VIDEO PING COMMAND - Your original ping2 with video
cmd({
    pattern: "ping2",
    alias: ["videoping", "vp", "vidping"], // Your original ping2 command
    use: '.ping',
    desc: "Video ping with fancy design.",
    category: "main",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply, pushname }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        // Get system info
        const totalRAM = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const freeRAM = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
        const platform = os.platform();
        const arch = os.arch();
        const cpus = os.cpus().length;
        const cpuModel = os.cpus()[0].model.split('@')[0];
        const uptime = process.uptime();
        
        // Format uptime
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        const uptimeStr = `${hours}h ${minutes}m ${seconds}s`;

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get random fancy bot name
        const fancyBotName = getRandomBotName();

        // Performance rating
        let performanceLevel = "";
        if (responseTime < 0.1) performanceLevel = "⚡ ULTRA FAST";
        else if (responseTime < 0.5) performanceLevel = "🚀 EXTREME";
        else if (responseTime < 1) performanceLevel = "🔥 FAST";
        else if (responseTime < 2) performanceLevel = "✅ GOOD";
        else performanceLevel = "🐢 SLOW";

        // Create detailed ping message
        const text = `
╔════════════════════════════════╗
║        🎬 *VIDEO PING 1.0*       ║
╚════════════════════════════════╝

🤖 *BOT:* ${fancyBotName}
⏱️ *RESPONSE:* ${responseTime.toFixed(3)}s
🏆 *PERFORMANCE:* ${performanceLevel} ${reactionEmoji}

📊 *SYSTEM INFO:*
├─ 🖥️ OS: ${platform.toUpperCase()}
├─ 🧠 CPU: ${cpuModel}
├─ 📊 CORES: ${cpus}
├─ 💾 RAM: ${usedRAM}MB
├─ 📈 FREE: ${freeRAM}GB
└─ ⏳ UPTIME: ${uptimeStr}

👤 *USER:* ${pushname || "User"}
📞 *NUMBER:* ${sender.split('@')[0]}

🎯 *SPEED RATING:*
${responseTime < 0.1 ? "⭐⭐⭐⭐⭐ ELITE" : 
  responseTime < 0.5 ? "⭐⭐⭐⭐⭐ EXCELLENT" : 
  responseTime < 1 ? "⭐⭐⭐⭐ GREAT" : 
  responseTime < 2 ? "⭐⭐⭐ GOOD" : "⭐⭐ AVERAGE"}

                ⚡ *PROxABDULLAH-MD Technology*
        🕒 *TIME:* ${new Date().toLocaleTimeString()}
        `.trim();

        // FAST reply (instant) - COMMENTED
        // await reply("⚡ Checking speed...");

        // TikTok video buffer
        const videoBuffer = await getVideoBuffer(
            "https://files.catbox.moe/vpar3s.mp4"
        );

        // Send VIDEO with caption
        await conn.sendMessage(from, {
            video: videoBuffer,
            caption: text,
            mimetype: "video/mp4",
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    title: "🎬 VIDEO PING 1.0",
                    body: "TikTok Video • Fast Response",
                    thumbnail: {
                        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80"
                    },
                    mediaType: 2,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error("Video ping error:", e);
        // Fallback to text if video fails
        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;
        const fancyBotName = getRandomBotName();
        
        const fallbackText = `
🎬 *VIDEO PING 2.0 (Text Mode)*

🤖 BOT: ${fancyBotName}
⏱️ RESPONSE: ${responseTime.toFixed(3)}s
📊 VIDEO ERROR: ${e.message}

⚡ Using text mode for now...
        `.trim();
        
        await reply(fallbackText);
    }
});

// SIMPLE PONG COMMAND (Your original simple ping)
cmd({
    pattern: "ping1",
    alias: ["pong", "speed", "test"],
    desc: "Check bot response speed and status",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, reply, pushname }) => {
    try {
        const start = Date.now();
        const initialMsg = await reply(`_Pinging chapri..._`);
        
        const end = Date.now();
        const ping = end - start;
        const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(1);
        
        // Smart status based on ping
        let status = "✅ Excellent";
        let emoji = "⚡";
        
        if (ping > 200) {
            status = "🚀 Good";
            emoji = "🚀";
        }
        if (ping > 500) {
            status = "⚠️ Slow";
            emoji = "🐢";
        }
        
        await conn.sendMessage(from, { 
            text: `
${emoji} *BOT STATUS REPORT* ${emoji}

🏓 Response Time: *${ping}ms*
🧠 Memory Usage: *${memory}MB*
📊 Status: *${status}*

👤 User: ${pushname || "User"}
🎯 Prefix: ${config.PREFIX || "."}
            ` 
        }, { quoted: initialMsg });
        
    } catch (e) {
        console.error("Ping error:", e);
        reply("❌ Could not check status");
    }
});

// COMMAND SUMMARY MESSAGE
cmd({
    pattern: "pinghelp",
    alias: ["pingcommands", "pchelp"],
    desc: "Show all ping commands.",
    category: "main",
    react: "📚",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const helpMessage = `
╔════════════════════════════════╗
║       🚀 PING COMMANDS         ║
╚════════════════════════════════╝

📌 *Available Commands:*

1. *.ping* / *.speed* / *.pong* / *.test*
   » Your original ping2 command
   » Fancy bot name, random reactions

2. *.ping2* / *.videoping* / *.vp*
   » Video ping with system stats
   » Shows video with detailed info

3. *.ping3* / *.uniqueping* / *.fancyping*
   » UNIQUE design every time!
   » Different name, design, colors each use

4. *.pong* / *.simpleping*
   » Simple ping response
   » Quick and basic

5. *.pinghelp*
   » This help message

🎯 *Features:*
• 40+ different bot name styles
• Random designs every time
• Video support in ping2
• System information
• Performance ratings

⚡ *All commands working!*
🔗 *Original ping2 is now .ping*
        `.trim();
        
        await reply(helpMessage);
        
    } catch (error) {
        console.error("Ping help error:", error);
        await reply(`Error: ${error.message}`);
    }
});

// Send welcome message when someone says ping
cmd({
    pattern: "ping4",
    desc: "Auto response to ping mentions",
    category: "auto",
    filename: __filename,
    fromMe: false
},
async (conn, mek, m, { from, sender, body, reply }) => {
    try {
        if (body && body.toLowerCase().includes("ping")) {
            const botName = getRandomBotName();
            await reply(`🏓 *${botName} is here!*\n\nUse:\n• .ping - For speed test\n• .ping2 - For video ping\n• .ping3 - For unique design\n• .pinghelp - For all commands`);
        }
    } catch (e) {
        // Silent fail
    }
});