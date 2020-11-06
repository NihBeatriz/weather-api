const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/weather', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(response => console.log('Conected to Database..'))
.catch(error => console.log('error ->', error.message));

module.exports = mongoose;