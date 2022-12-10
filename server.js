const express = require('express')
const app = express()

//how to use views:
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    //console.log('jack')
    //res.send("jack")
    //res.sendStatus(500)
    //res.status(500).send("jack not happy")
    //res.status(500).json({message:"jack not happy"}) //useful for api
    //res.download("server.js") //nice..
    res.render("index", {text:",or is it?"})
})

//import users router:
const userRouter = require('./routes/users')
app.use('/users', userRouter)
const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

app.listen(3000)
