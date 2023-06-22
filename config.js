const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' //https://api.lolhuman.xyz
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Theo Botz'
global.namaowner = '𝐓𝐡𝐞𝐨 '

//—————「 Setting Owner 」—————//
global.owner = '6283818409283'
global.ownernomer = ["6283818409283"]
global.premium = ['6283818409283']

//—————「 Set Wm 」—————//
global.packname = ''
global.author = '𝐓𝐡𝐞𝐨'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: 'Done ✅',
    admin: 'Feature Only for _*Admin Group*_',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: 'Feature Only for _*owner*_',
    group: 'Feature Only for _*Group Chat*_',
    private: 'Feature Only for _*Admin Group*_',
    wait: 'Wait a Moment, for Process',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/d309b7e0643f28ffe403b.png'
global.isLink = `-`
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
