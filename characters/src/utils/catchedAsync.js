module.exports = (fn) => {
  return function (req, res, next) {
    fn(req, res).catch((err) => {
      next(err);
    });
  };
};

//Version simplificada de la Funcion de Orden Superior
// module.exports = (fn) => (req, res, next) => fn(req, res).catch((err) => next(err));