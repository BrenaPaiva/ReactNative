
const express = require('express')

const router = express.Router()

const apiV2 = require('./controllers/TimeController')
const apiQuestao = require('./controllers/QuestaoController')
const login = require('./controllers/LoginController')

router.use('/', apiV2)
router.use('/', apiQuestao)
router.use('/', login)


module.exports = router