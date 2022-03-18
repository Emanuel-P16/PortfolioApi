const {request, response }  = require('express')
const User = require('../models/users')

const usersGet = async (req = request, res = response ) => {


    const [total,users] = await Promise.all([
        User.count(),
        User.find()
    ])
    
    res.json({
        total,
        users
    })
}

const usersPut = async(req=request,res=response) => {

    const { id } = req.params

    const {_id , password, google, mail,...rest} = req.body

    const user = await User.findByIdAndUpdate(id,rest,{new:true})

    res.json({
        msg: 'put'
    })
}


const usersPost = async(req = request , res = response) => {
    const {name,mail,password,role} = req.body    
    const user = new User({ name, mail,password,role})


    await user.save()
    res.json({
        msg: 'post'
    })
}

const usersDelete = async(req=request, res= response) => {
    const {id} = req.params

    const user = await User.findOneAndUpdate(id,{
        status: false
    })

    res.json({
        msg: ' delete '
    })
}


module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}