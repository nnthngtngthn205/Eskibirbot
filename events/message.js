const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
const csdb = require("quick.db")
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if(!message.member) return;
  if(!message.guild) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
    
	

	
		
 let kural =  csdb.fetch(`kural`);
    const csdiscord = require("discord.js");
    let csd = csdb.get(`csrules.${message.author.id}`);
    if (!csd) {
      let dcs15 = new csdiscord.MessageEmbed()
        .setTitle(client.user.username + " Kurallar")
        .setTimestamp()
        .setFooter("Kurallar")
        .setThumbnail()
        .setDescription(
          `**1) Botun Sahibi Benim Gibisinden Söylemde Bulunmak\n 2) Botu Kötü Niyetli Kullanmayınız (Anlaşılırsa Karalisteye Alınırsınız) \n 3) Botu kopyalamak yasaktır botun telif hakkı vardır  \n\n
          Kuralları Kabul Ediyor İseniz :white_check_mark: Emojisine Basın!\n
          Kabul Etmiyor İseniz :x: Emojisine Basın!\n
          Eğer Kuralları Kabul Etmez İseniz Bu Botu Kullanamazsınız!**`
        )
        
        
        .setColor("BLUE");
   return   message.channel.send(dcs15).then(sunucu => {
        sunucu.react("✅").then(() => sunucu.react("❌"));

        let cso = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let csr = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let csv = sunucu.createReactionCollector(cso, { time: 0 });
        let csn = sunucu.createReactionCollector(csr, { time: 0 });
   
        csv.on("collect", async r => {
          message
            .reply(
              `**Kurallarımızı Kabul Ettiğiniz İçin Teşekkürler Botumuzu Artık Sorunsuz Bir Şekilde Kullana Bilirsiniz! Seninle Birlikte ${kural} Kisi Kabul Etmis** `            )
            .then(cs => cs.delete(5000));
          message.delete();
          sunucu.delete();
          csdb.set(`csrules.${message.author.id}`, "ENAYIONAYLADI");
    csdb.add(`kural`,1)
        });

        csn.on("collect", async r => {
          message
            .reply(
              "**Kuralları Kabul Etmediğiniz İçin Malesef Botu Kullanamazsınız!**"
            )
            .then(cs => cs.delete(5000));
          message.delete();
          sunucu.delete();
        });
      });  
}
 
  let bakım =  db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
  return message.channel.send(`**Sizlere En İyi Hizmeti Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\`\n Lütfen Daha Sonra Tekrar Deneyin.**`)
     }
  }

	
    let karaliste = db.fetch(`karalist_${message.author.id}`, "aktif")
        let karalistesebep = db.fetch(`sebep_${message.author.id}`)
        if (karaliste == "aktif") {
   let karaliste = new Discord.MessageEmbed()
    .setColor("0x36393F")
   .setTitle('Komutları Kullanamazsınız!')
  .setDescription(`Üzgünüm ancak komutları kullanamazsınız! Kurucularımız tarafından **${karalistesebep}** sebebiyle komutları kullanmanız yasaklandı!.`)
   .setFooter(`Engellendiniz.`)
   .setImage("")
   .setThumbnail(client.user.avatarURL())
   
   const webhook = new Discord.WebhookClient(
  "879656023881822269",
  "WkjvpYK8ojq3ZymGt4lY9sTONVh7SxeX9RFzxjwWV3FY9AOlCaJxWhnBytPkrGgWITFF"
);
   
      const westrabencanımbro = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTimestamp()
   .setFooter(`Görkem YT Bot`)
   .setDescription("**"+message.author.tag+"** adlı kullanıcı karalistede olup **"+command+"** adlı komutu: **"+message.guild.name+"** sunucusunda kullanmayı denedi.")
  webhook.send(westrabencanımbro);
  return message.channel.send(karaliste)

        }


    //wqerewq
   if (cmd.onf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.sahip.includes(message.author.id)) {
        const embed = new Discord.MessageEmbed()
                    .setDescription(` **${cmd.help.name}** isimli komut şuanda geçici olarak kullanıma kapalıdır!`)
                    .setColor("RED")
                message.channel.send({embed})
                return
      }
    }

    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}

		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(` Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
  if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    }

