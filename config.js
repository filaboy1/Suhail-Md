const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_07_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDc4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICA3NCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXQStNN25pUXpZUFdzMjRFVWhreUZuK2RFdFFyWE5tRFJDcHUvQ1B1OG1VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3MTE1MjA4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEQwNTQxODZGNzZCQjJGNUE4NjdFODI5OTU4Q0Q0NjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTMwODU3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk02ZkJ0NDNxU19DV216aXJTcEV2cHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWEyMzU0MDYtNzE3ZC00NDdlLTk5MzUtYzA5ODExYjZjYjYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDI0LFxuICAgICAgMjIxLFxuICAgICAgMTgzLFxuICAgICAgNDksXG4gICAgICA3MSxcbiAgICAgIDE4MyxcbiAgICAgIDk0LFxuICAgICAgMTYxLFxuICAgICAgMTAsXG4gICAgICA3OCxcbiAgICAgIDEwMCxcbiAgICAgIDcwLFxuICAgICAgMjMxLFxuICAgICAgOSxcbiAgICAgIDI0MSxcbiAgICAgIDU1LFxuICAgICAgMTg0LFxuICAgICAgMTgwLFxuICAgICAgNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgOTEsXG4gICAgICA2OSxcbiAgICAgIDkyLFxuICAgICAgMjQ1LFxuICAgICAgMjQxLFxuICAgICAgMTYzLFxuICAgICAgMTY5LFxuICAgICAgMTQyLFxuICAgICAgMjIyLFxuICAgICAgMTM1LFxuICAgICAgMjM1LFxuICAgICAgNDQsXG4gICAgICAyNTAsXG4gICAgICAyNDAsXG4gICAgICAxMjcsXG4gICAgICAyMDEsXG4gICAgICAyMCxcbiAgICAgIDc2LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkzNDZNV0tKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzExNTIwODk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTMxNjc1MzQ0MTU4ODI6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGaWxhYm95dGhlZ2V0dG95b3V0aFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AvMnZJZ0JFSjY2bkxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUXpUVUxHb0ppdHVlckxiWklabGZURUdSZzZLeERyS2tGblo1YVV5UkNubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4OHBJRFhvd0IzWVV2ZktPR25uSkRIaXNyRFhSc25jTHd4aGp2M2g5OS9ka2hoQzBpbFg0VlNqdnZQUXpjc1FhSzllaXJsVldKdnhLYzZDVlZPTHpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIybGFFUWZxT1AvWi9LV2syalhxQ3pZYUZMblU1SFczeHlHR1FJKzIyeEVDdk9YUFgvU28zTEJ6YUZ4cHpiZUlKdVFvd0lrMmhuNE9aU3Q5V1ZWdnRCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzExNTIwODk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTMwODUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDZHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENkcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRnhGV3EwN2F0VEIzUmNuL1FTQzhuRkhLYitFWlVYNXhFNzR0RjdPdWpNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NjIxMDk0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDEzMDY4OTI2NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
