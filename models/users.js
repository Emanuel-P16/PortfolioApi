const { Schema, model} = require('mongoose')



const UsersSchema = Schema ( {
    name: {
        type: String,
        required: [true,'Name is mandatory']
    },
    mail: {
        type: String,
        required: [true,'Mail is mandatory']
    },
    password: {
        type: String,
        required: [true,'Password is mandatory']
    },
    img: {
        type: String,
        
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE'],
        default: 'USER_ROLE'
    },
    status: {
        type: Boolean,
        defualt: true
    },
    google: {
        type: Boolean,
        default: false
    }
})


UsersSchema.methods.toJSON = function () {
    const { __v, password, _id, ...users} = this.toObject()
    users.uid = _id
    return users  
}


module.exports = model('Users',UsersSchema)