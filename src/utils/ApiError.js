//to stander the error 

class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.statusCode = statusCode
        this.data= null
        //assignment this.data ?
        this.message = message
        this.success =false;
        this.errors= errors

        //in production grade 
        if(stack){
            this.stack = stack

        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}