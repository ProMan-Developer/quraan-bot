
require('@discord/opus')
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES ,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_VOICE_STATES] });
const Discord = require('discord.js');
const p = "!سورة "
const fs = require ('fs')
const db = require('quick.db')
const { joinVoiceChannel } = require('@discordjs/voice');
const { createAudioResource, createAudioPlayer } = require('@discordjs/voice');
const { createReadStream } = require('node:fs');
const player = createAudioPlayer();
const ytdl = require('ytdl-core-discord');
const ytSearch = require('yt-search');
const { AudioResource, StreamType } = require('@discordjs/voice');
const { DisTube } = require('distube')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { SpotifyPlugin } = require('@distube/spotify')
const config = {
    prefix: p,
    token: 'OTQ4NTM0MzI2MjU2MTAzNDM0.Yh9Nbg.PAxhWQP0Sp2bfgLlKFtQwFFDvrM',
}

// Create a new DisTube
const distube = new DisTube(client, {
    searchSongs: 5,
    searchCooldown: 30,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,
})


client.on('messageCreate',message=>{
  const voiceChannel = message.member.voice.channel
  if(message.content.toLowerCase() == p+"الفاتحة"){

distube.play(voiceChannel, "https://www.youtube.com/watch?v=vqsBZgwgkT0", {
                message,
                textChannel: message.channel,
                member: message.member,
            })
  }
    if(message.content.toLowerCase() == p+"البقرة"){
    const resource = "https://www.youtube.com/watch?v=b4i7j6U7Ul8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
};


  
    if(message.content.toLowerCase() == p+"آل عمران"||message.content.toLowerCase() == p+"ال عمران"){
    const resource = "https://www.youtube.com/watch?v=GXXPRwx7WGc"
distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
};


  
    if(message.content.toLowerCase() == p+"النساء"){
    const resource = "https://www.youtube.com/watch?v=AvGp0PYyoW8"


distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"المآئدة"||message.content.toLowerCase() == p+"المائدة"){
    const resource = "https://www.youtube.com/watch?v=U_Kq_erMrjc"

distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الأنعام"||message.content.toLowerCase() == p+"الانعام"){
    const resource = "https://www.youtube.com/watch?v=mZi4QlQ1tjY"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الأنفال"){
    const resource = "https://www.youtube.com/watch?v=mJav-XWiRdA"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"التوبة"){
    const resource = "https://www.youtube.com/watch?v=278k5gMBEOs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"يونس"){
    const resource = "https://www.youtube.com/watch?v=jpeAxXx4bBc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"هود"){
    const resource = "https://www.youtube.com/watch?v=bSa42OhpFJE"
    	distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"يوسف"){
    const resource = "https://www.youtube.com/watch?v=dNHbI8ASJkA"
distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"إبراهيم"||message.content.toLowerCase() == p+"ابراهيم"){
    const resource = "https://www.youtube.com/watch?v=ypH75oP5ca0"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الفاتحة"){
    const resource = "https://www.youtube.com/watch?v=vqsBZgwgkT0"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الحجر"){
    const resource = "https://www.youtube.com/watch?v=DfAmNY-RYEU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }


    if(message.content.toLowerCase() == p+"النحل"){
    const resource = "https://www.youtube.com/watch?v=d80E_fbTNG4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الإسراء"||message.content.toLowerCase() == p+"الاسراء"){
    const resource = "https://www.youtube.com/watch?v=yvIpXIo5VIQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الكهف"){
    const resource = "https://www.youtube.com/watch?v=GiC3CxD5tkM"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"مريم"){
    const resource = "https://www.youtube.com/watch?v=2Y2HytRH3q4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"طه"){
    const resource = "https://www.youtube.com/watch?v=gF1v4-Uu90s"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الأنبياء"||message.content.toLowerCase() == p+"الانبياء"){
    const resource = "https://www.youtube.com/watch?v=97RDTbw8v50"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الحج"){
    const resource = "https://www.youtube.com/watch?v=N2UKxHPbFZs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"المؤمنون"){
    const resource = "https://www.youtube.com/watch?v=PISheevCFGU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"النور"){
    const resource = "https://www.youtube.com/watch?v=_O9yN3-h6Yc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الفرقان"){
    const resource = "https://www.youtube.com/watch?v=nV6dgHr2rFo"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"الشعراء"){
    const resource = "https://www.youtube.com/watch?v=Hb-Et6pahwg"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
    if(message.content.toLowerCase() == p+"النمل"){
    const resource = "https://www.youtube.com/watch?v=AOmV1BG4LOo"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القصص"){
    const resource = "https://www.youtube.com/watch?v=3-eAGsRXkQI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"العنكبوت"){
    const resource = "https://www.youtube.com/watch?v=9tdwjs3_hm4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الروم"){
    const resource = "https://www.youtube.com/watch?v=NdiOfTd8NmI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"لقمان"){
    const resource = "https://www.youtube.com/watch?v=Oaw508IQfSk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"السجدة"){
    const resource = "https://www.youtube.com/watch?v=ZeOAKW7qhNM"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الأحزاب"){
    const resource = "https://www.youtube.com/watch?v=hwd9lg9k7Sk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"سبأ"){
    const resource = "https://www.youtube.com/watch?v=xLlfZsMHJTM"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"فاطر"){
    const resource = "https://www.youtube.com/watch?v=g-aA_p5LwBQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"يس"){
    const resource = "https://www.youtube.com/watch?v=u0qSMYkmlHc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الصافات"){
    const resource = "https://www.youtube.com/watch?v=MCEgSRQdHUo"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"ص"){
    const resource = "https://www.youtube.com/watch?v=f76vICkATJo"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الزمر"){
    const resource = "https://www.youtube.com/watch?v=AIQri_k1Ouc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"غافر"){
    const resource = "https://www.youtube.com/watch?v=R-q2e4Hcjo0"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"فصلت"){
    const resource = "https://www.youtube.com/watch?v=LNcFMZStYWI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الشورى"){
    const resource = "https://www.youtube.com/watch?v=jQ0l2HIEOEU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الزخرف"){
    const resource = "https://www.youtube.com/watch?v=fq58qET06Cw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الدخان"){
    const resource = "https://www.youtube.com/watch?v=dpFWsranRBQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الجاثية"){
    const resource = "https://www.youtube.com/watch?v=J6mmmnuuWlk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الاحقاف"){
    const resource = "https://www.youtube.com/watch?v=AfeLvfcl4YU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"محمد"){
    const resource = "https://www.youtube.com/watch?v=pqB9RTcXhcI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الفتح"){
    const resource = "https://www.youtube.com/watch?v=ODfuKtsyAhg"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الحجرات"){
    const resource = "https://www.youtube.com/watch?v=LT8x4-2oQaw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"ق"){
    const resource = "https://www.youtube.com/watch?v=qT1_GfqCssg"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الذاريات"){
    const resource = "https://www.youtube.com/watch?v=2QvCvoaxPFI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الطور"){
    const resource = "https://www.youtube.com/watch?v=s9Jal306860"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"النجم"){
    const resource = "https://www.youtube.com/watch?v=gUNCTeGcW3c"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القمر"){
    const resource = "https://www.youtube.com/watch?v=IjO3COftbjc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الرحمن"){
    const resource = "https://www.youtube.com/watch?v=vTIYqaj0xGk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الواقعة"){
    const resource = "https://www.youtube.com/watch?v=Y4y1uBvadnc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الحديد"){
    const resource = "https://www.youtube.com/watch?v=D4DENEOBBFA "
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المجادلة"){
    const resource = "https://www.youtube.com/watch?v=jqOxB7xKrZs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الحشر"){
    const resource = "https://www.youtube.com/watch?v=3Lkebc_oJN0"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الممتحنة"){
    const resource = "https://www.youtube.com/watch?v=6jytiFXf53c"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الصف"){
    const resource = "https://www.youtube.com/watch?v=skz-CmToUes"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الجمعة"){
    const resource = "https://www.youtube.com/watch?v=OweGbfzfrVA"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المنافقون"){
    const resource = "https://www.youtube.com/watch?v=yCIkC_ZjsKU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"التغابن"){
    const resource = "https://www.youtube.com/watch?v=iHq4hjykznk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الطلاق"){
    const resource = "https://www.youtube.com/watch?v=FwH8Hjujktw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"التحريم"){
    const resource = "https://www.youtube.com/watch?v=s9hFQwWM6II"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الملك"){
    const resource = "https://www.youtube.com/watch?v=lhtw4aOBq8Q"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القلم"){
    const resource = "https://www.youtube.com/watch?v=Y7Aeb5K5-WQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الحاقة"){
    const resource = "https://www.youtube.com/watch?v=LMSHMENWbgw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المعارج"){
    const resource = "https://www.youtube.com/watch?v=RtSLYXa8nQs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"نوح"){
    const resource = "https://www.youtube.com/watch?v=CcqA-0WR5p4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الجن"){
    const resource = "https://www.youtube.com/watch?v=Jcizumhq6T8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المزمل"){
    const resource = "https://www.youtube.com/watch?v=7FT_bXeOP3w"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المدثر"){
    const resource = "https://www.youtube.com/watch?v=NrMkLzjZo1I"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القيامة"){
    const resource = "https://www.youtube.com/watch?v=ImMyvlJSNO8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الإنسان"||message.content.toLowerCase() == p+"الانسان"){
    const resource = "https://www.youtube.com/watch?v=YloA4eAWjn8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المرسلات"){
    const resource = "https://www.youtube.com/watch?v=NYRoYCXWppQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"النبأ"){
    const resource = "https://www.youtube.com/watch?v=4xWZ5luoihs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"النازعات"){
    const resource = "https://www.youtube.com/watch?v=DZYdEc24ZF8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"عبس"){
    const resource = "https://www.youtube.com/watch?v=kZHhHgJR61M"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"التكوير"){
    const resource = "https://www.youtube.com/watch?v=6iVJfZDLaYQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الإنفطار"){
    const resource = "https://www.youtube.com/watch?v=XAcBvEnbpgk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المطففين"){
    const resource = "https://www.youtube.com/watch?v=9aSRsyfft40"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الإنشقاق"){
    const resource = "https://www.youtube.com/watch?v=F5U8FTVBHfc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"البرج"){
    const resource = "https://www.youtube.com/watch?v=_eNUO1nimDk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الطارق"){
    const resource = "https://www.youtube.com/watch?v=oCIgslPrCgw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الأعلى"){
    const resource = "https://www.youtube.com/watch?v=Q9x_CjSxXVo"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الغاشية"){
    const resource = "https://www.youtube.com/watch?v=x3u5vJfSWuc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الفجر"){
    const resource = "https://www.youtube.com/watch?v=7VXTl6r2p0I"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"البلد"){
    const resource = "https://www.youtube.com/watch?v=xMFAGRMBbC8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الليل"){
    const resource = "https://www.youtube.com/watch?v=r2fl1bm-5TM"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الضحى"){
    const resource = "https://www.youtube.com/watch?v=lMPkl3HU9tQ"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الشرح"){
    const resource = "https://www.youtube.com/watch?v=w3xgbZA7bec"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"التين"){
    const resource = "https://www.youtube.com/watch?v=hPc6i2WxAsA"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"العلق"){
    const resource = "https://www.youtube.com/watch?v=WNy_wvJ9Pc4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القدر"){
    const resource = "https://www.youtube.com/watch?v=vDeegPEUvpA"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"البينة"){
    const resource = "https://www.youtube.com/watch?v=b80H4PZlBwU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الزلزلة"){
    const resource = "https://www.youtube.com/watch?v=HhWOGrw9Na4"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"العاديات"){
    const resource = "https://www.youtube.com/watch?v=4adhUTaEgiY"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"القارعة"){
    const resource = "https://www.youtube.com/watch?v=0Jd3FUsNcIs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"التكاثر"){
    const resource = "https://www.youtube.com/watch?v=2rAOyrBGUcU"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الهمزة"){
    const resource = "https://www.youtube.com/watch?v=fb-HtYWocJ8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الفيل"){
    const resource = "https://www.youtube.com/watch?v=aISOKF9DAog"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"قريش"){
    const resource = "https://www.youtube.com/watch?v=kkCJf2Ry-Xg"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الماعون"){
    const resource = "https://www.youtube.com/watch?v=-dRjOAY9qL0"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الكوثر"){
    const resource = "https://www.youtube.com/watch?v=PBjCGm5zMDk"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الكافرون"){
    const resource = "https://www.youtube.com/watch?v=SO_SgJ_SpGs"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"النصر"){
    const resource = "https://www.youtube.com/watch?v=DCj6RnwnfYw"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"المسد"){
    const resource = "https://www.youtube.com/watch?v=VWiAayqmEk8"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الإخلاص"){
    const resource = "https://www.youtube.com/watch?v=KfFi9hz1lfg"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الفلق"){
    const resource = "https://www.youtube.com/watch?v=mqcz2gAc5Xc"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }
  if(message.content.toLowerCase() == p+"الناس"){
    const resource = "https://www.youtube.com/watch?v=y3Us0qeQqTI"
    distube.play(voiceChannel ,resource, {
      message,
      textChannel: message.channel,
      member: message.member,
  })
  }


 }  )

distube
  .on('addSong', (queue, song) =>
        queue.textChannel?.send(
            `تمت اضافة ${song.name} - \`${song.formattedDuration}\` الى قائمة الاستماع ,من: ${song.user}`,
        ),
    )
.on('finish', queue => queue.textChannel?.send('صـدق الله الـعـظـيـم'))
.on('finishSong', queue =>
        queue.textChannel?.send('صـدق الله الـعـظـيـم'),
    )
.on('error', (textChannel, e) => {
        console.error(e)
        textChannel.send(
            `خطأ : ${e.message.slice(0, 2000)}`,
        )
    })
client.login(`OTQ4NTM0MzI2MjU2MTAzNDM0.Yh9Nbg.PAxhWQP0Sp2bfgLlKFtQwFFDvrM`)
