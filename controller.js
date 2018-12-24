module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.sendfile('todo.html')
    })

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://test:123456@localhost:27017/test', { autoIndex: false });
    // define a schema
    const Schema = mongoose.Schema;

    var personSchema = new Schema({
        name: String,
        sex: String,
        age: Number,
    });
    // compile our model
    var Person = mongoose.model('Person', personSchema);

    app.get('/todo', function (req, res, next) {
        console.log('geting')
        Person.find().then((e)=>{
            console.log(e)
            res.send(e)
        })
    })

    app.post('/todo', function (req, res, next) {
        console.log('posting')
        console.log(req.body)
        new Person(req.body).save().then((e)=>{
            res.send(e)
        })
    })

    app.delete('/todo', function(req, res, next){
        console.log('deleting')
        console.log(req.body)
        Person.deleteOne(req.body).then((e)=>{
            res.send(e)
        })
    })
}