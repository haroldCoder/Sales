const express = require('express');
const bodyParser =  require('body-parser');
const app  =  express();
const cors = require('cors')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const uri = "mongodb+srv://koder:koder@sales.wkapo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connection = mongoose.connection;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
    if (req.method == "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

app.use('/products', require('./routes/products.js'));
app.use('/users', require('./routes/users.js'));
require('dotenv').config();
app.use(cors());

mongoose.connect(uri,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


connection.once('open',()=>{
    console.log('db is connected');
})

/*mongodb.MongoClient.connect(url, (error, database) => {
    //console.log(url);
    if(error) return process.exit(1);
    const db = database.db('products');
    //console.log("Connection is OK");

    app.get('/products',(req,res)=>{
        db.collection('products').find().toArray((error,results)=>{
            if(error) return next(error);
            res.send(results);
        });
    });

    app.post('/products',(req, res)=>{
        let newAccount =  req.body;
        db.collection('products').insert(newAccount,(error,results)=>{
            if(error)  return next(error);
            res.send(results);
        });
    });

    app.put('/products/:id',(req,res)=>{
        db.collection('products').update(
            {_id: mongodb.ObjectID(req.params.id)},
            {$set:req.body},
            (error,resutls)=>{
                if(error) console.log(error);
                res.send(resutls);
            });
    });

    app.delete('/products/:id',(req,res)=>{
        db.collection('products').remove({_id: mongodb.ObjectID(req.params.id)},(error,results)=>{
            if(error) console.log(error);
            res.send(results);
        });
    });

    app.get('/users',(req,res)=>{
        db.collection('users').find().toArray((error,results)=>{
            if(error) return next(error);
            res.send(results);
        });
    });

    app.post('/users',(req, res)=>{
        let newAccount =  req.body;
        db.collection('users').insert(newAccount,(error,results)=>{
            if(error)  return next(error);
            res.send(results);
        });
    });

    app.put('/users/:id',(req,res)=>{
        db.collection('users').update(
            {_id: mongodb.ObjectID(req.params.id)},
            {$set:req.body},
            (error,resutls)=>{
                if(error) console.log(error);
                res.send(resutls);
            });
    });

    app.delete('/users/:id',(req,res)=>{
        db.collection('users').remove({_id: mongodb.ObjectID(req.params.id)},(error,results)=>{
            if(error) console.log(error);
            res.send(results);
        });
    });



});*/
    app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});