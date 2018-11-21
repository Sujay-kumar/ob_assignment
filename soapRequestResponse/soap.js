const  fs = require('fs');
const Path = require('path');
const Axios = require('axios');
async function  download() {
    const url = 'https://unsplash.com/photos/nl-09Hf3lpI/download?force=true';
    const path = Path.resolve(__dirname, 'files', 'image.jpg');

    const response = await Axios({
        method: "GET",
        url: url,
        responseType: 'stream'
    });

    response.data.pipe(fs.createWriteStream(path));

    return new Promise((resolve , reject) => {
        response.data.on('end', () => {
            resolve()
        });
        response.data.on('error', err => {
            reject(err);
        })
    })
}

download();