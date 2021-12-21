const fs = require('fs');
const path = require('path');
const axios = require('axios').default;

exports.downloadFile = async (fileUrl, fileName) => {

  const localFilePath = path.resolve(__dirname, 'download', fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));

    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  } catch (err) {
    throw new Error(err);
  }
}; 