const { ClientError } = require("../utils/errors")
module.exports = (req, res, next) => {
  //Se valida la que la petición contenga la información que necesita
  // const { name } = req.body;
  // if(name) return next();
  // else throw new ClientError("Falta ingresar el nombre del Planeta", 401);
  return next();
}