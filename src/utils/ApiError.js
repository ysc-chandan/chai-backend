class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
<<<<<<< HEAD
        errors = [],
=======
        errors= [],
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

<<<<<<< HEAD
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

=======
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,
                 this.constructor)
        }
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
    }
}

export {ApiError}