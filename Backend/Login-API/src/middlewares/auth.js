const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = ( req, res, next ) => {
  const authHeader = req.headers.authorization;

  if( !authHeader )
    return res.status(401).send( { error: 'No token Provided' } );

  // Um token sempre começa com um 'Bearer ' e mais um hash muito louco 
  const parts = authHeader.split(' ');
  if ( !parts.length === 2 )
    return res.status(401).send( { error: 'Token Error' } )
  
  const [ scheme, token ] = parts;

  if ( !/^Bearer$/i.test(scheme) )
    return res.status(401).send( { error: 'Token malformatted' } );

  // antes de fazer uma verificação mais pesada (jwt) tente ao máximo possivel fazer verificações mais leves (if)
  // com isso o processamento do backend fica mais rápido.

  jwt.verify( token, authConfig.secret, ( err, decoded ) => {
    if( err ) return res.status(401).send( { error: 'Token invalid' } );

    req.userId = decoded.id;

    return next();
  });

}