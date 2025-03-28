const dy_scrap = new DY_SCRAP();

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎶",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*example play tionwayne we won*")
const search = await dy_scrap.ytsearch(q)
const data = search.results[0]
const url = data.url

let desc = `*ANUHAS MD SONG DOWNLOAD*

╭─❏ TITLE - ${data.title}
┣❐ ➤.🕺
┗⬣ ANUHAS MD BOT

ANUHAS MD ©

`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio
const audioData = await dy_scrap.ytmp3(url)
let downloadUrl = audioData.result.download.url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"©Didula MD Developers"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})
