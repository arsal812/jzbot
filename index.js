//AUTHOR : AKSHAY
//THIS IS JUST AN EXPERIMENTAL PROJECT
//WE DO NOT TAKE RESPONSIBILITY IF YOU MISUSE THIS BOT
//THIS BOT IS ONLY MENT FOR EDUCATIONAL PURPOSE
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antivirus = JSON.parse(fs.readFileSync('./src/antivirus.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./src/antilinkyt.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const event = JSON.parse(fs.readFileSync('./src/event.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const scommand = JSON.parse(fs.readFileSync('./src/scommand.json'))
//const zrapi = require("zrapi")
const { akshay } = require('./jarvis')
const Exif = require('./lib/exif')
const exif = new Exif()



var creatorList = ['AKSHAY', 'Sparrow', 'SPARROW' , 'akshay']
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

//Sticker cmd
cmdmenu = '13000'
cmdping = '7292'
cmdclose = '13420'
cmdopen = '12732'
cmdself = '7038'
cmdpublic = '7144'
thumbnail = setting.thumb
fthumb = setting.fakethumb
hit_today = []
blocked = []
img = setting.img
baper = 'Team Sparrow'
apiku = 'https://wa.me/+918078344125/text=Aloo...'
targetpc = setting.ownerNumber
owner = targetpc
ownerr ='+918078344125'
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
botname = setting.botname
ownername = setting.ownername
ownerNumberr = setting.ownerNumberr
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
n ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
battre = '0'
multi = true
nopref = false
banChats = true
offline = false
//Owner contact
const vcard = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:' + ownername + '𔒝\n'
              + 'ORG: Owner' + botname + ';\n'
              + 'TEL;type=CELL;type=VOICE;waid=' + 918078344125 + ':+' + 918078344125 + '\n'
              + 'END:VCARD'
//=================================================//



const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./src/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
}})
    if (position !== null) {
        return position
}}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
}})
    if (position !== null) {
        return scommand[position].chats
}}



module.exports = sparrow = async (sparrow, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
       // m = simple.smsg(sparrow, mek)
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        //m = simple.smsg(sparrow, mek)
        //let { mentionedd } = m
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { quotedMek, isQuotedMek, mentioned} = mek
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '!'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
        m = simple.smsg(sparrow, mek)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = sparrow.user.jid
		const botNumberss = sparrow.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const timi = moment.tz('Asia/Kolkata').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Kolkata').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Kolkata').format('HH:mm:ss')
		const wit = moment.tz('Asia/Kolkata').format('HH:mm:ss')
		const totalchat = await sparrow.chats.all()
		const groupMetadata = isGroup ? await sparrow.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiVirus = isGroup ? antivirus.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false		
		const isEvent = isGroup ? event.includes(from) : false
		const isOwner = OwnerNumber.includes(sender)
		const ratee = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["30","40","50","60","70","80","90","100"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const alfa = `${targetpc}@s.whatsapp.net`
        const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = sparrow.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
        const conts = mek.key.fromMe ? sparrow.user.jid : sparrow.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? sparrow.user.name : conts.notify || conts.vname || conts.name || '-'
        const timuu = moment.tz('Asia/Kolkata').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minutes ${ddetik}Seconds`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
            
            myMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                myDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
                sparrow.on('CB:action,,battery', json => {
                const batteryLevelStr = json[2][0][1].value
                const batterylevel = parseInt (batteryLevelStr)
                battre = batterylevel
                if (json[2][0][1].live == 'true') charging = true
		        if (json[2][0][1].live == 'false') charging = false
                })
            var ase = new Date();
            var waktoo = ase.getHours();
            switch(waktoo){
                case 0: waktoo = "Good night"; break;
                case 1: waktoo = "Good night"; break;
                case 2: waktoo = "Good night"; break;
                case 3: waktoo = "Good night"; break;
                case 4: waktoo = "Good morning"; break;
                case 5: waktoo = "Good morning"; break;
                case 6: waktoo = "Good morning"; break;
                case 7: waktoo = "Good morning"; break;
                case 8: waktoo = "Good morning"; break;
                case 9: waktoo = "Good morning"; break;
                case 10: waktoo = "Good morning"; break;
                case 11: waktoo = "Good morning"; break;
                case 12: waktoo = "Good morning"; break;
                case 13: waktoo = "Good morning"; break;
                case 14: waktoo = "Good afternoon"; break;
                case 15: waktoo = "Good afternoon"; break;
                case 16: waktoo = "Good afternoon"; break;
                case 17: waktoo = "Good afternoon"; break;
                case 18: waktoo = "Good evening"; break;
                case 19: waktoo = "Good evening"; break;
                case 20: waktoo = "Good night"; break;
                case 21: waktoo = "Good night"; break;
                case 22: waktoo = "Good night"; break;
                case 23: waktoo = "Good night"; break;
            }
            var hahh = "" + waktoo; 
        
          var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Good night 🌚`; break;
                case 1: waktoonyabro = `Good night 🌚`; break;
                case 2: waktoonyabro = `Good night 🌚`; break;
                case 3: waktoonyabro = `Good night 🌚`; break;
                case 4: waktoonyabro = `Good morning 🌝`; break;
                case 5: waktoonyabro = `Good morning 🌝`; break;
                case 6: waktoonyabro = `Good morning 🌥`; break;
                case 7: waktoonyabro = `Good morning 🌥`; break;
                case 8: waktoonyabro = `Good morning ⛅`; break;
                case 9: waktoonyabro = `Good morning 🌤`; break;
                case 10: waktoonyabro = `Good morning 🌤`; break;
                case 11: waktoonyabro = `Good morning ☀`; break;
                case 12: waktoonyabro = `Good afternoon ☀`; break;
                case 13: waktoonyabro = `Good afternoon 🌞`; break;
                case 14: waktoonyabro = `Good afternoon 🌞`; break;
                case 15: waktoonyabro = `Good afternoon 🌤`; break;
                case 16: waktoonyabro = `Good afternoon ⛅`; break;
                case 17: waktoonyabro = `Good afternoon 🌥`; break;
                case 18: waktoonyabro = `Good evening 🌛`; break;
                case 19: waktoonyabro = `Good evening 🌙`; break;
                case 20: waktoonyabro = `Good night 🌝`; break;
                case 21: waktoonyabro = `Good night 🌝`; break;
                case 22: waktoonyabro = `Good night 🌝`; break;
                case 23: waktoonyabro = `Good night 🌝`; break;
            }
            var ucapannya = "" + waktoonyabro;     
		try {
		pporang = await sparrow.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		
		mess = {
			wait: 'Wait...',
			success: 'Success!',
			wrongFormat: 'Its a wrong format...',
			error: {stick: 'Error...', Iv: 'The link is not correct...', link: 'Error link...',},
			reply: {sticker: 'Reply to a sticker', video: 'Reply to a video', audio: 'Reply to an audio', image: 'Reply to an image', text: 'where is the text?',},
			only: {group: 'This command is only for groups',admin: 'This command is only for admins', owner: 'This command is only for the owner', bota: 'Bot should be an admin to process this command'}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            sparrow.sendMessage(from, teks, text, {quoted:mek, thumbnail: ofrply, sendEphemeral: true})
        }

        const sendMess = (hehe, teks) => {
            sparrow.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? sparrow.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : sparrow.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            sparrow.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": ofrply,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            sparrow.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`image/fake.jpg`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            sparrow.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": ofrply,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": ofrply //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "ᴊᴀʀᴠɪs", 
					"currencyCode": "RS",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: ofrply, surface: 200, message: `${creator}`, orderTitle: 'Jarvis', sellerJid: '0@s.whatsapp.net'}}, sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: ofrply}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': ofrply}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "Akshay","groupName": "Jarvis OFC", "caption": `${creator}`, 'jpegThumbnail': ofrply}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': ofrply}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${creator}`,jpegThumbnail: ofrply}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${tee}`), thumbnail: fs.readFileSync(`image/${tee}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            sparrow.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":ofrply,"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, sendEphemeral: true})}
           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('Success');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        sparrow.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    sparrow.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return sparrow.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return sparrow.sendMessage(from, teks, text, {quoted: mek, thumbnail: ofrply})
        }
        
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!isOwner && !mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            sparrow.sendMessage(mek.key.remoteJid,`@${owner} is offline!\n\nReason : ${alasan}\nFor about : ${heheh.hours} Hour, ${heheh.minutes} Minutes, ${heheh.seconds} Seconds`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': ofrply}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!isOwner && !mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        sparrow.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\nReason : ${alasan}\nFor about : ${heheh.hours} Hour, ${heheh.minutes} Minutes, ${heheh.seconds} Seconds`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': ofrply}}}})
          }
        }
            }
          }
        }
      }
    }
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await sparrow.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.length}`

const replyy = (teks) => {
			sparrow.sendMessage(from, teks, sticker, { quoted: fgclink })
		}

    //AUTOREAD		
    sparrow.chatRead(from, "read")
           
    /////AUTO
    for (let stkr of setiker){
	if (budy === stkr){
	result = fs.readFileSync(`./media/sticker/${stkr}.webp`)
	sparrow.sendMessage(from, result,sticker, {quoted : ftroli})
	}
    }
    for (let adoie of audionye){
	if (budy === adoie){
	result = fs.readFileSync(`./media/audio/${adoie}.mp3`)
	sparrow.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : mek})
	}
    }
    for (let imgss of imagenye){
	if (budy === imgss){
	result = fs.readFileSync(`./media/foto/${imgss}.jpg`)
	sparrow.sendMessage(from, result,image, {quoted : ftroli})
	}
    }
    for (let vdoie of videonye){
	if (budy === vdoie){
	result = fs.readFileSync(`./media/video/${vdoie}.mp4`)
	sparrow.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: mek})
	}
    }    
////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', color(time, 'cyan'), color(command, 'magenta'), color('from', 'orange'), color(sender.split('@')[0], 'yellow'), color('args :', 'orange'), color(args.length, 'grey'))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', color(time, 'cyan'), color(command, 'magenta'), color('from', 'orange'), color(sender.split('@')[0], 'yellow'), color('in', 'orange'), color(groupName), color('args :', 'orange'), color(args.length, 'grey'))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isOwner && !mek.key.fromMe && banChats === true) return
		
		


const responsebutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : '';

if (responsebutton) {

if (responsebutton == 'Welcome ON') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(mess.only.admin) };
if (!isBotGroupAdmins) { return reply(mess.only.bota) };
if (isWelkom) { return reply(`ᴡᴇʟᴄᴏᴍᴇ ɪs ᴀᴄᴛɪᴠᴇ`)};
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply(`ᴡᴇʟᴄᴏᴍᴇ ᴀᴄᴛɪᴠᴀᴛᴇᴅ`) 
}};

if (responsebutton) {
if (responsebutton == 'Welcome OFF') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(mess.only.admin) };
if (!isBotGroupAdmins) { return reply(mess.only.bota) };
if (!isWelkom) { return reply(`ᴡᴇʟᴄᴏᴍᴇ ɪs ᴅᴇᴀᴄᴛɪᴠᴇ`)};
let wlkme = welkom.indexOf(from)
welkom.splice(wlkme, 1)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇ ᴡᴇʟᴄᴏᴍᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ`) 
}};

if (responsebutton) {
if (responsebutton == 'Event ON') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(mess.only.admin) };
if (!isBotGroupAdmins) { return reply(mess.only.bota) };
if (isEvent) { return reply(`ᴇᴠᴇɴᴛ ɪs ᴀᴄᴛɪᴠᴇ`)};
event.push(from)
fs.writeFileSync('./src/event.json', JSON.stringify(event))
reply(`ᴇᴠᴇɴᴛ ᴀᴄᴛɪᴠᴀᴛᴇᴅ`) 
}};

if (responsebutton) {
if (responsebutton == 'Event OFF') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(mess.only.admin) };
if (!isBotGroupAdmins) { return reply(mess.only.bota) };
if (!isEvent) { return reply(`ᴇᴠᴇɴᴛ ɪs ᴅᴇᴀᴄᴛɪᴠᴇ`)};
let evntm = event.indexOf(from)
event.splice(evntm, 1)
fs.writeFileSync('./src/event.json', JSON.stringify(event))
reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇ ᴇᴠᴇɴᴛ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ`) 
}};

if (responsebutton) {
if (responsebutton == 'Antivirus ON') {
if (!isGroup) { return reply(mess.only.group)};
    if (!isOwner && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ`)};
    if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
	if (isAntiVirus) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴀᴄᴛɪᴠᴇ`)};
	antivirus.push(from)
	fs.writeFileSync('./src/antivirus.json', JSON.stringify(antivirus))
	reply(`ᴀɴᴛɪʟɪɴᴋ ᴀᴄᴛɪᴠᴀᴛᴇᴅ`)
}};

if (responsebutton) {
if (responsebutton == 'Antivirus OFF') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs`)};
 if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
 if (!isAntiLinkVirus) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴅᴇᴀᴄᴛɪᴠᴇ`)};
 let antvr = antivirus.indexOf(from)
 antivirus.splice(antvr, 1)
 fs.writeFileSync('./src/antivirus.json', JSON.stringify(antivirus))
 reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ ᴀɴᴛɪʟɪɴᴋ ғᴇᴀᴛᴜʀᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ`)
}};

if (responsebutton) {
if (responsebutton == 'Antilink ON') {
if (!isGroup) { return reply(mess.only.group)};
    if (!isOwner && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ`)};
    if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
	if (isAntiLink) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴀᴄᴛɪᴠᴇ`)};
	antilink.push(from)
	fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
	reply(`ᴀɴᴛɪʟɪɴᴋ ᴀᴄᴛɪᴠᴀᴛᴇᴅ`)
}};

if (responsebutton) {
if (responsebutton == 'Antilink OFF') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs`)};
 if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
 if (!isAntiLink) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴅᴇᴀᴄᴛɪᴠᴇ`)};
 let antlk = antilink.indexOf(from)
 antilink.splice(antlk, 1)
 fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
 reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ ᴀɴᴛɪʟɪɴᴋ ғᴇᴀᴛᴜʀᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ`)
}};

if (responsebutton) {
if (responsebutton == 'Antilinkyt ON') {
if (!isGroup) { return reply(mess.only.group)};
    if (!isOwner && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ`)};
    if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
	if (isAntiLinkyt) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴀᴄᴛɪᴠᴇ`)};
	antilinkyt.push(from)
	fs.writeFileSync('./src/antilinkyt.json', JSON.stringify(antilinkyt))
	reply(`ᴀɴᴛɪʟɪɴᴋ ᴀᴄᴛɪᴠᴀᴛᴇᴅ`)
}};

if (responsebutton) {
if (responsebutton == 'Antilinkyt OFF') {
if (!isGroup) { return reply(mess.only.group)};
if (!isGroupAdmins && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs`)};
 if (!isBotGroupAdmins) { return reply('ʙᴏᴛ sʜᴏᴜʟᴅ ʙᴇ ᴀɴ ᴀᴅᴍɪɴ ᴛᴏ ᴘʀᴏᴄᴇss ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ')};
 if (!isAntiLinkyt) { return reply(`ᴀɴᴛɪʟɪɴᴋ ɪs ᴅᴇᴀᴄᴛɪᴠᴇ`)};
 let antlkyt = antilinkyt.indexOf(from)
 antilinkyt.splice(antlkyt, 1)
 fs.writeFileSync('./src/antilinkyt.json', JSON.stringify(antilinkyt))
 reply(`sᴜᴄᴄᴇssғᴜʟʟʏ ᴅɪsᴀʙʟᴇᴅ ᴀɴᴛɪʟɪɴᴋ ғᴇᴀᴛᴜʀᴇ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ`)
}};




















if (responsebutton) {
if (responsebutton == 'Gamemenu') {
     let pop = sparrow.prepareMessageFromContent(from, {
					"listMessage":{
                  "title":" Game Menu ","description":`${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}
└───────────𔒝`,"buttonText":" Gamemenu ","listType":"SINGLE_SELECT","sections":[{
"title": "ɢᴀᴍᴇs","rows": [
{"title":"Slot","rowId":"0"},
{"title":"SuitRock","rowId":"0"},
{"title":"SuitPaper","rowId":"0"},
{"title":"SuitScissor","rowId":"0"}
]}]}}, {}) 
sparrow.relayWAMessage(pop, {waitForAck: true})
}};








if (responsebutton) {
if (responsebutton == 'Group') {
     let pop = sparrow.prepareMessageFromContent(from, {
					"listMessage":{
                  "title":" Group Settings ","description":`${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}
┊ᴛʜɪs ᴍᴇɴᴜ ɪs 
┊sᴘᴇᴄɪғɪғᴀʟʟʏ ғᴏʀ 
┊ᴀᴅᴍɪɴ/ᴏᴡɴᴇʀ🎀
└───────────𔒝`,"buttonText":" Settings ","listType":"SINGLE_SELECT","sections":[{
"title":"SELECT A MENU","rows":[
{"title":"Open","rowId":"0"}
,{"title":"Close","rowId":"0"}
,{"title":"Welcome ON","rowId":"0"}
,{"title":"Welcome OFF","rowId":"0"}
,{"title":"Antivirus ON","rowId":"0"}
,{"title":"Antivirus OFF","rowId":"0"}
,{"title":"Antilink ON","rowId":"0"}
,{"title":"Antilink OFF","rowId":"0"}
,{"title":"Antilinkyt ON","rowId":"0"}
,{"title":"Antilinkyt OFF","rowId":"0"}
,{"title":"Event ON","rowId":"0"}
,{"title":"Event OFF","rowId":"0"}
]}]}}, {}) 
sparrow.relayWAMessage(pop, {waitForAck: true})
}};

if (responsebutton) {
if (responsebutton == 'Listbuttons') {
let alcmd = sparrow.prepareMessageFromContent(from, {
"listMessage": { "title": `${''}${hahh}${' '}${pushname}${''}`,
            "description": `${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}🎀
└───────────𔒝
`,"buttonText": "SELECT ONE",
"footerText": `${creator}${'©™'}`,
"listType": "SINGLE_SELECT",
"sections": [
{"title": "ᴍᴇɴᴜ","rows": [{"title":"Allmenu","rowId":"0"},{"title":"Downloadmenu","rowId":"0"},{"title":"Listbuttons","rowId":"0"},{"title":"Makermenu","rowId":"0"},{"title":"Othermenu","rowId":"0"},{"title":"Ownermenu","rowId":"0"},{"title":"Storagemenu","rowId":"0"},{"title":"Tagmenu","rowId":"0"}]},

{"title": "ɢʀᴏᴜᴘ sᴇᴛᴛɪɴɢs","rows": [{"title":"Open","rowId":"0"},{"title":"Close","rowId":"0"},{"title":"Welcome ON","rowId":"0"},{"title":"Welcome OFF","rowId":"0"},{"title":"Event ON","rowId":"0"},{"title":"Event OFF","rowId":"0"}]},

{"title": "ᴏᴡɴᴇʀ ʙᴜᴛᴛᴏɴs","rows": [{"title":"Antilink on","rowId":"0"},{"title":"Antilink off","rowId":"0"},{"title":"Antilinkyt on","rowId":"0"},{"title":"Antilinkyt off","rowId":"0"},{"title":"Antivirus on","rowId":"0"},{"title":"Antivirus off","rowId":"0"}]},

{"title": "ɢᴀᴍᴇs","rows": [{"title":"Slot","rowId":"0"},{"title":"SuitRock","rowId":"0"},{"title":"SuitPaper","rowId":"0"},{"title":"SuitScissor","rowId":"0"}]},

{"title": "sᴏᴜʀᴄᴇᴄᴏᴅᴇ","rows": [{"title":"Sourcecode","rowId":"0"}]},
			
{"title": "ᴏᴡɴᴇʀ ɪɴғᴏ","rows": [{"title":"Owner","rowId":"0"}]}
]}}, {})
 sparrow.relayWAMessage(alcmd, {waitForAck: true})

}};


if (responsebutton) {
if (responsebutton == 'Close') {
    if (!isBotGroupAdmins) { return reply(mess.only.bota) };
if (!isGroupAdmins && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs`)};
    {sparrow.groupSettingChange(from, GroupSettingChange.messageSend, true);
    fakegroup('Succesfully closed the group')}
}};

if (responsebutton) {
if (responsebutton == 'Open') {
if (!isGroupAdmins && !mek.key.fromMe) { return reply(`ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴs`)};
    if (!isBotGroupAdmins) { return reply(mess.only.bota) };
    {sparrow.groupSettingChange(from, GroupSettingChange.messageSend, false);
    fakegroup('Succesfully opened the group')}
}};

if (responsebutton) {
if (responsebutton == 'Convertmenu') {
    {res = sparrow.prepareMessageFromContent(from, {
    "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.convert(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'RS' }}, { quoted: ftoko, contextInfo: {} });
    sparrow.relayWAMessage(res)}
}};

if (responsebutton) {
if (responsebutton == 'Allmenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.allmenu(prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa, alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {}}); 
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Downloadmenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.download(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {}}); 
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Makermenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.maker(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {} });
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Othermenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.other(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {} });
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Ownermenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.ownermenu(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {} });
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Storagemenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.storage(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {} });
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Tagmenu') {
    res = sparrow.prepareMessageFromContent(from, { "orderMessage": { "orderId": '10', "itemCount": '2021', "status": 'INQUIRY', "surface": 'CATALOG', "message": akshay.tag(prefix), "thumbnail": ofrply, "orderTitle": 'sparrowbot', "sellerJid": '0@s.whatsapp.net', "token": 'AR5wc3iY2NY8yJaK9MMXdlK/aguUxoA8yPtSFcvt0lrE5g==', "totalAmount1000": '50000000', "totalCurrencyCode": 'IDR' }}, { quoted: ftoko, contextInfo: {}});
    sparrow.relayWAMessage(res)
}};

if (responsebutton) {
if (responsebutton == 'Owner') {
{sparrow.sendMessage(from, {displayname: `${ownername}`, vcard: vcard}, MessageType.contact, {quoted: mek})}
};
}

if (responsebutton) {
if (responsebutton == 'SuitScissor') {
gunting = [ "You : scissor\nBot : paper \nYou win", "You : scissor\nBot : stone \nYou lose", "You : scissor\nBot : scissor \nIts a draw"]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
}};

if (responsebutton) {
if (responsebutton == 'SuitPaper') {
ker = [ "You : paper\nBot : stone \nYou win", "You : paper\nBot : scissor \nYou lose", "You : paper\nBot : paper \nIts a draw" ]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
}};

if (responsebutton) {
if (responsebutton == 'SuitRock') {
bat = ["You : rock\nBot : scissor \nYou win", "You : rock\nBot : paper \nYou lose", "You : rock\nBot : rock \nIts a draw" ]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
}};

if (responsebutton) {
if (responsebutton == 'Sourcecode') {
			        source =`
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔 sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ 〕
┊🔖ʙᴏᴛ ɴᴀᴍᴇ : ᴊᴀʀᴠɪs
┊🔖ᴏᴡɴᴇʀ : ᴀᴋsʜᴀʏ
┊🔖ᴏᴡɴᴇʀ ɴᴏ : wa.me/918078344125
┊🔖ɢʀᴏᴜᴘ ʟɪɴᴋ : bit.ly/3g8b4cf
┊🔖sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ : bit.ly/3jV7GCO
┊🔖sᴛᴀʏ ᴛᴜɴᴇᴅ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs.....
┊
├───〔 ᴛʜᴀɴᴋs ᴛᴏ 〕
┊
├〔 ᴀᴋsʜᴀʏ 〕
├〔 sᴘᴀʀʀᴏᴡ 〕
├〔 ᴍᴏɴᴋᴇʏ 〕
├〔 ᴊᴢ ᴍᴏᴅs 〕
├〔 ᴀғsᴀʟ 〕
├〔 ᴢᴇᴇᴏɴᴇ 〕
┊
└───〔 ᴊᴀʀᴠɪs 〕`
					sparrow.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${tee}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},sendEphemeral: true})
}};

if (responsebutton) {
if (responsebutton == 'Slot') {
const sotoy = ['🍊 : 🍒 : 🍐','🍊 : 🍊 : 🍊','🍒 : 🍇 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍊 : 🍊 : 🍊') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ʟᴏsᴛ 〕`)
	     	    }
	     	    };
}





const button2 = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : '';

let R = fs.readFileSync(`${'image/'}${tee}${''}`);
let Y = fs.readFileSync(`${'image/'}${tee}${''}`);
let N = fs.readFileSync(`${'image/'}${tee}${''}`);

if (button2) {
if (button2 == 'Menu') {
    let pip = sparrow.prepareMessageFromContent(from, {
        "listMessage": { "title": `${''}${hahh}${' '}${pushname}${''}`,
            "description": `${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}🎀
└───────────𔒝
`,
            "buttonText": 'SELECT A MENU',
            "footerText": `${''}${creator}${''}`,
            "listType": 'SINGLE_SELECT',
            "sections": [{
            "title":"SELECT A MENU","rows":[
{"title":"Allmenu","rowId":"0"}
,{"title":"Convertmenu","rowId":"0"}
,{"title":"Downloadmenu","rowId":"0"}
,{"title":"Makermenu","rowId":"0"}
,{"title":"Othermenu","rowId":"0"}
,{"title":"Ownermenu","rowId":"0"}
,{"title":"Storagemenu","rowId":"0"}
,{"title":"Tagmenu","rowId":"0"}
,{"title":"Listbuttons","rowId":"0"}
,{"title":"Group","rowId":"0"}
,{"title":"Slot","rowId":"0"}
,{"title":"Owner","rowId":"0"}
,{"title":"Sourcecode","rowId":"0"}
]}]}}, {});
    sparrow.relayWAMessage(pip, { waitForAck: true })
}};

if (button2) {
if (button2 == 'Owner') {
{ini_ownerNumber = [`919947291867@s.whatsapp.net`,`918078344125@s.whatsapp.net`,`919947291867@s.whatsapp.net`,`918078344125@s.whatsapp.net`,`${ownerNumber}@s.whatsapp.net`]
            let ini_list = []
		    for (let i of ini_ownerNumber) {
			const vname_ = sparrow.contacts[i] != undefined ? sparrow.contacts[i].vname || sparrow.contacts[i].notify : undefined
		     ini_list.push({
			 "displayName": 'Owner Bosco',
			 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${sparrow.user.name}`}\nORG: Bot;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Bot\nEND:VCARD`
			  })
			  }
			 hehe = await sparrow.sendMessage(from, {
			 "displayName": `${ini_list.length} kontak`,
			 "contacts": ini_list 
			 }, 'contactsArrayMessage', {quoted:mek})}
}};

if (button2) {
if (button2 == 'Status') {
    fakeitem(`${'*STATUS*'}${n}${''}${offline?'> OFFLINE':'> ONLINE'}${''}${n}${''}${banChats?'> SELF-MODE':'> PUBLIC-MODE'}${''}`)
}};


switch (command) {


 
case 'menu':
           dtod = "918078344125@s.whatsapp.net"
       otod = `${ownerNumber}@s.whatsapp.net`
       stod = `${sender}`
let contenttts = {"jpegThumbnail" : ofrply}
         const mediaaas = await sparrow.prepareMessage(from, contenttts, MessageType.location, {
         thumbnail: ofrply
         });
         let qweriioe = mediaaas.message["ephemeralMessage"] ? mediaaas.message.ephemeralMessage : mediaaas
         const buttonns = [
         { buttonId: 'Menu', buttonText: { displayText: 'MENU' }, type: 1},
         { buttonId: 'Owner', buttonText: { displayText: 'OWNER' }, type: 1},
         { buttonId: 'Status', buttonText: { displayText: 'STATUS' }, type: 1}];
         const btnns = {
         contentText: `${'Hello '}${pushname}${akshay.help(prefix, wita, wit, ucapannya, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa, alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat)}`,
         footerText: `${''}${creator}${''}${'©™'}${''}`,
         buttons: buttonns,
         headerType: 6,
         locationMessage: qweriioe.message.locationMessage
         };
         sparrow.sendMessage(from, btnns, MessageType.buttonsMessage, { quoted: ftoko})
    break        
                      
    case 'help': 
                let pip = sparrow.prepareMessageFromContent(from, {
        "listMessage": { "title": `${''}${hahh}${' '}${pushname}${''}`,
            "description": `${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}🎀
└───────────𔒝
`, "buttonText": 'SELECT A MENU',
  "footerText": `${''}${creator}${''}`,
  "listType": 'SINGLE_SELECT',
  "sections": [{
  "title":"SELECT A MENU","rows":[
{"title":"Allmenu","rowId":"0"}
,{"title":"Convertmenu","rowId":"0"}
,{"title":"Downloadmenu","rowId":"0"}
,{"title":"Gamemenu","rowId":"0"}
,{"title":"Makermenu","rowId":"0"}
,{"title":"Othermenu","rowId":"0"}
,{"title":"Ownermenu","rowId":"0"}
,{"title":"Storagemenu","rowId":"0"}
,{"title":"Tagmenu","rowId":"0"}
,{"title":"Listbuttons","rowId":"0"}
,{"title":"Group","rowId":"0"}
,{"title":"Slot","rowId":"0"}
,{"title":"Owner","rowId":"0"}
,{"title":"Sourcecode","rowId":"0"}
]}]}}, {});
    sparrow.relayWAMessage(pip, { waitForAck: true })
                break
   case 'group': 
   case 'gc': 
                let po = sparrow.prepareMessageFromContent(from, {
					"listMessage":{
                  "title":" Group Settings ","description":`${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}
┊ᴛʜɪs ᴍᴇɴᴜ ɪs 
┊sᴘᴇᴄɪғɪғᴀʟʟʏ ғᴏʀ 
┊ᴀᴅᴍɪɴ/ᴏᴡɴᴇʀ🎀
└───────────𔒝`,"buttonText":" Settings ","listType":"SINGLE_SELECT","sections":[{
"title":"SELECT A MENU","rows":[
{"title":"Open","rowId":"0"}
,{"title":"Close","rowId":"0"}
,{"title":"Welcome ON","rowId":"0"}
,{"title":"Welcome OFF","rowId":"0"}
,{"title":"Event ON","rowId":"0"}
,{"title":"Event OFF","rowId":"0"}
]}]}}, {}) 
sparrow.relayWAMessage(po, {waitForAck: true})
break

            case 'info': 
			case 'status':
				dtod = "918078344125@s.whatsapp.net"
                anu = process.uptime()
                teskny = `ʙᴏᴛ ɪɴғᴏ

🧧ᴄʀᴇᴀᴛᴏʀ : @${dtod.split('@')[0]}
🧧ᴡʜᴀᴛsᴀᴘᴘ.ᴠ : ${wa_version}
🧧ʀᴀᴍ : ${RAM}
🧧MCC : ${mcc}
🧧MNC : ${mnc}
🧧Versi OS : ${os_version}
🧧ᴅᴇᴠɪᴄᴇ : ${device_manufacturer}
🧧ᴍᴏᴅᴇʟ : ${device_model}
🧧ɢʀᴏᴜᴘs : ${giid.length}
🧧ᴄʜᴀᴛs : ${totalchat.length - giid.length}
🧧ᴛᴏᴛᴀʟ ᴄʜᴀᴛ : ${totalchat.length}
🧧sᴘᴇᴇᴅ : ${latensii.toFixed(4)} Second
🧧ʀᴜɴᴛɪᴍᴇ : ${kyun(anu)}`
				sparrow.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${tee}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},sendEphemeral: true})
break

                case  'antibug':   
                    teks = 'Antibug𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝 ᴊᴀʀᴠɪs 𔒝'
					sparrow.sendMessage(from, teks, text, {quoted: mek})
					sparrow.sendMessage(from, teks, text, {quoted: mek})
					sparrow.sendMessage(from, teks, text, {quoted: mek})
					sparrow.sendMessage(from, teks, text, {quoted: mek})
					sparrow.sendMessage(from, teks, text, {quoted: mek})
					break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply('```ONLY GROUP```')
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					sparrow.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'sc':
		case  'source':
		case  'sourcecode':
			        source =`
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔 sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ 〕
┊🔖ʙᴏᴛ ɴᴀᴍᴇ : ᴊᴀʀᴠɪs
┊🔖ᴏᴡɴᴇʀ : ᴀᴋsʜᴀʏ
┊🔖ᴏᴡɴᴇʀ ɴᴏ : wa.me/918078344125
┊🔖ɢʀᴏᴜᴘ ʟɪɴᴋ : bit.ly/3g8b4cf
┊🔖sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ : bit.ly/3jV7GCO
┊🔖sᴛᴀʏ ᴛᴜɴᴇᴅ ғᴏʀ ᴍᴏʀᴇ ᴜᴘᴅᴀᴛᴇs.....
┊
├───〔 ᴛʜᴀɴᴋs ᴛᴏ 〕
┊
├〔 ᴀᴋsʜᴀʏ 〕
├〔 sᴘᴀʀʀᴏᴡ 〕
├〔 ᴍᴏɴᴋᴇʏ 〕
├〔 ᴊᴢ ᴍᴏᴅs 〕
├〔 ᴀғsᴀʟ 〕
├〔 ᴢᴇᴇᴏɴᴇ 〕
┊
└───〔 ᴊᴀʀᴠɪs 〕`
					sparrow.sendMessage(from, source, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${tee}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},sendEphemeral: true})
					break

case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = sparrow.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break

                case  'setprefix':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
                if (args.length < 1) return reply(`ᴏᴘᴛɪᴏɴs :\n🔖 multi\n🔖 nopref`)
                if (q === 'multi'){
                multi = true
                reply(`ᴘʀᴇғɪx ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${q}`)
                } else if (q === 'nopref'){
                multi = false
                nopref = true
                reply(`ᴘʀᴇғɪx ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${q}`)
                } else {
                multi = false
                nopref = false
                prefa = `${q}`
                reply(`ᴘʀᴇғɪx ᴄʜᴀɴɢᴇᴅ ᴛᴏ ${q}`)
                }
                break			
                
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
															
case 'setname':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.bota)
					sparrow.groupUpdateSubject(from, `${body.slice(9)}`)
					sparrow.sendMessage(from, 'sᴜᴄᴄᴇs', text, { quoted: fgclink })
					break 
case 'setdesc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.bota)
					sparrow.groupUpdateDescription(from, `${body.slice(9)}`)
					sparrow.sendMessage(from, 'sᴜᴄᴄᴇss', text, { quoted: fgclink })
					break   
case 'spam':
				if (args.length < 1) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix}spam ᴛᴇxᴛ | 𝟻`)
				pess = args.join('')
		        argzii = pess.split('|')[0]
		        argzi = pess.split('|')[1]
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi)) return reply(`How many spam msgs?`)
				for (let i = 0; i < argzi; i++){
					sparrow.sendMessage(from, argzii, MessageType.text)
				}
				break
case 'listpc':
					  if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : sparrow.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = sparrow.contacts[cpcp[i]] != undefined ? sparrow.contacts[cpcp[i]].vname || sparrow.contacts[cpcp[i]].notify : undefined
						teks += `🎀 Name : ${pushnama}\n🎀 Tag : @${cpcp[i].split("@")[0]}\n🎀 Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
				  if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `🎀 Group Name : ${ingfoo[i].subject}\n🎀 Group ID : ${ingfoo[i].id}\n🎀 Created on : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🎀 Total Members : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case 'bcsticker':
					if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					anu = await sparrow.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmediabst = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await sparrow.downloadMediaMessage(encmediabst)
						for (let _ of anu) {
							sparrow.sendMessage(_.jid, bc, sticker, {quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `[${body.slice(11)}]`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ofrply,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcvideo':
					if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await sparrow.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmediabvd = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await sparrow.downloadMediaMessage(encmediabvd)
						for (let _ of anu) {
							sparrow.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `[${body.slice(9)}]`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ofrply,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
						}
						fakestatus('Suksess broadcast')
					}
					break
	case 'bcaudio':
					if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await sparrow.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmediabad = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await sparrow.downloadMediaMessage(encmediabad)
						for (let _ of anu) {
							sparrow.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `[${body.slice(9)}]`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ofrply,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
						}
						fakestatus('Suksess broadcast')
					}
					break
case 'bcgif':
					if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await sparrow.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmediabgf = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await sparrow.downloadMediaMessage(encmediabgf)
						for (let _ of anu) {
							sparrow.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted: { key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `[${body.slice(7)}]`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": ofrply,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})
						}
						fakestatus('Suksess broadcast')
					}
					break
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/

        case  'owner':  
        case  'creator':  
            ini_ownerNumber = [`919947291867@s.whatsapp.net`,`918078344125@s.whatsapp.net`,`919947291867@s.whatsapp.net`,`918078344125@s.whatsapp.net`,`${ownerNumber}@s.whatsapp.net`]
            let ini_list = []
		    for (let i of ini_ownerNumber) {
			const vname_ = sparrow.contacts[i] != undefined ? sparrow.contacts[i].vname || sparrow.contacts[i].notify : undefined
		     ini_list.push({
			 "displayName": 'Owner Bosco',
			 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${sparrow.user.name}`}\nORG: Bot;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Bot\nEND:VCARD`
			  })
			  }
			 hehe = await sparrow.sendMessage(from, {
			 "displayName": `${ini_list.length} kontak`,
			 "contacts": ini_list 
			 }, 'contactsArrayMessage', {quoted:mek})
case  'viewonce':
res = await sparrow.prepareMessageFromContent(from,{"viewOnceMessage": {"message": {"imageMessage": {"mimetype": 'image/jpeg',"jpegThumbnail": fs.readFileSync(`image/${tee}`),"viewOnce": true}}}}, {}) 
sparrow.relayWAMessage(res)
break		

case  'addcmd': 
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!q) return reply(`ᴇxᴀᴍᴘʟᴇ : !${command} !ᴍᴇɴᴜ`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply(mess.success)
} else {
reply(mess.reply.sticker)
}
break
case  'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply(mess.reply.sticker)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./src/scommand.json', JSON.stringify(scommand))
reply(mess.success)
break
case  'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
let teksnyee = `「 ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n🧧ɪᴅ : ${i.id}\n🧧ᴄᴏᴍᴍᴀɴᴅ : ${i.chats}`
}
reply(teksnyee)
break


		    case  'on':
		            if (!isOwner && !mek.key.fromMe) return 
		            offline = false
		            fakeitem('ᴏɴʟɪɴᴇ')
		            break       
		    case  'status':
		            fakeitem(`STATUS\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case  'off':
		            if (!isOwner && !mek.key.fromMe) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(' ᴏғғʟɪɴᴇ ')
		            break   
		    case  'get':
		            if(!q) return reply(mess.where.link)
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case  'contag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('ɪɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            sparrow.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case  'sticktag':
		            if (!isGroupAdmins && !mek.key.fromMe) return reply('mes.only.admin')
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmediastg = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediastg, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ`)
		            }
		            break
		    case  'totag':
		            if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmediatags = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatags, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmediatagi = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatagi, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmediataga = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediataga, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmediatagv = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatagv, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ/sᴛɪᴄᴋᴇʀ/ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix}totag`)
		        }
		        break
		    case  'fitnah':
		            if (args.length < 1) return fakegroup(`ᴇxᴀᴍᴘʟᴇ :\n${prefix}fitnah @ᴍᴇᴍʙᴇʀ|ʜᴀɪ|ʜᴇʏ`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            sparrow.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case  'settarget':
		            if(!q) return fakegroup(`${prefix}settarget 𝟿𝟷𝟼xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		            
		            case  'fitnahpc':
		            if(!q) return fakegroup(`${prefix}fitnahpc target|text`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
		            const responye = await sparrow.sendMessage(jids, `${split[1]}`, MessageType.text, options)
		            await sparrow.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		            
		            case  'tomp3':
		            if (!isQuotedVideo) return fakegroup(mess.reply.video)
		            fakegroup(mess.wait)
		            encmediatmp = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            mediatmp = await sparrow.downloadAndSaveMediaMessage(encmediatmp)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${mediatmp} ${ran}`, (err) => {
		            fs.unlinkSync(mediatmp)
		            if (err) return fakegroup(`Error: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            sparrow.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		            
		            case  'unvoice':                 
	                encmediaunv = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                 	mediaunv = await sparrow.downloadAndSaveMediaMessage(encmediaunv)
	                ran = getRandom('.mp3')
	                exec(`ffmpeg -i ${mediaunv}  ${ran}`, (err, stderr, stdout) => {
	                fs.unlinkSync(mediaunv)
	                if (err) return reply('Error!')
		            hah = fs.readFileSync(ran)
	                sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
	                fs.unlinkSync(ran)
   	                })
   	                break
   	                
					case  'slow':
					encmediaslw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaslw = await sparrow.downloadAndSaveMediaMessage(encmediaslw)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaslw} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediaslw)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
				    break
				
				    case  'bass':
					encmediabss = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediabss = await sparrow.downloadAndSaveMediaMessage(encmediabss)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediabss} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediabss)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
                    })
			        break
			        
				    case  'rock':
					encmediarck = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediarck = await sparrow.downloadAndSaveMediaMessage(encmediarck)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediarck} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mediarck)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
					})
				    break
				    
                case  'squirrel':
				encmediasqr = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				mediasqr = await sparrow.downloadAndSaveMediaMessage(encmediasqr)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediasqr} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(mediasqr)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
				
				case  'fast':
				encmediafst = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				mediafst = await sparrow.downloadAndSaveMediaMessage(encmediafst)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${mediafst} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(mediafst)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				sparrow.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
				
                case  'reverse':
            	encmediarvs = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
            	mediarvs = await sparrow.downloadAndSaveMediaMessage(encmediarvs)
            	ran = getRandom('.mp3')
            	exec(`ffmpeg -i ${mediarvs} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
            	fs.unlinkSync(mediarvs)
            	if (err) return reply('Error!')
            	hah = fs.readFileSync(ran)
            	sparrow.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted:mel})
            	fs.unlinkSync(ran)
	            })
            	break
            	
		            case  'fastvid':
		            if (!isQuotedVideo) return fakegroup(mess.reply.video)
		            fakegroup(mess.wait)
		            encmediafsv = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            mediafsv = await sparrow.downloadAndSaveMediaMessage(encmediafsv)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${mediafsv} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(mediafsv)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            sparrow.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case  'slowvid':
		            if (!isQuotedVideo) return fakegroup(mess.reply.video)
		            fakegroup(mess.wait)
		            encmediaslv = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            mediaslv = await sparrow.downloadAndSaveMediaMessage(encmediaslv)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${mediaslv} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(mediaslv)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            sparrow.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case  'reversevid':
		            if (!isQuotedVideo) return fakegroup(mess.reply.video)
		            encmediarvsv = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            mediarvsv = await sparrow.downloadAndSaveMediaMessage(encmediarvsv)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${mediarvsv} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(mediarvsv)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            sparrow.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case  'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('ɪɴᴠᴀʟɪᴅ ғᴏʀᴍᴀᴛ');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            sparrow.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break    
		    case  'take':
		    case  'colong':
		    		if (!isQuotedSticker) return fakegroup(mess.reply.sticker)
		            encmediaclng = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    mediaclng = await sparrow.downloadAndSaveMediaMessage(encmediaclng)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `Jarvis`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `AKSHAY`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(mediaclng, sparrow, mek, from)
					break
			case  'stikerwm':
			case  'stickerwm':
		    case  'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmediaswm = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             mediaswm = await sparrow.downloadAndSaveMediaMessage(encmediaswm)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(mediaswm)
		            .on('error', (e) => {
		            console.log(e)
		            sparrow.sendMessage(from, 'There is an error', 'conversation', { quoted: mek })
		            fs.unlinkSync(mediaswm)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            sparrow.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(mediaswm)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmediaswmv = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const mediaswmv = await sparrow.downloadAndSaveMediaMessage(encmediaswmv)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(mediaswmv)
		            .on('error', (e) => {
		            console.log(e)
		            sparrow.sendMessage(from, 'There is an error', 'conversation', { quoted: mek })
		            fs.unlinkSync(mediaswmv)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            sparrow.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(mediaswmv)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`ʀᴇᴘʟʏ ᴛᴏ ᴘʜᴏᴛᴏ/ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix}swm ᴛᴇxᴛ|ᴛᴇxᴛ`)
		            }
		            break
		    case  'sendtext':
		            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		            if (!q) return fakestatus('Isi teksnya!')
		            sparrow.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`ᴜᴘʟᴏᴀᴅᴇᴅ sᴛᴀᴛᴜs ${q}`)
		            break
		    case  'sendimage':
		            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await sparrow.downloadMediaMessage(swsw)
		            sparrow.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `ᴜᴘʟᴏᴀᴅᴇᴅ sᴛᴀᴛᴜs ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ: ${q}`
		            sparrow.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup(mess.reply.image)
		            }
		            break
		    case  'sendvideo':
		            if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await sparrow.downloadMediaMessage(swsw)
		            sparrow.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `ᴜᴘʟᴏᴀᴅᴇᴅ sᴛᴀᴛᴜs ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ: ${q}`
		            sparrow.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('mes.reply.video')
		            }
		            break
		    case  'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `ʀᴇᴘʟʏ ᴛᴏ ᴀɴ  ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴀᴘɪᴏɴ ${prefix}fdeface ʟɪɴᴋ|ᴛɪᴛʟᴇ|ᴅᴇsᴄ|ᴛᴇxᴛ`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await sparrow.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await sparrow.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		sparrow.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case  'public':
		              if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		          	if (banChats === false) return
		          	banChats = false
		          	fakeitem(`PUBLIC-MODE ACTIVATED`)
		          	break
			case  'self':
			          if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		          	if (banChats === true) return
		         	banChats = true
		          	fakeitem(`SELF-MODE ACTIVATED`)
		          	break
		 	case  'hidetag':
					if (!isGroup) return fakestatus(mess.only.group)
					if (!isGroupAdmins && !mek.key.fromMe) return fakestatus(mess.only.admin)
					var value = args.join(' ')
					var group = await sparrow.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					sparrow.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${tee}`)} }  } })
					break
			case  'play':
					if (args.length === 0) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix}play ᴀʀᴄᴀᴅᴇ`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `ᴘʟᴀʏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ᴍᴏʀᴇ ᴛʜᴀɴ ᴛʜᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪᴍɪᴛ, ᴅᴏᴡɴʟᴏᴀᴅ ɪᴛ ᴜsɪɴɢ ᴛʜᴇ ᴀʙᴏᴠᴇ ʟɪɴᴋ`)
		                        const captions = `ᴘʟᴀʏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ʙᴇɪɴɢ ᴜᴘʟᴏᴀᴅᴇᴅ, ᴘʟᴇᴀsᴇ ʙᴇ ᴘᴀᴛɪᴇɴᴛ`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        case  'video':
		            if (args.length === 0) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix}video ᴀʀᴄᴀᴅᴇ`)
		            var srch = args.join('')
		            aramas = await yts(srch);
		            aramat = aramas.all 
		            var mulaikah = aramat[0].url                            
		                  try {
		                    ytv(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `ᴠɪᴅᴇᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ᴍᴏʀᴇ ᴛʜᴀɴ ᴛʜᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪᴍɪᴛ, ᴅᴏᴡɴʟᴏᴀᴅ ɪᴛ ᴜsɪɴɢ ᴛʜᴇ ᴀʙᴏᴠᴇ ʟɪɴᴋ`)
		                        const captions = `ᴠɪᴅᴇᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP4\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ʙᴇɪɴɢ ᴜᴘʟᴏᴀᴅᴇᴅ, ᴘʟᴇᴀsᴇ ʙᴇ ᴘᴀᴛɪᴇɴᴛ`
		                        sendMediaURL(from, thumb, captions)
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break      
    case 'sticker': 
    case 'stiker':
    case 's':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            const encmediasgi = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const mediasgi = await sparrow.downloadAndSaveMediaMessage(encmediasgi, `./stik/${sender}`)
					await ffmpeg(`${mediasgi}`)
					.input(mediasgi)
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(mediasgi)
					reply(mess.error.stick)
					})
					.on('end', function () {
					console.log('Finish')
					exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
					if (error) return reply(mess.error.stick)
					sparrow.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted: mek})
					fs.unlinkSync(mediasgi)	
					fs.unlinkSync(`./stik/${sender}.webp`)	
					})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(`./stik/${sender}.webp`)
		                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmediasgv = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					const mediasgv = await sparrow.downloadAndSaveMediaMessage(encmediasgv, `./stik/${sender}`)
					await ffmpeg(`${mediasgv}`)
					.inputFormat(mediasgv.split('.')[4])
					.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(mediasgv)
					tipe = mediasgv.endsWith('.mp4') ? 'video' : 'gif'
					reply(mess.error.stick)
					})
					.on('end', function () {
					console.log('Finish')
					exec(`webpmux -set exif ./stik/data.exif ./stik/${sender}.webp -o ./stik/${sender}.webp`, async (error) => {
					if (error) return reply(mess.error.stick)
					sparrow.sendMessage(from, fs.readFileSync(`./stik/${sender}.webp`), sticker, {quoted: mek})
					fs.unlinkSync(mediasgv)
					fs.unlinkSync(`./stik/${sender}.webp`)
					})
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(`./stik/${sender}.webp`)
		            } else {
		                fakegroup(`sᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ ᴏʀ ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix}sticker.\n ᴅᴜʀᴀᴛɪᴏɴ ᴏғ ᴛʜᴇ ᴠɪᴅᴇᴏ sʜᴏᴜʟᴅ ʙᴇ 𝟷-𝟿 sᴇᴄᴏɴᴅs`)
		            }
		            break
		            
		        case  'slot':
                const sotoy = ['🍊 : 🍒 : 🍐','🍊 : 🍊 : 🍊','🍒 : 🍇 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else if (somtoyy == '🍊 : 🍊 : 🍊') {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ᴡᴏɴ 〕`)
	     	    } else {
	     	    reply(`┌───〔 🎰 | sʟᴏᴛ 〕𔒝\n┊\n├───〔 ${somtoy} 〕\n├───〔 ${somtoyy} 〕<===\n├───〔 ${somtoyyy} 〕\n┊\n└───〔 ʏᴏᴜ ʟᴏsᴛ 〕`)
	     	    }
	            break

	case  'suit':
    if (args.length < 1) return reply('ᴇxᴀᴍᴘʟᴇ : !sᴜɪᴛ ʀᴏᴄᴋ')
	if (args[0] === 'scissor' ) {
	gunting = [ "You : scissor\nBot : paper \nYou win", "You : scissor\nBot : stone \nYou lose", "You : scissor\nBot : scissor \nIts a draw"]
	gun = gunting[Math.floor(Math.random() * gunting.length)]
	reply(gun)
	} else if (args[0] === 'paper') {
	ker = [ "You : paper\nBot : stone \nYou win", "You : paper\nBot : scissor \nYou lose", "You : paper\nBot : paper \nIts a draw" ]
    kertas = ker[Math.floor(Math.random() * ker.length)]
	reply(kertas)
	} else if (args[0] === 'stone') {
	bat = [
    "You : stone\nBot : scissor \nYou win", "You : stone\nBot : paper \nYou lose", "You : stone\nBot : stone \nIts a draw" ]
	batu = bat[Math.floor(Math.random() * bat.length)]
	reply(batu)
	} else {
	reply('ᴇxᴀᴍᴘʟᴇ : !sᴜɪᴛ ʀᴏᴄᴋ')
	}
break
		            
		    case  'toimg':
		if (!isQuotedSticker) return reply(mess.reply.sticker)
					encmediatim = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediatim = await sparrow.downloadAndSaveMediaMessage(encmediatim)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediatim} ${ran}`, (err) => {
					fs.unlinkSync(mediatim)
					if (err) return reply('ᴇʀʀᴏʀ...')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'ᴊᴀʀᴠɪs')
					fs.unlinkSync(ran)
					})
					break
			case  'ytsearch':
					if (args.length < 1) return reply(mess.reply.link)
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await sparrow.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += 'ʏᴏᴜᴛᴜʙᴇ ʀᴇsᴜʟᴛ\n'
		   			aramas.all.map((video) => {
		        	ytresult += 'ᴛɪᴛʟᴇ: ' + video.title + '\n'
		            ytresult += 'ʟɪɴᴋ: ' + video.url + '\n'
		            ytresult += 'ᴅᴜʀɪᴀᴛɪᴏɴ: ' + video.timestamp + '\n'
		            ytresult += 'ᴜᴘʟᴏᴀᴅ: ' + video.ago + '\n\n'
		    		});
		    		ytresult += 'ᴊᴀʀᴠɪs'
		    		await fakethumb(tbuff,ytresult)
					break
			case  'setreply':
			case  'setfake':
			        if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Successfully Changed Fake Reply To : ${q}`)
					break
			case  'setprefix':
			        if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					prefix = q
					fakeitem(`Succesfully changed prefix to : ${q}`)
					break

                    
	        		case  'setfakeimg':
			        if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await sparrow.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('sᴜᴄᴄᴇss')
		        	} else {
		            fakeitem(`Send pictures with captions ${prefix}setfakeimg`)
		          	}
					break	
			case  'setthumb':
			        if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await sparrow.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('sᴜᴄᴄᴇss')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case  'ytmp4':
					if (args.length === 0) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix}ytmp4 ʟɪɴᴋ`)
					let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks2) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						ytv(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
						if (Number(filesize) >= 20000) return sendMediaURL(from, thumb, `ʏᴛ ᴠɪᴅᴇᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ᴍᴏʀᴇ ᴛʜᴀɴ ᴛʜᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪᴍɪᴛ, ᴅᴏᴡɴʟᴏᴀᴅ ɪᴛ ғʀᴏᴍ ᴛʜᴇ ᴀʙᴏᴠᴇ ʟɪɴᴋ`)
						const captionsYtmp4 = `ʏᴛ ᴠɪᴅᴇᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP4\nsɪᴢᴇ : ${filesizeF}\n\nᴛʜᴇ ғɪʟᴇ ɪs ʙᴇɪɴɢ ᴜᴘʟᴏᴀᴅᴇᴅ, ᴘʟᴇᴀsᴇ ʙᴇ ᴘᴀᴛɪᴇɴᴛ`
						sendMediaURL(from, thumb, captionsYtmp4)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})		
						})
						} catch (err) {
					    reply(mess.error.api)
						}
						break
			case  'emoji':
					if (!q) return fakegroup('ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ᴇᴍᴏᴊɪ')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
		    		break
			case  'ytmp3':
					if (args.length === 0) return reply(`ᴇxᴀᴍᴘʟᴇ ${prefix}ytmp3 ʟɪɴᴋ`)
					let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
					if (!isLinks) return reply(mess.error.Iv)
						try {
						reply(mess.wait)
						yta(args[0])
						.then((res) => {
						const { dl_link, thumb, title, filesizeF, filesize } = res
						axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
						.then((a) => {
					    if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `ʏᴛ ᴀᴜᴅɪᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nғɪʟᴇ sɪᴢᴇ : ${filesizeF}\nʟɪɴᴋ : ${a.data}\n\nᴛʜᴇ ғɪʟᴇ ɪs ᴍᴏʀᴇ ᴛʜᴀɴ ᴛʜᴇ ᴅᴏᴡɴʟᴏᴀᴅ ʟɪᴍɪᴛ, ᴅᴏᴡɴʟᴏᴀᴅ ɪᴛ ᴜsɪɴɢ ᴛʜᴇ ᴀʙᴏᴠᴇ ʟɪɴᴋ`)
						const captions = `ʏᴛ ᴀᴜᴅɪᴏ\n\nᴛɪᴛʟᴇ : ${title}\nᴛʏᴘᴇ : MP3\nsɪᴢᴇ : ${filesizeF}\n\nᴛʜᴇ ғɪʟᴇ ɪs ʙᴇɪɴɢ ᴜᴘʟᴏᴀᴅᴇᴅ, ᴘʟᴇᴀsᴇ ʙᴇ ᴘᴀᴛɪᴇɴᴛ`
						sendMediaURL(from, thumb, captions)
						sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
						})
						})
						} catch (err) {
						reply(mess.error.api)
						}
						break
		    case  'image':
		            if (args.length < 1) return fakegroup('ᴡʜᴇʀᴇ ɪs ᴛʜᴇ ᴛᴇxᴛ?')
		            const gimg = args.join('');
		            reply(mess.wait)
		            gis(gimg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            sparrow.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
case  'ig':
case  'igdl':
case  'instagram':
if (!q) return reply('Where is the link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${q}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
break

		    case  'igstalk':
		            if (!q) return fakegroup('ᴜsᴇʀɴᴀᴍᴇ?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `ɪᴅ : ${Y.profile_id}\nᴜsᴇʀɴᴀᴍᴇ : ${args.join('')}\nғᴜʟʟ ɴᴀᴍᴇ : ${Y.full_name}\nʙɪᴏ : ${Y.biography}\nғᴏʟʟᴏᴡᴇʀs : ${Y.following}\nғᴏʟʟᴏᴡɪɴɢ : ${Y.followers}\nᴘʀɪᴠᴀᴛᴇ : ${Y.is_private}\nᴠᴇʀɪғɪᴇᴅ : ${Y.is_verified}\n\nʟɪɴᴋ : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })      
		            break    
		    case  'fb':
		            if (!q) return reply(mess.reply.link)
		            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
		            te = args.join(' ')
		            fakestatus(mess.wait)
		            Fb.getInfo(`${te}`)
		            .then(G => {
		            ten = `${G.download.sd}`
		            tek = `${G.title}`
		            sendMediaURL(from,ten,`ᴛɪᴛʟᴇ : ${tek}\n\nʟɪɴᴋ : ${ten}`)
		            })
		            break    
			case  'term':
			        if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ᴊᴀʀᴠɪs:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 

		    case 'twitter':
		            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
		            if (!q) return fakegroup(mess.reply.link)
		            ten = args[0]
		            var res = await twitterGetUrl(`${ten}`)
		            .then(g => {
		            ren = `${g.download[2].url}`
		            sendMediaURL(from,ren,'SUCCESS')
		            })
		            break
		    case  'runtime':
		    case  'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case  'speed':
			case  'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break
               
		    case  'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmediatotag = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatotag, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmediatotagi = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatotagi, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmediatotaga = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatotaga, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmediatotagv = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await sparrow.downloadAndSaveMediaMessage(encmediatotagv, filename = getRandom())
		            value = args.join(" ")
		            var group = await sparrow.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            sparrow.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ/sᴛɪᴄᴋᴇʀ/ᴀᴜᴅɪᴏ/ᴠɪᴅᴇᴏ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix}totag`)
		        }
		        break
		    case  'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            owgi = await sparrow.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owgi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup(mess.reply.sticker)
		            }
		            fs.unlinkSync(owgi)
		            break
		    case  'tourl':
		            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
		            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            owgi = await sparrow.downloadMediaMessage(boij)
		            res = await upload(owgi)
		            reply(res)
		            } else {
		            fakegroup('ʀᴇᴘʟʏ ᴛᴏ ᴀɴ ɪᴍᴀɢᴇ/ᴠɪᴅᴇᴏ')
		            }
		            break
/*
]=====> GROUP MENU<=====[
*/
                case  'getbio':
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('And whose bio?')
                mentionedbio = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await sparrow.getStatus(`${mentionedbio}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! its private")
                }
                break

			case  'admin':
					if (!isGroup) return fakestatus(mess.only.group)
					teks = `ɢʀᴏᴜᴘ ɴᴀᴍᴇ : ${groupMetadata.subject}_\nᴛᴏᴛᴀʟ ᴀᴅᴍɪɴs : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case  'tagall':
			        if (!isOwner && !mek.key.fromMe) return fakeitem(mess.only.owner)
			        if (!isGroup) return fakestatus(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case  'clearall':
			        if (!isOwner && !mek.key.fromMe) return fakeitem(mess.only.owner)
			        anu = await sparrow.chats.all()
					sparrow.setMaxListeners(25)
					for (let _ of anu) {
					sparrow.deleteChat(_.jid)
					}
					fakegroup(mess.success)
					break
            case  'leave':
                    if (!isOwner && !mek.key.fromMe) return fakeitem(mess.only.owner)
					setTimeout( () => {
					sparrow.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					sparrow.updatePresence(from, Presence.composing) 
					fakestatus('ɢᴏᴏᴅ ʙʏᴇ')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					mentionedpp = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await sparrow.getProfilePicture(mentionedpp[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seer = `Name : *${pushname}`
					userpp = await getBuffer(pic)
					anuu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `Jarvis`, 'jpegThumbnail': fs.readFileSync('image/${tee}')}}}}
                    sparrow.sendMessage(from, userpp,image, anuu)
				}
				break

			case  'return':
			case  'r':
			if (!isOwner && !mek.key.fromMe) return fakegroup(mess.only.owner)
					return sparrow.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek})
					break
			case  'bc':
					if (!isOwner && !mek.key.fromMe) return fakegroup(mess.only.owner)
					if (args.length < 1) return reply(mess.reply.text)
					anu = await sparrow.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmediabc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await sparrow.downloadMediaMessage(encmediabc)
					for (let _ of anu) {
					sparrow.sendMessage(_.jid, bc, image, {quoted:fkontak ,caption: ` BROADCAST MESSAGE\n\n${body.slice(4)}`})
					}
					fakegroup(mess.success)
					} else {
					for (let _ of anu) {
						sparrow.sendMessage(_.jid, `*BROADCAST* \n\n${body.slice(4)}`, text, { contextInfo: { mentionedJid: [sender] }})
					}
					fakegroup(mess.success)
					}
					break
			case 'buggc':
			if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					await sparrow.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					sparrow.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await sparrow.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = `Group Name : ${groupName}\nDescription : ${groupDesc}\nTotal Admins : ${groupAdmins.length}\nTotal Members : ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					sparrow.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
/*
]=====> STORAGE MENU <=====[
*/
	        case 'addstik':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!isQuotedSticker) return fakestatus(mess.reply.sticker)
					nm = body.slice(9)
					if (!nm) return reply('Name?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await sparrow.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup( `Success\nType ${prefix}liststicker for sticker list`)
					break
					
					case 'delstik':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					try {
				    nmmm = body.slice(9)
					if (!nmmm) return reply('Name?')
		    	    wanuu = setiker.indexOf(nmmm)
			        fs.unlinkSync(`./media/sticker/${nmmm}.webp`)
			    	setiker.slice(wanuu, 1)
				    fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
			    	sparrow.sendMessage(from, 'Success', MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapannya}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('image/${tee}')} } } })
		    		} catch (err){
		    		console.log(err)
			    	reply(mess.error)
			    	}
			    	break
			    	
	      case 'liststik':
	     case 'liststiker':
	case 'liststicker':
					teks = 'Sticker list :\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\nTotal : ${setiker.length}`
					sparrow.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!isQuotedImage) return fakegroup(mess.reply.image)
					clara = body.slice(8)
					if (!clara) return fakegroup('Name?')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await sparrow.downloadMediaMessage(keya)
					imagenye.push(`${clara}`)
					fs.writeFileSync(`./media/foto/${clara}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup( `Success\nType ${prefix}listimage for image list`)
					break
			case 'listimg':
					teks = 'Image list :\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\nTotal : ${imagenye.length}`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			case 'addvid':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!isQuotedVideo) return fakegroup(mess.reply.video)
					vvst = body.slice(8)
					if (!svst) return fakegroup('Name?')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await sparrow.downloadMediaMessage(keya)
					videonye.push(`${vvst}`)
					fs.writeFileSync(`./media/video/${vvst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
					fakegroup( `Success\nType ${prefix}listvid for video list`)
					break
					
			    	case 'delvid':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
			    	try {
			    	nmm = body.slice(8)
					if (!nmm) return fakegroup('Name?')
		        	wanu = videonye.indexOf(nmm)
			        fs.unlinkSync(`./media/video/${nmm}.mp4`)
			    	videonye.slice(wanu, 1)
			    	fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
			    	sparrow.sendMessage(from, 'Success', MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapannya}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('image/${tee}')} } } })
			    	} catch (err){
			    	console.log(err)
			    	reply(mess.error)
			    	}
				    break
					
	        case 'listvid':
					teks = 'List Video :\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\nTotal : ${videonye.length}`
					sparrow.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
			
			        case 'addvn':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
					if (!isQuotedAudio) return fakegroup(mess.reply.audio)
					svst = body.slice(7)
					if (!svst) return fakegroup('Name?')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await sparrow.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Success\nType ${prefix}listvn for vn list`)
					break
					
					case 'delvn':
		        	if (!isOwner && !mek.key.fromMe) return fakestatus(mess.only.owner)
			    	try {
				    nmm = body.slice(7)
					if (!nmm) return fakegroup('Name?')
		       	    wanu = audionye.indexOf(nmm)
			        fs.unlinkSync(`./media/audio/${nmm}.mp3`)
			    	audionye.slice(wanu, 1)
			    	fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
			    	sparrow.sendMessage(from, 'Success', MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '393470602054-1351628616@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/jpeg', 'caption': `${ucapannya}`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync('image/${tee}')} } } })
		    		} catch (err){
			    	console.log(err)
			    	reply(mess.error)
			    	}
			    	break
			    	
		        	case 'listvn':
					teks = 'List Vn:\n\n'
					for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
					}
					teks += `\nTotal : ${audionye.length}`
					sparrow.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break            
				
				
				default:
				
if (budy.includes('://chat.whatsapp.com/')){
		        if (!isGroup) return 
		        if (!isAntiLink) return
		        if (isGroupAdmins) return 
		        if (isOwner) return 
		        sparrow.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`ɢʀᴏᴜᴘ ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ. ${sender.split('@')[0]} ɪs ᴘᴜᴛᴛɪɴɢ ɢʀᴏᴜᴘ ʟɪɴᴋ, ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ`)
		        setTimeout( () => {
		        sparrow.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 1000)
	            sparrow.groupSettingChange(from, GroupSettingChange.messageSend, true)
		        setTimeout( () => {
			    sparrow.updatePresence(from, Presence.composing)
			    reply('ʀᴇsᴛ ɪɴ ᴘᴇᴀᴄᴇ ɪᴅɪᴏᴛ')
		        }, 0)
	            break
	            }
if (budy.includes('://youtube.com/')){
		        if (!isGroup) return 
		        if (!isAntiLinkyt) return
		        if (isGroupAdmins) return 
		        if (isOwner) return 
		        sparrow.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ. ${sender.split('@')[0]} ɪs ᴘᴜᴛᴛɪɴɢ ɢʀᴏᴜᴘ ʟɪɴᴋ, ʏᴏᴜ ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ`)
		        setTimeout( () => {
		        sparrow.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 1000)
	            sparrow.groupSettingChange(from, GroupSettingChange.messageSend, true)
		        setTimeout( () => {
			    sparrow.updatePresence(from, Presence.composing)
			    reply('ʀᴇsᴛ ɪɴ ᴘᴇᴀᴄᴇ ɪᴅɪᴏᴛ')
		        }, 0)
	            break
	            }
	            
                if (budy.length > 3500){
		        if (!isGroup) return 
		        if (!isAntiVirus) return
		        if (isGroupAdmins) return 
		        if (isOwner) return 
		        sparrow.updatePresence(from, Presence.composing)
		        var kic = `${sender.split('@')[0]}@s.whatsapp.net`
		        reply(`ᴠɪʀᴜs ᴅᴇᴛᴇᴄᴛᴇᴅ. ${sender.split('@')[0]} ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ`)
		        setTimeout( () => {
		        sparrow.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 1000)
	            sparrow.groupSettingChange(from, GroupSettingChange.messageSend, true)
		        setTimeout( () => {
			    sparrow.updatePresence(from, Presence.composing)
			    reply('ᴀɴᴛɪᴠɪʀᴜs ɪs ᴀᴄᴛɪᴠᴇ\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝\n𔒝 ᴊᴀʀᴠɪs 𔒝')
		        }, 0)
	            break
	            }
	if (budy.includes('Menu')){
	if (!isOwner && !mek.key.fromMe) return 
	let af=sparrow["prepareMessageFromContent"](from,{
"listMessage":{
"title":" Owner Menu ","description":`${""}
┌───〔 *_𝙹𝙰𝚁𝚅𝙸𝚂_* 〕
┊
└───────────𔒝
┌───〔ᴀʙᴏᴜᴛ〕
┊❗ɴᴀᴍᴇ : ${botname}
┊❕ʙᴀᴛᴛᴇʀʏ : ${battre}${"%"}
┊❕ʀᴀᴍ : ${RAM}
┊❗ᴘʀᴇғɪx :〔${prefix}〕
┊❕𝚃𝙸𝙼𝙴 : ${time}🎀
└───────────𔒝
`,"buttonText":" Settings ","listType":"SINGLE_SELECT","sections":[{
"title":"SELECT A MENU","rows":[
{"title":"Antilink on","rowId":"0"}
,{"title":"Antilink off","rowId":"0"}
,{"title":"Antilinkyt on","rowId":"0"}
,{"title":"Antilinkyt off","rowId":"0"}
,{"title":"Antivirus on","rowId":"0"}
,{"title":"Antivirus off","rowId":"0"}
]}]}},{});sparrow.relayWAMessage(af,{waitForAck:true})
break
}

	if (budy === 'Open'){
	if (!isGroup) return 
    if (!isBotGroupAdmins) return 
    if (!isGroupAdmins && !mek.key.fromMe) return 
	reply(`Successfully opened the group`)
    sparrow.groupSettingChange(from, GroupSettingChange.messageSend, false);
    break
}
	if (budy === 'Close'){
	if (!isGroup) return 
    if (!isBotGroupAdmins) return 
    if (!isGroupAdmins && !mek.key.fromMe) return 
    reply(`succesfully closed the group`)
	sparrow.groupSettingChange(from, GroupSettingChange.messageSend, true);
    break
}
	if (budy === 'Add'){
    if (!isGroup) return
    if (!isOwner && !mek.key.fromMe) return
    if (!isBotGroupAdmins) return reply(mess.only.bota)
mentionedadd = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentionedadd.length > 1) {
teks = 'Orders received, issued :\n'
for (let _ of mentionedadd) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentionedadd, true)
sparrow.groupAdd(from, mentionedadd)
} else {
mentions(`ᴋɪᴄᴋᴇᴅ @${mentionedadd[0].split('@')[0]} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ`, mentionedadd, true)
sparrow.groupAdd(from, mentionedadd)
} 
break
}
	if (budy === 'Kick'){
    if (!isGroup) return
    if (!isOwner && !mek.key.fromMe) return
    if (!isBotGroupAdmins) return reply(mess.only.bota)
mentionedkik = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentionedkik.length > 1) {
teks = 'Orders received, issued :\n'
for (let _ of mentionedkik) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentionedkik, true)
sparrow.groupRemove(from, mentionedkik)
} else {
mentions(`ᴋɪᴄᴋᴇᴅ @${mentionedkik[0].split('@')[0]} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ`, mentionedkik, true)
sparrow.groupRemove(from, mentionedkik)
} 
break
}

	if (budy === 'Demote'){
	if (!isGroup)  return 
    if (!isBotGroupAdmins)  return reply(mess.only.bota)
    if (!isGroupAdmins && !mek.key.fromMe)  return 
mentioneddmt = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioneddmt.length > 1) {
teks = 'Orders received, issued :\n'
for (let _ of mentioneddmt) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioneddmt, true)
sparrow.groupDemoteAdmin(from, mentioneddmt)
} else {
mentions(`ᴋɪᴄᴋᴇᴅ @${mentioneddmt[0].split('@')[0]} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ`, mentioneddmt, true)
sparrow.groupDemoteAdmin(from, mentioneddmt)
    } 
	break
}
	if (budy === 'Promote'){
	if (!isGroup) return 
    if (!isBotGroupAdmins)  return 
    if (!isGroupAdmins && !mek.key.fromMe) return 
mentionedpmt = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentionedpmt.length > 1) {
teks = 'Orders received, issued :\n'
for (let _ of mentionedpmt) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentionedpmt, true)
sparrow.groupMakeAdmin(from, mentionedpmt)
} else {
mentions(`ᴋɪᴄᴋᴇᴅ @${mentionedpmt[0].split('@')[0]} ғʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ`, mentionedpmt, true)
sparrow.groupMakeAdmin(from, mentionedpmt)
    } 
	break
}	
	            				
          if (budy.startsWith(`>`)){
           	if (!isOwner) return
				const sep = budy.split("\n")
                let exc = budy.replace(sep[0]+"\n", "")
                const print = function(budy){
                    sparrow.sendMessage(from, util.format(budy))
                }
                console.log(exc)
                eval("(async () => {try{"+exc+"}catch(e){sparrow.sendMessage(from,  e.toString())}})()")
			}
			if (budy.startsWith(`$`)){
				if (!isOwner) return
				const sep = budy.split("\n")
                let exc = budy.replace(sep[0]+"\n", "")
                exec(exc, (err, stdout) => {
					if (err) return sparrow.sendMessage(from, `Error :- ${err}`, text, { quoted: mek })
					if (stdout) {
						sparrow.sendMessage(from, stdout, text)
					}
				})
			}
			if (budy.startsWith(`~`)){
				if (!isOwner) return
				const sep = budy.split("\n")
			    let exc = budy.replace(sep[0]+"\n", "termux-" + "")
                exec(exc, (err, stdout) => {
					if (err) return sparrow.sendMessage(from, `${err}`, text, { quoted: mek })
					if (stdout) {
						sparrow.sendMessage(from, stdout, text, {quoted:mek})
					}
				})
			}
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[MESSAGE]', 'aqua'), color('SELF-MODE', 'orange'), color(sender.split('@')[0]))
	}		
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('ERROR :', 'red'), color(e, 'orange'))
     sparrow.sendMessage('918078344125@s.whatsapp.net', `─────「 𝖊𝖗𝖗𝖔𝖗 」─────\n\nᴇʀʀᴏʀ :\n${e}\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 500, isForwarded: true}})
	}
    }
    }
    }
    }
    }
	// console.log(e)
}	

