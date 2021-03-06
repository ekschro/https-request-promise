const https = require('https');

// HTTPS request promisified
const request = (params, json) => new Promise((resolve, reject) => {
  const req = https.request(params, res => {
    const { statusCode } = res;
    if (statusCode < 200 || statusCode >= 300)
      return reject(new Error(`status:${statusCode}`));

    var body = [];
    res.on('data', c => body.push(c));

    res.on('end', () => {
      try {
        body = JSON.parse(Buffer.concat(body).toString());
      } catch (e) {
        reject(e);
      }
      resolve(body);
    });
  });

  req.on('error', err => reject(err));
  if (json)
    req.write(JSON.stringify(json));
  req.end();
});

module.exports = { request };