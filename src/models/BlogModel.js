const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});
const blogModel = mongoose.model('blog', BlogPost);
 module.exports=blogModel;
