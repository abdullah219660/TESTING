const { cmd } = require('../command');

cmd({
    pattern: "lol",
    alias: ["l", "gand"],
    react: "😂",
    desc: "Dost ki gand me lol",
    category: "fun",
    filename: __filename
}, async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        let target = "";
        let targetName = "";
        
        if (m.mentionedJid && m.mentionedJid.length > 0) {
            target = m.mentionedJid[0];
            targetName = "@" + target.split('@')[0];
        } else if (quoted && quoted.sender) {
            target = quoted.sender;
            targetName = "@" + target.split('@')[0];
        } else {
            return reply("❌ .lol @dost");
        }

        // INITIAL MESSAGE
        const msg1 = `YA JO COMMAND DAY RAHA USKI GAND MA JANAY LGA HA LAN`;

        await conn.sendMessage(from, {
            text: msg1,
            mentions: [target]
        }, { quoted: mek });

        // STAGE 1: LOL APPROACHING
        setTimeout(async () => {
            const msg2 = `AUR YA LAN JA RAHA HA`;

            await conn.sendMessage(from, { text: msg2, mentions: [target] });
        }, 2000);

        // STAGE 2: LOL ENTERING
        setTimeout(async () => {
            const msg3 = `AUR YA ANDAR GYA`;

            await conn.sendMessage(from, { text: msg3, mentions: [target] });
        }, 4000);

        // STAGE 3: INSIDE GAND
        setTimeout(async () => {
            const msg4 = `AUR ANDAR JA RAHA HA`;

            await conn.sendMessage(from, { text: msg4, mentions: [target] });
        }, 6000);

        // STAGE 4: EXITING
        setTimeout(async () => {
            const msg5 = `BAHIR NIKAL AYA`;

            await conn.sendMessage(from, { text: msg5, mentions: [target] });
        }, 8000);

        // STAGE 5: FART
        setTimeout(async () => {
            const msg6 = `YA GAND GAYE HA PHAT`;

            await conn.sendMessage(from, { text: msg6, mentions: [target] });
        }, 10000);

        // STAGE 6: FINAL RESULT
        setTimeout(async () => {
            const msg7 = `KOI TAILOR KO BULAO ISKI SEENAY K LIYE

> PROxABDULLAH-MD`;

            await conn.sendMessage(from, { 
                text: msg7, 
                mentions: [target] 
            });
        }, 12000);

        // REACTIONS AUTO
        const reactions = ["🎬", "⬇️", "🚪", "💥", "⬆️", "💨", "✅", "😂"];
        for (let i = 0; i < reactions.length; i++) {
            setTimeout(() => {
                conn.sendMessage(from, { 
                    react: { text: reactions[i], key: mek.key } 
                });
            }, i * 1500);
        }

    } catch (error) {
        console.log("Animation Error:", error);
        await reply("😂 ANIMATION LOL!");
    }
});