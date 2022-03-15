const { response , request } = require('express');
const { stringify } = require('nodemon/lib/utils');
const Project = require('../models/projects')

const projectsGet = async (req = request,  res = response) => {

    const {limite = 10 , desde = 0} = req.query;
    // const query = { estado: true }


    const projects  = await Project.find()
        // .limit(Number(limite))
    // console.log(projects)

    res.json({
        // projects
        projects
    })
}

const projectPost = async ( req = request, res = response) => {

    const {...fields} = req.body

  
    const project = new Project({...fields})
    
    await project.save()


    res.json({
        msg: 'Project Succesfully created',
        project
    })
}

const projectPut = async ( req = request , res = response ) => {
    const { id } = req.params
    const {...updatedProject} = req.body
    const project = await Project.findByIdAndUpdate(id,
        updatedProject,{new:true}
        
    )

    res.json({
        msg:'Project succesfully updated',
        project
    })
}

const projectDelete = async ( req = request , res = response) => {
    const { id } = req.params
    const project = await Project.findById(id,{
        status: false
    })
    
res.json({
    msg: 'Project Succesfully deleted',
    project
})

}



module.exports = {
    projectsGet,
    projectPost,
    projectPut,
    projectDelete
}