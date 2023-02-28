const express = require('express')
const path = require('path')
const route = require('./src/routes/route.js')
const {engine} = require('express-handlebars')
const mongoose = require('mongoose');
async function connect() {
    try {
      await mongoose.connect('mongodb+srv://hoangtu45:123456789tu@cluster-mongo-test.pdqsm0o.mongodb.net/test');
      console.log('connect success')
    } catch (error) {
      console.log('connect failure')
    }
  }

const app = express()

// set hbs
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'src','views'));

// static file
app.use(express.static(path.join(__dirname,'src','public')))
// connect();
route(app);


app.listen(3000)