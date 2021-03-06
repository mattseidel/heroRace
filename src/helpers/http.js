import axios from "axios"

const url = 'https://superheroapi.com/api'


const accessToken = '10158100097320784'


/**
 * Return match array name hero
 * @param {string} name hero name
 */
export const search = async (name) => {

    const resp = await axios.get(`${url}/${accessToken}/search/${name}/`, {
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': "*"
        },
    })

    // const resp = await (await fetch(`${url}/${accessToken}/search/${name}`, { mode: 'cors', headers: { 'Access-Control-Allow-Origin': "*", "Content-Type": "application/json"} }))

    return await resp.json()
}

