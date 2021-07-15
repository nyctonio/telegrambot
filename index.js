const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

//------------------------------------------------------
const dotenv = require('dotenv');
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.key)
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')

// const Bot = require('telegram-bot-maker')
 
// const bot = new Bot({
//     token: process.env.key
// })

//------------------------------------------------------
const axios=require('axios')
const mongoose= require('mongoose');
//----------- Password Protection ----------------------
const bcrypt = require("bcryptjs");
const saltRounds = 10;
//------------------------------------------------------
//--Database--
mongoose.connect(`mongodb+srv://ritesh:temp123@cluster0.lesxr.mongodb.net/gmeetDB`, {useNewUrlParser: true, useUnifiedTopology: true});
//- Schema -
const dataSchema = {
    username:String,
    password:String,
    message: String,
    name:String
}
const feedbackSchema ={
  feed:String
}
const userSchema = {
  name:String
}

const Data = mongoose.model("Data",dataSchema);
const Feedback = mongoose.model("Feedback",feedbackSchema);
const User = mongoose.model("User",userSchema);






//------------------ Content ---------------------
const chitkaranotice=`
Deepak Thakur
Sat, Apr 3, 11:09 AM (2 days ago)
to bcc: me

Dear student,

Timings for FA 3 on 12.4.21 would be from 01:30pm to 02:30pm.


On Wed, Mar 31, 2021 at 2:57 PM Deepak Thakur <deepak.thakur@chitkara.edu.in> wrote:
Dear student,

FA-3 is scheduled on 12.04.21 (Monday). Syllabus would be from lecture 51 to 74 in CHO.
ST-2 is scheduled on 26.04.21 (Monday).  Syllabus would be from lecture 51 to 80 in CHO.

Timings will be informed soon.

--
Regards

Deepak Thakur
Assistant Professor | Department of Computer Science and Engineering
Chitkara University Institute of Engineering & Technology


--
Regards

Deepak Thakur
Assistant Professor | Department of Computer Science and Engineering
Chitkara University Institute of Engineering & Technology
use /start to go to main menu`;



const examdates=`OOPs ->    FAs - 4 | STs - 3 
AWD  ->    FAs - 4 | STs - 3 
BEE  ->    FAs - 2 | STs - 2 
CSA  ->    FAs - 2 | STs - 2 
MCP  ->    FAs - 2 | STs - 2 

07-April -> MCP - FA1 
09-April -> CSA - ST1
12-April -> OOPs - FA3
13-April -> BEE - FA1
17-April -> CSA - FA2
19-April -> BEE - FA2
20-April -> MCP - ST1
22-April -> CSA - ST2
23-April -> AWD - FA3
26-April -> OOPs - ST2
27-April -> AWD - ST2
28-April -> BEE - ST1
17-May -> MCP - FA2
17-May to 21-May :- AWD Evaluation Week	(FA4)
24-May -> OOPs - ST3
25-May -> MCP - ST2 / AWD - ST3
26-May -> BEE - ST2
28-May -> OOPs - FA4
use /start to go to main menu`;


const examanswers=`
 \nuse /start to go to main menu`;


const movie="This List Will be Updated Every Week\nTumbbad \nIndependence Day:Resurgence\nExtinction\nBird Box\nArrival\nFor Downloading Free Movies -> https://moviesverse.org/";


const recommend="For free Udemy Cources Join https://t.me/udemyfree4u24to48hrs \nuse /start to go to main menu";

//----------------------start-------------------------
bot.start((ctx) =>{
  const fname=ctx.from.first_name;
  const lname=ctx.from.last_name;
  const n=`${fname} ${lname}`;
  const newuser = new User({
    name:n
  });
  User.findOne({ 'name': n },function (err, user) {
    if(user==null){
      newuser.save();
    }else if(user.name=="Ritesh Kumar"){
      ctx.reply('Hello World');
    }
  });
  ctx.telegram.sendMessage(ctx.chat.id,`Hey ${fname} i am Ellish and i am always here for your help choose one or try /commands 🙃`,
  {
    reply_markup:{inline_keyboard:[
      [{text:" Study ",callback_data:'STUDY'},{text:" Fun ",callback_data:'FUN'}],
      [{text:" Recommendations ",callback_data:'REC'}]
    ]}
  })
})
//----- STUDY -----
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
  ctx.reply('for AWD solutions click on the link 👇🏻 \nhttps://mega.nz/folder/phMiiB7R#t4WR4KEi6_z_7k6CWlhvuA\nuse /start to go to main menu')
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
  ctx.reply('for OOPs solutions click on the link 👇🏻 \nhttps://mega.nz/folder/skcCWJ7S#kLtoC1_5pP5MsiZhDLVr5w\nuse /start to go to main menu')
})
//----- BEE ----
bot.action('BEE',(ctx)=>{
  ctx.reply('For All Notes Click 👇🏻\n https://mega.nz/folder/dsFwTbTa#9RAxDQNAkaBFA16Wsh11aA \nFor BEE notes click on the link 👇🏻\nhttps://mega.nz/folder/xxciHDbI#Yf8N4zsTaQ3SSqcxjUYIqw\nuse /start to go to main menu')
})
//----- CSA ----
bot.action('CSA',(ctx)=>{
  ctx.reply('For All Notes Click 👇🏻\n https://mega.nz/folder/dsFwTbTa#9RAxDQNAkaBFA16Wsh11aA \nFor CSA notes click on the link 👇🏻\nhttps://mega.nz/folder/x5cgiD7C#kN4Z74Qn8p16eGAS56inBg\nuse /start to go to main menu')
})
//----- MCP ----
bot.action('MCP',(ctx)=>{
  ctx.reply('For All Notes Click 👇🏻\n https://mega.nz/folder/dsFwTbTa#9RAxDQNAkaBFA16Wsh11aA \nFor MCP notes click on the link 👇🏻\nhttps://mega.nz/folder/BhNQybpT#gOCGBQ96Nwu1NTAyhLye0A \nuse /start to go to main menu')
})
//----- Notice -----
bot.action('NOTICE',(ctx)=>{
  ctx.telegram.sendChatAction(ctx.chat.id,"upload_document");
  ctx.reply(chitkaranotice);
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/examdates.pdf'});
})
//----- CHO -------
bot.action('CHO',(ctx)=>{
  ctx.telegram.sendChatAction(ctx.chat.id,"upload_document");
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/AWDCHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/BEECHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/CSACHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/MCPCHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/OOPsCHO.pdf'});
})
//----- Exam Dates -----
bot.action('EXAM',(ctx)=>{
  ctx.telegram.sendChatAction(ctx.chat.id,"upload_document");
  ctx.reply(examdates);
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/examdates.pdf'});
})
//----- Exam ANS -----
bot.action('ANS',(ctx)=>{
  ctx.reply(examanswers);
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/ans.jpeg'});
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
  ctx.reply('Its Always Good to stay updated about the community so do read blogs 🙃')
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
  ctx.telegram.sendMessage(ctx.chat.id,'Its Top Secret Highly Confidential 🤫, just kidding you can just save your any text message here with your username and password and fetch again with any account or device and trust me your password is first encrypted than stored in my database and If you want me to convey your message to anyone just write about it and i will make sure if that person will use this bot next time he will get your message but it will take some time 🙃 and i will also inform the status of your message to you too that it is delivered or not       , should i change the bot name to chithi aur kabootar LOL 😂',
  {
    reply_markup:{ inline_keyboard:[
    [{text:" SaveSecret ",callback_data:'SAVE'},{text:" ShowSecret ",callback_data:'SHOW'}] ]}
  })
})
//--------- REGISTER- -------
bot.action('SAVE',(ctx)=>{
  ctx.reply('Type /save username password yoursecretmessage')
})

bot.command('save',(ctx) => {
  const fname=ctx.from.first_name;
  const lname=ctx.from.last_name;
  const n=`${fname} ${lname}`;
  const data=ctx.message.text;
  let dataarray=data.split(' ')
  if(dataarray.length<4){
    ctx.reply(' Wrong Input ');
  }else{

  let username=dataarray[1];
  let password=dataarray[2];
  dataarray.shift();
  dataarray.shift();
  dataarray.shift();
  
  let message=dataarray.join(' ');
  Data.findOne({ 'username': username }, function (err, user) {
    if (err) return handleError(err);
    if(user==null){
      bcrypt.genSalt(saltRounds, function(err, salt) {  
        bcrypt.hash(password, salt, function(err, hash) {
          const newdata= new Data({
            username:username,
            password:hash,
            message: message,
            name:n
          });
          newdata.save();
        });
      });
      ctx.reply(' Saved Successfully /start to go to main menu ');
    }else{
      ctx.reply('User already Exists Cant Save')
    }
  });
  
  }
})

//--------- LOGIN ------------
bot.action('SHOW',(ctx)=>{
  ctx.reply('Type /show username password')
})

bot.command('show',(ctx) => {
  const data=ctx.message.text;
  let dataarray=data.split(' ')
  if(dataarray.length<3){
    ctx.reply(' Wrong Input ');
  }else{
  let username=dataarray[1];
  let password=dataarray[2];
  Data.findOne({ 'username': username },function (err, user) {
  if (err){
    console.log(err);
  }else if(user==null){
    ctx.reply("Invalid Username");
  }else{
    let hash=user.password;
    bcrypt.compare(password, hash, function(err, result) {
      if (result) {
        ctx.reply(user.message)
      }
      else {
        ctx.reply("Invalid Password")
      }
    });
  }
  });
  
  }
})
//------  Recommendations --------
bot.action('REC',(ctx)=>{
  ctx.reply(recommend);
})

//----------------- start (end) -------------

bot.help((ctx) =>{
  ctx.reply('Dont feel sad if you dont know commands 🤗 i will help you \nFor Main menu use /start\nFor Complete command list use /commands\nExcept these things do checkout Fun Section too and Do not tell someone about that secret Page 🤫 its a secret only me and you know about that 🤗\nAnd also try sending some random messages who know whats next 😎 \nFor feedbacks use /feedback {yourfeedback} ')
})

bot.on('sticker', (ctx) =>{
  ctx.reply('👍')
})

bot.hears('hi', (ctx) =>{ 
  ctx.reply('Hey there I am Ellish tell me about yourself \n use /start to go to main menu')
})

bot.command('commands',(ctx)=>{
  ctx.reply(`The Command List
/start to go to main menu
/help for help
/save this is command of secret Page
/show this is command of secret Page
/cho for all subjects CHO
/feedback {your feedback} to submit your feedaback
/about to know more about this bot`)
})
// bot.on('inline_query',)
bot.command('cho',(ctx)=>{
  ctx.telegram.sendChatAction(ctx.chat.id,"upload_document");
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/AWDCHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/BEECHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/CSACHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/MCPCHO.pdf'});
  ctx.telegram.sendDocument(ctx.chat.id, {source:'CHO/OOPsCHO.pdf'});
  
})
bot.command('about',(ctx)=>{
  ctx.reply('My name is Ellish for my source code just ask for it in feedback use /start for main menu')
})




bot.command('feedback',(ctx) => {
  let data=ctx.message.text;
  let dataarray=data.split(' ');
  if(dataarray.length==1){
    ctx.reply('This is not the the right way to give feedback type /feedback {yourfeedback}')
  }else{
  dataarray.shift();
  const fd=dataarray.join(' ');
  const newfeed = new Feedback({
    feed:fd
  });
  newfeed.save();
  ctx.reply("feedback uploaded successfully use /start for main menu")
  }
})



// bot.on('message', (ctx, update) => {
//   ctx.reply(
//     'Testing custom BTNS',
//     ctx.keyboard('inline', [
//       [
//         ctx.buttons.CallBack('Button 1', 'id-btn-1', { params: 'to-btn-1' }, params => {
//           console.log('User hit button 1', params)
//         })
//     ],
//       [
//         ctx.buttons.CallBack('Button 2', 'id-btn-2', { params: 'to-btn-2' }, params => {
//           console.log('User hit button 2', params)
//         })
//       ],
//     ])
//   )
// })

// const menuTemplate = new MenuTemplate(ctx => `Hey ${ctx.from.first_name}!`)

// menuTemplate.interact('I am excited!', 'a', {
//   do: async ctx => ctx.reply('As am I!')
// })


// const menuMiddleware = new MenuMiddleware('/', menuTemplate)
// bot.command('star', ctx => menuMiddleware.replyToContext(ctx))
// bot.use(menuMiddleware)


bot.launch()
