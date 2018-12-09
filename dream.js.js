const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DoM `,"http://twitch.tv/Dream")
client.user.setStatus("#IT WORKS!!")
});



client.login("520349252434657328.bSWxJfkK2s8lxCzNKO49PJjveD4");// 
