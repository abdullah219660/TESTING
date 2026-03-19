const fetch = require('node-fetch');
const { cmd } = require('../command');

// 🎭 STYLISH BOT NAME SYSTEM
const botNameStyles = [
    "𝓟𝓡𝓞𝔁𝓐𝓑𝓓𝓤𝓛𝓛𝓐𝓗", 
"𝐏𝐑𝐎𝐱𝐀𝐁𝐃𝐔𝐋𝐋𝐀𝐇", 
"𝙋𝙍𝙊𝙭𝘼𝘽𝘿𝙐𝙇𝙇𝘼𝙃", 
"𝗣𝗥𝗢𝘅𝗔𝗕𝗗𝗨𝗟𝗟𝗔𝗛",
"ᑭᖇO᙭ᗩᗷᗪᑌᒪᒪᗩᕼ", 
"🄿🅁🄾🅇🄰🄱🄳🅄🄻🄻🄰🄷", 
"P⃟R⃟O⃟x⃟A⃟B⃟D⃟U⃟L⃟L⃟A⃟H⃟", 
"ᴘʀᴏˣᴀʙᴅᴜʟʟᴀʜ"
];

function getRandomBotName() {
    return botNameStyles[Math.floor(Math.random() * botNameStyles.length)];
}

// ⛔ GLOBAL LOCK TO PREVENT DUPLICATE
let isRepoLocked = false;
const REPO_LOCK_TIMEOUT = 5000; // 5 seconds lock

cmd({
    pattern: "repo",
    alias: ["sc", "script", "source", "github", "code"],
    desc: "Get BOSS-MD repository information with stylish design",
    react: "📂",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply, sender, pushname }) => {
    try {
        // 🛑 CHECK AND SET LOCK
        if (isRepoLocked) {
            await conn.sendMessage(from, {
                react: { text: '🚫', key: m.key }
            });
            return reply("⏸️ *Command is locked!*\nPlease wait 5 seconds before trying again.");
        }
        
        // 🔒 SET LOCK
        isRepoLocked = true;
        
        // Auto-unlock after timeout
        setTimeout(() => {
            isRepoLocked = false;
        }, REPO_LOCK_TIMEOUT);
        
        // 🎯 RANDOM BOT NAME
        const botName = getRandomBotName();
        
        // ⏳ SEND REACTION ONLY (NO MESSAGE)
        await conn.sendMessage(from, {
            react: { text: '⏳', key: m.key }
        });
        
        // 🔗 GITHUB REPO DETAILS
        const githubRepoURL = 'https://github.com/abdullah219660-collab/PROxABDULLAH-MD-';
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/) || ['', 'abdullah219660-collab', 'PROxABDULLAH-MD-'];
        
        // 📊 FETCH REPO DATA
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
            timeout: 10000,
            headers: { 
                'User-Agent': 'PROxABDULLAH-MD-Bot',
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`GitHub API failed (${response.status})`);
        }
        
        const repoData = await response.json();
        
        // 🎨 ULTRA ENHANCED FORMAT
        const borderLine = "═".repeat(34);
        
        const formattedInfo = `
╔${borderLine}╗
║            📂 ${botName} 📂            ║
╚${borderLine}╝

📦 *REPOSITORY INFORMATION*

┌─⭓ *Basic Details*
│
│ 📛 *Repository:* ${repoData.name || 'ABDULLAH-MD-'}
│ 👤 *Owner:* @${repoData.owner?.login || 'abdullah219660-collab'}
│ 📝 *Description:* ${repoData.description || 'PROxABDULLAH-MD WhatsApp Bot'}
│ 🔗 *URL:* ${repoData.html_url || githubRepoURL}
│
├─⭓ *Statistics*
│
│ ⭐ *Stars:* ${repoData.stargazers_count || 0}
│ 🍴 *Forks:* ${repoData.forks_count || 0}
│ 👁️ *Watchers:* ${repoData.watchers_count || 0}
│ 💻 *Language:* ${repoData.language || 'JavaScript'}
│ 📅 *Created:* ${new Date(repoData.created_at).toLocaleDateString()}
│ 🔄 *Updated:* ${new Date(repoData.updated_at).toLocaleDateString()}
│
├─⭓ *Technical Info*
│
│ 📏 *Size:* ${(repoData.size / 1024).toFixed(2)} MB
│ 🌿 *Branch:* ${repoData.default_branch || 'main'}
│ 🔓 *Status:* ${repoData.private ? '🔒 Private' : '🔓 Public'}
│ 📊 *Issues:* ${repoData.open_issues_count || 0} open
│
└─⭓ *User Information*
│
│ 👤 *Requested by:* ${pushname || 'User'}
│ 🆔 *User ID:* ${sender.split('@')[0]}
│ 📱 *Platform:* WhatsApp
│ ⏰ *Time:* ${new Date().toLocaleTimeString('en-US', { hour12: true })}

${borderLine}

💡 *IMPORTANT NOTES:*
• ⭐ Star the repository for support
• 🍴 Fork for customization
• 🐛 Report issues on GitHub
• 🔄 Keep your bot updated

🎯 *COMMANDS RELATED:*
• .alive - Check bot status
• .menu - Show all commands
• .help - Get help

⚡ *POWERED BY:* ${botName}
🔧 *Professional WhatsApp Bot System*`.trim();

        // 🖼️ SEND DIRECT IMAGE WITH CAPTION (NO SEPARATE MESSAGE)
        await conn.sendMessage(from, {
            image: { 
                url: `https://files.catbox.moe/gy0lgp.png` 
            },
            caption: formattedInfo,
            contextInfo: {
                mentionedJid: [sender],
                externalAdReply: {
                    title: `📂 ${botName} Repository`,
                    body: `GitHub • ${repoData.stargazers_count || 0} Stars • ${repoData.forks_count || 0} Forks`,
                    thumbnailUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                    sourceUrl: repoData.html_url || githubRepoURL,
                    mediaType: 1,
                    renderLargerThumbnail: false
                }
            }
        }, { quoted: mek });

        // ✅ SUCCESS REACTION (REPLACE LOADING)
        await conn.sendMessage(from, {
            react: { text: '✅', key: m.key }
        });
        
    } catch (error) {
        console.error("Repo command error:", error);
        
        // ❌ ERROR REACTION
        await conn.sendMessage(from, {
            react: { text: '❌', key: m.key }
        });
        
        const botName = getRandomBotName();
        const errorMessage = `
╔═══════════════════════════╗
║       ❌ ${botName} ERROR       ║
╚═══════════════════════════╝

📛 *ISSUE:* Repository fetch failed

🔧 *POSSIBLE REASONS:*
1. Internet connection issue
2. GitHub API limit reached
3. Repository may be private
4. Network firewall blocking

📌 *ERROR DETAILS:*
${error.message.substring(0, 80)}...

💡 *SOLUTIONS:*
• Try again in 1 minute
• Check .menu for other commands
• Contact bot administrator

🎯 *ALTERNATIVE:*
Use .reposimple for basic info

⚡ *SYSTEM STATUS:* Operational`.trim();
        
        // Send error message
        await reply(errorMessage);
        
    } finally {
        // 🔓 RELEASE LOCK ON COMPLETION
        setTimeout(() => {
            isRepoLocked = false;
        }, 1000);
    }
});

// 📄 SIMPLE VERSION (NO API CALL)
cmd({
    pattern: "reposimple",
    alias: ["repo2", "sourcecode", "git"],
    desc: "Simple repository link without API calls",
    react: "📄",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply, sender }) => {
    const botName = getRandomBotName();
    
    const simpleMessage = `
╔═══════════════════════════╗
║      📂 ${botName} REPO       ║
╚═══════════════════════════╝

🔗 *GitHub Repository:*
https://github.com/abdullah219660-collab/PROxABDULLAH-MD-

🌟 *How to contribute:*
1. ⭐ Star the repository
2. 🍴 Fork your own copy
3. 🔧 Make improvements
4. 🔄 Create pull request

📦 *Features:*
• Modern WhatsApp Bot
• Multi-device support
• 100+ commands
• Plugin system

🎯 *Commands:*
• .repo - Detailed repository info
• .alive - Check bot status
• .menu - All commands list
• .help - Get help

⚡ ${botName} - Professional Bot System`.trim();
    
    // Send directly without reactions or loading
    await reply(simpleMessage);
});

// 🔄 STATUS CHECK FOR REPO
cmd({
    pattern: "repostatus",
    alias: ["gitstatus", "repocheck"],
    desc: "Check repository status",
    react: "🔍",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const botName = getRandomBotName();
    
    const statusMessage = `
🔍 *${botName} REPOSITORY STATUS*

✅ *Command Status:* Operational
📂 *Repo Module:* Loaded
🔒 *Anti-Spam:* Active
⏱️ *Cooldown:* 5 seconds

📊 *Current Usage:*
• .repo - Full repository info
• .reposimple - Quick link
• .repostatus - This command

⚡ *System:*
${botName} Repository Module v2.0`.trim();
    
    await reply(statusMessage);
});

console.log("✅ PROxABDULLAH-MD Repository Module Loaded");