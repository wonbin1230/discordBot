const axios = require('axios');
const fs = require('fs/promises');
const path = require('path');

const header = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

module.exports = {
    getMemesData: async () => {
        try {
            const memesData = await axios({
                method: 'get',
                url: 'https://memes.tw/wtf/api',
                headers: header
            })
            await fs.writeFile(path.join(__dirname, "memes.json"), JSON.stringify(memesData.data))
            return memesData.data
        } catch (err) {
            console.log(err);
            return err
        }
    },
}