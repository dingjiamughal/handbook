const mongoose = require('mongoose');

const database = 'week7_mongo_db';
const url = `mongodb://localhost:27017`;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(`${url}/${database}?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', err => console.error('mongoose链接异常: ', err));

module.exports = mongoose;
