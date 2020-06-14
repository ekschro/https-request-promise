# https-request-promise
## A simple way to make https requests in your JS projects.

### Example:

```
// Base HTTPS request options
const baseOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

// API Key
const api_key = 'ASDFGHJKL1234567890ASDFGHJKL1234567890ASDFGHJKL1234567890';

// A common API endpoint application...
const test = data => httpsRequest({ ...options, path: '/api/v2/test/it' }, { api_key, data });

(async () => test('Hello, API... I mean World!'))();
```