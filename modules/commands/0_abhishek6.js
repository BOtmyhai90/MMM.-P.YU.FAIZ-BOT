const fs = require("fs");
module.exports.config = {
	name: "sorry",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Me hu abhishek BSDK") ||
     react.includes("Tera boss hu abhishek") || react.includes("Abhishek hu") || react.includes("Tera malik abhishek hu") ||
react.includes("Tera boss hu yadav ji") ||
react.includes("sale yadav ji hu")) {
		var msg = {
				body: `【  𝐒0𝐑𝐑𝐘 𝐌𝐀𝐋𝐈𝐊 𝐀𝐁 𝐆𝐀𝐋𝐓𝐈 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐔𝐍𝐆𝐀 𝐏𝐋𝐒 𝐀𝐊 𝐁𝐀𝐑 𝐌𝐀𝐅 𝐊𝐀𝐑 𝐃0______🤐😙😥】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }