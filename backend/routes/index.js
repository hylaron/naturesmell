const Router = require('express')
const router = new Router()
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const smellRouter = require('./smellRouter')

router.use('/user', userRouter)
router.use('/smell', smellRouter)
router.use('/product', productRouter)

module.exports = router
