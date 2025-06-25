class ApiError extends Error{
  cunstructor(
    statusCode,
    message='Something wentwrong',
    error=[],
    stack=""

  ){
    super(message)
    this.statusCode=statusCode
    this.data=null
    this.message=message
    this.error=errors

    if(stack){
        this.stack=stack
    }else{Error.captureStackTrace(this,this.constructor)}
  }
}


export {ApiError}