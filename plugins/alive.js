const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["a", "btal", "al"],
    desc: "Check uptime and system status",
    category: "main",
    react: "🐼",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
┌──❮❮𝗔𝗡𝗨𝗛𝗔𝗦-𝗠𝗗❯❯──◯➤
│ 
│➬ 𝗼𝘄𝗻𝗲𝗿 : 𝗮𝗻𝘂𝗵𝗮𝘀
│➬ 𝘁𝗲𝗮𝗺 : 𝗮𝗻𝘂𝗵𝗮𝘀 ©
│➬ 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : 𝗵𝗲𝗿𝗼𝗸𝘂 
│➬ 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 : 1.0.0
│➬ 𝗻𝘂𝗺𝗯𝗲𝗿 : 0729611502
│
└─────────────◯➤

> 𝗔𝗡𝗨𝗛𝗔𝗦-𝗠𝗗      🐼
        `;

        // Send audio
        await conn.sendMessage(from, {audio: { url: 'https://github.com/WIHANGA-01/OUR-BAS/raw/refs/heads/main/vc/velcomtomd.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
    
        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/0j2tdPB9/lordali.jpg` },
                caption: status,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '12034973@newsletter',
                        newsletterName: 'ᴀɴᴜʜᴀꜱ ᴘʀᴏɢʀᴀᴍ ➝',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );


        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
})
