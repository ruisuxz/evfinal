const connection = require('../config/db')
const utils = require('../resources/utils')

 // 
const testMysqlClientes = (request,response) =>{
    connection.query(
        'SELECT * FROM clientes',
        function(err, results, fields) {
            response.json(results)
        }
      );

}
 //  crea un cliente con lo datos
const createClientes = (request,response) =>{
  connection.query(
      'insert into clientes(nombres,apellidos,rut,numero_cliente,direccion) values (?,?,?,?,?) ',
      [
        request.body.nombres  ,
        request.body.apellidos,
        request.body.rut,
        request.body.numero_clientes,
        request.body.direccion
      ],
      function(err, results, fields) {
        if (err){
          response.json({message:err})
        }else{
          response.json({message:"Exito!"})
        }
      }
    );
}
 //borrar el  cliente
const DeleteClientes = (request,response)=>{
    connection.query(
      'Delete FROM clientes where id ='+request.body.id,
      function(err, results, fields) {
        if (err){
          response.json({message:err})
        }else{
          response.json({message:"Exito!"})
        }
      }
    );
  }
  //actualizar lo clientes
  const UpdateClientes = (request,response) =>{
    connection.query(
        'update clientes set nombres=?,apellidos=?,rut=?,numero_cliente=?,direccion=? where id ='+request.body.id,
        [
          request.body.nombres  ,
          request.body.apellidos,
          request.body.rut,
          request.body.numero_cliente,
          request.body.direccion,
        ],
        function(err, results, fields) {
          if (err){
            response.json({message:err})
          }else{
            response.json({message:"Exito!"})
          }
        }
      );
  }
  
//obtener   un usuario por identificador
  const getClientesById = (request,response)=>{
  
    connection.query(
        'SELECT * FROM clientes where id ='+request.body.id,
        function(err, results, fields) {
            response.json(results)
        }
      );

}

module.exports = { testMysqlClientes,
                   createClientes,
                   DeleteClientes,
                   UpdateClientes,
                   getClientesById
                }