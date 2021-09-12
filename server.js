const express = require('express');
const app = express();
app.use(express.static('./dist/hire-right'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/hire-right/'}
  );
});
app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));