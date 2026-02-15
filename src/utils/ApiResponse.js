<<<<<<< HEAD
class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }
=======
class ApiResposne{
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data= data
        this.message=message
        this.success= statusCode<400
    }
}
>>>>>>> 6d7682ae87cb24209b2d87f154cc582ddd8fd7a6
