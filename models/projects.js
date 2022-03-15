const { Schema, model } = require('mongoose')


const ProjectSchema = Schema({
    name: {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    github_url: {
        type: String,
        required: [true,'Github URL is mandatory']
    },
    heroku_url: {
        type: String,
        // required: [true,'El nombre es obligatorio']
    },
    clonacion_url: {
        type: String,
        // required: [true,'El nombre es obligatorio']
    },
    imagen: {
        type: String,
        // required: [true,'El nombre es obligatorio']
    },
    technology: {
        type: [String],
        required: true
        }, 
   
    description: {
        type: String,
        default: 'Descripción no ingresada'
        // required: [true,'El nombre es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    }

})

// ProjectSchema.methods.toJSON = function () {
//      const { __v, ...project} = this.toObject()
//          return project
//     }


    module.exports = model('Project', ProjectSchema)