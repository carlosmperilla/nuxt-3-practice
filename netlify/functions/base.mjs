// .mjs para modulos ES6

// ver airtable.com --> api --> docs
import Airtable from 'airtable'

const db = new Airtable({
    apiKey: process.env.AIRTABLE_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID)

const headers = {
    /* Required for CORS support to work */
    'Access-Control-Allow-Origin': '*',
    /* Required for cookies, authorization headers with HTTPS */
    'Access-Control-Allow-Credentials': true,
}

export async function handler (evt) {
    // .all() es para que no los regrese paginados los articulos.
    const articles = await db('articles').select().all()

    return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                articles,
            }),
    }
}