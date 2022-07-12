

class HttpResponse{
    ok = true;
    statusCode = 200
    constructor(data, statusCode){
        this.statusCode = statusCode || 200;
        this.ok = true;
        this.result = data
    }
}

module.exports = { HttpResponse };