const { Schema, model } = require('mongoose')



const QuestsSchema = Schema ( {
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default : false
    },
    objectives : {
        type: [String]
        
    }
})

module.exports = model ('Quests',QuestsSchema)