const { type } = require('express/lib/response')
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
        type: Schema.Types.ObjectId,
        ref: 'Users',
        
    },
    google_id:{
        type: String
    },
    completed: {
        type: Boolean,
        required: true,
        default : false
    },
    objectives: [
        {
            name: String,
            completed: Boolean
        }
    ]
})

module.exports = model ('Quests',QuestsSchema)