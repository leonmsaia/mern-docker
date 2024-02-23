const axios = require('axios');
const cheerio = require('cheerio');

async function getArticles() {
    try {
        const url = 'https://ungs.academia.edu/leonmsaia';
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const articleData = [];
        $('.profile--tab_content_container .js-work-strip-work-link').each((index, element) => {
            const title = $(element).text().trim();
            const url = $(element).attr('href');
            articleData.push(
                {
                    title, 
                    url 
                }
            );
        });

        let filteredArray = [];
        for (let i = 0; i < articleData.length; i++) {
            const item = articleData[i];
            if (item.title.trim() !== '' && item.url.trim() !== '') {
                filteredArray.push(item);
            }
        }

        const uniqueTitles = [];
        const titles = [];
        for (const item of filteredArray) {
            if (!titles.includes(item.title)) {
                uniqueTitles.push(item);
                titles.push(item.title);
            }
        }
        
        const exportdata = uniqueTitles;

        return {
            exportdata
        }

    } catch (error) {
        console.error('Error al obtener los artículos:', error);
    }
}

module.exports = {
    getArticles
}