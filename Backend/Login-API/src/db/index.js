const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:mongo123@pgweblib-w0kkn.mongodb.net/user-login-db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;

//cria a conexao do banco 