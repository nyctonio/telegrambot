const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
//------------------------------------------------------
const dotenv = require('dotenv');
const { Telegraf } = require('telegraf')
console.log(process.env.key);
const bot = new Telegraf(process.env.key)
//------------------------------------------------------
const axios=require('axios')
const mongoose= require('mongoose');
//------ Password Protection ------
const bcrypt = require("bcryptjs");
const saltRounds = 10;
//------------------------------------------------------
//--Database--
mongoose.connect(`mongodb+srv://${process.env.Database}@cluster0.lesxr.mongodb.net/gmeetDB`, {useNewUrlParser: true, useUnifiedTopology: true});
//- Schema -
const dataSchema = {
    username:String,
    password:String,
    message: String
}
const feedbackSchema ={
  feed:String
}

const Data = mongoose.model("Data",dataSchema);
const Feedback = mongoose.model("Feedback",feedbackSchema);

// const newdata= new Data({
//   username:username,
//   password:password,
//   message: message,
// });
// newdata.save();




//--------------- Content -----------------
const chitkaranotice="Notice will be uploaded";
const examdates="exam dates will be uploaded";
const examanswers="are you sure your exam is not right now";
const movie="This List Will be Updated Every Week\nTumbbad \nIndependence Day:Resurgence\nExtinction\nBird Box\nArrival\nFor Downloading Free Movies -> https://moviesverse.org/"


//-------------------start----------------------
bot.start((ctx) =>{
  ctx.telegram.sendMessage(ctx.chat.id,'Hey there i am Ellish and i am always here for your help choose one or try /commands 🙃',
  {
    reply_markup:{inline_keyboard:[
      [{text:" Study ",callback_data:'STUDY'},{text:" Fun ",callback_data:'FUN'}],
      [{text:" Recommendations ",callback_data:'REC'}]
    ]}
  })
})
//---- STUDY----
bot.action('STUDY',(ctx)=>{
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id,'Choose One 🤗',
  {
    reply_markup:{ inline_keyboard:[
    [{text:" AWD ",callback_data:'AWD'},{text:" JAVA (OOPs) ",callback_data:'JAVA'}],
    [{text:" BEE ",callback_data:'BEE'},{text:" MCP ",callback_data:'MCP'},{text:" CSA ",callback_data:'CSA'}],
    [{text:" Notice ",callback_data:'NOTICE'},{text:" CHO ",callback_data:'CHO'}],
    [{text:" Exam Dates ",callback_data:'EXAM'},{text:" Exam Solutions ",callback_data:'ANS'}] ]}
  })
})
//---- AWD ----
bot.action('AWD',(ctx)=>{
  ctx.reply('for AWD solutions click on the link 👇🏻 \nhttps://mega.nz/folder/phMiiB7R#t4WR4KEi6_z_7k6CWlhvuA')
  ctx.reply(' You can Download the Project Made By my Friend 🤗 ')
  ctx.reply(`*How to Download Like a Pro*
-> Open Know more from Top then click on 1st link i.e. "iPod"  then you will be redirected to GitHub
-> Before Download You must Star my Repositories which is on top Right section and
 ~~~~its Mandatory 😡 ~~~~
-> You can follow me too for future Projects or Updates  it's totally Optional🤗
-> Now You can Download My Project.

~~~~ Disclaimer ~~~~
No one is allowed to upload my Project anywhere without doing any changes in it. if i find out i'll hit a copy right strick ,,,,,just kidding 🙃

Credits: Mr Ritish Khanna
Link
.
.
.
.
.
.
iPod-Hosted - http://ritishkhanna18.github.io/iPod-Classic-2.0`)
})
//---- JAVA ----
bot.action('JAVA',(ctx)=>{
  ctx.reply('for OOPs solutions click on the link 👇🏻 \nhttps://mega.nz/folder/skcCWJ7S#kLtoC1_5pP5MsiZhDLVr5w')
})
//----- BEE ----
bot.action('BEE',(ctx)=>{
  ctx.reply('BEE notes')
})
//----- CSA ----
bot.action('CSA',(ctx)=>{
  ctx.reply('CSA notes')
})
//----- MCP ----
bot.action('MCP',(ctx)=>{
  ctx.reply('MCP notes')
})
//----- Notice -----
bot.action('NOTICE',(ctx)=>{
  ctx.reply(chitkaranotice)
})
//----- CHO -------
bot.action('CHO',(ctx)=>{
  ctx.reply('CHO will be shared')
})
//----- Exam Dates -----
bot.action('EXAM',(ctx)=>{
  ctx.reply(examdates)
})
//----- Exam ANS -----
bot.action('ANS',(ctx)=>{
  ctx.reply(examanswers)
})




//---- FUN -----
bot.action('FUN',(ctx)=>{
  ctx.deleteMessage();
  ctx.telegram.sendMessage(ctx.chat.id,'Choose One 🤗',
  {
    reply_markup:{ inline_keyboard:[
    [{text:"Jokes ",callback_data:'JOKE'},{text:" Quotes ",callback_data:'QUOTES'}],
    [{text:" Play Game ",url:'https://ritesh-krr.github.io/bubbleshooter/'}],
    [{text:" Secret Page ",callback_data:'SECRET'},{text:" Dev-Blogs ",callback_data:'DEV'}] ]}
  })
})

//------ Jokes------
bot.action('JOKE',(ctx)=>{
  url="https://v2.jokeapi.dev/joke/Any?type=single"
  axios.get(url)
  .then((res)=>{
    result=`${res.data.joke}`;
    ctx.reply(result)
  })
})
//------ Quotes -----
bot.action('QUOTES',(ctx)=>{
  url="https://zenquotes.io/api/random"
  axios.get(url)
  .then((res)=>{
    result=`${res.data[0].q}
                                        ~${res.data[0].a}`;
    ctx.reply(result)
  })
})

//------ DEV Blogs -----
bot.action('DEV',(ctx)=>{
  url="https://dev.to/api/articles"
  const no=Math.floor(Math.random() * (30 - 1) + 1);
  axios.get(url)
  .then((res)=>{
    result=`${res.data[no].title}
${res.data[no].description}
${res.data[no].url}`
    ctx.reply(result)
  })
})
//-------------- SECRET PAGE ----------
bot.action('SECRET',(ctx)=>{
  ctx.telegram.sendMessage(ctx.chat.id,'Its Top Secret Highly Confidential 🤫',
  {
    reply_markup:{ inline_keyboard:[
    [{text:" Register ",callback_data:'REGISTER'},{text:" Login ",callback_data:'LOGIN'}] ]}
  })
})
//--------- REGISTER- -------
bot.action('REGISTER',(ctx)=>{
  
})
//--------- LOGIN ------------
bot.action('LOGIN',(ctx)=>{
  
})


//----------------- start (end) -------------

bot.help((ctx) =>{
  ctx.reply('Dont feel sad if you dont know commands 🤗 i will help you \nFor Main menu use /start\nFor Complete command list use /commands\nExcept these things do checkout Fun Section too and Do not tell someone about that secret Page 🤫 its a secret only me and you know about that 🤗\nAnd also try sending some random messages who know whats next 😎 \nFor feedbacks use /feedback')
})

bot.on('sticker', (ctx) =>{
  ctx.reply('👍')
})

bot.on('inline_query',)

bot.hears('hi' || 'hello', (ctx) =>{ 
  ctx.reply('Hey there I am Ellish tell me about yourself')
})

bot.command('say',(ctx) => {
  const msg=ctx.message.text;
  // reply is basically a shotcut of this syntax
  ctx.telegram.sendMessage(ctx.chat.id,"<b>Hello</b>", {parse_mode:'HTML'})
  ctx.telegram.sendMessage(ctx.chat.id,"Hello Google", 
  {
    reply_markup:{inline_keyboard:[[{text:"click",url:'www.google.com'},{text:"click",url:'www.google.com'}],[{text:"click",callback_data:'TRY'}]]}
  })
})

bot.action('TRY',(ctx)=>{
  ctx.reply('yep it works');
})





bot.launch()
