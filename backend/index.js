const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const generatorService = require('./services/generator');
const merchantService = require('./services/merchant');

dotenv.config();

const app = express();
const port = 3000;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '100mb' }));
app.set('view engine', 'ejs');

app.use(express.json());

app.post('/api/generate/images', (req, res) => {
  generatorService.image(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
});

app.post('/api/generate/text', (req, res) => {
  generatorService.text(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
});

app.post('/api/merchant', (req, res) => {
  merchantService.create(req)
    .then(data => res.status(201).json(data))
    .catch(err => {
      throw err;
    })
})

app.get('/api/merchants', (req, res) => {
  merchantService.getAll()
    .then(data => res.status(200).json(data))
    .catch(err => {
      throw err
    })
})

app.get('/api/merchant/:id', (req, res) => {
  merchantService.getById(req)
    .then(data => res.status(200).json(data))
    .catch(err => {
      throw err
    })
})

app.get('/api/render/:id', (req, res) => {
  generatorService.html(req)
    .then(data => res.render('index', data))
    .catch(err => {
      throw err
    })
})

app.use('/api/uploads', express.static(path.join(__dirname, 'public/uploads')));

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