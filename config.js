//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "254743416283";
global.owner = process.env.OWNER_NUMBER || "254743416283";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUlFTDcwMXVINk9uSmdHOUpKcldIbHFPRFBOU1hRZ0hmbDhCWUg3WWpFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic25vYzFRWFBjSFR3eDc4YXVwZ0NOQTRLMW01Q3VjdXl1ampsdnNqdFJTND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUGFIcTlMeitZZEhVckpuejdENXZITGtKT2lkR2lqMXhVUXdaZCszSEhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuSmhVc1BnN2pVWGlPOFMzcmFPcS9WYU85UDUwUTBsaEd2Q2RFTUJMeVhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBeXJOQXorbHFlN256K3IwQWI3cFhWanVSNzdzTEEwU09mNGs2NGFBazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGODFuSHNoaHJpREVYaVVvSTNScUhpYnAyQXpDUzVQT1ZwdTlEMk9sa2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE8wQm16RWVuamNYVmE0bFlUMGVOcG5DRXF5Und4ZzFCdCtOdldPekZscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmt2OVhhVkR5T3o1aC9RWWw2U0RUNk16em0zbmVhdk9UMmZYMkU2M0h5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkzZWhSYllna1d3NVViaENBeTlEWVRYOVhqVjhBUTlmcjNkSEtiRkUyREFTWEc1ckQwZC8reGFwclZWaFJaRk92UzROUGxYSTVWS0NTVTFMZitkWEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiI2MllQamcvTFI0dCtCS2R6bzJYSis3TmowODVkVmpmblBSeURTVURjSGNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNjk4NTQ3MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2NjYwMkU3QzMxMDlEOEFBRUM4MUREOEU0NUEzQzgwMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNTg1MTY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTY5ODU0NzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkYzQzdBMjRFRDYzQ0M1QjY2RTU3N0ZFRDlGNjM2QkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTU4NTE2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE2OTg1NDcwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUzNDczREM0QkVBMkU0ODgwRkJGMkYzNjlCMjEyMUE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1ODUxNjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxNjk4NTQ3MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQTE0OEEwRTc3MDAxQTMxMDhDODA0MTY2Rjk2RDZCNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNTg1MTY4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3cWZ1X3FiNFEwcU05empmallSVlBBIiwicGhvbmVJZCI6IjZjMDdhMDVhLTkwNmYtNDdjZS1iZmYxLTBhOWE3YzllM2E3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQN29Mazk0V2F1SVJMeWovRzY3TjlkcGdsQjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTZVV0JVQWlKZWZwUjVLK0Fjb254OU5XTDdzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJTQVQ1TTdZIiwibWUiOnsiaWQiOiIyNTQ3MTY5ODU0NzA6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtb25nYXJlZGF2aWQwMjQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04vNTVVUVEvcHYxdEFZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlphSnp4SFhsaGwyY2xnTkV0bzUvdDJxRGZYWXNwRkNyMHlGYUJPSUtvbTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRiZXdwVGFGRmQxR0pnUHJrVUJlQU9XYlhWSkdNaFc2MzduZ0RaRmxFUU4vbmVJdGREd3B4dktTRTJadHYvbzRaK25Ham5oQUNGUzVQakt2c3VVOUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvYTZLaC9wNEZ5bmZuUGNRYnhOZWJZUWE4amI5NDlWdDYwaUhzZjcrRVlPQjBic1ZzQkpVOFZpQVlqTkZxT3RaY3BMWG5rSVAra3RhUFFXRFVjM0pDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxNjk4NTQ3MDoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldXaWM4UjE1WVpkbkpZRFJMYU9mN2RxZzMxMkxLUlFxOU1oV2dUaUNxSnQifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1ODUxNjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0M4In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "CYRIL",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "CYNUX",
  ownername: process.env.OWNER_NAME || "davymoh",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
