const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+252672357527";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_46_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAwLFxuICAgICAgICA4NSxcbiAgICAgICAgODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNETHR5UVpnZWg5Zm1ZMDNwd1hER2ZsUEhUZjNKdWlyMkIvUzkxMDhnYlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjM2NjQyMDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNTY3OTY3Rjc2Mjk4RTM3QkM4QzU2QUUxMzIwNjQwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ3Nzc5OTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTI2MzY2NDIwMzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJDRkRDM0JDOUIzM0NBQzhGMDFFNDIyMDQ3NEE5MTYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDc3Nzk5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJQ195bF9hSlNhU3dzN2s2YUpGdTdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0YjQ5YTdmLTA3M2UtNDQwNC05OTNkLTdkOThmYTM4MzRiN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICAxNDIsXG4gICAgICA4LFxuICAgICAgNjYsXG4gICAgICA4MCxcbiAgICAgIDI0OCxcbiAgICAgIDM4LFxuICAgICAgNzMsXG4gICAgICA4MixcbiAgICAgIDkyLFxuICAgICAgNjYsXG4gICAgICA2MyxcbiAgICAgIDE1NCxcbiAgICAgIDEzLFxuICAgICAgNDksXG4gICAgICAxMjEsXG4gICAgICAyMDksXG4gICAgICAzOCxcbiAgICAgIDE1MixcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDEyOCxcbiAgICAgIDU1LFxuICAgICAgMTIwLFxuICAgICAgMTMxLFxuICAgICAgMjA3LFxuICAgICAgODgsXG4gICAgICA1NCxcbiAgICAgIDI1LFxuICAgICAgMjQyLFxuICAgICAgMzYsXG4gICAgICA4MCxcbiAgICAgIDgzLFxuICAgICAgMjA2LFxuICAgICAgMjA5LFxuICAgICAgMzEsXG4gICAgICAxMTAsXG4gICAgICAxNzUsXG4gICAgICAyMjMsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMRENLQzRDVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjUyNjM2NjQyMDMzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCK8J2QgOGSqvCdmrDwnZea8J2asM2hzZwg4ba74bWS4bac4bWI4bWJyrBcIixcbiAgICBcImxpZFwiOiBcIjI2Mzc2NjM1NjgwMTA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOamc4VWdRZ0xtYXV3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImgxaXFwTmc1SlJDSWVGK2ZnMjN3VCtYWmlRYlZpWS85YnJDRUtyMGFvR289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicWxEemprWXRLdSs2UGQ0VFlnbDZtTll0Zmp0WXhRVlhyME9CbGlZVk5kZ21WSjNHVDkxOUNSb0tYMVdBUEZGNnBKcUIxMnRYeW01ZHgvNUE0c0NlQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK3Z3SXhFN0NEUGZTbXpUb3owS2hrV2JlQjhndDdKRDRGYldWeWNzUWI5L0lqUUFtUy8rUU9RY3F5QjZTWFZ5STBPcitPM3BOcEJzb3BaZEhKR3ZMZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjM2NjQyMDMzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc3Nzk4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJDdFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkN0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRmdZbnJybWNrUjZETmVKRXA4aVB4ZjNobHUrVmgzZ1g5VmJuQkkyR3BpND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTI4NTg3MTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDc3NDYyMTUwOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "♪𝚻𝚯͜͡𝚳𝚳𝐘 ˢʰᵉˡᵖʸ🤤🤍💐",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
