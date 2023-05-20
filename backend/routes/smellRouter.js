const Router = require('express')
const router = new Router()
const smellController = require('../controllers/smellController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), smellController.create)
router.get('/', smellController.getAll)

module.exports = router
