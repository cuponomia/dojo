const { WebClient } = require('@slack/web-api');
const fetch = require("node-fetch");

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();


const postImage = async (to) => {
    const lastMemeData = await fetch('https://xkcd.com/info.0.json').then((res) => res.json()).catch(() => { console.log('deu banana') });
    const currentNum = Math.floor(Math.random() * lastMemeData.num);
    const currentMemeData = await fetch(`https://xkcd.com/${currentNum}/info.0.json`).then((res) => res.json()).then(result => result).catch(() => { console.log('deu banana') });
    console.log(currentMemeData)
    
    try {
        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
        channel: to,
        attachments: [{"title": currentMemeData.alt, "image_url": currentMemeData.img}],
       
        });
        console.log('Message posted!');
    } catch (error) {
        console.log(error);
    }

};

module.exports = postImage;