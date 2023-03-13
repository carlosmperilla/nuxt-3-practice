/* eslint-disable require-await */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import Airtable from 'airtable'

const db = new Airtable({
  apiKey: process.env.AIRTABLE_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID)

const headers = {
  /* Required for CORS support to work */
  'Access-Control-Allow-Origin': '*',
  /* Required for cookies, authorization headers with HTTPS */
  'Access-Control-Allow-Credentials': true,
  // Permite que la petición se pueda hacer con useFetch.
  // https://stackoverflow.com/a/65007227
  'Access-Control-Allow-Headers': '*' 
}

const toJSON = (str) => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}

export async function handler(evt) {
  try {
    const { httpMethod } = evt
    const { article } = evt.queryStringParameters

    // Esto tambien es para evitar problemas con el navegador.
    if (httpMethod === 'OPTIONS') return {statusCode: 200, headers}
    
    if (httpMethod !== 'POST') throw new Error('Invalid method')

    const body = toJSON(evt.body)

    await db('comments').create([
      {
        fields: {
          author: body?.name,
          'author-email': body?.email,
          content: body?.content,
          post: [article],
        },
      },
    ])

    return {
      statusCode: 200,
      headers,
    }
  } catch (e) {
    console.error(e)
    return {
      statusCode: 400,
      headers
    }
  }
}