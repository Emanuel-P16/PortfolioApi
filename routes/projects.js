const {Router} = require('express')

const { check } = require('express-validator')


const { projectsGet, projectPut, projectDelete, projectPost } = require('../controllers/projects')



const router = Router()

router.get('/',projectsGet)
router.post('/',projectPost)
router.put('/:id',projectPut)
router.delete('/:id',projectDelete)


module.exports = router