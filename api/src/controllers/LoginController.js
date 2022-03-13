const express = require('express')

const router = express.Router()
const authorize = require('../middlewares/auth')

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"



router.route('/login').post((req, res) => {
    /* 	#swagger.tags = ['Usuario']
        #swagger.description = 'Endpoint para fazer o login' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Informacoes do usuário',
            required: true,
            schema: { $ref: "#/definitions/Usuario" }
    } */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

    if(req.body.login === "brena" && req.body.senha === "123"){
        res.status(200).json({
            data: {"token": TOKEN},
            message: 'Usuário autenticado com sucesso!!!'
        })

    }else{
        res.status(401).json({
            data: "Possivelmente usuário ou senha estão incorretos",
            message: 'Usuário não autorizado!!!'
        })
    }
    
})

module.exports = router