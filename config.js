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


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_09_08_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYOTExaHhwUHZ4ZnhDY2Ivc25ZQ3VoWmFnc2N1UExzUGFkUTNpN0F6cnFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3MTE1MjA4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREMyREM4NDI2Rjc4NzIxRkNCNjNGQTJFMTg1NkFFOUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MDk2OTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzcxMTUyMDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENzlCQ0Q0MzA2RkNFQUQ0RUQ0RkU3NDAwMTNEMTJDQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgwOTY5MDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic09wbkRlNjNUTnFJT2hrUUg1cUhMQVwiLFxuICBcInBob25lSWRcIjogXCI4NTYzYTQ2Zi1lY2E1LTRlMDItOTY3OC00NDRjYzNjZTljMGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTEwLFxuICAgICAgMTc0LFxuICAgICAgNTIsXG4gICAgICAxNzEsXG4gICAgICAxNTYsXG4gICAgICAyNyxcbiAgICAgIDEzOCxcbiAgICAgIDIwMyxcbiAgICAgIDc4LFxuICAgICAgMTYxLFxuICAgICAgMTMyLFxuICAgICAgMjIsXG4gICAgICAyMTIsXG4gICAgICA3MyxcbiAgICAgIDIzMSxcbiAgICAgIDI3LFxuICAgICAgMTQ4LFxuICAgICAgMTUwLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDIzNyxcbiAgICAgIDExNyxcbiAgICAgIDIwOCxcbiAgICAgIDIyNyxcbiAgICAgIDI0LFxuICAgICAgOTAsXG4gICAgICA1MixcbiAgICAgIDUwLFxuICAgICAgMjM4LFxuICAgICAgMTMyLFxuICAgICAgMTIxLFxuICAgICAgMTAsXG4gICAgICAzOSxcbiAgICAgIDE2MixcbiAgICAgIDQ5LFxuICAgICAgMjA3LFxuICAgICAgMjUsXG4gICAgICAzNixcbiAgICAgIDg5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRUQVhBTFExXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzExNTIwODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTMxNjc1MzQ0MTU4ODI6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJGaWxhYm95dGhlZ2V0dG95b3V0aFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3MnZJZ0JFUDZub0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUXpUVUxHb0ppdHVlckxiWklabGZURUdSZzZLeERyS2tGblo1YVV5UkNubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrcG5oQ2w3RkVXaDhPS0lUSyt5c3JQVGVpZnIzdDZhemptQ05YVGJRR0RwVVpSQkRNQTd4YUgvY0NGbnRhRjZBWVZNS3U5R2hwZlEyRFRHYm1oOEVCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiZkJ6SjZiWmNFY1VpTFEyR1NuUHJrT0lYc0gyZDh4UGZPVVJRZ2s2azF6TTBsVUhBb0xORjQ1enVPaXRkYXgydE05MmRzaXZFelZEZitUaEZRRHdBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzExNTIwODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MDk2ODk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDZGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyNEkzYXJieEtsQWR5OG16ZnMxWDZHNG1aem94dkJta3dLNXBYQjlCUU8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NjIxMDk0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4MDk2ODk5ODcwXCJ9Igp9  // PUT your SESSION_ID 


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
