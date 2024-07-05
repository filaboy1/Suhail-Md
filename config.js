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


global.SESSION_ID SUHAIL_19_10_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk4LFxuICAgICAgICA0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICA0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaS9DcVBOdmNZcjVDRlQ5NU5ZRFVPeUExdE9lQUZNT2xpVzZWMm1sZ2Zjdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNzkxVk5HQVFTWGFRSy0xTzRVZF9aUVwiLFxuICBcInBob25lSWRcIjogXCJlZmMyYzI1OS1iNmFmLTQzYTQtYWJlMS1mMjgzNTczNjI3ODNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTg4LFxuICAgICAgMjAxLFxuICAgICAgMTM4LFxuICAgICAgMjU0LFxuICAgICAgMTg0LFxuICAgICAgMTUyLFxuICAgICAgNyxcbiAgICAgIDE2NCxcbiAgICAgIDEwNCxcbiAgICAgIDIzLFxuICAgICAgMjE1LFxuICAgICAgNjUsXG4gICAgICA2NSxcbiAgICAgIDI0OSxcbiAgICAgIDEwOSxcbiAgICAgIDI0LFxuICAgICAgMTM2LFxuICAgICAgMTQyLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAxMyxcbiAgICAgIDcwLFxuICAgICAgMzQsXG4gICAgICAyNDgsXG4gICAgICAyMzAsXG4gICAgICAyMjIsXG4gICAgICAxMTYsXG4gICAgICAyMzMsXG4gICAgICA0MCxcbiAgICAgIDEyLFxuICAgICAgMTAxLFxuICAgICAgMTU2LFxuICAgICAgODEsXG4gICAgICAxMzQsXG4gICAgICA5MSxcbiAgICAgIDExOSxcbiAgICAgIDE2MyxcbiAgICAgIDIwNixcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJINzZITVREWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1MTczMTM3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFZHVjYXRpb24gQW5kIFRlY2hub2xvZ3lcIixcbiAgICBcImxpZFwiOiBcIjI1OTQ3NjIyMTM4Njg4Mzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01LSjdSQVFpNHFodEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUZKYnpoK01BVS9ZUHlaT3BuKzBRWDZuL3FYaE1BWDQxNlZjallDMjVuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYQVpnVW4ySXBLSFp4enVnOHh5MjhvZXlsclk2NVI4cWhxK2ZQQTRwTE5aVFovOXFvNGVlcStRU0xRZFFkMEp5Z1U0dkZWbkxaTGd0dVQrVzVUdDlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzckI3QXJYU3dJTFRUN016SENsS0NSMnRZVDY3WmpCS1ZKUkVlUjFzaFJweVB5Z3Z3MjMzZlM1b0RMSG54ZzZEcEpKWGMwTmx5NklwNFNiOWJ3Sm9CUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTUxNzMxMzc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyMDY2MDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPNVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU81Vi5qc29uIjogIntcImtleURhdGFcIjpcImxYWVZzT05Wc3kxNWxqc2ZORTZPbVhSdzZKdmtBbEsxcDdlNldMdHczcFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzUzNDE1MDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODgzNDMwOTU4MFwifSIKfQ==  // PUT your SESSION_ID 


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
