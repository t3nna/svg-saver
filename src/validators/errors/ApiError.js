class ApiError extends Error{
  constructor(status, message){
    super(message);

    this.status = status;
  }

  sendRes(res){
    return res.status(this.status).json({ message: this.message });
  }
}

class BadRequestApiError extends ApiError{
  constructor(message){
    super(400, message);
  }
}

class NotFoundApiError extends ApiError{
  constructor(message){
    super(404, message);
  }
}


module.exports={
  ApiError,
  BadRequestApiError,
  NotFoundApiError
}
