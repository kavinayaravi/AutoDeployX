const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from AutoDeployX!');
});

app.get('/metrics', (req, res) => {
  res.send('app_metrics 1'); // Placeholder for Prometheus
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
