const express = require('express');

const cors =require('cors');

const { dbConnection } = require('../databases/config');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.projectPath = '/api/projects'
        this.usersPath = '/api/users'
        this.questsPath = '/api/quests'


        this.conectarDB();
        this.middlewares();
        this.routes()
    }
     async conectarDB(){
         await dbConnection()
     }

     middlewares(){
         this.app.use(cors())
         this.app.use(express.json())
         this.app.use(express.static('public'))
     }

     routes(){
         this.app.use(this.projectPath,require('../routes/projects'))
         this.app.use(this.usersPath,require('../routes/users'))
         this.app.use(this.questsPath,require('../routes/quests'))
     }


     listen(){
         this.app.listen(this.port, () => {
             console.log('Servidor corriendo en el puerto ', this.port)
         })
     }
}


module.exports = Server