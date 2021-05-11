const request = require('request');

const cheerio = require('cheerio');

const Discord = require('discord.js');

const client = new Discord.Client();

let prefix = "c"

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

    if (message.content === 'charli') {

        image(message);

    }

});

client.on('message', message => {

    if (message.content === 'ari') {

        image2(message);

    }

});

client.on('message', message => {

    if (message.content === 'nicki') {

        image3(message);

    }

});

function image(message) {

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "charli d'amelio",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);
        console.log($());
        var links = $(".image a.link");
        
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {

            return;
        }

        // Send result
        message.TextChannel.send(urls[Math.floor(Math.random() * urls.length)]);
    });






}

function image2(message) {

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "ariana grande",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {

            return;
        }

        // Send result
        message.TextChannel.send(urls[Math.floor(Math.random() * urls.length)]);
    });






}

function image3(message) {

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "nicki minaj",
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };





    request(options, function (error, response, responseBody) {
        if (error) {
            return;
        }


        $ = cheerio.load(responseBody);


        var links = $(".image a.link");

        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

        console.log(urls);

        if (!urls.length) {

            return;
        }

        // Send result
        message.TextChannel.send(urls[Math.floor(Math.random() * urls.length)]);
    });






}

client.on('message', message => {

    if (message.content === 'ping') {

        message.reply('pong');

    }

});

client.on('message', message => {

    if (message.content === 'charlitwit') {

        message.reply('https://twitter.com/charlidamelio/with_replies?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');

    }

});

client.on('message', message => {

    if (message.content === 'charlitube') {

        message.reply('https://www.youtube.com/channel/UCi3OE-aN09WOcN9d2stCvPg');

    }

});

client.on('message', message => {

    if (message.content === 'charlitok') {

        message.reply('https://www.tiktok.com/@charlidamelio?lang=en');

    }

});

client.on('message', message => {

    if (message.content === 'charlinsta') {

        message.reply('https://www.instagram.com/charlidamelio/');

    }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret