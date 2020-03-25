const crypto = require('crypto')
const connection = require('../database/connection')

module.exports={
  async index (request, response) { 
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
  },
  async create(request, response){
    const {name, email, whatsapp,city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
  
  
    await connection('ongs').insert({
      id,
      name,
      whatsapp,
      city,
      uf,
    })
  
    return response.json({id});
  

  }
}

/*
get: busca
post > cria
put altera
delete apaga
*/
/**
 * query params : "?"( Filtros paginaçao )
 * route params : utilizar recusos 
 * request body : criar ou alterar recusos
*/
/**
 * driver : select * from. ..
 * query builder :  table('user'). select('*').where
 */
