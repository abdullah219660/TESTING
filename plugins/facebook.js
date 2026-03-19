const { cmd } = require("../command");
const axios = require("axios");

cmd({
  pattern: "fb",
  alias: ["facebook", "fbdl"],
  desc: "Download Facebook video",
  category: "download",
  react: "📘",
  filename: __filename,
  use: ".fb <facebook url>"
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q) {
      return reply(`

  ╭┅┅┅┅┅┅┅┅┅┅┅┅┅╮
  ┆  ❌ ERROR ❌  ┆
  ╰┅┅┅┅┅┅┅┅┅┅┅┅┅╯

❌ ENTER FB VIDEO LINK

Example:
.fb https://facebook.com/xxxx

      💠 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 💠`);
    }

    if (!q.includes("facebook.com") && !q.includes("fb.watch")) {
      return reply(`

  ╭┅┅┅┅┅┅┅┅┅┅┅┅┅╮
  ┆ ❌ INVALID URL ┆
  ╰┅┅┅┅┅┅┅┅┅┅┅┅┅╯

❌ Invalid Facebook URL 

      💠 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 💠`);
    }

    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    // 🔥 YOUR OWN WORKING API
    const api = `https://arslan-apis.vercel.app/download/fbdown?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(api, { timeout: 60000 });

    if (
      !data?.status ||
      !data?.result?.download ||
      (!data.result.download.hd && !data.result.download.sd)
    ) {
      return reply(`

  ╭┅┅┅┅┅┅┅┅┅┅┅┅┅╮
  ┆  ❌ FAILED ❌  ┆
  ╰┅┅┅┅┅┅┅┅┅┅┅┅┅╯

❌ Can't fetch Facebook video 

      💠 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 💠`);
    }

    const meta = data.result.metadata || {};
    const dl = data.result.download;

    // HD > SD priority
    const videoUrl = dl.hd || dl.sd;
    const quality = dl.hd ? "HD" : "SD";

    await conn.sendMessage(from, {
      video: { url: videoUrl },
      mimetype: "video/mp4",
      caption:
        `

  ╭┅┅┅┅┅┅┅┅┅┅┅┅┅╮
  ┆  📱 FACEBOOK  ┆
  ╰┅┅┅┅┅┅┅┅┅┅┅┅┅╯

*|*📘 *Facebook Video*
*|🎬 Quality:* ${quality}
*|⏱ Duration:* ${meta.duration}
*╰━━━━━━━━━━━━━━━━━━⊷*

> © created by PROxABDULLAH-MD

      💠 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 💠`,
      contextInfo: {
        externalAdReply: {
          title: meta.title || "Facebook Video",
          body: "PROxABDULLAH-MD Facebook Downloader",
          mediaType: 1
        }
      }
    }, { quoted: m });

    await conn.sendMessage(from, {
      react: { text: "✅", key: m.key }
    });

  } catch (err) {
    console.error("FB-DL ERROR:", err);
    reply(`

  ╭┅┅┅┅┅┅┅┅┅┅┅┅┅╮
  ┆ ⚠️ ERROR ⚠️  ┆
  ╰┅┅┅┅┅┅┅┅┅┅┅┅┅╯

❌ Error, TRY AGAIN LATER

      💠 𝑷𝑹𝑶𝒙𝑨𝑩𝑫𝑼𝑳𝑳𝑨𝑯-𝑴𝑫 💠`);
  }
});