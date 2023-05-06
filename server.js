const express = require('express')
const db = require('./db')
const blogs = require('./routes/blog_routes')

const app = express()

const port = 5000

app.use(express.json())

db.connect(function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('database connected');
    }
    
})

app.use('/', blogs)

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})