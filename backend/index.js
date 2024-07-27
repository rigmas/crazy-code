const dotenv = require("dotenv");
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '100mb' }));
app.set('view engine', 'ejs');

const generatorService = require('./services/generator');
const merchantService = require('./services/merchant');

app.use(express.json());

app.post('/generate/images', (req, res) => {
  generatorService.image(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
});

app.post('/generate/text', (req, res) => {
  generatorService.text(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
});

app.post('/merchant', (req, res) => {
  merchantService.create(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
})

app.get('/merchants', (req, res) => {
  merchantService.getAll()
    .then(data => res.status(200).json(data))
    .catch(err => {
      throw err
    })
})

app.get('/merchant/:id', (req, res) => {
  merchantService.getById(req)
    .then(data => res.status(200).json(data))
    .catch(err => {
      throw err
    })
})

app.get("/render/:id", (req, res) => {
  generatorService.html(req)
    .then(data => res.render('index', data))
    .catch(err => {
      throw err
    })
})

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  cache.quit().then(() => {
    console.log('Redis client closed');
    process.exit(0);
  }).catch((err) => {
    console.error('Error closing Redis client:', err);
    process.exit(1);
  });
});