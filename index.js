const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const lexiumRoutes = require('./lexium/graphql/routes')
const yandexRoutes = require('./yandex/graphql/routes')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.json({limit: '100mb'}))


app.use('/lexium', lexiumRoutes)
app.use('/yandex', yandexRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(80, () => console.log('Express app listening on localhost:4000'))
