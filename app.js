const express = require('express'); 
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const app = express();
const router = require('./routes/index')
const layout = require('express-ejs-layouts')

app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method',{methods:['POST', 'GET']}))
app.set('view engine','ejs');
app.use(layout)
app.use(express.static('public')) 
app.use('/',router)

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/blog',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});




//connect to server
app.listen('3000',()=>console.log('express listen on port 3000'));