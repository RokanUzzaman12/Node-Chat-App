const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const path  = require('path');
const cookieParser = require('cookie-parser');
// const {notFoundHandler,errorHandler} = require('./middlewares/common/errorHandler')
const loginRouter = require('./router/loginRouter')
const inboxRouter = require('./router/inboxRouter')
const userRouter = require('./router/userRouter')


const app = express()

dotenv.config();

mongoose.connect(process.env.Mongo_Connection_String,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{console.log('Database connected')})
.catch(err=>{console.log(err)})


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,"public")))

app.use(cookieParser(process.env.COOKIE_PARSER))

// app.use(notFoundHandler)
// app.use(errorHandler)

app.use('/',loginRouter);
app.use('/inbox',inboxRouter);
app.use('/users',userRouter);

app.listen(process.env.PORT,()=>{
    console.log(`I am listening ${process.env.PORT}`)
})