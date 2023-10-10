// Import required modules and create an Express app
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

// Set the view engine to EJS for rendering templates
app.set('view engine', 'ejs');

// Import routes from the 'routes/index.js' file
const routes = require('./Routes/index');

// Use the imported routes to handle requests
app.use('/', routes);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server and log a message when it's running
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});