/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload๐ก
Create By Dika Ardnt.
Recode By Naze & Ryan

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & Ryan

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.owner = ['6281356484612']
global.ownernomer = "6281356484612"
global.premium = ['6281356484612']
global.packname = '๐บ๐๐๐๐๐๐ ๐ฉ๐'
global.author = '๐น๐๐๐ ๐ซ๐๐'
global.sessionName = 'nazedev'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.public = false
global.sp = ''
global.mess = {
    success: 'โDone',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/fbryaaannn'
global.myyt = '-'
global.myytv = '-'
global.mygc = "-"
global.botname = '๐ญ๐๐๐๐ ๐ฉ๐๐๐'
global.akulaku = '๐ฉ๐ถ๐ป ๐ฉ๐ ๐น๐๐๐ ๐ซ๐๐'
global.ytname = '๐ฐ๐ฎ @๐๐๐๐๐๐๐๐๐๐'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
