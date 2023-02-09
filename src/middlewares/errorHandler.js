const {ApiError} = require("../validators/errors/ApiError");
module.exports = (err, req, res, next) => {
  console.log(err.message)

  if(err instanceof ApiError){
    return err.sendRes(res)
  }

  return res.status(500).json({message: "Internal server error"})
}
