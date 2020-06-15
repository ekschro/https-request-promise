# https-request-promise
### A simple way to make https requests in your JS projects.

### Example:

```
const { request } = require('https-request-promise');

// Base HTTPS request options
const options = {
  method: 'POST',
  hostName: 'example.hostname.com',
  headers: {
    'Content-Type': 'application/json'
  },
};

// API Key
const api_key = 'ASDFGHJKL1234567890ASDFGHJKL1234567890ASDFGHJKL1234567890';

// A common API endpoint application...
const test = data => request({ ...options, path: '/api/test/it' }, { api_key, data });

(async () => test('Hello, API... I mean World!'))();
```