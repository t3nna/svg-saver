const db = require('../../entities/Database');

module.exports = async (req, res, next) => {
  const svgId = req.params.id;

  const svg = db.findOne(svgId);

  if (!svg) {
    return res.sendStatus(400);
  }

  next();
}
