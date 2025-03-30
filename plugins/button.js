
const axios = require('axios');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const {cmd , commands} = require('../command')



cmd({
    pattern: "butmenu",
    desc: "butmenu",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let pan = `> ANUHAS MD`;
const url = "https://i.ibb.co/m11P58z/5768.jpg"
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/KxYkt1ZX/663.jpg' } }, { upload: conn.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: 'ANUHAS MD',
          hasMediaAttachment: false
        }),
                body: {
                  text: `ANUHAS MD BUTTON MENU`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
      "name": "quick_reply",
      "buttonParamsJson": `{"display_text":".Alive 👨🏼‍💻",
      "id": ".alive"}`
             },
                    {
     "name": "quick_reply",
     "buttonParamsJson": `{"display_text":".Ping ⚡",
     "id": ".ping"}`
             },

                        {
     "name": "quick_reply",
     "buttonParamsJson": `{"display_text":".list 💗",
     "id": ".list"}`
             },

                        {
     "name": "quick_reply",
     "buttonParamsJson": `{"display_text":".owner 👨🏼‍💻",
     "id": ".owner"}`
             },
                      
             {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":" 💗 WATS APP","url":"https://whatsapp.com/channel/0029Vb352w8LNSa5GnqVkC3V","merchant_url":"https://whatsapp.com/channel/0029Vb352w8LNSa5GnqVkC3V"}`
                    },
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":" 💗GITH HUB","url":"https://github.com/WIHANGA-01","merchant_url":"https://github.com/WIHANGA-01"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
