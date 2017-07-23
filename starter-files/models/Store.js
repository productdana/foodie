const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true, // takes out white space; do all data normalization as close to model as possible
    required: 'please enter a store name!'// you could say true, but if you try to save a store without a name, it will give an error message, so you can give it a string error message which will act as true
  },
  slug: String, // auto-generated whenever somebody saves (pre-save hook, which means before someone saves a store, we're going to auto-generate the slug field that can be passed in)
  description: {
    type: String,
    trim: true
  },
  tags: [String] // an array of strings
});

storeSchema.pre('save', function(next) { // can't be arrow function because we need to reference 'this', which is the store we're trying to save
  if (!this.isModified('name')) {
    next(); // skip the slug part if the name isn't modified
    return; // stop this function from running;
  }
  this.slug = slug(this.name);
  next();
  // TODO: make more resilient so slugs are unique
})

module.exports = mongoose.model('Store', storeSchema);