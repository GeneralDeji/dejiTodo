const router = require('express').Router()
const { createTodo, getAllTodos, getSingleOne, deleteOne, updateOne } = require('../controllers/controllerToDo');


router.route('/').get(getAllTodos).post(createTodo)
router.route("/:id").get(getSingleOne).delete(deleteOne).patch(updateOne)

// router.post('/', createTodo)
// router.get('/getall', getAllTodos)
// router.get('/getall/:id', getSingleOne)
// router.delete('/getall/:id', deleteOne)
// router.patch('/getall/:id', updateOne)


module.exports = router