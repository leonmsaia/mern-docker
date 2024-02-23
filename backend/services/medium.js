const fs = require("fs");
const axios = require('axios');
const xml2js = require("xml2js");
const util = require('util');

// const xmlParser = new xml2js.Parser({ cdata: true });
const xmlParser = require('xml2js').Parser;


async function getArticles() {
    const mediumFeedURL = "https://medium.com/feed/@leonmsaia";
    const xmlpath = fs.readFileSync('./assets/xml/medium.xml');
    const data = await xmlParser.parseStringPromise(xmlpath);

    const exportdata = data.rss.channel[0].item;
    // console.log(exportdata);
    
    return {
        exportdata
        // images
    }
}

async function catchOnlineMediumFeed(url) {
    try {
        // Realizar una solicitud HTTP para obtener el XML
        const response = await axios.get(url);
        const xmlData = response.data;
        const parser = new xmlParser();

        // Parsear el XML
        const data = await parser.parseStringPromise(xmlData);
        
        // Devolver los datos analizados del XML
        const exportdata = data.rss.channel[0].item;
        return exportdata;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

async function getArticlesOnline() {
    const externalXmlUrl = "https://medium.com/feed/@leonmsaia";
    return catchOnlineMediumFeed(externalXmlUrl)
    .then(data => {
        // data = prettyJSONStringify(data);
        // data = util.inspect(data, { depth: null });
        data = JSON.stringify(data);
        return data;
        // resolve(data);
        // console.log(data)
    })
    .catch(error => {
        console.error("Error:", error);
    });
    return {
        data
    }
}

module.exports = {
    getArticles,
    getArticlesOnline
}