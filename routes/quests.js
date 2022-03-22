const { Router } = require('express')
const check = require('express-validator')
const { questsGet, questsPut, questsPost, questsDelete } = require('../controllers/quests')



const router = Router()

router.get('/',questsGet)
router.put('/',questsPut)
router.post('/',questsPost)
router.delete('/',questsDelete)

module.exports = router