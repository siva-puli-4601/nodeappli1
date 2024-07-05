const express = require('express'); // Import the Express library
const app = express(); // Create an Express application
const extractText = require('./extractText'); // Import the extractText module

app.use(express.json()); // Middleware to parse JSON request bodies

// Endpoint to handle supplier ingestion
app.post('/ingestSupplier', async (req, res) => {
  
  try {
    const { companyName, companyURL } = req.body; // Extract companyName and companyURL from the request body
    const result = await extractText.ingestSupplier(companyName, companyURL); // Call the ingestSupplier function
    res.json(result); // Send the result as a JSON response
  } catch (error) {
    console.error(error); // Log the error to the console
    res.status(500).json({ error: 'Internal server error' }); // Send an error response with status 500
  }
});

app.listen(4000, () => {
  console.log('Server started on port 3000'); // Log a message when the server starts
});