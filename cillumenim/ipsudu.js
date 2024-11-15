const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/resource', (req, res) => {
    // Assuming req.headers is already defined as shown earlier
    // Access headers
    const contentType = req.headers['content-type']; // 'application/json'
    const authToken = req.headers['authorization']; // 'Bearer <token>'

    // Process request body
    const requestData = req.body;

    // Handle request and send response
    res.status(200).json({ message: 'Request processed successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
