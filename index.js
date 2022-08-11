const express = require('express') // imports express module
const app = express() // creates express application

const port = 3000
//|| process.env.port // || is for "or", whatever is in the environment variable PORT, or 3000 if there's nothing there.

app.listen(port, () => console.log(`App is live on port ${port}`))
//=> short function syntax, &{} its output is passed as a string to template literals.

const path = require('path') //asks to use path module that works with files and directories

app.use(express.static(path.join(__dirname, 'public'))) //If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve
