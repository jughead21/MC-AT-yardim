const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Juke`, client.user.avatarURL) 
      .setDescription('**[Website](https://discordapp.com/oauth2/authorize?client_id=JUKEABİ&scope=bot&permissions=2146958847)**')
.setThumbnail(client.user.avatarURL)
      .addField('** !editle (14)**', '`davet`, `istatistik`, `sor`, `afk`, `avatar`, `emojiler`, `roller`, `jumbo`, `kullanıcı-bilgi`, `ping`, `rol-bilgi`, `sunucu`, `sunucuresmi`')
      .addField('** !editle (13)**', '`küfür`, `modlog`, `otorol`, `otoselam`, `reklam`, `sayaç`, `sil-üye`, `sil`, `vkanal`, `yasakla`, `yaz`')
      .addField('** !editle (4)**', '`beyaz`, `kara`, `eval`, `reboot`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};
