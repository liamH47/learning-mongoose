const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
      console.log('connection open!')
  })
  .catch(err => {
      console.log('wild error appeared')
      console.log(err)
  })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//mongoose.model takes two args, a singular and capitalized model name string, and a schema object
const Movie =  mongoose.model('Movie', movieSchema);
//we now have a model/class with the schema passed to mongoose.model

//each movie will be instantiated with access to tons of methods that come with mongoose
const spiderman = new Movie({
    title: 'spiderman',
    year: 1986,
    score: 9.1,
    rating: 'PG-13'
})
/*
some key methods:

Movie.save()
   eg: spiderman.save()
   instances of a model will not be saved to the db automatically if you create a single one with the new keyword


Movie.insertMany([
    put an array of objects here to insert many new movie instances to the db
])
-returns a promise

Movie.find()
-very similar to in mongo shell

*/
