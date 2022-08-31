const { find } = require('../model/toDo')
const toDo = require('../model/toDo')

//create a Todo
//get all of the Todos
//get a single one
//update Todo
//delete Todo

const createTodo = async (req,res)=>{
    const { title, body } = req.body

    try {
        if(!title || !body){
            return res.status(401).json({ msg: 'Please input necessary details'})
        }

        const theToDo = await toDo.create({ title, body })
        res.status(201).json({ msg: 'TODO created',  data: theToDo})
    } catch (error) {
        res.status(500).json({ msg: 'TODO not created'})
        console.log(error);
    }
}

const getAllTodos = async (req,res)=>{
    try {
        const allOfThem = await toDo.find()
        res.status(401).json(allOfThem)

    } catch (error) {
        console.log(error);
    }
}

const getSingleOne = async (req,res)=>{
    const { id } = req.params

    try {
        const theOne = await toDo.findById(id)
        res.status(201).json({ resultSingleOne: theOne })

    } catch (error) {
        console.log(error)
    }
}

const deleteOne = async (req,res)=>{
    const { id } = req.params

    try {
        const thatOne = await toDo.findByIdAndDelete(id)
        console.log('Successful Boss');
        res.status(201).json({ msg: "To do List Successfully Deleted"})
    } catch (error) {
        console.log(error);
    }
}

const updateOne = async (req, res)=>{
    const { id } = req.params
    const { title, body } = req.body

    try {
        const data = await toDo.findById(id)

        if(data){
            if(!title || !body){
                return res.status(404).json({ msg:"input necessary details"})
            }
            const Updating = await toDo.findByIdAndUpdate(data, { title, body }, {new: true, runValidators: true, 
                //overwrite: true
            })
            const allOfThem = await toDo.find()
            return res.status(201).json({ allOfThem })
        }
        return res.json({ msg: 'Stuff not Found'})
    } catch (error) {
        console.log(error);
    }
}

// const updateOne = async (req,res)=>{
//     const { id } = req.params
//     const { title, body, completed } = req.body
//     const singleUser = await toDo.findById(id)

//     if(singleUser){
//         if(title || body || completed){
//             const singleUpdate = await toDo.findByIdAndUpdate(singleUser, { title, body, completed }, {new: true})
//             return res.status(200).json({ singleUser, singleUpdate})
//         }
//         return res.status(404).json({ msg: "please provide inputs"})
//     }
//     res.status(404).json({msg: "todo update"})
// }

module.exports = { createTodo, getAllTodos, getSingleOne, deleteOne,updateOne }