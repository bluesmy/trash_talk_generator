// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  // setting handlebars helpers and define ifEquals function
  helpers: {
    ifEquals: function (arg1, arg2, options) { return (arg1 == arg2) ? options.fn(this) : options.inverse(this) }
  }
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body.job
  const error = generateTrashTalk(options)
  const job = generateTrashTalk(options)[0]
  const task = generateTrashTalk(options)[1]
  const phrase = generateTrashTalk(options)[2]
  res.render('index', { options, error, job, task, phrase })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})