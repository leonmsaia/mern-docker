const db = require('../config/db');
const helper = require('../helpers/helper');
const config = require('../config/config');

async function getMultiple(page = 1){
    
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, post_author, post_date, post_content, post_title, post_status FROM wp_posts LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
    
}

async function getPosts(page = 1){

    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, post_author, post_date, post_content, post_title, post_status FROM wp_posts LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }

}


module.exports = {
    getMultiple,
    getPosts
}