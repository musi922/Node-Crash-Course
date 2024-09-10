const notFound = (req,res,next)=>{
    const error = new Error("This Page is Not Found")
    error.status = 404
    next(error)
}

module.exports = notFound