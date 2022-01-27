import jwt from 'jsonwebtoken'

export default (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization){
    return res.status(401).json({
      error: ['Login required']
    })
  }

  const parts = authorization.split(' ');

  if(!parts.length === 2)
    return res.status(401).send({ error: 'Token error' });


  const [ scheme, token ] = parts;

  if (scheme !== 'Bearer') {
    return res.status(401).send({ error: 'Token malformated' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token inválido'})

    req.userId = decoded.id;

    return next();

  })

};
