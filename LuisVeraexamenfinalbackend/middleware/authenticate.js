//esto es para crear el token ,con esto se configura y se seguriza

const jwt = require("jsonwebtoken")

const authenticate = (request,response,next) =>{
    try{
        if(request.headers['authorization'] == undefined){
            return response.sendStatus(401)
        }
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        response.setHeader('Access-Control-Allow-Headers', '*');
        const authHeader = request.headers['authorization']
        token = authHeader.split(' ')[1]
        if (token == null){
            return response.sendStatus(401)
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET),(err,user) =>{
            if (err){
                console.log (err)
                return response.sendStatus(401)
            }
            return next()
        }
    }catch(err){
        if (err) return response.sendStatus(401)
    }
 }

module.exports ={authenticate}
